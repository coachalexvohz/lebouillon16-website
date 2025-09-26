
"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Eye, EyeOff, Copy, CheckCircle } from 'lucide-react';
import { toast } from 'sonner';

interface ProtectedEmailProps {
  email: string;
  variant?: 'button' | 'card' | 'inline';
  showIcon?: boolean;
  className?: string;
  buttonText?: string;
  revealText?: string;
}

export function ProtectedEmail({ 
  email = "lebouillon16@gmail.com",
  variant = 'button',
  showIcon = true,
  className = "",
  buttonText = "Cliquez pour voir l'email",
  revealText = "Email révélé"
}: ProtectedEmailProps) {
  const [isRevealed, setIsRevealed] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const handleReveal = () => {
    setIsRevealed(true);
    toast.success('Adresse email révélée');
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setIsCopied(true);
      toast.success('Email copié dans le presse-papier');
      setTimeout(() => setIsCopied(false), 2000);
    } catch (error) {
      toast.error('Impossible de copier l\'email');
    }
  };

  const handleEmailClick = () => {
    window.open(`mailto:${email}`);
  };

  // Variante bouton simple
  if (variant === 'button') {
    return (
      <div className={`inline-flex items-center gap-2 ${className}`}>
        {!isRevealed ? (
          <motion.button
            onClick={handleReveal}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-gold to-bronze hover:from-bronze hover:to-copper text-dark-primary rounded-lg font-medium transition-all duration-300 text-sm"
          >
            {showIcon && <Eye className="w-4 h-4" />}
            {buttonText}
          </motion.button>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2"
          >
            <motion.button
              onClick={handleEmailClick}
              whileHover={{ scale: 1.02 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-dark-card border border-gold/30 hover:border-gold text-gold hover:text-bronze rounded-lg font-medium transition-all duration-300 text-sm"
            >
              <Mail className="w-4 h-4" />
              {email}
            </motion.button>
            <motion.button
              onClick={handleCopy}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 text-bronze hover:text-gold transition-colors duration-200"
              title="Copier l'email"
            >
              {isCopied ? (
                <CheckCircle className="w-4 h-4 text-green-400" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
            </motion.button>
          </motion.div>
        )}
      </div>
    );
  }

  // Variante carte (pour la page de contact)
  if (variant === 'card') {
    return (
      <div className={className}>
        {!isRevealed ? (
          <motion.button
            onClick={handleReveal}
            whileHover={{ scale: 1.02 }}
            className="w-full text-left p-4 rounded-lg bg-dark-secondary/30 border border-zinc-700/50 hover:border-gold/30 transition-all duration-300"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-gold to-bronze rounded-full flex items-center justify-center">
                  <Mail className="w-4 h-4 text-dark-primary" />
                </div>
                <div>
                  <p className="text-gold font-medium">Email</p>
                  <p className="text-warm-gray-light text-sm">{buttonText}</p>
                </div>
              </div>
              <Eye className="w-5 h-5 text-bronze" />
            </div>
          </motion.button>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-4 rounded-lg bg-dark-secondary/30 border border-gold/20"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-gold to-bronze rounded-full flex items-center justify-center">
                  <Mail className="w-4 h-4 text-dark-primary" />
                </div>
                <div>
                  <p className="text-gold font-medium">Email</p>
                  <motion.button
                    onClick={handleEmailClick}
                    className="text-warm-gray-light hover:text-gold transition-colors duration-200 underline"
                  >
                    {email}
                  </motion.button>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <motion.button
                  onClick={handleEmailClick}
                  whileHover={{ scale: 1.1 }}
                  className="p-2 text-bronze hover:text-gold transition-colors duration-200 rounded-lg hover:bg-dark-card"
                  title="Envoyer un email"
                >
                  <Mail className="w-4 h-4" />
                </motion.button>
                <motion.button
                  onClick={handleCopy}
                  whileHover={{ scale: 1.1 }}
                  className="p-2 text-bronze hover:text-gold transition-colors duration-200 rounded-lg hover:bg-dark-card"
                  title="Copier l'email"
                >
                  {isCopied ? (
                    <CheckCircle className="w-4 h-4 text-green-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    );
  }

  // Variante inline (pour le texte)
  if (variant === 'inline') {
    return (
      <span className={`inline-flex items-center gap-1 ${className}`}>
        {!isRevealed ? (
          <motion.button
            onClick={handleReveal}
            whileHover={{ scale: 1.02 }}
            className="inline-flex items-center gap-1 text-gold hover:text-bronze underline transition-colors duration-200"
          >
            {showIcon && <Eye className="w-3 h-3" />}
            {buttonText}
          </motion.button>
        ) : (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="inline-flex items-center gap-1"
          >
            <motion.button
              onClick={handleEmailClick}
              className="text-gold hover:text-bronze underline transition-colors duration-200"
            >
              {email}
            </motion.button>
            <motion.button
              onClick={handleCopy}
              whileHover={{ scale: 1.1 }}
              className="p-1 text-bronze hover:text-gold transition-colors duration-200"
              title="Copier"
            >
              {isCopied ? (
                <CheckCircle className="w-3 h-3 text-green-400" />
              ) : (
                <Copy className="w-3 h-3" />
              )}
            </motion.button>
          </motion.span>
        )}
      </span>
    );
  }

  return null;
}
