
'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

interface QuickReply {
  icon: string;
  label: string;
  labelEn: string;
  message: string;
}

const quickReplies: QuickReply[] = [
  {
    icon: '🍽️',
    label: 'Menu',
    labelEn: 'Menu',
    message: 'Je voudrais voir votre menu / I would like to see your menu'
  },
  {
    icon: '📅',
    label: 'Réserver une table',
    labelEn: 'Book a table',
    message: 'Comment puis-je réserver une table? / How can I book a table?'
  },
  {
    icon: '💸',
    label: 'Promotions',
    labelEn: 'Promotions',
    message: 'Quelles sont vos promotions? / What are your promotions?'
  },
  {
    icon: '🕓',
    label: 'Heures d\'ouverture',
    labelEn: 'Opening hours',
    message: 'Quelles sont vos heures d\'ouverture? / What are your opening hours?'
  },
  {
    icon: '🎁',
    label: 'Offres et services',
    labelEn: 'Offers and services',
    message: 'Quels sont vos offres et services? / What are your offers and services?'
  },
  {
    icon: '📍',
    label: 'Nous trouver',
    labelEn: 'Find us',
    message: 'Où êtes-vous situés? / Where are you located?'
  },
  {
    icon: '☎️',
    label: 'Contact',
    labelEn: 'Contact',
    message: 'Quel est votre numéro de téléphone? / What is your phone number?'
  }
];

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  // Message de bienvenue
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const welcomeMessage: Message = {
        id: 'welcome',
        role: 'assistant',
        content: "Bonjour! 👋 Je suis l'assistant virtuel du **Bouillon 16**.\nJe peux vous renseigner sur notre **menu**, nos **heures d'ouverture**, nos **promotions** et bien plus encore.\nComment puis-je vous aider aujourd'hui?\n\nHello! 👋 I'm **Bouillon16's virtual assistant**.\nI can help you with our **menu**, **hours**, **promotions**, and more.\nHow can I help you today?",
        timestamp: new Date()
      };
      setMessages([welcomeMessage]);
    }
  }, [isOpen]);

  const handleQuickReply = (message: string) => {
    if (isLoading) return;
    sendMessage(message);
  };

  const sendMessage = async (messageText: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: messageText,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);

    try {
      const response = await fetch('/api/chatbot', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: messageText,
          history: messages.map(m => ({
            role: m.role,
            content: m.content
          }))
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to get response');
      }

      const reader = response.body?.getReader();
      const decoder = new TextDecoder();
      let assistantMessageContent = '';
      
      // Créer un message assistant temporaire
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: '',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, assistantMessage]);

      if (reader) {
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          
          const chunk = decoder.decode(value);
          const lines = chunk.split('\n');
          
          for (const line of lines) {
            if (line.startsWith('data: ')) {
              const data = line.slice(6);
              if (data === '[DONE]') continue;
              
              try {
                const parsed = JSON.parse(data);
                const content = parsed.choices?.[0]?.delta?.content || '';
                if (content) {
                  assistantMessageContent += content;
                  setMessages(prev => {
                    const newMessages = [...prev];
                    newMessages[newMessages.length - 1] = {
                      ...newMessages[newMessages.length - 1],
                      content: assistantMessageContent
                    };
                    return newMessages;
                  });
                }
              } catch (e) {
                // Skip invalid JSON
              }
            }
          }
        }
      }
    } catch (error) {
      console.error('Chat error:', error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: "Désolé, une erreur s'est produite. Veuillez réessayer.\n\nSorry, an error occurred. Please try again.",
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const messageToSend = input;
    setInput('');
    await sendMessage(messageToSend);
  };

  return (
    <>
      {/* Bouton flottant */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            className="fixed bottom-6 right-6 z-50"
          >
            <Button
              onClick={() => setIsOpen(true)}
              className="group relative h-16 px-6 bg-gradient-to-br from-amber-600 via-amber-700 to-amber-900 hover:from-amber-500 hover:via-amber-600 hover:to-amber-800 text-white shadow-2xl rounded-full transition-all duration-300 hover:scale-105 hover:shadow-amber-500/50"
            >
              <motion.div
                animate={{ 
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.1, 1.1, 1]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 3
                }}
                className="flex items-center gap-2"
              >
                <MessageCircle className="h-6 w-6" />
                <span className="font-medium">Besoin d&apos;aide ? 🤖</span>
              </motion.div>
              
              {/* Animation de pulse */}
              <motion.div
                className="absolute inset-0 rounded-full bg-amber-400/30"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0, 0.5]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity
                }}
              />
            </Button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Fenêtre de chat */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.9 }}
            className="fixed bottom-6 right-6 z-50 w-[400px] max-w-[calc(100vw-2rem)] h-[600px] max-h-[calc(100vh-2rem)]"
          >
            <div className="h-full flex flex-col bg-zinc-900 border border-amber-900/30 rounded-2xl shadow-2xl overflow-hidden">
              {/* En-tête */}
              <div className="flex items-center justify-between p-4 bg-gradient-to-r from-amber-900/80 via-amber-800/80 to-amber-900/80 border-b border-amber-700/30">
                <div className="flex items-center gap-3">
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                    className="text-2xl"
                  >
                    🤖
                  </motion.div>
                  <div>
                    <h3 className="font-semibold text-white">Assistant Bouillon16</h3>
                    <p className="text-xs text-amber-200">En ligne</p>
                  </div>
                </div>
                <Button
                  onClick={() => setIsOpen(false)}
                  variant="ghost"
                  size="icon"
                  className="text-white hover:bg-amber-800/50"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-amber-800 scrollbar-track-zinc-800">
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                        message.role === 'user'
                          ? 'bg-gradient-to-br from-amber-600 to-amber-700 text-white'
                          : 'bg-zinc-800 text-zinc-100 border border-amber-900/20'
                      }`}
                    >
                      <p className="text-sm whitespace-pre-wrap break-words">{message.content}</p>
                      <p className="text-xs mt-1 opacity-70">
                        {message.timestamp.toLocaleTimeString('fr-CA', { 
                          hour: '2-digit', 
                          minute: '2-digit' 
                        })}
                      </p>
                    </div>
                  </motion.div>
                ))}
                
                {/* Quick Reply Buttons - Affichés après chaque message de l'assistant */}
                {messages.length > 0 && messages[messages.length - 1].role === 'assistant' && !isLoading && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="grid grid-cols-2 gap-2 pt-2"
                  >
                    {quickReplies.map((reply, index) => (
                      <motion.button
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4 + index * 0.1 }}
                        onClick={() => handleQuickReply(reply.message)}
                        className="flex items-center gap-2 p-3 bg-zinc-800 hover:bg-zinc-700 border border-amber-900/30 hover:border-amber-600/50 rounded-xl text-left transition-all duration-200 group"
                        disabled={isLoading}
                      >
                        <span className="text-2xl group-hover:scale-110 transition-transform">
                          {reply.icon}
                        </span>
                        <div className="flex-1">
                          <p className="text-xs text-zinc-100 font-medium leading-tight">
                            {reply.label}
                          </p>
                          <p className="text-[10px] text-zinc-400 leading-tight mt-0.5">
                            {reply.labelEn}
                          </p>
                        </div>
                      </motion.button>
                    ))}
                  </motion.div>
                )}
                
                {isLoading && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex justify-start"
                  >
                    <div className="bg-zinc-800 rounded-2xl px-4 py-3 border border-amber-900/20">
                      <Loader2 className="h-5 w-5 animate-spin text-amber-500" />
                    </div>
                  </motion.div>
                )}
                
                <div ref={messagesEndRef} />
              </div>

              {/* Input */}
              <form onSubmit={handleSubmit} className="p-4 border-t border-amber-900/30 bg-zinc-900">
                <div className="flex gap-2">
                  <Input
                    ref={inputRef}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Tapez votre message..."
                    disabled={isLoading}
                    className="flex-1 bg-zinc-800 border-amber-900/30 text-white placeholder:text-zinc-500 focus:border-amber-600"
                  />
                  <Button
                    type="submit"
                    disabled={isLoading || !input.trim()}
                    className="bg-gradient-to-br from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-white"
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
                <p className="text-xs text-zinc-500 mt-2 text-center">
                  Pour les réservations, veuillez nous contacter directement
                </p>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
