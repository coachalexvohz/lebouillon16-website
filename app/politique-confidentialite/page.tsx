
'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { ProtectedEmail } from '@/components/ui/protected-email';

export default function PolitiqueConfidentialite() {
  return (
    <div className="min-h-screen bg-dark-primary text-warm-white">
      <div className="bg-gradient-to-b from-black/80 to-black/60 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-gold hover:text-bronze transition-colors duration-200 mb-6"
          >
            <ArrowLeft className="w-5 h-5" />
            Retour à l'accueil
          </Link>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gold font-heading mb-4">
            Politique de Confidentialité
          </h1>
          
          <p className="text-xl text-gray-300">
            Protection et utilisation de vos données personnelles
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-12">
          {/* Responsable du traitement */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gold mb-6">1. Responsable du traitement</h2>
            <div className="bg-gray-900/30 p-6 rounded-lg border border-gray-800/50">
              <p className="text-gray-300 mb-0">
                <strong className="text-gold">Bouillon16</strong><br />
                575 Rue Principale<br />
                Lachute, QC J8H 1Y8, Canada<br />
                Téléphone : (450) 562-4323<br />
                Email : <ProtectedEmail 
                  email="Bouillon16@gmail.com"
                  variant="inline"
                  buttonText="Cliquez pour voir l'email"
                  className="text-gold"
                />
              </p>
            </div>
          </section>

          {/* Données collectées */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gold mb-6">2. Données personnelles collectées</h2>
            <div className="space-y-4">
              <div className="bg-gray-900/30 p-4 rounded-lg border border-gray-800/50">
                <h3 className="text-lg font-semibold text-bronze mb-2">Via le formulaire de contact :</h3>
                <ul className="text-gray-300 space-y-1">
                  <li>• Nom et prénom</li>
                  <li>• Adresse email</li>
                  <li>• Sujet du message</li>
                  <li>• Contenu du message</li>
                </ul>
              </div>
              
              <div className="bg-gray-900/30 p-4 rounded-lg border border-gray-800/50">
                <h3 className="text-lg font-semibold text-bronze mb-2">Données de navigation :</h3>
                <ul className="text-gray-300 space-y-1">
                  <li>• Adresse IP</li>
                  <li>• Type de navigateur</li>
                  <li>• Pages visitées</li>
                  <li>• Durée de visite</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Finalités */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gold mb-6">3. Finalités du traitement</h2>
            <div className="bg-gray-900/30 p-6 rounded-lg border border-gray-800/50">
              <ul className="text-gray-300 space-y-2">
                <li>• <strong className="text-bronze">Répondre à vos demandes</strong> de contact et d'information</li>
                <li>• <strong className="text-bronze">Améliorer notre site web</strong> et nos services</li>
                <li>• <strong className="text-bronze">Assurer la sécurité</strong> de notre site</li>
                <li>• <strong className="text-bronze">Respecter nos obligations légales</strong></li>
              </ul>
            </div>
          </section>

          {/* Base légale */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gold mb-6">4. Base légale</h2>
            <div className="bg-gray-900/30 p-6 rounded-lg border border-gray-800/50">
              <p className="text-gray-300">
                Le traitement de vos données personnelles est fondé sur :
              </p>
              <ul className="text-gray-300 mt-4 space-y-2">
                <li>• <strong className="text-bronze">Votre consentement</strong> pour les demandes de contact</li>
                <li>• <strong className="text-bronze">Notre intérêt légitime</strong> pour l'amélioration de nos services</li>
              </ul>
            </div>
          </section>

          {/* Conservation */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gold mb-6">5. Durée de conservation</h2>
            <div className="bg-gray-900/30 p-6 rounded-lg border border-gray-800/50">
              <ul className="text-gray-300 space-y-2">
                <li>• <strong className="text-bronze">Messages de contact :</strong> 2 ans après le dernier échange</li>
                <li>• <strong className="text-bronze">Données de navigation :</strong> 13 mois maximum</li>
                <li>• <strong className="text-bronze">Cookies :</strong> selon les durées définies dans notre politique cookies</li>
              </ul>
            </div>
          </section>

          {/* Droits */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gold mb-6">6. Vos droits</h2>
            <div className="bg-gray-900/30 p-6 rounded-lg border border-gray-800/50">
              <p className="text-gray-300 mb-4">
                Conformément à la Loi 25 du Québec, vous disposez des droits suivants :
              </p>
              <ul className="text-gray-300 space-y-2">
                <li>• <strong className="text-bronze">Droit d'accès :</strong> connaître les données que nous détenons sur vous</li>
                <li>• <strong className="text-bronze">Droit de rectification :</strong> corriger vos données inexactes</li>
                <li>• <strong className="text-bronze">Droit à l'effacement :</strong> demander la suppression de vos données</li>
                <li>• <strong className="text-bronze">Droit d'opposition :</strong> vous opposer au traitement de vos données</li>
                <li>• <strong className="text-bronze">Droit de retrait du consentement :</strong> retirer votre consentement à tout moment</li>
              </ul>
              
              <div className="mt-6 p-4 bg-gold/10 border border-gold/20 rounded-lg">
                <p className="text-gray-300">
                  <strong className="text-gold">Pour exercer vos droits :</strong><br />
                  Contactez-nous à <ProtectedEmail 
                    email="Bouillon16@gmail.com"
                    variant="inline"
                    buttonText="cette adresse email"
                    className="text-bronze"
                  />
                </p>
              </div>
            </div>
          </section>

          {/* Cookies */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gold mb-6">7. Cookies et technologies similaires</h2>
            <div className="bg-gray-900/30 p-6 rounded-lg border border-gray-800/50">
              <p className="text-gray-300 mb-4">
                Notre site utilise des cookies pour améliorer votre expérience. Vous pouvez gérer vos préférences via la bannière de consentement.
              </p>
              <ul className="text-gray-300 space-y-2">
                <li>• <strong className="text-bronze">Cookies techniques :</strong> nécessaires au fonctionnement du site</li>
                <li>• <strong className="text-bronze">Cookies analytiques :</strong> pour comprendre l'utilisation du site</li>
                <li>• <strong className="text-bronze">Cookies de préférences :</strong> pour mémoriser vos choix</li>
              </ul>
            </div>
          </section>

          {/* Sécurité */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gold mb-6">8. Sécurité des données</h2>
            <div className="bg-gray-900/30 p-6 rounded-lg border border-gray-800/50">
              <p className="text-gray-300">
                Nous mettons en place des mesures techniques et organisationnelles appropriées pour protéger vos données personnelles contre :
              </p>
              <ul className="text-gray-300 mt-4 space-y-2">
                <li>• L'accès non autorisé</li>
                <li>• La modification, la divulgation ou la destruction</li>
                <li>• La perte accidentelle</li>
              </ul>
            </div>
          </section>

          {/* Contact */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gold mb-6">9. Contact</h2>
            <div className="bg-gradient-to-br from-gold/10 to-bronze/10 p-6 rounded-lg border border-gold/20">
              <p className="text-gray-300">
                Pour toute question concernant cette politique de confidentialité ou l'exercice de vos droits :
              </p>
              <div className="mt-4 space-y-2">
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
              </div>
            </div>
          </section>

          {/* Modification */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gold mb-6">10. Modification de cette politique</h2>
            <div className="bg-gray-900/30 p-6 rounded-lg border border-gray-800/50">
              <p className="text-gray-300">
                Cette politique peut être modifiée pour refléter les changements de nos pratiques ou pour des raisons légales. 
                La version mise à jour sera publiée sur cette page avec la date de dernière modification.
              </p>
              <div className="text-gray-400 text-sm mt-4">
                <span className="font-bold">Dernière mise à jour :</span> 24 septembre 2025
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
