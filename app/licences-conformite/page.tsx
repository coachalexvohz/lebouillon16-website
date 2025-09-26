
"use client";

import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/language-context';
import { useInView } from 'react-intersection-observer';
import { 
  Shield, 
  FileCheck, 
  Building, 
  Wine, 
  ChefHat, 
  Users,
  CheckCircle,
  Award,
  Lock
} from 'lucide-react';
import Image from 'next/image';

export default function LicencesConformitePage() {
  const { translations } = useLanguage();
  
  const [heroRef, heroInView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const [licencesRef, licencesInView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const licences = [
    {
      icon: Building,
      title: "Numéro d'Entreprise du Québec (NEQ)",
      number: "1172090830",
      status: "Actif",
      description: "Enregistrement officiel de notre entreprise auprès du Registraire des entreprises du Québec",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: FileCheck,
      title: "Statut Juridique",
      number: "Incorporation",
      status: "Confirmé",
      description: "Structure juridique sous forme de société par actions incorporée au Québec",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Wine,
      title: "Permis d'Alcool (RACJ)",
      number: "En Vigueur",
      status: "Valide",
      description: "Permis de vente d'alcool délivré par la Régie des alcools, des courses et des jeux",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: ChefHat,
      title: "Certification MAPAQ",
      number: "Hygiène & Salubrité",
      status: "Certifié",
      description: "Certification du Ministère de l'Agriculture, des Pêcheries et de l'Alimentation du Québec",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: Shield,
      title: "Assurance Responsabilité Civile",
      number: "Couverture Complète",
      status: "Active",
      description: "Police d'assurance couvrant la responsabilité civile et les activités de restauration",
      color: "from-red-500 to-red-600"
    }
  ];

  const certifications = [
    {
      title: "Sécurité Alimentaire",
      description: "Formation continue de notre équipe aux normes HACCP",
      icon: ChefHat
    },
    {
      title: "Hygiène et Salubrité",
      description: "Inspections régulières et respect des protocoles sanitaires",
      icon: Shield
    },
    {
      title: "Service Responsable",
      description: "Formation RBS (Responsible Beverage Service) pour le service d'alcool",
      icon: Wine
    },
    {
      title: "Accessibilité",
      description: "Conformité aux normes d'accessibilité pour personnes à mobilité réduite",
      icon: Users
    }
  ];

  return (
    <div className="min-h-screen bg-dark-primary">
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative min-h-[70vh] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: 'url(/terasse-enseigne-optimized.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80"></div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={heroInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-3 bg-gold/10 backdrop-blur-sm rounded-full px-6 py-2 mb-6 border border-gold/20">
              <Shield className="w-5 h-5 text-gold" />
              <span className="text-gold font-medium text-sm">Transparence & Conformité</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-warm-white mb-6 font-heading text-glow-gold">
              Licences & Conformité
            </h1>
            <p className="text-xl md:text-2xl text-warm-gray-light leading-relaxed">
              Notre engagement envers la transparence et le respect des réglementations
            </p>
          </motion.div>
        </div>
      </section>

      {/* Licences Section */}
      <section ref={licencesRef} className="section-padding bg-gradient-dark-warm">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={licencesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-warm-white mb-6 font-heading text-glow-gold">
              Licences & Autorisations
            </h2>
            <p className="text-xl text-warm-gray-light max-w-3xl mx-auto leading-relaxed">
              Toutes nos certifications et autorisations officielles
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {licences.slice(0, 3).map((licence, index) => {
              const Icon = licence.icon;
              return (
                <motion.div
                  key={licence.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={licencesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-dark-card border border-zinc-700 rounded-2xl p-8 shadow-2xl backdrop-blur-sm hover:shadow-3xl transition-all duration-300"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${licence.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="text-center mb-4">
                    <h3 className="text-xl font-bold text-gold mb-2 text-glow-gold">
                      {licence.title}
                    </h3>
                    <div className="inline-flex items-center gap-2 bg-green-900/30 border border-green-700/50 rounded-full px-4 py-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-green-300 font-medium text-sm">{licence.status}</span>
                    </div>
                  </div>
                  
                  <div className="text-center mb-4">
                    <p className="text-2xl font-bold text-bronze mb-2">
                      {licence.number}
                    </p>
                  </div>
                  
                  <p className="text-warm-gray-light text-center text-sm leading-relaxed">
                    {licence.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Second row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {licences.slice(3).map((licence, index) => {
              const Icon = licence.icon;
              return (
                <motion.div
                  key={licence.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={licencesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: (index + 3) * 0.1 }}
                  className="bg-dark-card border border-zinc-700 rounded-2xl p-8 shadow-2xl backdrop-blur-sm hover:shadow-3xl transition-all duration-300"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${licence.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="text-center mb-4">
                    <h3 className="text-xl font-bold text-gold mb-2 text-glow-gold">
                      {licence.title}
                    </h3>
                    <div className="inline-flex items-center gap-2 bg-green-900/30 border border-green-700/50 rounded-full px-4 py-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-green-300 font-medium text-sm">{licence.status}</span>
                    </div>
                  </div>
                  
                  <div className="text-center mb-4">
                    <p className="text-2xl font-bold text-bronze mb-2">
                      {licence.number}
                    </p>
                  </div>
                  
                  <p className="text-warm-gray-light text-center text-sm leading-relaxed">
                    {licence.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="section-padding bg-dark-secondary relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={licencesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-warm-white mb-6 font-heading text-glow-gold">
              Certifications & Formations
            </h2>
            <p className="text-xl text-warm-gray-light max-w-3xl mx-auto leading-relaxed">
              Notre engagement continu envers l'excellence et la sécurité
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => {
              const Icon = cert.icon;
              return (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={licencesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.8 + index * 0.1 }}
                  className="bg-dark-card border border-zinc-700 rounded-2xl p-8 shadow-2xl backdrop-blur-sm hover:shadow-3xl transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-gold to-bronze rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-dark-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gold mb-3 text-glow-gold">
                        {cert.title}
                      </h3>
                      <p className="text-warm-gray-light leading-relaxed">
                        {cert.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Engagement Section */}
      <section className="section-padding bg-gradient-dark-warm">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={licencesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="bg-dark-card border border-zinc-700 rounded-2xl p-8 shadow-2xl backdrop-blur-sm">
              <div className="w-16 h-16 bg-gradient-to-br from-gold to-bronze rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-dark-primary" />
              </div>
              
              <h3 className="text-3xl font-bold text-gold mb-6 text-glow-gold">
                Notre Engagement
              </h3>
              
              <p className="text-warm-gray-light leading-relaxed text-lg mb-6">
                Chez LeBouillon16, nous nous engageons à maintenir les plus hauts standards de qualité, 
                sécurité et conformité réglementaire. Toutes nos licences et certifications sont maintenues 
                à jour et font l'objet d'un suivi rigoureux.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <Lock className="w-8 h-8 text-bronze mx-auto mb-3" />
                  <h4 className="font-semibold text-bronze mb-2">Sécurité</h4>
                  <p className="text-warm-gray-light text-sm">
                    Protocoles stricts de sécurité alimentaire et sanitaire
                  </p>
                </div>
                
                <div className="text-center">
                  <Shield className="w-8 h-8 text-copper mx-auto mb-3" />
                  <h4 className="font-semibold text-copper mb-2">Conformité</h4>
                  <p className="text-warm-gray-light text-sm">
                    Respect de toutes les réglementations provinciales et municipales
                  </p>
                </div>
                
                <div className="text-center">
                  <Award className="w-8 h-8 text-gold mx-auto mb-3" />
                  <h4 className="font-semibold text-gold mb-2">Excellence</h4>
                  <p className="text-warm-gray-light text-sm">
                    Formation continue et amélioration constante de nos services
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
