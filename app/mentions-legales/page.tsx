
"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { ProtectedEmail } from '@/components/ui/protected-email';

export default function MentionsLegales() {
  return (
    <div className="min-h-screen bg-dark-primary">
      {/* Header avec retour */}
      <div className="bg-gradient-to-b from-black/80 to-black/60 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-gold hover:text-bronze transition-colors duration-200 mb-6"
          >
            <ArrowLeft className="w-5 h-5" />
            Retour à l'accueil
          </Link>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-gold font-heading mb-4"
          >
            Mentions Légales
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300"
          >
            Informations légales et réglementaires
          </motion.p>
        </div>
      </div>

      {/* Contenu */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="prose prose-lg prose-invert max-w-none"
        >
          {/* Éditeur du site */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gold mb-6">1. Éditeur du site</h2>
            <div className="bg-gray-900/30 p-6 rounded-lg border border-gray-800/50">
              <p className="text-gray-300 mb-0">
                <strong className="text-gold">Bouillon16</strong><br />
                Restaurant gastronomique<br />
                575 Rue Principale<br />
                Lachute, QC J8H 1Y8, Canada<br />
                <br />
                <strong className="text-bronze">Téléphone :</strong> <a href="tel:+14505624323" className="text-gold hover:text-bronze transition-colors underline">(450) 562-4323</a><br />
                <strong className="text-bronze">Email :</strong> <ProtectedEmail 
                  email="Bouillon16@gmail.com"
                  variant="inline"
                  buttonText="Cliquez pour voir l'email"
                  className="text-gold"
                />
              </p>
            </div>
          </section>

          {/* Directeur de la publication */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gold mb-6">2. Directeur de la publication</h2>
            <div className="bg-gray-900/30 p-6 rounded-lg border border-gray-800/50">
              <p className="text-gray-300">
                Le directeur de la publication est le représentant légal de Bouillon16.
              </p>
            </div>
          </section>

          {/* Hébergement */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gold mb-6">3. Hébergement</h2>
            <div className="bg-gray-900/30 p-6 rounded-lg border border-gray-800/50">
              <p className="text-gray-300">
                Ce site est hébergé par des services d'hébergement web professionnels respectant les standards de sécurité et de confidentialité en vigueur au Canada.
              </p>
            </div>
          </section>

          {/* Propriété intellectuelle */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gold mb-6">4. Propriété intellectuelle</h2>
            <div className="bg-gray-900/30 p-6 rounded-lg border border-gray-800/50">
              <p className="text-gray-300 mb-4">
                L'ensemble de ce site relève de la législation canadienne et internationale sur le droit d'auteur et la propriété intellectuelle.
              </p>
              <ul className="text-gray-300 space-y-2">
                <li>• <strong className="text-bronze">Contenu :</strong> Tous les textes, images, photos, vidéos et éléments graphiques sont la propriété exclusive de Bouillon16</li>
                <li>• <strong className="text-bronze">Marques :</strong> Le nom "Bouillon16" et le logo sont des marques déposées</li>
                <li>• <strong className="text-bronze">Reproduction :</strong> Toute reproduction, même partielle, est interdite sans autorisation écrite préalable</li>
              </ul>
            </div>
          </section>

          {/* Données personnelles */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gold mb-6">5. Protection des données personnelles</h2>
            <div className="bg-gray-900/30 p-6 rounded-lg border border-gray-800/50">
              <p className="text-gray-300 mb-4">
                Le traitement des données personnelles est régi par notre 
                <Link href="/politique-confidentialite" className="text-gold hover:text-bronze transition-colors underline mx-1">
                  politique de confidentialité
                </Link>
                en conformité avec la Loi 25 du Québec.
              </p>
              <p className="text-gray-300">
                Nous nous engageons à protéger la confidentialité et la sécurité de vos informations personnelles.
              </p>
            </div>
          </section>

          {/* Cookies */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gold mb-6">6. Cookies</h2>
            <div className="bg-gray-900/30 p-6 rounded-lg border border-gray-800/50">
              <p className="text-gray-300 mb-4">
                Ce site utilise des cookies pour améliorer l'expérience utilisateur et analyser le trafic.
              </p>
              <ul className="text-gray-300 space-y-2">
                <li>• <strong className="text-bronze">Cookies techniques :</strong> Nécessaires au fonctionnement du site</li>
                <li>• <strong className="text-bronze">Cookies analytiques :</strong> Pour les statistiques de visite (avec votre consentement)</li>
                <li>• <strong className="text-bronze">Gestion :</strong> Vous pouvez configurer vos préférences via la bannière de consentement</li>
              </ul>
            </div>
          </section>

          {/* Responsabilité */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gold mb-6">7. Limitation de responsabilité</h2>
            <div className="bg-gray-900/30 p-6 rounded-lg border border-gray-800/50">
              <p className="text-gray-300 mb-4">
                Bouillon16 s'efforce d'assurer l'exactitude et la mise à jour des informations diffusées sur ce site.
              </p>
              <ul className="text-gray-300 space-y-2">
                <li>• <strong className="text-bronze">Contenu :</strong> Les informations sont données à titre indicatif et peuvent être modifiées sans préavis</li>
                <li>• <strong className="text-bronze">Disponibilité :</strong> Nous ne garantissons pas l'accès continu au site</li>
                <li>• <strong className="text-bronze">Liens externes :</strong> Nous ne sommes pas responsables du contenu des sites liés</li>
              </ul>
            </div>
          </section>

          {/* Droit applicable */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gold mb-6">8. Droit applicable et juridiction</h2>
            <div className="bg-gray-900/30 p-6 rounded-lg border border-gray-800/50">
              <p className="text-gray-300">
                Les présentes mentions légales sont régies par le droit canadien et québécois. 
                Tout litige sera de la compétence exclusive des tribunaux du Québec, Canada.
              </p>
            </div>
          </section>

          {/* Contact */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gold mb-6">9. Contact</h2>
            <div className="bg-gradient-to-br from-gold/10 to-bronze/10 p-6 rounded-lg border border-gold/20">
              <p className="text-gray-300 mb-4">
                Pour toute question concernant ces mentions légales :
              </p>
              <div className="space-y-2">
                <p className="text-gray-300">
                  <strong className="text-gold">Email :</strong> 
                  <span className="ml-2">
                    <ProtectedEmail 
                      email="Bouillon16@gmail.com"
                      variant="inline"
                      buttonText="Cliquez pour voir l'email"
                      className="text-bronze"
                    />
                  </span>
                </p>
                <p className="text-gray-300">
                  <strong className="text-gold">Téléphone :</strong> 
                  <a href="tel:+14505624323" className="text-bronze hover:text-gold transition-colors underline ml-2">
                    (450) 562-4323
                  </a>
                </p>
                <p className="text-gray-300">
                  <strong className="text-gold">Adresse :</strong> 575 Rue Principale, Lachute, QC J8H 1Y8, Canada
                </p>
              </div>
            </div>
          </section>

          {/* Date de mise à jour */}
          <section>
            <div className="bg-gray-900/30 p-4 rounded-lg border border-gray-800/50 text-center">
              <p className="text-gray-400 text-sm">
                <strong>Dernière mise à jour :</strong> 16 septembre 2025
              </p>
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  );
}
