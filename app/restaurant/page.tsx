
"use client";

import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/language-context';
import { useInView } from 'react-intersection-observer';
import { MapPin, Phone, Mail, Clock, Navigation, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function RestaurantPage() {
  const { translations } = useLanguage();
  
  const [heroRef, heroInView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const [infoRef, infoInView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const contactInfo = [
    {
      icon: MapPin,
      title: translations?.restaurant?.contact?.title || 'Coordonnées',
      items: [
        {
          icon: MapPin,
          label: translations?.restaurant?.contact?.address || '575 Rue Principale, Lachute',
          action: () => window.open('https://maps.google.com/?q=575+Rue+Principale+Lachute', '_blank')
        },
        {
          icon: Phone,
          label: translations?.restaurant?.contact?.phone || '(450) 562-4323',
          action: () => window.open('tel:+14505624323')
        },
        {
          icon: Mail,
          label: translations?.restaurant?.contact?.email || 'info@email.com',
          action: () => window.open('mailto:info@email.com')
        }
      ]
    }
  ];

  const hours = [
    { 
      day: translations?.restaurant?.hours?.monday || 'Lundi', 
      hours: translations?.restaurant?.hours?.closed || 'Fermé',
      closed: true
    },
    { 
      day: translations?.restaurant?.hours?.tuesday || 'Mardi', 
      hours: '16h - 20h30',
      closed: false
    },
    { 
      day: translations?.restaurant?.hours?.wednesday || 'Mercredi', 
      hours: '16h - 20h30',
      closed: false
    },
    { 
      day: translations?.restaurant?.hours?.thursday || 'Jeudi', 
      hours: '16h - 21h',
      closed: false
    },
    { 
      day: translations?.restaurant?.hours?.friday || 'Vendredi', 
      hours: '16h - 22h',
      closed: false
    },
    { 
      day: translations?.restaurant?.hours?.saturday || 'Samedi', 
      hours: '16h - 22h',
      closed: false
    },
    { 
      day: translations?.restaurant?.hours?.sunday || 'Dimanche', 
      hours: translations?.restaurant?.hours?.closed || 'Fermé',
      closed: true
    }
  ];

  return (
    <div className="min-h-screen bg-dark-primary">
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative gallery-bg min-h-[70vh] flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 overlay-gradient-dark" />
        <div className="relative container mx-auto px-4 text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <MapPin className="w-16 h-16 text-gold mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl font-bold text-warm-white mb-6 font-heading text-glow-gold">
              {translations?.restaurant?.title || 'Notre Restaurant'}
            </h1>
            <p className="text-xl md:text-2xl text-warm-gray-light max-w-3xl mx-auto leading-relaxed">
              {translations?.restaurant?.subtitle || 'Visitez-nous à Lachute'}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact & Hours Section */}
      <section ref={infoRef} className="section-padding bg-gradient-dark-warm">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={infoInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="relative bg-dark-card border border-zinc-700 rounded-lg shadow-2xl p-8 backdrop-blur-sm overflow-hidden"
              style={{
                backgroundImage: 'url(https://cdn.abacus.ai/images/dd1f641e-8b3a-460a-8609-1f381133d0cd.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              {/* Dark overlay for text readability */}
              <div className="absolute inset-0 bg-dark-primary/85 backdrop-blur-[1px] rounded-lg"></div>
              <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-gold-warm rounded-full">
                  <MapPin className="w-6 h-6 text-dark-primary" />
                </div>
                <h2 className="text-3xl font-bold text-warm-white font-heading text-glow-gold">
                  {translations?.restaurant?.contact?.title || 'Coordonnées'}
                </h2>
              </div>

              <div className="space-y-6">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center gap-4 p-4 rounded-lg hover:bg-dark-secondary/50 transition-all duration-300 cursor-pointer card-hover"
                  onClick={() => window.open('https://maps.google.com/?q=575+Rue+Principale+Lachute', '_blank')}
                >
                  <div className="flex items-center justify-center w-10 h-10 bg-gradient-gold-warm rounded-full">
                    <MapPin className="w-5 h-5 text-dark-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="text-lg font-semibold text-gold text-glow-gold">Adresse</p>
                    <p className="text-warm-gray-light">575 Rue Principale, Lachute</p>
                  </div>
                  <ExternalLink className="w-5 h-5 text-bronze" />
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center gap-4 p-4 rounded-lg hover:bg-dark-secondary/50 transition-all duration-300 cursor-pointer card-hover"
                  onClick={() => window.open('tel:+14505624323')}
                >
                  <div className="flex items-center justify-center w-10 h-10 bg-gradient-gold-warm rounded-full">
                    <Phone className="w-5 h-5 text-dark-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="text-lg font-semibold text-gold text-glow-gold">Téléphone</p>
                    <p className="text-warm-gray-light">(450) 562-4323</p>
                  </div>
                  <ExternalLink className="w-5 h-5 text-bronze" />
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center gap-4 p-4 rounded-lg hover:bg-dark-secondary/50 transition-all duration-300 cursor-pointer card-hover"
                  onClick={() => window.open('mailto:info@email.com')}
                >
                  <div className="flex items-center justify-center w-10 h-10 bg-gradient-gold-warm rounded-full">
                    <Mail className="w-5 h-5 text-dark-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="text-lg font-semibold text-gold text-glow-gold">Email</p>
                    <p className="text-warm-gray-light">info@email.com</p>
                  </div>
                  <ExternalLink className="w-5 h-5 text-bronze" />
                </motion.div>
              </div>
              </div>
            </motion.div>

            {/* Hours */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={infoInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative bg-dark-card border border-zinc-700 rounded-lg shadow-2xl p-8 backdrop-blur-sm overflow-hidden"
              style={{
                backgroundImage: 'url(https://cdn.abacus.ai/images/c8227c8b-8f23-4f4f-a554-190c3b48d29b.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              {/* Dark overlay for text readability */}
              <div className="absolute inset-0 bg-dark-primary/85 backdrop-blur-[1px] rounded-lg"></div>
              <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-gold-warm rounded-full">
                  <Clock className="w-6 h-6 text-dark-primary" />
                </div>
                <h2 className="text-3xl font-bold text-warm-white font-heading text-glow-gold">
                  {translations?.restaurant?.hours?.title || 'Horaires d\'ouverture'}
                </h2>
              </div>

              <div className="space-y-4">
                {hours.map((schedule, index) => (
                  <motion.div
                    key={schedule.day}
                    initial={{ opacity: 0, y: 20 }}
                    animate={infoInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex justify-between items-center p-3 rounded-lg hover:bg-dark-secondary/50 transition-colors duration-200"
                  >
                    <span className="font-semibold text-gold text-glow-gold">
                      {schedule.day}
                    </span>
                    <span className={`font-medium ${
                      schedule.closed 
                        ? 'text-red-400' 
                        : 'text-bronze'
                    }`}>
                      {schedule.hours}
                    </span>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={infoInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="mt-8 p-4 bg-dark-secondary/50 rounded-lg backdrop-blur-sm"
              >
                <p className="text-warm-gray-light text-sm italic text-center">
                  Les horaires peuvent varier lors d'événements spéciaux. 
                  Nous vous recommandons d'appeler pour confirmer.
                </p>
              </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section Placeholder */}
      <section className="section-padding bg-dark-secondary">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-warm-white mb-6 font-heading text-glow-gold">
              Comment nous trouver
            </h2>
            <p className="text-xl text-warm-gray-light max-w-3xl mx-auto">
              Situé au cœur de Lachute, LeBouillon16 vous accueille dans un cadre chaleureux
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative max-w-4xl mx-auto bg-dark-card border border-zinc-700 rounded-lg shadow-2xl p-8 text-center backdrop-blur-sm overflow-hidden"
            style={{
              backgroundImage: 'url(https://cdn.abacus.ai/images/375ed243-5fb9-408b-b8ab-944176648431.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            {/* Dark overlay for text readability */}
            <div className="absolute inset-0 bg-dark-primary/85 backdrop-blur-[1px] rounded-lg"></div>
            <div className="relative z-10">
            <div className="bg-dark-secondary/50 rounded-lg p-12 mb-8 backdrop-blur-sm">
              <Navigation className="w-16 h-16 text-gold mx-auto mb-6" />
              <h3 className="text-2xl font-semibold text-warm-white mb-4 text-glow-gold">
                Carte Interactive
              </h3>
              <p className="text-warm-gray-light mb-6">
                Espace réservé pour une carte interactive permettant de localiser facilement le restaurant
              </p>
              <Button 
                onClick={() => window.open('https://maps.google.com/?q=575+Rue+Principale+Lachute', '_blank')}
                className="bg-gradient-gold-warm hover:bg-gradient-bronze-warm text-dark-primary px-8 py-3 btn-hover-glow focus-gold"
              >
                <MapPin className="mr-2 w-5 h-5" />
                Ouvrir dans Google Maps
              </Button>
            </div>

            <div className="text-sm text-bronze">
              <p>
                En attendant l'intégration de la carte, cliquez sur le bouton ci-dessus 
                pour obtenir l'itinéraire via Google Maps.
              </p>
            </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-bronze-warm">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-warm-white mb-6 font-heading text-glow-gold">
              Prêt à nous rendre visite ?
            </h2>
            <p className="text-xl text-warm-gray-light mb-8 max-w-2xl mx-auto">
              Contactez-nous pour toute question ou demande d'information
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="tel:+14505624323"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-gold-warm hover:bg-gradient-bronze-warm text-dark-primary px-8 py-4 rounded-lg font-semibold transition-all duration-300 btn-hover-glow focus-gold flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Appeler maintenant
              </motion.a>
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-gold text-gold hover:bg-gold hover:text-dark-primary px-8 py-4 rounded-lg font-semibold transition-all duration-300 btn-hover-glow focus-gold"
              >
                Formulaire de contact
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
