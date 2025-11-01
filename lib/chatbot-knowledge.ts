
// Base de connaissances du chatbot - contenu du site Bouillon16

export const siteKnowledge = {
  // ⚠️ RÈGLE CRITIQUE : Source unique de vérité
  // Toutes les informations de contact DOIVENT être extraites de la page Contact du site
  // Priorité : Page Contact > Footer > JSON-LD > Fallback ci-dessous
  // ⚠️ SI CHANGEMENT SUR LE SITE : mettre à jour ces informations immédiatement
  
  contact: {
    // Numéro de téléphone OFFICIEL (extrait de la page Contact)
    phone: "450-562-4323",
    phoneFormatted: "(450) 562-4323",
    phoneLink: "+14505624323",
    
    // Fallback UNIQUEMENT si la page Contact n'est pas accessible
    phoneFallback: "450-562-4323",
    
    // Email (protégé sur la page Contact - "click to view")
    email: "lebouillon16@gmail.com",
    
    // Adresse EXACTE (de la page Contact)
    address: {
      street: "575 Rue Principale",
      city: "Lachute",
      province: "Qc",
      postalCode: "J8H 1Y8",
      country: "Canada",
      full: "575 Rue Principale, Lachute, Qc J8H 1Y8, Canada"
    },
    
    // Liens externes
    googleMapsLink: "https://maps.google.com/?q=575+Rue+Principale+Lachute",
    contactPageLink: "https://b16test.abacusai.app/contact",
    
    // Heures d'ouverture EXACTES (de la page Contact)
    hours: {
      monday: "Fermé / Closed",
      tuesday: "16h00 - 20h30",
      wednesday: "16h00 - 20h30",
      thursday: "16h00 - 21h00",
      friday: "16h00 - 22h00",
      saturday: "16h00 - 22h00",
      sunday: "Fermé / Closed"
    }
  },
  
  restaurant: {
    name: "Bouillon16",
    tagline: "Restaurant authentique à Lachute",
    location: "Lachute, Québec",
    specialty: "Fondue, tapas, grillades, pâtes",
    description: "Bistro gastronomique offrant une expérience culinaire unique",
  },

  menu: {
    entrees: [
      "Potage à Quann (6,50$)",
      "Soupe à l'oignon & croûtons (9,50$)",
      "Escargots à l'ail gratinés (12$)",
      "Martini de crevettes géantes (18$)",
      "Calmars frits maison (16$)",
      "Crevettes tempura avec mayo Cajun (16$)",
      "Bâtonnets de fromage (12$)",
      "Pain à l'ail (5,50$ / Gratiné 7,50$)",
      "Frites de patates douces (6$)",
      "Ailes de poulet (6 ailes 14$ / 12 ailes 22$ / 24 ailes 36$)",
      "Bruschetta sur pain naan gratiné (11$)"
    ],
    
    tapas: [
      "Dumplings frits sauce épicée aux arachides (16$)",
      "Ardoise de charcuteries & cornichons (15$ / 22$)",
      "Boules de chèvre tiède, amandes & miel (15$)",
      "Tartare de boeuf Angus, bison, saumon ou thon & croûtons (20$)",
      "Ravioli au boeuf braisé (19$)"
    ],
    
    salades: [
      "Estivale / Garden (11$ / 20$) - Tomates, concombres, oignons rouges & olives noires",
      "César / Caesar (12$ / 22$) - Bacon, câpres & croûtons à l'ail",
      "Bouillon16 (16$ / 23$) - Coeurs d'artichauts, amandes, abricots séchés, chèvre, croûtons"
    ],
    
    pates: [
      "Linguini, Fettuccini ou Tortellini disponibles",
      "Alfredo (24$) - Crème, échalotes, vin blanc, ail",
      "Marinara (24$) - Sauce tomatée maison",
      "Carbonara (25$) - Crème, échalotes, bacon, ail, vin blanc, parmesan",
      "Alla Gigi (26$) - Sauce tomate, crème, proscuitto, champignons, échalotes",
      "Pesto Genovese (25$) - Crème, parmesan, pesto basilic, noix de pins",
      "Puttanesca (26$) - Sauce tomate, olives noires, câpres, échalotes",
      "Note: Pâtes sans gluten disponibles sur demande avec supplément"
    ],
    
    poissons: [
      "Fish à la bière & frites maison (29$)",
      "Coquille St-Jacques (29$)",
      "Pavé de saumon Bio grillé Panko (33$)",
      "Poêlé de crevettes B16 (37$)",
      "Tataki de thon rouge (38$)"
    ],
    
    fonduesFromage: [
      "Traditionnelle (1p. 25$ / 2p. 32$)",
      "Ail (1p. 26$ / 2p. 35$)",
      "Pesto & basilic (1p. 26$ / 2p. 35$)",
      "Tomates séchées (1p. 26$ / 2p. 35$)",
      "Truffe (1p. 26$ / 2p. 35$)",
      "Duo d'olives (1p. 27$ / 2p. 36$)",
      "Québécoise (1p. 29$ / 2p. 39$)",
      "Nouveauté: Érable & noix (1p. 27$ / 2p. 36$)",
      "Servie avec pain ciabatta à volonté (option sans gluten disponible)"
    ],
    
    fondueChinoise: [
      "Bouillon fait maison (option sans gluten disponible)",
      "Choix de viandes: Boeuf (34-40$), Poulet (30$), Saucisse italienne (28$), Saumon Bio (30$), Mignon de boeuf (35$), Crevettes & pétoncles (32$), Crevettes (31$), Bison (38$), Cerf rouge (38$)",
      "Combos: Carnivore (38$), Terre & Mer (36$), Le pêcheur (31$), Le chasseur (38$)",
      "Servie avec choix de: Patate au four, riz ou légumes",
      "TRILOGIE DE FONDUES (49$) - Fromage, Chinoise, Chocolat"
    ],
    
    grillades: [
      "Burger B16 (29$) - Boeuf qualité Angus, portobello & fromage Oka",
      "Burger du Terroir (29$) - Burger de bison, bacon & cheddar",
      "Bavette de boeuf grillée 8oz (38$)",
      "Contre-filet grillé 8oz (46$)",
      "Boeuf Angus AAA / Filet mignon (4oz 40$ / 6oz 46$ / 8oz 52$)",
      "Duo de tartare B16 (39$) - 2 choix parmi: boeuf, bison, saumon ou thon",
      "Servies avec légumes, frites & sauce aux poivres"
    ],
    
    plaqueVolcanique: [
      "Disponible du jeudi au samedi seulement",
      "Bavette de boeuf 8 oz (38$)",
      "Contre-filet 8oz (46$)",
      "Filet mignon Angus (4oz 40$ / 6oz 46$ / 8oz 52$)",
      "Servies avec légumes, sauce aux poivres et choix de pomme de terre au four ou frites ou riz"
    ],
    
    menuEnfants: [
      "Croquettes de poulet (10$)",
      "Burger & frites (12$)",
      "Tortellini ou linguini avec sauce marinara ou rosée (10$)",
      "Mini-fondue au boeuf ou poulet 120gr (18$)",
      "Incluant jus ou liqueur & coupe vanille ou petit gâteau"
    ],
    
    desserts: [
      "Mi-cuit au chocolat maison (10$)",
      "Gâteau fromage New-Yorkais & coulis (10$)",
      "Gâteau fromage Dulce leche (10$)",
      "Gâteau chocolat-caramel (10$)",
      "Gâteau à la meringue & lime (10$)",
      "Gâteau fromage aux carottes & caramel (10$)",
      "Fondue au chocolat lait ou noir (1 pers 12$ / 2 pers 18$)"
    ],
    
    cafes: [
      "Espresso (4,75$)",
      "Double Espresso (5,75$)",
      "Cappuccino (5$)",
      "Café latté (6$)",
      "Extra lait d'amandes disponible avec supplément"
    ],
    
    inspirationsChef: [
      "Nachos Asiatique (14$)",
      "Burrata & pêche poêlées au miel sur tomates colorées (16$)",
      "Planche Gourmande Châteaubriand 2 pers. (160$) - Filet mignon 10oz et 2 queues d'homard",
      "Longe de morue fraîche d'Islande et pomme Boréal (35$)",
      "Jarret d'agneau braisé création Le16 (42$)",
      "Crevettes papillons grillées bruschetta & Mozzarella (43$)",
      "Formule TH disponible pour 10$ incluant potage/césar/jardinière + dessert + café"
    ]
  },

  dietary: {
    vegetarian: "Options végétariennes disponibles sur demande",
    glutenFree: "Options sans gluten disponibles - informez votre serveur",
    allergies: "Veuillez informer votre serveur de toute allergie alimentaire"
  },

  hours: {
    monday: "Fermé",
    tuesday: "17h00 - 22h00",
    wednesday: "17h00 - 22h00 (Promo du mercredi)",
    thursday: "17h00 - 22h00 (Bavette du jeudi)",
    friday: "17h00 - 23h00",
    saturday: "17h00 - 23h00",
    sunday: "17h00 - 22h00",
    note: "Les heures peuvent varier selon la saison"
  },

  promotions: {
    anniversaire: "🎂 Obtenez votre âge en % sur votre repas principal à prix régulier (jusqu'à un maximum de 50%)",
    mardi: "🔵 MARDI PROMO - FONDUE: 2e à moitié prix (34$/150gr - 40$/200gr)",
    mercredi: "🟠 MERCREDI PROMO - SOIRÉE PÂTES: Mix ta pâte & ta sauce - 18$ (Demandez notre vin rouge en vedette)",
    jeudi: "🟢 JEUDI PROMO - NOS INCONTOURNABLES: 28$ (Saumon Panko ou Bavette grillée Angus)",
    vendrediSamedi: "🟠 VENDREDI & SAMEDI PROMO (à partir de 20h): 2 pour 1 alcool simple - 15$ / Shooters (sélectionnés) - 3$",
    note: "Aucune promotion ne peut être appliquée sur une autre promotion",
    specialEvents: "Événements spéciaux réguliers - consultez notre page Facebook"
  },
  
  capaciteAccueil: {
    salleAManger: { nom: "Salle à Manger", capacite: 55 },
    sallePrivee: { nom: "Salle Privée", capacite: 25 },
    terrasse: { nom: "Terrasse", capacite: 55 },
    bar: { nom: "Bar", capacite: 15 },
    lounge: { nom: "Lounge", capacite: 35 },
    cocktail: { nom: "Cocktail", capacite: 40 },
    note: "Des espaces adaptés à tous vos événements"
  },

  payment: {
    methods: [
      "Cartes de crédit (Visa, Mastercard, American Express)",
      "Cartes de débit",
      "Argent comptant"
    ]
  },

  services: {
    terrasse: {
      capacity: "80 personnes",
      description: "Magnifique terrasse extérieure pouvant accueillir jusqu'à 80 personnes, parfaite pour les beaux jours"
    },
    privatisation: {
      available: true,
      description: "Location de salle pour événements privés, réceptions, anniversaires et célébrations spéciales",
      capacity: "Contactez-nous pour plus de détails"
    },
    aEmporter: {
      available: true,
      description: "Service de plats à emporter disponible - Commandez par téléphone"
    },
    traiteur: {
      available: true,
      description: "Service traiteur pour vos événements"
    }
  },

  reviews: {
    howTo: "Vous pouvez laisser un avis sur notre page Facebook ou Google My Business",
    feedback: "Vos commentaires sont précieux - contactez-nous directement ou laissez un avis en ligne"
  },

  atmosphere: {
    style: "Ambiance chaleureuse et élégante",
    decor: "Décor contemporain avec touches rustiques",
    music: "Musique d'ambiance soigneusement sélectionnée"
  },

  team: {
    chef: "Équipe de chefs passionnés et expérimentés",
    service: "Personnel accueillant et professionnel",
    ownership: "Restaurant familial avec plus de 20 ans d'expérience"
  }
};

// Fonction pour rechercher dans la base de connaissances
export function searchKnowledge(query: string, language: 'fr' | 'en'): string {
  const lowerQuery = query.toLowerCase();
  const knowledge = siteKnowledge;
  
  let relevantInfo: string[] = [];

  // Pâtes
  if (lowerQuery.includes('pâte') || lowerQuery.includes('pasta') || lowerQuery.includes('linguini') || lowerQuery.includes('fettuccini') || lowerQuery.includes('tortellini')) {
    relevantInfo.push(`PÂTES (Linguini, Fettuccini, Tortellini):\n${knowledge.menu.pates.join('\n')}`);
  }

  // Menu général et plats
  if (lowerQuery.includes('menu') || lowerQuery.includes('plat') || lowerQuery.includes('dish') || lowerQuery.includes('food') || lowerQuery.includes('manger')) {
    relevantInfo.push(`Spécialités: ${knowledge.restaurant.specialty}`);
    if (knowledge.menu.entrees) relevantInfo.push(`ENTRÉES: ${knowledge.menu.entrees.slice(0, 5).join(', ')}...`);
    if (knowledge.menu.grillades) relevantInfo.push(`GRILLADES: ${knowledge.menu.grillades.slice(0, 3).join(', ')}...`);
    if (knowledge.menu.pates) relevantInfo.push(`PÂTES disponibles: Alfredo, Marinara, Carbonara, Alla Gigi, Pesto Genovese, Puttanesca`);
  }

  // Fondue fromage
  if (lowerQuery.includes('fondue') && (lowerQuery.includes('fromage') || lowerQuery.includes('cheese'))) {
    relevantInfo.push(`FONDUES AU FROMAGE:\n${knowledge.menu.fonduesFromage.join('\n')}`);
  }

  // Fondue chinoise
  if (lowerQuery.includes('fondue') && (lowerQuery.includes('chinoise') || lowerQuery.includes('viande') || lowerQuery.includes('meat'))) {
    relevantInfo.push(`FONDUE CHINOISE:\n${knowledge.menu.fondueChinoise.join('\n')}`);
  }

  // Fondue général
  if (lowerQuery.includes('fondue') && !lowerQuery.includes('fromage') && !lowerQuery.includes('chinoise') && !lowerQuery.includes('cheese')) {
    relevantInfo.push(`Nous offrons des fondues au fromage (8 variétés) et des fondues chinoises. Trilogie de fondues disponible à 49$.`);
  }

  // Grillades
  if (lowerQuery.includes('grillade') || lowerQuery.includes('steak') || lowerQuery.includes('boeuf') || lowerQuery.includes('beef') || lowerQuery.includes('filet')) {
    relevantInfo.push(`GRILLADES:\n${knowledge.menu.grillades.join('\n')}`);
  }

  // Poissons
  if (lowerQuery.includes('poisson') || lowerQuery.includes('fish') || lowerQuery.includes('saumon') || lowerQuery.includes('salmon') || lowerQuery.includes('thon') || lowerQuery.includes('crevette')) {
    relevantInfo.push(`POISSONS:\n${knowledge.menu.poissons.join('\n')}`);
  }

  // Desserts
  if (lowerQuery.includes('dessert') || lowerQuery.includes('gâteau') || lowerQuery.includes('cake') || lowerQuery.includes('sucré') || lowerQuery.includes('sweet')) {
    relevantInfo.push(`DESSERTS (10$):\n${knowledge.menu.desserts.join('\n')}`);
  }

  // Capacité / Terrasse / Places
  if (lowerQuery.includes('capacité') || lowerQuery.includes('capacity') || lowerQuery.includes('place') || lowerQuery.includes('terrasse') || lowerQuery.includes('terrace') || lowerQuery.includes('salle') || lowerQuery.includes('combien de personnes')) {
    const capacites = [
      `${knowledge.capaciteAccueil.salleAManger.nom}: ${knowledge.capaciteAccueil.salleAManger.capacite} personnes`,
      `${knowledge.capaciteAccueil.terrasse.nom}: ${knowledge.capaciteAccueil.terrasse.capacite} personnes`,
      `${knowledge.capaciteAccueil.sallePrivee.nom}: ${knowledge.capaciteAccueil.sallePrivee.capacite} personnes`,
      `${knowledge.capaciteAccueil.lounge.nom}: ${knowledge.capaciteAccueil.lounge.capacite} personnes`,
      `${knowledge.capaciteAccueil.bar.nom}: ${knowledge.capaciteAccueil.bar.capacite} personnes`,
      `${knowledge.capaciteAccueil.cocktail.nom}: ${knowledge.capaciteAccueil.cocktail.capacite} personnes`
    ];
    relevantInfo.push(`CAPACITÉ D'ACCUEIL:\n${capacites.join('\n')}\n${knowledge.capaciteAccueil.note}`);
  }

  // Heures d'ouverture
  if (lowerQuery.includes('heure') || lowerQuery.includes('ouvert') || lowerQuery.includes('hour') || lowerQuery.includes('open') || lowerQuery.includes('fermé')) {
    relevantInfo.push(`HEURES D'OUVERTURE:\nLundi: ${knowledge.hours.monday}\nMardi: ${knowledge.hours.tuesday}\nMercredi: ${knowledge.hours.wednesday}\nJeudi: ${knowledge.hours.thursday}\nVendredi: ${knowledge.hours.friday}\nSamedi: ${knowledge.hours.saturday}\nDimanche: ${knowledge.hours.sunday}`);
  }

  // Promotions
  if (lowerQuery.includes('promo') || lowerQuery.includes('spécial') || lowerQuery.includes('offer') || lowerQuery.includes('deal') || lowerQuery.includes('rabais')) {
    const promos = [
      knowledge.promotions.anniversaire,
      knowledge.promotions.mardi,
      knowledge.promotions.mercredi,
      knowledge.promotions.jeudi,
      knowledge.promotions.vendrediSamedi
    ];
    relevantInfo.push(`PROMOTIONS:\n${promos.join('\n\n')}\n\n${knowledge.promotions.note}`);
  }

  // Options alimentaires
  if (lowerQuery.includes('végé') || lowerQuery.includes('vegan') || lowerQuery.includes('gluten') || lowerQuery.includes('allergi') || lowerQuery.includes('sans gluten')) {
    relevantInfo.push(`OPTIONS ALIMENTAIRES:\n${knowledge.dietary.vegetarian}\n${knowledge.dietary.glutenFree}\n${knowledge.dietary.allergies}`);
  }

  // Contact et réservation
  if (lowerQuery.includes('contact') || lowerQuery.includes('téléphone') || lowerQuery.includes('phone') || lowerQuery.includes('email') || lowerQuery.includes('appel')) {
    relevantInfo.push(`CONTACT:\nTéléphone: ${knowledge.contact.phoneFormatted}\nEmail: ${knowledge.contact.email}\nPage Contact: ${knowledge.contact.contactPageLink}`);
  }

  // Adresse
  if (lowerQuery.includes('adresse') || lowerQuery.includes('address') || lowerQuery.includes('où') || lowerQuery.includes('where') || lowerQuery.includes('direction') || lowerQuery.includes('location')) {
    relevantInfo.push(`ADRESSE: ${knowledge.contact.address.full}\nGoogle Maps: ${knowledge.contact.googleMapsLink}`);
  }

  // Heures d'ouverture
  if (lowerQuery.includes('heure') || lowerQuery.includes('hour') || lowerQuery.includes('ouvert') || lowerQuery.includes('open') || lowerQuery.includes('fermé') || lowerQuery.includes('close')) {
    const hours = knowledge.contact.hours;
    relevantInfo.push(`HEURES D'OUVERTURE:\nLundi: ${hours.monday}\nMardi: ${hours.tuesday}\nMercredi: ${hours.wednesday}\nJeudi: ${hours.thursday}\nVendredi: ${hours.friday}\nSamedi: ${hours.saturday}\nDimanche: ${hours.sunday}`);
  }

  // Services
  if (lowerQuery.includes('service') || lowerQuery.includes('terrasse') || lowerQuery.includes('privatisation') || lowerQuery.includes('emporter') || lowerQuery.includes('traiteur') || lowerQuery.includes('takeout') || lowerQuery.includes('catering')) {
    relevantInfo.push(`SERVICES:\n- Terrasse: ${knowledge.services.terrasse.description} (Capacité: ${knowledge.services.terrasse.capacity})\n- ${knowledge.services.privatisation.description}\n- ${knowledge.services.aEmporter.description}\n- ${knowledge.services.traiteur.description}`);
  }

  // Promotions
  if (lowerQuery.includes('promotion') || lowerQuery.includes('spécial') || lowerQuery.includes('special') || lowerQuery.includes('offre') || lowerQuery.includes('offer')) {
    const promos = [
      knowledge.promotions.anniversaire,
      knowledge.promotions.mardi,
      knowledge.promotions.mercredi,
      knowledge.promotions.jeudi,
      knowledge.promotions.vendrediSamedi
    ];
    relevantInfo.push(`PROMOTIONS:\n${promos.join('\n')}\n\n${knowledge.promotions.note}\n${knowledge.promotions.specialEvents}`);
  }

  // Paiement
  if (lowerQuery.includes('paiement') || lowerQuery.includes('payment') || lowerQuery.includes('carte') || lowerQuery.includes('card') || lowerQuery.includes('cash') || lowerQuery.includes('argent')) {
    relevantInfo.push(`MODES DE PAIEMENT:\n${knowledge.payment.methods.join('\n')}`);
  }

  // Avis et commentaires
  if (lowerQuery.includes('avis') || lowerQuery.includes('review') || lowerQuery.includes('feedback') || lowerQuery.includes('commentaire')) {
    relevantInfo.push(`AVIS:\n${knowledge.reviews.howTo}\n${knowledge.reviews.feedback}`);
  }

  // Réservation
  if (lowerQuery.includes('réserv') || lowerQuery.includes('book') || lowerQuery.includes('table')) {
    relevantInfo.push(`RÉSERVATIONS:\nPour réserver une table, contactez-nous au ${knowledge.contact.phoneFormatted}\nOu visitez notre page Contact: ${knowledge.contact.contactPageLink}\n⚠️ IMPORTANT: Aucune réservation ne sera effectuée par email ou formulaire de contact.`);
  }

  return relevantInfo.join('\n\n') || 'Informations générales du restaurant disponibles sur le site.';
}
