
export const defaultLocale = 'fr' as const;
export const locales = ['fr', 'en'] as const;
export type Locale = typeof locales[number];

export interface Translations {
  // Navigation
  nav: {
    home: string;
    about: string;
    services: string;
    menu: string;
    gallery: string;
    faq: string;
    restaurant: string;
    contact: string;
    languageSwitch: string;
  };
  
  // Home page
  home: {
    hero: {
      title: string;
      subtitle: string;
      cta1: string;
      cta2: string;
      cta3: string;
    };
    philosophy: {
      title: string;
      subtitle: string;
      quality: {
        title: string;
        description: string;
      };
      atmosphere: {
        title: string;
        description: string;
      };
      uniqueCharm: {
        title: string;
        description: string;
      };
    };
    signature: {
      title: string;
      subtitle: string;
      dishes: {
        pasta: {
          name: string;
          description: string;
        };
        burger: {
          name: string;
          description: string;
        };
        fondue: {
          name: string;
          description: string;
        };
      };
    };
    testimonials: {
      title: string;
      testimonial1: {
        name: string;
        text: string;
      };
      testimonial2: {
        name: string;
        text: string;
      };
      testimonial3: {
        name: string;
        text: string;
      };
    };
  };
  
  // About page
  about: {
    hero: {
      title: string;
      subtitle: string;
    };
    introduction: {
      title: string;
      content: string;
    };
    concept: {
      title: string;
      positioning: string;
      specialties: string;
      location: string;
      service: string;
      ecoResponsibility: string;
    };
    chefs: {
      title: string;
      sylvain: {
        name: string;
        title: string;
        description: string;
      };
      maxime: {
        name: string;
        title: string;
        description: string;
      };
      nicholas: {
        name: string;
        title: string;
        description: string;
      };
    };
    ambiance: {
      title: string;
      description: string;
    };
    values: {
      quality: {
        title: string;
        description: string;
      };
      atmosphere: {
        title: string;
        description: string;
      };
      uniqueCharm: {
        title: string;
        description: string;
      };
    };
    timeline: {
      title: string;
      events: {
        2018: {
          title: string;
          description: string;
        };
        2019: {
          title: string;
          description: string;
        };
        2020: {
          title: string;
          description: string;
        };
        2021: {
          title: string;
          description: string;
        };
        2022: {
          title: string;
          description: string;
        };
        2025: {
          title: string;
          description: string;
        };
      };
    };
    achievements: {
      title: string;
      awards: string;
      customerSatisfaction: string;
      specialEvents: string;
    };
    team: {
      title: string;
      subtitle: string;
    };
    restaurant: {
      title: string;
      address: {
        title: string;
        line1: string;
        line2: string;
      };
      contact: {
        title: string;
        phone: string;
        email: string;
      };
      hours: {
        title: string;
        monday: string;
        tuesday: string;
        wednesday: string;
        thursday: string;
        friday: string;
        saturday: string;
        sunday: string;
        closed: string;
      };
    };
    reservations: {
      title: string;
      methods: string;
      cancellation: string;
      payment: string;
      tips: string;
    };
    promos: {
      title: string;
      daily: {
        title: string;
        monday: string;
        tuesday: string;
        wednesday: string;
        thursday: string;
        friday: string;
        saturday: string;
        sunday: string;
      };
    };
    experience: {
      title: string;
      description: string;
      cta: string;
    };
  };
  
  // Services page
  services: {
    hero: {
      title: string;
      subtitle: string;
    };
    servicesOffered: {
      title: string;
      dining: {
        title: string;
        description: string;
      };
      bar: {
        title: string;
        description: string;
      };
      terrace: {
        title: string;
        description: string;
      };
      events: {
        title: string;
        description: string;
      };
      catering: {
        title: string;
        description: string;
      };
      takeout: {
        title: string;
        description: string;
      };
      seasonal: {
        title: string;
        description: string;
      };
    };
    menus: {
      title: string;
      varied: {
        title: string;
        description: string;
      };
      seasonal: {
        title: string;
        description: string;
      };
      events: {
        title: string;
        description: string;
      };
    };
    allergies: {
      title: string;
      subtitle: string;
      glutenFree: {
        title: string;
        description: string;
      };
      vegetarian: {
        title: string;
        description: string;
      };
      lactoseFree: {
        title: string;
        description: string;
      };
      nutFree: {
        title: string;
        description: string;
      };
      diabetic: {
        title: string;
        description: string;
      };
      consultation: {
        title: string;
        description: string;
      };
    };
    capacity: {
      title: string;
      mainHall: {
        title: string;
        description: string;
      };
      terrace: {
        title: string;
        description: string;
      };
      privateRoom: {
        title: string;
        description: string;
      };
      events: {
        title: string;
        description: string;
      };
    };
  };

  // FAQ page
  faq: {
    hero: {
      title: string;
      subtitle: string;
    };
    categories: {
      allergies: {
        title: string;
        questions: {
          q1: {
            question: string;
            answer: string;
          };
          q2: {
            question: string;
            answer: string;
          };
          q3: {
            question: string;
            answer: string;
          };
        };
      };
      dressCode: {
        title: string;
        questions: {
          q1: {
            question: string;
            answer: string;
          };
          q2: {
            question: string;
            answer: string;
          };
        };
      };
      children: {
        title: string;
        questions: {
          q1: {
            question: string;
            answer: string;
          };
          q2: {
            question: string;
            answer: string;
          };
        };
      };
      parking: {
        title: string;
        questions: {
          q1: {
            question: string;
            answer: string;
          };
        };
      };
      groups: {
        title: string;
        questions: {
          q1: {
            question: string;
            answer: string;
          };
          q2: {
            question: string;
            answer: string;
          };
        };
      };
      cancellation: {
        title: string;
        questions: {
          q1: {
            question: string;
            answer: string;
          };
        };
      };
      birthday: {
        title: string;
        questions: {
          q1: {
            question: string;
            answer: string;
          };
        };
      };
      accessibility: {
        title: string;
        questions: {
          q1: {
            question: string;
            answer: string;
          };
        };
      };
    };
    needHelp: {
      title: string;
      subtitle: string;
      cta: string;
    };
  };
  
  // Menu page
  menu: {
    title: string;
    subtitle: string;
    downloadPdf: string;
    categories: {
      starters: string;
      fondues: string;
      fish: string;
      tapas: string;
      salads: string;
      pasta: string;
      grills: string;
      desserts: string;
    };
  };
  
  // Gallery page
  gallery: {
    hero: {
      title: string;
      subtitle: string;
    };
    culinary: {
      title: string;
    };
    filters: {
      all: string;
      dishes: string;
      drinks: string;
      bar: string;
      terrasse: string;
      atmosphere: string;
      team: string;
    };
  };
  
  // Restaurant page
  restaurant: {
    title: string;
    subtitle: string;
    contact: {
      title: string;
      address: string;
      phone: string;
      email: string;
    };
    hours: {
      title: string;
      monday: string;
      tuesday: string;
      wednesday: string;
      thursday: string;
      friday: string;
      saturday: string;
      sunday: string;
      closed: string;
    };
  };
  
  // Contact page
  contact: {
    hero: {
      title: string;
      subtitle: string;
    };
    form: {
      name: string;
      email: string;
      phone: string;
      subject: string;
      message: string;
      submit: string;
      success: string;
      error: string;
      subtitle: string;
      placeholders: {
        name: string;
        email: string;
        subject: string;
        message: string;
      };
      consent: {
        text1: string;
        text2: string;
        privacyPolicy: string;
        required: string;
      };
      sending: string;
    };
    info: {
      address: {
        title: string;
        line1: string;
        line2: string;
      };
      phone: {
        title: string;
        number: string;
      };
      email: {
        title: string;
        address: string;
      };
      hours: {
        title: string;
      };
    };
    hours: {
      title: string;
      monday: string;
      tuesday: string;
      wednesday: string;
      thursday: string;
      friday: string;
      saturday: string;
      sunday: string;
      closed: string;
    };
    practical: {
      title: string;
      parking: string;
      accessibility: string;
      privatization: string;
      reservations: string;
      terrace: string;
      groups: string;
    };
  };

  // Footer
  footer: {
    restaurant: {
      title: string;
      description: string;
    };
    quickLinks: {
      title: string;
      menu: string;
      about: string;
      gallery: string;
      contact: string;
      faq: string;
      services: string;
      licenses: string;
    };
    contact: {
      title: string;
      address: string;
      phone: string;
      email: string;
    };
    social: {
      title: string;
    };
    legal: {
      rights: string;
      privacy: string;
      terms: string;
    };
  };
  
  // Common
  common: {
    loading: string;
    error: string;
    back: string;
    viewMore: string;
    close: string;
    readMore: string;
    readLess: string;
    yes: string;
    no: string;
    available: string;
    notAvailable: string;
    price: string;
    new: string;
    recommended: string;
    events: string;
  };
}

const translations: Record<Locale, Translations> = {
  fr: {
    nav: {
      home: "Accueil",
      about: "À Propos",
      services: "Offre & Services",
      menu: "Menu",
      gallery: "Galerie",
      faq: "FAQ",
      restaurant: "Notre Restaurant",
      contact: "Contact",
      languageSwitch: "English"
    },
    home: {
      hero: {
        title: "Bouillon16",
        subtitle: "Une expérience authentique au cœur de Lachute",
        cta1: "Découvrir notre menu",
        cta2: "Nous contacter",
        cta3: "Réserver votre table"
      },
      philosophy: {
        title: "Notre Vision",
        subtitle: "L'excellence culinaire dans un cadre chaleureux",
        quality: {
          title: "Qualité",
          description: "Des ingrédients frais et locaux sélectionnés avec soin pour vous offrir une cuisine d'exception."
        },
        atmosphere: {
          title: "Ambiance",
          description: "Un cadre intimiste et convivial où chaque moment devient une célébration des sens."
        },
        uniqueCharm: {
          title: "Charme Unique",
          description: "Une décoration soignée et une atmosphère authentique qui vous transportent vers l'art de vivre."
        }
      },
      signature: {
        title: "Nos Plats Inspiration",
        subtitle: "Des plats uniques créés avec passion par notre chef",
        dishes: {
          pasta: {
            name: "Mix Ta Pâte et Ta Sauce",
            description: "Spécialité du mercredi - Pâtes fraîches avec sauce au choix"
          },
          burger: {
            name: "Le Burger",
            description: "Burger gourmet maison avec pain artisanal et frites"
          },
          fondue: {
            name: "Fondue Traditionnelle",
            description: "Fondue au fromage avec accompagnements et viandes"
          }
        }
      },
      testimonials: {
        title: "Ce que disent nos clients",
        testimonial1: {
          name: "Marie Dubois",
          text: "Une expérience culinaire exceptionnelle ! Le service est impeccable et les plats sont d'une qualité remarquable."
        },
        testimonial2: {
          name: "Jean Tremblay",
          text: "L'ambiance est parfaite pour un dîner en amoureux. La fondue est absolument délicieuse !"
        },
        testimonial3: {
          name: "Sophie Martin",
          text: "Un restaurant où l'on se sent comme à la maison. Personnel chaleureux et cuisine authentique."
        }
      }
    },
    about: {
      hero: {
        title: "Un peu de nous",
        subtitle: "Découvrez l'histoire et la passion qui animent Bouillon16, votre destination gastronomique au cœur de Lachute"
      },
      introduction: {
        title: "À Propos de Bouillon16",
        content: "Situé au cœur de Lachute, Bouillon16 est né d'une passion pour la gastronomie authentique et l'art de recevoir. Notre restaurant vous invite à découvrir une cuisine raffinée dans un cadre chaleureux et sophistiqué."
      },
      concept: {
        title: "Concept culinaire & positionnement",
        positioning: "Bouillon16 se positionne comme une destination gastronomique incontournable à Lachute, alliant tradition culinaire et modernité.",
        specialties: "Nos spécialités incluent les fondues traditionnelles, les grillades savoureuses, et une sélection de tapas créatifs qui reflètent notre approche innovante de la cuisine.",
        location: "Idéalement situé au 575 Rue Principale à Lachute, notre restaurant bénéficie d'un emplacement central accessible et accueillant.",
        service: "Nous proposons un service sur place dans notre salle à manger élégante, ainsi qu'une belle terrasse pour les repas en plein air lors des beaux jours.",
        ecoResponsibility: "Soucieux de notre impact environnemental, nous privilégions les produits locaux et de saison, travaillant avec des fournisseurs de la région pour offrir une cuisine responsable et durable."
      },
      chefs: {
        title: "Chefs & expertise",
        sylvain: {
          name: "Sylvain Leseize",
          title: "Chef exécutif et copropriétaire",
          description: "Avec plus de 15 ans d'expérience en cuisine, Sylvain apporte sa créativité et son expertise pour créer des plats qui marient tradition et innovation. Sa passion pour les produits locaux se reflète dans chaque assiette."
        },
        maxime: {
          name: "Maxime Leseize",
          title: "Sous-chef et copropriétaire",
          description: "Maxime complète parfaitement l'équipe culinaire avec sa maîtrise des techniques classiques et son œil artistique pour la présentation. Ensemble, les frères Leseize forment un duo culinaire exceptionnel."
        },
        nicholas: {
          name: "Nicholas Olivan",
          title: "Chef pâtissier",
          description: "Nicholas enchante nos clients avec ses créations sucrées raffinées. Ses desserts, véritables œuvres d'art, constituent le parfait épilogue de nos repas gastronomiques."
        }
      },
      ambiance: {
        title: "Ambiance & décor",
        description: "Notre restaurant offre une atmosphère feutrée, chaleureuse et accueillante. Le décor moderne-rustique crée un cadre parfait pour vos repas d'affaires comme pour vos moments intimes. L'éclairage tamisé et les matériaux nobles contribuent à cette ambiance unique qui fait la réputation du Bouillon 16."
      },
      values: {
        quality: {
          title: "QUALITÉ",
          description: "Des ingrédients premium sélectionnés avec soin"
        },
        atmosphere: {
          title: "AMBIANCE",
          description: "Un cadre chaleureux et sophistiqué"
        },
        uniqueCharm: {
          title: "CHARME UNIQUE",
          description: "Une expérience culinaire inoubliable"
        }
      },
      timeline: {
        title: "Notre Histoire",
        events: {
          2018: {
            title: "La Naissance",
            description: "Ouverture du Bouillon 16 avec une vision : réinventer l'art de la fondue traditionnelle."
          },
          2019: {
            title: "Reconnaissance",
            description: "Première reconnaissance de la critique gastronomique locale et fidélisation de notre clientèle."
          },
          2020: {
            title: "Adaptation & Résilience",
            description: "Malgré les défis, nous avons su nous adapter et maintenir notre niveau d'excellence."
          },
          2021: {
            title: "Expansion du Menu",
            description: "Élargissement de notre carte avec de nouvelles créations et une attention particulière aux produits locaux."
          },
          2022: {
            title: "Rénovation & Modernisation",
            description: "Réaménagement de nos espaces pour offrir une expérience client encore plus raffinée."
          },
          2025: {
            title: "Vision d'Avenir",
            description: "Continuation de notre mission : offrir une expérience gastronomique mémorable dans un cadre exceptionnel."
          }
        }
      },
      achievements: {
        title: "Nos Réalisations",
        awards: "Prix d'Excellence du service client 2022",
        customerSatisfaction: "98% de satisfaction client",
        specialEvents: "Plus de 500 événements privés organisés"
      },
      team: {
        title: "Notre Équipe",
        subtitle: "Une équipe passionnée dédiée à votre satisfaction et à l'excellence culinaire"
      },
      restaurant: {
        title: "Notre Restaurant",
        address: {
          title: "Adresse",
          line1: "575 Rue Principale",
          line2: "Lachute, Qc J8H 1Y8"
        },
        contact: {
          title: "Contact",
          phone: "(450) 562-4323",
          email: "Bouillon16@gmail.com"
        },
        hours: {
          title: "Horaires d'ouverture",
          monday: "Lundi",
          tuesday: "Mardi",
          wednesday: "Mercredi",
          thursday: "Jeudi", 
          friday: "Vendredi",
          saturday: "Samedi",
          sunday: "Dimanche",
          closed: "Fermé"
        }
      },
      reservations: {
        title: "Réservations & Paiement",
        methods: "Réservations par téléphone au (450) 562-4323 ou directement au restaurant. Nous recommandons de réserver, surtout les fins de semaine.",
        cancellation: "Politique d'annulation : Merci de nous prévenir au moins 24h à l'avance en cas d'annulation pour les groupes de 8 personnes et plus.",
        payment: "Modes de paiement acceptés : Argent comptant, cartes de débit, Visa, MasterCard et American Express. Nous n'acceptons pas les chèques.",
        tips: "Politique de pourboire : Le service n'est pas inclus dans nos prix. Un pourboire de 15-20% est apprécié selon votre satisfaction."
      },
      promos: {
        title: "Nos Promotions",
        daily: {
          title: "Offres par jour",
          monday: "Lundi : Soirée fondue - 20% de réduction sur toutes nos fondues",
          tuesday: "Mardi : Tapas en folie - 3 tapas pour 25$",
          wednesday: "Mercredi : Mix ta pâte et ta sauce - Pâtes personnalisées à 16$",
          thursday: "Jeudi : Grillade du chef - Plat du jour spécial",
          friday: "Vendredi : Happy hour - Cocktails à prix réduit de 17h à 19h",
          saturday: "Samedi : Menu dégustation - Découvrez nos créations signature",
          sunday: "Dimanche : Brunch gourmand - Service brunch de 10h à 15h"
        }
      },
      experience: {
        title: "Envie de vivre l'expérience ?",
        description: "Réservez dès maintenant votre table et découvrez pourquoi Bouillon16 est devenu la référence gastronomique à Lachute. Une expérience culinaire vous attend !",
        cta: "Réserver maintenant"
      }
    },
    services: {
      hero: {
        title: "Offre & Services",
        subtitle: "Découvrez toute la gamme de nos services et prestations pour une expérience gastronomique complète"
      },
      servicesOffered: {
        title: "Services Disponibles",
        dining: {
          title: "Salle à Manger",
          description: "Service traditionnel dans un cadre élégant et chaleureux"
        },
        bar: {
          title: "Bar & Carte des Vins",
          description: "Sélection premium de vins et cocktails signature"
        },
        terrace: {
          title: "Terrasse",
          description: "Espace extérieur avec vue panoramique"
        },
        events: {
          title: "Privatisation / Événements",
          description: "Organisation d'événements privés et professionnels"
        },
        catering: {
          title: "Service Traiteur",
          description: "Prestations culinaires pour vos événements"
        },
        takeout: {
          title: "À Emporter",
          description: "Commandes à emporter pour déguster chez vous"
        },
        seasonal: {
          title: "Menu Saisonnier / Dégustation",
          description: "Expériences culinaires exclusives selon les saisons"
        }
      },
      menus: {
        title: "Menus Disponibles",
        varied: {
          title: "Menu Varié",
          description: "Notre carte principale avec fondues, grillades, tapas, salades et desserts"
        },
        seasonal: {
          title: "Menu Saisonnier",
          description: "Créations spéciales selon les produits de saison et les inspirations du chef"
        },
        events: {
          title: "Menu Événements",
          description: "Menus personnalisés pour vos événements privés et corporatifs"
        }
      },
      allergies: {
        title: "Allergies et Restrictions Alimentaires",
        subtitle: "Nous prenons vos besoins alimentaires au sérieux",
        glutenFree: {
          title: "Sans Gluten",
          description: "Options disponibles sur demande, préparation dans un environnement contrôlé"
        },
        vegetarian: {
          title: "Végétarien",
          description: "Plusieurs choix végétariens savoureux dans notre carte"
        },
        lactoseFree: {
          title: "Sans Lactose",
          description: "Alternatives disponibles pour la plupart de nos plats"
        },
        nutFree: {
          title: "Sans Noix",
          description: "Nous pouvons adapter nos plats selon vos besoins"
        },
        diabetic: {
          title: "Diabétique",
          description: "Options faibles en sucre et information nutritionnelle disponible"
        },
        consultation: {
          title: "Consultation Personnalisée",
          description: "Notre chef peut vous conseiller selon vos restrictions spécifiques"
        }
      },
      capacity: {
        title: "Capacité d'Accueil",
        mainHall: {
          title: "Salle Principale",
          description: "Jusqu'à 80 personnes en configuration restaurant"
        },
        terrace: {
          title: "Terrasse",
          description: "30 personnes maximum avec vue extérieure"
        },
        privateRoom: {
          title: "Salon Privé",
          description: "Espace intime pour 12 à 20 personnes"
        },
        events: {
          title: "Privatisation Complète",
          description: "Jusqu'à 120 personnes pour vos événements spéciaux"
        }
      }
    },
    faq: {
      hero: {
        title: "Questions Fréquentes",
        subtitle: "Trouvez rapidement les réponses à vos questions sur notre restaurant et nos services"
      },
      categories: {
        allergies: {
          title: "Allergies & Restrictions Alimentaires",
          questions: {
            q1: {
              question: "Proposez-vous des options sans gluten ?",
              answer: "Oui, nous proposons plusieurs options sans gluten. Notre chef peut adapter la plupart de nos plats selon vos besoins. Nous vous recommandons de nous informer de vos restrictions lors de votre réservation."
            },
            q2: {
              question: "Avez-vous des plats végétariens et véganes ?",
              answer: "Absolument ! Notre menu comprend plusieurs options végétariennes savoureuses. Pour les options véganes, notre chef peut adapter certains plats. Nous vous conseillons de nous prévenir à l'avance."
            },
            q3: {
              question: "Comment gérez-vous les allergies alimentaires graves ?",
              answer: "Nous prenons les allergies très au sérieux. Informez-nous lors de votre réservation et notre équipe prendra toutes les précautions nécessaires. Notre chef peut vous conseiller sur les plats les plus sûrs selon votre situation."
            }
          }
        },
        dressCode: {
          title: "Code Vestimentaire",
          questions: {
            q1: {
              question: "Y a-t-il un code vestimentaire au restaurant ?",
              answer: "Nous encourageons une tenue décontractée-chic, mais nous accueillons nos clients dans une tenue propre et appropriée. Pas de dress code strict, l'important est de se sentir à l'aise."
            },
            q2: {
              question: "Puis-je venir en tenue décontractée ?",
              answer: "Bien sûr ! Nous privilégions le confort de nos clients. Une tenue décontractée mais soignée est parfaitement acceptable."
            }
          }
        },
        children: {
          title: "Enfants",
          questions: {
            q1: {
              question: "Le restaurant est-il adapté aux familles avec enfants ?",
              answer: "Oui, nous accueillons chaleureusement les familles ! Nous proposons des chaises hautes et pouvons adapter certains plats pour les plus jeunes. Les enfants sont les bienvenus dans notre établissement."
            },
            q2: {
              question: "Avez-vous un menu enfant ?",
              answer: "Nous pouvons adapter nos plats pour convenir aux goûts des enfants. Nos pâtes et grillades simples sont souvent très appréciées des plus jeunes. N'hésitez pas à demander conseil à notre équipe."
            }
          }
        },
        parking: {
          title: "Stationnement",
          questions: {
            q1: {
              question: "Y a-t-il un stationnement disponible ?",
              answer: "Oui, nous disposons d'un stationnement gratuit pour nos clients. Des places sont disponibles directement devant le restaurant et dans les rues adjacentes."
            }
          }
        },
        groups: {
          title: "Groupes et Réservations",
          questions: {
            q1: {
              question: "Acceptez-vous les groupes importants ?",
              answer: "Oui, nous pouvons accueillir des groupes jusqu'à 120 personnes avec privatisation complète. Pour les groupes de plus de 8 personnes, nous recommandons une réservation à l'avance."
            },
            q2: {
              question: "Proposez-vous la privatisation du restaurant ?",
              answer: "Absolument ! Nous offrons la privatisation complète ou partielle pour vos événements spéciaux, réceptions d'entreprise, anniversaires, etc. Contactez-nous pour discuter de vos besoins."
            }
          }
        },
        cancellation: {
          title: "Politique d'Annulation",
          questions: {
            q1: {
              question: "Quelle est votre politique d'annulation ?",
              answer: "Pour les réservations individuelles, nous demandons un préavis de 24h. Pour les groupes de 8 personnes et plus, nous demandons 48h de préavis. Cela nous aide à mieux gérer notre service."
            }
          }
        },
        birthday: {
          title: "Gâteaux d'Anniversaire",
          questions: {
            q1: {
              question: "Puis-je apporter mon propre gâteau d'anniversaire ?",
              answer: "Oui, vous pouvez apporter votre gâteau d'anniversaire ! Nous vous aiderons à créer un moment spécial. Vous pouvez aussi commander un dessert spécial auprès de notre chef pâtissier."
            }
          }
        },
        accessibility: {
          title: "Accessibilité",
          questions: {
            q1: {
              question: "Le restaurant est-il accessible aux personnes à mobilité réduite ?",
              answer: "Oui, notre restaurant est entièrement accessible. Nous disposons d'une entrée adaptée et de toilettes accessibles. Notre équipe est formée pour accueillir tous nos clients dans les meilleures conditions."
            }
          }
        }
      },
      needHelp: {
        title: "Vous ne trouvez pas votre réponse ?",
        subtitle: "Notre équipe se fera un plaisir de répondre à toutes vos questions",
        cta: "Écrivez-nous"
      }
    },
    menu: {
      title: "Notre Menu",
      subtitle: "Découvrez nos délicieuses créations culinaires",
      downloadPdf: "Télécharger le Menu PDF",
      categories: {
        starters: "Entrées",
        fondues: "Fondues",
        fish: "Poissons",
        tapas: "Tapas",
        salads: "Salades",
        pasta: "Pâtes",
        grills: "Grillades",
        desserts: "Desserts"
      }
    },
    gallery: {
      hero: {
        title: "Portfolio Culinaire",
        subtitle: "Découvrez l'univers visuel du Bouillon 16 à travers notre galerie de créations culinaires et l'expérience de nos clients"
      },
      culinary: {
        title: "Galerie Culinaire"
      },
      filters: {
        all: "Tous",
        dishes: "Nos Plats",
        drinks: "Nos Boissons",
        bar: "Bar",
        terrasse: "Terrasse",
        atmosphere: "L'Ambiance",
        team: "L'Équipe"
      }
    },
    restaurant: {
      title: "Notre Restaurant",
      subtitle: "Visitez-nous à Lachute",
      contact: {
        title: "Coordonnées",
        address: "575 Rue Principale, Lachute",
        phone: "(450) 562-4323",
        email: "Bouillon16@gmail.com"
      },
      hours: {
        title: "Horaires d'ouverture",
        monday: "Lundi",
        tuesday: "Mardi",
        wednesday: "Mercredi",
        thursday: "Jeudi",
        friday: "Vendredi",
        saturday: "Samedi",
        sunday: "Dimanche",
        closed: "Fermé"
      }
    },
    contact: {
      hero: {
        title: "Contactez-nous",
        subtitle: "Nous sommes à votre écoute pour toutes vos questions et réservations"
      },
      form: {
        name: "Nom complet",
        email: "Email",
        phone: "Téléphone (optionnel)",
        subject: "Sujet",
        message: "Message",
        submit: "Envoyer le message",
        success: "Votre message a été envoyé avec succès !",
        error: "Une erreur est survenue. Veuillez réessayer.",
        subtitle: "Envoyez-nous votre message et nous vous répondrons rapidement",
        placeholders: {
          name: "Votre nom complet",
          email: "votre@email.com",
          subject: "Sujet de votre message",
          message: "Écrivez votre message ici..."
        },
        consent: {
          text1: "J'accepte que mes données personnelles soient utilisées par Bouillon16 pour traiter ma demande et me contacter en réponse. Ces données seront conservées pendant 2 ans maximum et ne seront jamais partagées avec des tiers. Conformément à notre",
          text2: ", vous pouvez retirer votre consentement à tout moment.",
          privacyPolicy: "politique de confidentialité",
          required: "Vous devez accepter le traitement de vos données personnelles pour envoyer ce message."
        },
        sending: "Envoi en cours..."
      },
      info: {
        address: {
          title: "Adresse",
          line1: "575 Rue Principale",
          line2: "Lachute, Qc J8H 1Y8"
        },
        phone: {
          title: "Téléphone",
          number: "(450) 562-4323"
        },
        email: {
          title: "Email",
          address: "Bouillon16@gmail.com"
        },
        hours: {
          title: "Horaires"
        }
      },
      hours: {
        title: "Horaires d'ouverture",
        monday: "Lundi",
        tuesday: "Mardi", 
        wednesday: "Mercredi",
        thursday: "Jeudi",
        friday: "Vendredi",
        saturday: "Samedi",
        sunday: "Dimanche",
        closed: "Fermé"
      },
      practical: {
        title: "Informations Pratiques",
        parking: "Stationnement gratuit disponible",
        accessibility: "Restaurant entièrement accessible",
        privatization: "Privatisation possible sur demande",
        reservations: "Réservations recommandées",
        terrace: "Terrasse ouverte selon la météo",
        groups: "Groupes de 8+ personnes : appelez-nous"
      }
    },
    footer: {
      restaurant: {
        title: "Bouillon16",
        description: "Une expérience authentique au cœur de Lachute"
      },
      quickLinks: {
        title: "Liens Rapides",
        menu: "Menu",
        about: "À Propos",
        gallery: "Galerie",
        contact: "Contact",
        faq: "FAQ",
        services: "Services",
        licenses: "Licences & Conformité"
      },
      contact: {
        title: "Contact",
        address: "575 Rue Principale, Lachute",
        phone: "(450) 562-4323",
        email: "info@Bouillon16.com"
      },
      social: {
        title: "Suivez-nous"
      },
      legal: {
        rights: "© 2024 Bouillon16. Tous droits réservés.",
        privacy: "Politique de confidentialité",
        terms: "Mentions légales"
      }
    },
    common: {
      loading: "Chargement...",
      error: "Une erreur est survenue",
      back: "Retour",
      viewMore: "Voir plus",
      close: "Fermer",
      readMore: "Lire la suite",
      readLess: "Réduire",
      yes: "Oui",
      no: "Non",
      available: "Disponible",
      notAvailable: "Non disponible",
      price: "Prix",
      new: "Nouveau",
      recommended: "Recommandé",
      events: "Évènement"
    }
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      services: "Offers & Services",
      menu: "Menu",
      gallery: "Gallery",
      faq: "FAQ",
      restaurant: "Our Restaurant",
      contact: "Contact",
      languageSwitch: "Français"
    },
    home: {
      hero: {
        title: "Bouillon16",
        subtitle: "An authentic experience in the heart of Lachute",
        cta1: "Discover our menu",
        cta2: "Contact us",
        cta3: "Reserve your table"
      },
      philosophy: {
        title: "Our Vision",
        subtitle: "Culinary excellence in a warm setting",
        quality: {
          title: "Quality",
          description: "Fresh, local ingredients carefully selected to offer you exceptional cuisine."
        },
        atmosphere: {
          title: "Atmosphere",
          description: "An intimate and friendly setting where every moment becomes a celebration of the senses."
        },
        uniqueCharm: {
          title: "Unique Charm",
          description: "Thoughtful decoration and authentic atmosphere that transports you to the art of living."
        }
      },
      signature: {
        title: "Our Inspiration Dishes",
        subtitle: "Unique dishes created with passion by our chef",
        dishes: {
          pasta: {
            name: "Mix Your Pasta and Sauce",
            description: "Wednesday special - Fresh pasta with your choice of sauce"
          },
          burger: {
            name: "The Burger",
            description: "Gourmet homemade burger with artisanal bread and fries"
          },
          fondue: {
            name: "Traditional Fondue",
            description: "Cheese fondue with accompaniments and meats"
          }
        }
      },
      testimonials: {
        title: "What our customers say",
        testimonial1: {
          name: "Marie Dubois",
          text: "An exceptional culinary experience! The service is impeccable and the dishes are of remarkable quality."
        },
        testimonial2: {
          name: "Jean Tremblay",
          text: "The ambiance is perfect for a romantic dinner. The fondue is absolutely delicious!"
        },
        testimonial3: {
          name: "Sophie Martin",
          text: "A restaurant where you feel at home. Warm staff and authentic cuisine."
        }
      }
    },
    about: {
      hero: {
        title: "A Bit About Us",
        subtitle: "Discover the story and passion that drive Bouillon16, your gastronomic destination in the heart of Lachute"
      },
      introduction: {
        title: "About Bouillon16",
        content: "Located in the heart of Lachute, Bouillon16 was born from a passion for authentic gastronomy and the art of hospitality. Our restaurant invites you to discover refined cuisine in a warm and sophisticated setting."
      },
      concept: {
        title: "Culinary concept & positioning",
        positioning: "Bouillon16 positions itself as an essential gastronomic destination in Lachute, combining culinary tradition and modernity.",
        specialties: "Our specialties include traditional fondues, savory grills, and a selection of creative tapas that reflect our innovative approach to cuisine.",
        location: "Ideally located at 575 Rue Principale in Lachute, our restaurant benefits from a central, accessible and welcoming location.",
        service: "We offer on-site service in our elegant dining room, as well as a beautiful terrace for outdoor dining during nice weather.",
        ecoResponsibility: "Mindful of our environmental impact, we favor local and seasonal products, working with regional suppliers to offer responsible and sustainable cuisine."
      },
      chefs: {
        title: "Chefs & expertise",
        sylvain: {
          name: "Sylvain Leseize",
          title: "Executive Chef and Co-owner",
          description: "With over 15 years of experience in the kitchen, Sylvain brings his creativity and expertise to create dishes that blend tradition and innovation. His passion for local products is reflected in every plate."
        },
        maxime: {
          name: "Maxime Leseize",
          title: "Sous Chef and Co-owner",
          description: "Maxime perfectly complements the culinary team with his mastery of classic techniques and artistic eye for presentation. Together, the Leseize brothers form an exceptional culinary duo."
        },
        nicholas: {
          name: "Nicholas Olivan",
          title: "Pastry Chef",
          description: "Nicholas enchants our customers with his refined sweet creations. His desserts, true works of art, provide the perfect epilogue to our gastronomic meals."
        }
      },
      ambiance: {
        title: "Ambiance & decor",
        description: "Our restaurant offers a muted, warm and welcoming atmosphere. The modern-rustic decor creates a perfect setting for your business meals as well as your intimate moments. Dim lighting and noble materials contribute to this unique ambiance that makes Bouillon16's reputation."
      },
      values: {
        quality: {
          title: "QUALITY",
          description: "Premium ingredients carefully selected"
        },
        atmosphere: {
          title: "ATMOSPHERE",
          description: "A warm and sophisticated setting"
        },
        uniqueCharm: {
          title: "UNIQUE CHARM",
          description: "An unforgettable culinary experience"
        }
      },
      timeline: {
        title: "Our Story",
        events: {
          2018: {
            title: "The Birth",
            description: "Opening of Bouillon16 with a vision: to reinvent the art of traditional fondue."
          },
          2019: {
            title: "Recognition",
            description: "First recognition from local gastronomic critics and building customer loyalty."
          },
          2020: {
            title: "Adaptation & Resilience",
            description: "Despite the challenges, we were able to adapt and maintain our level of excellence."
          },
          2021: {
            title: "Menu Expansion",
            description: "Expansion of our menu with new creations and special attention to local products."
          },
          2022: {
            title: "Renovation & Modernization",
            description: "Redesign of our spaces to offer an even more refined customer experience."
          },
          2025: {
            title: "Vision for the Future",
            description: "Continuing our mission: to offer a memorable gastronomic experience in an exceptional setting."
          }
        }
      },
      achievements: {
        title: "Our Achievements",
        awards: "Customer Service Excellence Award 2022",
        customerSatisfaction: "98% customer satisfaction",
        specialEvents: "Over 500 private events organized"
      },
      team: {
        title: "Our Team",
        subtitle: "A passionate team dedicated to your satisfaction and culinary excellence"
      },
      restaurant: {
        title: "Our Restaurant",
        address: {
          title: "Address",
          line1: "575 Rue Principale",
          line2: "Lachute, Qc J8H 1Y8"
        },
        contact: {
          title: "Contact",
          phone: "(450) 562-4323",
          email: "info@Bouillon16.com"
        },
        hours: {
          title: "Opening hours",
          monday: "Monday",
          tuesday: "Tuesday",
          wednesday: "Wednesday",
          thursday: "Thursday",
          friday: "Friday",
          saturday: "Saturday",
          sunday: "Sunday",
          closed: "Closed"
        }
      },
      reservations: {
        title: "Reservations & Payment",
        methods: "Reservations by phone at (450) 562-4323 or directly at the restaurant. We recommend booking, especially on weekends.",
        cancellation: "Cancellation policy: Please notify us at least 24 hours in advance in case of cancellation for groups of 8 people or more.",
        payment: "Accepted payment methods: Cash, debit cards, Visa, MasterCard and American Express. We do not accept checks.",
        tips: "Tipping policy: Service is not included in our prices. A 15-20% tip is appreciated according to your satisfaction."
      },
      promos: {
        title: "Our Promotions",
        daily: {
          title: "Daily offers",
          monday: "Monday: Fondue evening - 20% discount on all our fondues",
          tuesday: "Tuesday: Tapas madness - 3 tapas for $25",
          wednesday: "Wednesday: Mix your pasta and sauce - Personalized pasta at $16",
          thursday: "Thursday: Chef's grill - Special dish of the day",
          friday: "Friday: Happy hour - Cocktails at reduced prices from 5pm to 7pm",
          saturday: "Saturday: Tasting menu - Discover our signature creations",
          sunday: "Sunday: Gourmet brunch - Brunch service from 10am to 3pm"
        }
      },
      experience: {
        title: "Want to live the experience?",
        description: "Book your table now and discover why Bouillon16 has become the gastronomic reference in Lachute. A culinary experience awaits you!",
        cta: "Book now"
      }
    },
    services: {
      hero: {
        title: "Offers & Services",
        subtitle: "Discover our full range of services and offerings for a complete gastronomic experience"
      },
      servicesOffered: {
        title: "Available Services",
        dining: {
          title: "Dining Room",
          description: "Traditional service in an elegant and warm setting"
        },
        bar: {
          title: "Bar & Wine List",
          description: "Premium selection of wines and signature cocktails"
        },
        terrace: {
          title: "Terrace",
          description: "Outdoor space with panoramic view"
        },
        events: {
          title: "Privatization / Events",
          description: "Organization of private and professional events"
        },
        catering: {
          title: "Catering Service",
          description: "Culinary services for your events"
        },
        takeout: {
          title: "Takeout",
          description: "Takeout orders to enjoy at home"
        },
        seasonal: {
          title: "Seasonal Menu / Tasting",
          description: "Exclusive culinary experiences according to the seasons"
        }
      },
      menus: {
        title: "Available Menus",
        varied: {
          title: "Varied Menu",
          description: "Our main menu with fondues, grills, tapas, salads and desserts"
        },
        seasonal: {
          title: "Seasonal Menu",
          description: "Special creations according to seasonal products and chef's inspirations"
        },
        events: {
          title: "Event Menu",
          description: "Personalized menus for your private and corporate events"
        }
      },
      allergies: {
        title: "Allergies and Dietary Restrictions",
        subtitle: "We take your dietary needs seriously",
        glutenFree: {
          title: "Gluten Free",
          description: "Options available on request, preparation in a controlled environment"
        },
        vegetarian: {
          title: "Vegetarian",
          description: "Several tasty vegetarian choices on our menu"
        },
        lactoseFree: {
          title: "Lactose Free",
          description: "Alternatives available for most of our dishes"
        },
        nutFree: {
          title: "Nut Free",
          description: "We can adapt our dishes according to your needs"
        },
        diabetic: {
          title: "Diabetic",
          description: "Low sugar options and nutritional information available"
        },
        consultation: {
          title: "Personalized Consultation",
          description: "Our chef can advise you according to your specific restrictions"
        }
      },
      capacity: {
        title: "Seating Capacity",
        mainHall: {
          title: "Main Hall",
          description: "Up to 80 people in restaurant configuration"
        },
        terrace: {
          title: "Terrace",
          description: "Maximum 30 people with outdoor view"
        },
        privateRoom: {
          title: "Private Lounge",
          description: "Intimate space for 12 to 20 people"
        },
        events: {
          title: "Full Privatization",
          description: "Up to 120 people for your special events"
        }
      }
    },
    faq: {
      hero: {
        title: "Frequently Asked Questions",
        subtitle: "Quickly find answers to your questions about our restaurant and services"
      },
      categories: {
        allergies: {
          title: "Allergies & Dietary Restrictions",
          questions: {
            q1: {
              question: "Do you offer gluten-free options?",
              answer: "Yes, we offer several gluten-free options. Our chef can adapt most of our dishes according to your needs. We recommend informing us of your restrictions when making your reservation."
            },
            q2: {
              question: "Do you have vegetarian and vegan dishes?",
              answer: "Absolutely! Our menu includes several tasty vegetarian options. For vegan options, our chef can adapt certain dishes. We advise you to notify us in advance."
            },
            q3: {
              question: "How do you handle severe food allergies?",
              answer: "We take allergies very seriously. Inform us when making your reservation and our team will take all necessary precautions. Our chef can advise you on the safest dishes according to your situation."
            }
          }
        },
        dressCode: {
          title: "Dress Code",
          questions: {
            q1: {
              question: "Is there a dress code at the restaurant?",
              answer: "We encourage casual-chic attire, but we welcome our customers in clean and appropriate clothing. No strict dress code, the important thing is to feel comfortable."
            },
            q2: {
              question: "Can I come in casual attire?",
              answer: "Of course! We prioritize our customers' comfort. Casual but neat attire is perfectly acceptable."
            }
          }
        },
        children: {
          title: "Children",
          questions: {
            q1: {
              question: "Is the restaurant suitable for families with children?",
              answer: "Yes, we warmly welcome families! We provide high chairs and can adapt certain dishes for the youngest. Children are welcome in our establishment."
            },
            q2: {
              question: "Do you have a children's menu?",
              answer: "We can adapt our dishes to suit children's tastes. Our simple pasta and grills are often very appreciated by the youngest. Don't hesitate to ask our team for advice."
            }
          }
        },
        parking: {
          title: "Parking",
          questions: {
            q1: {
              question: "Is parking available?",
              answer: "Yes, we have free parking for our customers. Spaces are available directly in front of the restaurant and on adjacent streets."
            }
          }
        },
        groups: {
          title: "Groups and Reservations",
          questions: {
            q1: {
              question: "Do you accept large groups?",
              answer: "Yes, we can accommodate groups up to 120 people with full privatization. For groups of more than 8 people, we recommend booking in advance."
            },
            q2: {
              question: "Do you offer restaurant privatization?",
              answer: "Absolutely! We offer complete or partial privatization for your special events, corporate receptions, birthdays, etc. Contact us to discuss your needs."
            }
          }
        },
        cancellation: {
          title: "Cancellation Policy",
          questions: {
            q1: {
              question: "What is your cancellation policy?",
              answer: "For individual reservations, we ask for 24 hours notice. For groups of 8 people or more, we ask for 48 hours notice. This helps us better manage our service."
            }
          }
        },
        birthday: {
          title: "Birthday Cakes",
          questions: {
            q1: {
              question: "Can I bring my own birthday cake?",
              answer: "Yes, you can bring your birthday cake! We will help you create a special moment. You can also order a special dessert from our pastry chef."
            }
          }
        },
        accessibility: {
          title: "Accessibility",
          questions: {
            q1: {
              question: "Is the restaurant accessible to people with reduced mobility?",
              answer: "Yes, our restaurant is fully accessible. We have an adapted entrance and accessible toilets. Our team is trained to welcome all our customers in the best conditions."
            }
          }
        }
      },
      needHelp: {
        title: "Can't find your answer?",
        subtitle: "Our team will be happy to answer all your questions",
        cta: "Write to us"
      }
    },
    menu: {
      title: "Our Menu",
      subtitle: "Discover our delicious culinary creations",
      downloadPdf: "Download Menu PDF",
      categories: {
        starters: "Starters",
        fondues: "Fondues",
        fish: "Fish",
        tapas: "Tapas",
        salads: "Salads",
        pasta: "Pasta",
        grills: "Grills",
        desserts: "Desserts"
      }
    },
    gallery: {
      hero: {
        title: "Culinary Portfolio",
        subtitle: "Discover the visual universe of Bouillon16 through our gallery of culinary creations and customer experiences"
      },
      culinary: {
        title: "Culinary Gallery"
      },
      filters: {
        all: "All",
        dishes: "Our Dishes",
        drinks: "Our Drinks",
        bar: "Bar",
        terrasse: "Terrace",
        atmosphere: "The Atmosphere",
        team: "The Team"
      }
    },
    restaurant: {
      title: "Our Restaurant",
      subtitle: "Visit us in Lachute",
      contact: {
        title: "Contact Information",
        address: "575 Rue Principale, Lachute",
        phone: "(450) 562-4323",
        email: "info@Bouillon16.com"
      },
      hours: {
        title: "Opening Hours",
        monday: "Monday",
        tuesday: "Tuesday",
        wednesday: "Wednesday",
        thursday: "Thursday",
        friday: "Friday",
        saturday: "Saturday",
        sunday: "Sunday",
        closed: "Closed"
      }
    },
    contact: {
      hero: {
        title: "Contact Us",
        subtitle: "We're here to listen for all your questions and reservations"
      },
      form: {
        name: "Full Name",
        email: "Email",
        phone: "Phone (optional)",
        subject: "Subject",
        message: "Message",
        submit: "Send Message",
        success: "Your message has been sent successfully!",
        error: "An error occurred. Please try again.",
        subtitle: "Send us your message and we will respond quickly",
        placeholders: {
          name: "Your full name",
          email: "your@email.com",
          subject: "Subject of your message",
          message: "Write your message here..."
        },
        consent: {
          text1: "I agree that my personal data may be used by Bouillon16 to process my request and contact me in response. This data will be kept for a maximum of 2 years and will never be shared with third parties. In accordance with our",
          text2: ", you can withdraw your consent at any time.",
          privacyPolicy: "privacy policy",
          required: "You must accept the processing of your personal data to send this message."
        },
        sending: "Sending..."
      },
      info: {
        address: {
          title: "Address",
          line1: "575 Rue Principale",
          line2: "Lachute, Qc J8H 1Y8"
        },
        phone: {
          title: "Phone",
          number: "(450) 562-4323"
        },
        email: {
          title: "Email",
          address: "info@Bouillon16.com"
        },
        hours: {
          title: "Hours"
        }
      },
      hours: {
        title: "Opening Hours",
        monday: "Monday",
        tuesday: "Tuesday",
        wednesday: "Wednesday",
        thursday: "Thursday",
        friday: "Friday",
        saturday: "Saturday",
        sunday: "Sunday",
        closed: "Closed"
      },
      practical: {
        title: "Practical Information",
        parking: "Free parking available",
        accessibility: "Fully accessible restaurant",
        privatization: "Privatization possible on request",
        reservations: "Reservations recommended",
        terrace: "Terrace open weather permitting",
        groups: "Groups of 8+ people: call us"
      }
    },
    footer: {
      restaurant: {
        title: "Bouillon16",
        description: "An authentic experience in the heart of Lachute"
      },
      quickLinks: {
        title: "Quick Links",
        menu: "Menu",
        about: "About",
        gallery: "Gallery",
        contact: "Contact",
        faq: "FAQ",
        services: "Services",
        licenses: "Licenses & Compliance"
      },
      contact: {
        title: "Contact",
        address: "575 Rue Principale, Lachute",
        phone: "(450) 562-4323",
        email: "info@Bouillon16.com"
      },
      social: {
        title: "Follow us"
      },
      legal: {
        rights: "© 2024 Bouillon16. All rights reserved.",
        privacy: "Privacy Policy",
        terms: "Legal Notices"
      }
    },
    common: {
      loading: "Loading...",
      error: "An error occurred",
      back: "Back",
      viewMore: "View more",
      close: "Close",
      readMore: "Read more",
      readLess: "Show less",
      yes: "Yes",
      no: "No",
      available: "Available",
      notAvailable: "Not available",
      price: "Price",
      new: "New",
      recommended: "Recommended",
      events: "Events"
    }
  }
};

export function getTranslations(locale: Locale): Translations {
  return translations[locale] || translations[defaultLocale];
}
