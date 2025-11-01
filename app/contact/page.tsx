
"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/language-context';
import { useInView } from 'react-intersection-observer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { ProtectedEmail } from '@/components/ui/protected-email';
import { toast } from 'sonner';
import Link from 'next/link';
import { 
  MessageCircle, 
  Send, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Facebook, 
  Music4,
  CheckCircle,
  AlertCircle,
  MapPinIcon,
  PhoneIcon,
  MailIcon,
  ClockIcon,
  Info,
  Calendar,
  Car,
  Users,
  Utensils,
  Eye,
  EyeOff
} from 'lucide-react';

export default function ContactPage() {
  const { translations, locale } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [consentGiven, setConsentGiven] = useState(false);
  const [showPhone, setShowPhone] = useState(false);
  
  const [heroRef, heroInView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const [cardsRef, cardsInView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const [formRef, formInView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const [hoursRef, hoursInView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const [infoRef, infoInView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast.error(translations?.contact?.form?.error || 'Veuillez remplir tous les champs obligatoires.');
      return;
    }

    if (!consentGiven) {
      toast.error(translations?.contact?.form?.consent?.required || 'Vous devez accepter le traitement de vos données personnelles pour envoyer ce message.');
      return;
    }

    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          language: locale
        }),
      });

      if (response.ok) {
        toast.success(translations?.contact?.form?.success || 'Votre message a été envoyé avec succès !');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        setConsentGiven(false);
      } else {
        throw new Error('Erreur lors de l\'envoi du message');
      }
    } catch (error) {
      console.error('Contact form error:', error);
      toast.error(translations?.contact?.form?.error || 'Une erreur est survenue. Veuillez réessayer.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Contact cards data
  const contactCards = [
    {
      id: 'address',
      icon: MapPin,
      title: translations?.contact?.info?.address?.title || 'Adresse',
      info: `${translations?.contact?.info?.address?.line1 || '575 Rue Principale'},\n${translations?.contact?.info?.address?.line2 || 'Lachute, Qc J8H 1Y8'},\nCanada`,
      color: 'from-gold to-bronze',
      action: () => window.open('https://maps.google.com/?q=575+Rue+Principale+Lachute', '_blank')
    },
    {
      id: 'phone',
      icon: Phone,
      title: translations?.contact?.info?.phone?.title || 'Téléphone',
      info: translations?.contact?.info?.phone?.number || '(450) 562-4323',
      color: 'from-bronze to-copper',
      action: () => window.open('tel:+14505624323')
    },
    {
      id: 'email',
      icon: Mail,
      title: translations?.contact?.info?.email?.title || 'Email',
      info: 'protected-email', // Special marker for protected email
      color: 'from-copper to-amber-600',
      action: undefined // Action will be handled by ProtectedEmail component
    }
  ];

  const detailedHours = [
    { day: translations?.contact?.hours?.monday || 'Lundi', hours: translations?.contact?.hours?.closed || 'Fermé', closed: true },
    { day: translations?.contact?.hours?.tuesday || 'Mardi', hours: '16h - 20h30', closed: false },
    { day: translations?.contact?.hours?.wednesday || 'Mercredi', hours: '16h - 20h30', closed: false },
    { day: translations?.contact?.hours?.thursday || 'Jeudi', hours: '16h - 21h', closed: false },
    { day: translations?.contact?.hours?.friday || 'Vendredi', hours: '16h - 22h', closed: false },
    { day: translations?.contact?.hours?.saturday || 'Samedi', hours: '16h - 22h', closed: false },
    { day: translations?.contact?.hours?.sunday || 'Dimanche', hours: translations?.contact?.hours?.closed || 'Fermé', closed: true }
  ];

  const practicalInfo = [
    { 
      text: translations?.contact?.practical?.parking || 'Stationnement gratuit disponible', 
      color: 'text-bronze' 
    },
    { 
      text: translations?.contact?.practical?.terrace || 'Terrasse ouverte selon la météo', 
      color: 'text-copper' 
    },
    { 
      text: translations?.contact?.practical?.groups || 'Groupes de 8+ personnes : appelez-nous', 
      color: 'text-amber-400' 
    }
  ];

  return (
    <div className="min-h-screen bg-dark-primary">
      {/* Hero Section - CONSERVÉE */}
      <section 
        ref={heroRef}
        className="relative contact-bg min-h-[70vh] flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-dark-primary/85 via-dark-primary/70 to-dark-primary/60" />
        <div className="relative container mx-auto px-4 text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="w-16 h-16 bg-gradient-gold-warm rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl">
              <MessageCircle className="w-8 h-8 text-dark-primary" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-warm-white mb-6 font-heading drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">
              {translations?.contact?.hero?.title || 'Contact & Réservations'}
            </h1>
            <p className="text-xl text-warm-white max-w-3xl mx-auto leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
              {translations?.contact?.hero?.subtitle || 'Nous sommes à votre écoute pour toutes vos questions et réservations'}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Cards Section */}
      <section ref={cardsRef} className="section-padding bg-gradient-dark-warm relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/bg-tartare.jpg')] bg-cover bg-center opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={cardsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-bronze to-gold rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl">
              <MessageCircle className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-warm-white mb-4 font-heading text-glow-gold drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">
              Nos Coordonnées
            </h2>
            <p className="text-lg text-warm-gray-light max-w-3xl mx-auto leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
              Nous sommes à votre disposition pour répondre à toutes vos questions
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {contactCards.map((card, index) => {
              const Icon = card.icon;
              
              // Traitement spécial pour la carte email
              if (card.id === 'email') {
                return (
                  <motion.div
                    key={card.id}
                    initial={{ opacity: 0, y: 50 }}
                    animate={cardsInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="group relative bg-dark-card border border-zinc-700 rounded-2xl p-8 text-center shadow-2xl backdrop-blur-sm hover:shadow-3xl transition-all duration-300"
                  >
                    <div className={`w-16 h-16 bg-gradient-to-br ${card.color} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-warm-white mb-6 group-hover:text-gold transition-colors duration-300">
                      {card.title}
                    </h3>
                    <div className="flex justify-center">
                      <ProtectedEmail 
                        email="Bouillon16@gmail.com"
                        variant="card"
                        buttonText="Cliquez pour voir l'email"
                        className="w-full max-w-sm"
                      />
                    </div>
                  </motion.div>
                );
              }
              
              // Traitement normal pour les autres cartes
              return (
                <motion.div
                  key={card.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={cardsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  onClick={card.action}
                  className="group relative bg-dark-card border border-zinc-700 rounded-2xl p-8 text-center shadow-2xl backdrop-blur-sm hover:shadow-3xl transition-all duration-300 cursor-pointer card-hover"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${card.color} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-warm-white mb-3 group-hover:text-gold transition-colors duration-300">
                    {card.title}
                  </h3>
                  <p className="text-warm-gray-light whitespace-pre-line leading-relaxed">
                    {card.info}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" ref={formRef} className="section-padding bg-dark-secondary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/bg-saumon.jpg')] bg-cover bg-center opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={formInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-gold to-bronze rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl">
              <Send className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-warm-white mb-4 font-heading text-glow-gold drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">
              Envoyez-nous un Message
            </h2>
            <p className="text-lg text-warm-gray-light max-w-3xl mx-auto leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
              Remplissez le formulaire ci-dessous ou consultez nos horaires d'ouverture
            </p>
          </motion.div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Formulaire de Contact */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={formInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-dark-card border border-zinc-700 rounded-2xl shadow-2xl p-8 backdrop-blur-sm">
                <h2 className="text-3xl font-bold text-warm-white mb-2 font-heading">
                  <span className="text-gold">Contact</span> & <span className="text-gold">{translations?.common?.events || 'Évènement'}</span>
                </h2>
                <p className="text-warm-gray-light mb-4">
                  {translations?.contact?.form?.subtitle || 'Envoyez-nous votre message et nous vous répondrons rapidement'}
                </p>
                
                {/* Avis Important - Réservations */}
                <div className="bg-gradient-to-r from-amber-900/20 to-gold/20 border border-gold/30 rounded-xl p-6 mb-8">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-gold/20 rounded-full flex items-center justify-center">
                        <Info className="w-5 h-5 text-gold" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gold mb-3">
                        Important - Réservations
                      </h3>
                      <p className="text-warm-gray-light mb-4 leading-relaxed">
                        <strong className="text-warm-white">Aucune réservation ne sera effectuée par ce formulaire ou par email.</strong>
                        <br />
                        Pour réserver une table, contactez-nous uniquement :
                      </p>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {/* Téléphone */}
                        <motion.div
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="flex items-center gap-3 p-4 bg-dark-secondary/50 rounded-lg border border-bronze/30 hover:border-bronze/60 transition-all duration-200 group"
                        >
                          <div className="w-10 h-10 bg-bronze/20 rounded-full flex items-center justify-center group-hover:bg-bronze/30 transition-colors">
                            <PhoneIcon className="w-5 h-5 text-bronze" />
                          </div>
                          <div className="flex-1">
                            <p className="text-sm text-bronze font-medium">Téléphone</p>
                            {showPhone ? (
                              <a 
                                href="tel:+14505624323"
                                className="text-warm-white font-semibold hover:text-gold transition-colors"
                              >
                                (450) 562-4323
                              </a>
                            ) : (
                              <p className="text-warm-gray-light font-semibold">(•••) •••-••••</p>
                            )}
                          </div>
                          <button
                            onClick={() => setShowPhone(!showPhone)}
                            className="flex items-center gap-1 text-xs bg-bronze/10 hover:bg-bronze/20 text-bronze px-2 py-1 rounded transition-all duration-200 border border-bronze/20"
                          >
                            {showPhone ? (
                              <>
                                <EyeOff className="w-3 h-3" />
                                Masquer
                              </>
                            ) : (
                              <>
                                <Eye className="w-3 h-3" />
                                Afficher
                              </>
                            )}
                          </button>
                        </motion.div>
                        
                        {/* Messenger Facebook */}
                        <motion.a
                          href="https://m.me/Bouillon16"
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="flex items-center gap-3 p-4 bg-dark-secondary/50 rounded-lg border border-gold/30 hover:border-gold/60 transition-all duration-200 group"
                        >
                          <div className="w-10 h-10 bg-gold/20 rounded-full flex items-center justify-center group-hover:bg-gold/30 transition-colors">
                            <Facebook className="w-5 h-5 text-gold" />
                          </div>
                          <div>
                            <p className="text-sm text-gold font-medium">Messenger</p>
                            <p className="text-warm-white font-semibold">Facebook</p>
                          </div>
                        </motion.a>
                      </div>
                    </div>
                  </div>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gold mb-2">
                        {translations?.contact?.form?.name || 'Votre nom'} *
                      </label>
                      <Input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full bg-dark-secondary border-zinc-600 text-warm-white placeholder-warm-gray focus:border-gold focus:ring-gold rounded-lg"
                        placeholder={translations?.contact?.form?.name || "Votre nom complet"}
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-semibold text-gold mb-2">
                        {translations?.contact?.form?.email || 'Votre email'} *
                      </label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full bg-dark-secondary border-zinc-600 text-warm-white placeholder-warm-gray focus:border-gold focus:ring-gold rounded-lg"
                        placeholder={translations?.contact?.form?.email || "votre@email.com"}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gold mb-2">
                      {translations?.contact?.form?.subject || 'Sujet'} *
                    </label>
                    <Input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full bg-dark-secondary border-zinc-600 text-warm-white placeholder-warm-gray focus:border-gold focus:ring-gold rounded-lg"
                      placeholder={translations?.contact?.form?.placeholders?.subject || "Sujet de votre message"}
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gold mb-2">
                      {translations?.contact?.form?.message || 'Votre message'} *
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={6}
                      className="w-full bg-dark-secondary border-zinc-600 text-warm-white placeholder-warm-gray resize-none focus:border-gold focus:ring-gold rounded-lg"
                      placeholder={translations?.contact?.form?.placeholders?.message || "Écrivez votre message ici..."}
                      required
                    />
                  </div>

                  {/* Consentement - Loi 25 */}
                  <div className="flex items-start space-x-4 p-6 bg-dark-secondary/30 rounded-lg border border-zinc-700/50 hover:border-gold/30 transition-colors">
                    <div className="flex-shrink-0 mt-1">
                      <Checkbox
                        id="consent"
                        checked={consentGiven}
                        onCheckedChange={(checked) => {
                          console.log('Checkbox changed:', checked);
                          setConsentGiven(!!checked);
                        }}
                      />
                    </div>
                    <div className="flex-1">
                      <label 
                        htmlFor="consent" 
                        className="text-sm text-warm-gray-light leading-relaxed cursor-pointer hover:text-warm-white transition-colors"
                        onClick={(e) => {
                          e.preventDefault();
                          setConsentGiven(!consentGiven);
                        }}
                      >
                        <span className="text-gold font-semibold">*</span> {translations?.contact?.form?.consent?.text1 || "J'accepte que mes données personnelles soient utilisées par Bouillon16 pour traiter ma demande et me contacter en réponse. Ces données seront conservées pendant 2 ans maximum et ne seront jamais partagées avec des tiers. Conformément à notre"}{' '}
                        <Link 
                          href="/politique-confidentialite" 
                          className="text-gold hover:text-bronze underline transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          {translations?.contact?.form?.consent?.privacyPolicy || 'politique de confidentialité'}
                        </Link>
                        {translations?.contact?.form?.consent?.text2 || ', vous pouvez retirer votre consentement à tout moment.'}
                      </label>
                    </div>
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-gold to-bronze hover:from-bronze hover:to-copper text-dark-primary py-4 text-lg font-semibold rounded-lg transition-all duration-300 btn-hover-glow flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-dark-primary border-t-transparent rounded-full animate-spin" />
                          {translations?.contact?.form?.sending || 'Envoi en cours...'}
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          {translations?.contact?.form?.submit || 'Envoyer le Message'}
                        </>
                      )}
                    </Button>
                  </motion.div>
                </form>
              </div>
            </motion.div>

            {/* Nos Horaires */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={formInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="bg-dark-card border border-zinc-700 rounded-2xl shadow-2xl p-8 backdrop-blur-sm">
                <h3 className="text-2xl font-bold text-warm-white mb-6 font-heading text-glow-gold">
                  {translations?.contact?.hours?.title || 'Nos Horaires'}
                </h3>
                
                <div className="space-y-3">
                  {detailedHours.map((schedule, index) => (
                    <motion.div
                      key={schedule.day}
                      initial={{ opacity: 0, y: 10 }}
                      animate={formInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.4 + index * 0.05 }}
                      className={`flex justify-between items-center p-4 rounded-lg transition-colors ${
                        schedule.closed 
                          ? 'bg-red-900/20 border border-red-700/30' 
                          : 'bg-green-900/20 border border-green-700/30'
                      }`}
                    >
                      <span className="font-semibold text-gold">{schedule.day}</span>
                      <span className={`font-medium ${
                        schedule.closed ? 'text-red-400' : 'text-green-400'
                      }`}>
                        {schedule.hours}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Infos Pratiques Section */}
      <section ref={infoRef} className="section-padding bg-gradient-dark-warm relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/bg-mignon.jpg')] bg-cover bg-center opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={infoInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-copper to-amber-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl">
                <Info className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-4xl md:text-5xl font-bold text-warm-white mb-4 font-heading text-glow-gold drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">
                {translations?.contact?.practical?.title || 'Infos Pratiques'}
              </h3>
              <p className="text-lg text-warm-gray-light leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                Tout ce que vous devez savoir avant votre visite
              </p>
            </div>
            <div className="bg-dark-card/80 border border-zinc-700 rounded-2xl shadow-2xl p-8 backdrop-blur-sm">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {practicalInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    animate={infoInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-start gap-3 p-4 bg-dark-secondary/50 rounded-lg border border-zinc-700/50"
                  >
                    <div className="w-2 h-2 bg-gold rounded-full mt-3 flex-shrink-0"></div>
                    <p className={`text-sm leading-relaxed ${info.color}`}>
                      {info.text}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
