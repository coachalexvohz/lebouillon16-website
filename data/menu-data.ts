
export interface MenuItem {
  id: string;
  name: string;
  nameEn?: string;
  description?: string;
  descriptionEn?: string;
  price: string;
  isSignature?: boolean;
  isVegetarian?: boolean;
  isGlutenFree?: boolean;
  allergens?: string[];
  note?: string;
  options?: string;
}

export interface MenuCategory {
  id: string;
  name: string;
  nameEn: string;
  items: MenuItem[];
  note?: string;
}

export const menuData: MenuCategory[] = [
  {
    id: 'starters',
    name: 'Entrées',
    nameEn: 'Starters',
    items: [
      {
        id: 'potage-quann',
        name: 'Potage à Quann',
        nameEn: 'Soup of the day',
        description: 'Soup of the day',
        price: '6,50$'
      },
      {
        id: 'soupe-oignon',
        name: 'Soupe à l\'oignon & croûtons',
        nameEn: 'French Onion soup with croutons',
        description: 'French Onion soup with croutons',
        price: '9,50$'
      },
      {
        id: 'escargots',
        name: 'Escargots à l\'ail gratinés',
        nameEn: 'Garlic snails with melted cheese',
        description: 'Garlic snails with melted cheese',
        price: '12$'
      },
      {
        id: 'martini-crevettes',
        name: 'Martini de crevettes géantes',
        nameEn: 'Giant Shrimp Martini',
        description: 'Giant Shrimp Martini',
        price: '18$'
      },
      {
        id: 'calmars-frits',
        name: 'Calmars frits maison servis avec mayo aromatisée',
        nameEn: 'Fried calamari with flavored mayo',
        description: 'Fried calamari with flavored mayo',
        price: '16$'
      },
      {
        id: 'crevettes-tempura',
        name: 'Crevettes tempura avec mayo Cajun',
        nameEn: 'Tempura Shrimps served with Cajun mayo',
        description: 'Tempura Shrimps served with Cajun mayo',
        price: '16$'
      },
      {
        id: 'batonnets-fromage',
        name: 'Bâtonnets de fromage',
        nameEn: 'Cheese Sticks',
        description: 'Cheese Sticks',
        price: '12$'
      },
      {
        id: 'pain-ail',
        name: 'Pain à l\'ail',
        nameEn: 'Garlic bread / With melted cheese',
        description: 'Garlic bread / With melted cheese',
        price: '5,50$ / Gratiné - 7,50$'
      },
      {
        id: 'frites-patates-douces',
        name: 'Frites de patates douces',
        nameEn: 'Sweet potato fries',
        description: 'Sweet potato fries',
        price: '6$'
      },
      {
        id: 'ailes-poulet',
        name: 'Ailes de poulet',
        nameEn: 'Chicken Wings',
        description: '6 ailes - 14$ / 12 ailes - 22$ / 24 ailes - 36$',
        descriptionEn: '6 wings - $14 / 12 wings - $22 / 24 wings - $36',
        price: '14$ / 22$ / 36$'
      },
      {
        id: 'bruschetta',
        name: 'Bruschetta sur pain naan gratiné',
        nameEn: 'Bruschetta on nan bread & melted cheese with parsley & tomato salsa',
        description: 'Salade tomates persillées - Bruschetta on nan bread & melted cheese with parsley & tomato salsa',
        price: '11$',
        isVegetarian: true
      }
    ]
  },
  {
    id: 'tapas',
    name: 'Tapas',
    nameEn: 'Tapas',
    items: [
      {
        id: 'dumplings',
        name: 'Dumplings frits sauce épicée aux arachides',
        nameEn: 'Fried dumplings with spicy peanut sauce',
        description: 'Fried dumplings with spicy peanut sauce',
        price: '16$'
      },
      {
        id: 'ardoise-charcuteries',
        name: 'Ardoise de charcuteries & cornichons',
        nameEn: 'Slate of charcuteries & pickles',
        description: 'Slate of charcuteries & pickles',
        price: '15$ / 22$'
      },
      {
        id: 'boules-chevre',
        name: 'Boules de chèvre tiède, amandes & miel',
        nameEn: 'Warm goat cheese bites - almonds & honey',
        description: 'Warm goat cheese bites - almonds & honey',
        price: '15$'
      },
      {
        id: 'tartare-varietes',
        name: 'Tartare de bœuf Angus, bison, saumon ou thon & croûtons',
        nameEn: 'Angus beef, bison, salmon, or tuna tartare & croutons',
        description: 'Angus beef, bison, salmon, or tuna tartare & croutons',
        price: '20$',
        isGlutenFree: true
      },
      {
        id: 'ravioli-boeuf',
        name: 'Ravioli au bœuf braisé',
        nameEn: 'Braised beef raviolis -truffle oil - Portobello mushrooms & cream',
        description: 'Huile de truffe - portobello - crème - Braised beef raviolis -truffle oil - Portobello mushrooms & cream',
        price: '19$',
        isGlutenFree: true
      }
    ]
  },
  {
    id: 'salads',
    name: 'Salades',
    nameEn: 'Salads',
    items: [
      {
        id: 'estivale',
        name: 'Estivale',
        nameEn: 'Garden Salad',
        description: 'Tomates - concombres - oignons rouges & olives noires',
        descriptionEn: 'Tomatoes - cucumbers - red onions - black olives',
        price: '11$ / 20$',
        isVegetarian: true,
        isGlutenFree: true
      },
      {
        id: 'cesar',
        name: 'César',
        nameEn: 'Caesar Salad',
        description: 'Bacon-câpres & croûtons à l\'ail',
        descriptionEn: 'Bacon-capers-garlic croutons',
        price: '12$ / 22$',
        isGlutenFree: true
      },
      {
        id: 'bouillon16',
        name: 'Bouillon16',
        nameEn: 'Bouillon16 Special',
        description: 'Coeurs d\'artichauts-amandes-abricots séchés-chèvre-croûtons-tomates-concombres',
        descriptionEn: 'Artichoke hearts-almonds-dried apricots-goat cheese-croutons-tomatoes-cucumbers',
        price: '16$ / 23$',
        isGlutenFree: true
      }
    ]
  },
  {
    id: 'pasta',
    name: 'Pâtes',
    nameEn: 'Pasta',
    note: 'LINGUINI - FETTUCCINI - TORTELLINI\nNote: Pâtes sans gluten disponibles sur demande avec supplément.\nGluten free pasta option available for an extra charge.',
    items: [
      {
        id: 'alfredo',
        name: 'Alfredo',
        nameEn: 'Alfredo',
        description: 'Crème - échalotes - vin blanc - ail',
        descriptionEn: 'Cream - shallots - white wine - garlic',
        price: '24$'
      },
      {
        id: 'marinara',
        name: 'Marinara',
        nameEn: 'Marinara',
        description: 'Sauce tomatée maison',
        descriptionEn: 'Our in-house tomato sauce',
        price: '24$'
      },
      {
        id: 'carbonara',
        name: 'Carbonara',
        nameEn: 'Carbonara',
        description: 'Crème - échalotes - bacon - ail - vin blanc - parmesan',
        descriptionEn: 'Cream - shallots - white wine - garlic - bacon - parmesan',
        price: '25$'
      },
      {
        id: 'alla-gigi',
        name: 'Alla Gigi',
        nameEn: 'Alla Gigi',
        description: 'Sauce tomate - crème - proscuitto - champignons - échalotes',
        descriptionEn: 'Tomato sauce - cream - proscuitto - mushrooms - shallots',
        price: '26$'
      },
      {
        id: 'pesto-genovese',
        name: 'Pesto Genovese',
        nameEn: 'Pesto Genovese',
        description: 'Crème - parmesan - pesto basilic - noix de pins',
        descriptionEn: 'Cream - parmesan - basil pesto - pine nuts',
        price: '25$'
      },
      {
        id: 'puttanesca',
        name: 'Puttanesca',
        nameEn: 'Puttanesca',
        description: 'Sauce tomate - olives noires - câpres - échalotes',
        descriptionEn: 'Tomato sauce - blacks olives - capers - shallots',
        price: '26$'
      }
    ]
  },
  {
    id: 'fish',
    name: 'Poissons',
    nameEn: 'Fish',
    items: [
      {
        id: 'fish-biere',
        name: 'Fish à la bière & frites maison',
        nameEn: 'Fish & Homemade chips, with tartare sauce',
        description: 'Avec sauce tartare / Fish & Homemade chips, with tartare sauce',
        price: '29$'
      },
      {
        id: 'coquille-st-jacques',
        name: 'Coquille St-Jacques',
        nameEn: 'Scallops',
        description: 'Servi avec salade césar',
        descriptionEn: 'Served with caesar salad',
        price: '29$'
      },
      {
        id: 'saumon-panko',
        name: 'Pavé de saumon Bio grillé Panko',
        nameEn: 'Organic panko grilled salmon served with rice & vegetables',
        description: 'Servi avec riz & légumes / Organic panko grilled salmon served with rice & vegetables',
        price: '33$'
      },
      {
        id: 'crevettes-b16',
        name: 'Poêlé de crevettes B16',
        nameEn: 'Sautéed shrimps with shallots - candied tomatoes and garlic - rice & vegetables',
        description: 'Avec échalotes - tomates confites à l\'ail - riz & légumes / Sautéed shrimps with shallots - candied tomatoes and garlic - rice & vegetables',
        price: '37$'
      },
      {
        id: 'tataki-thon',
        name: 'Tataki de thon rouge',
        nameEn: 'Tuna Tataki on Rice Vermicelli with Asian Sauce & Garden Salad',
        description: 'Avec vermicelle de riz - sauce asiatique & salade estivale / Tuna Tataki on Rice Vermicelli with Asian Sauce & Garden Salad',
        price: '38$'
      }
    ]
  },
  {
    id: 'fondues-fromage',
    name: 'Fondues Fromage',
    nameEn: 'Cheese Fondue',
    note: 'Servie avec pain ciabatta à volonté\n*Option pain sans gluten pour un supplément\n\nLégumes au choix: Carotte-céleri-brocoli-chou-fleur-champignon-pomme ou oignon perlé\n*1 pers. / 2 choix *2 pers. / 4 choix parmi\n\nExtras:\n- Pain à l\'ail - 4,50$\n- Extra charcuteries - 10$ / 18$',
    items: [
      {
        id: 'traditionnelle',
        name: 'Traditionnelle',
        nameEn: 'Traditional',
        description: 'Fondue au fromage classique',
        descriptionEn: 'Classic cheese fondue',
        price: '1p. 25$ / 2p. 32$'
      },
      {
        id: 'ail',
        name: 'Ail',
        nameEn: 'Garlic',
        description: 'Fondue au fromage à l\'ail',
        descriptionEn: 'Garlic cheese fondue',
        price: '1p. 26$ / 2p. 35$'
      },
      {
        id: 'pesto-basilic',
        name: 'Pesto & basilic',
        nameEn: 'Pesto & basil',
        description: 'Fondue au fromage au pesto et basilic',
        descriptionEn: 'Pesto and basil cheese fondue',
        price: '1p. 26$ / 2p. 35$'
      },
      {
        id: 'tomates-sechees',
        name: 'Tomates séchées',
        nameEn: 'Sundried tomatoes',
        description: 'Fondue au fromage aux tomates séchées',
        descriptionEn: 'Sundried tomatoes cheese fondue',
        price: '1p. 26$ / 2p. 35$'
      },
      {
        id: 'truffe',
        name: 'Truffe',
        nameEn: 'Truffle',
        description: 'Fondue au fromage à la truffe',
        descriptionEn: 'Truffle cheese fondue',
        price: '1p. 26$ / 2p. 35$'
      },
      {
        id: 'duo-olives',
        name: 'Duo d\'olives',
        nameEn: 'Black & green olives',
        description: 'Fondue au fromage aux olives noires et vertes',
        descriptionEn: 'Black and green olives cheese fondue',
        price: '1p. 27$ / 2p. 36$'
      },
      {
        id: 'quebecoise',
        name: 'Québécoise',
        nameEn: 'Quebecoise',
        description: 'Fondue au fromage québécoise',
        descriptionEn: 'Quebec cheese fondue',
        price: '1p. 29$ / 2p. 39$'
      },
      {
        id: 'erable-noix',
        name: 'Nouveauté : Érable & noix',
        nameEn: 'New: Maple & nuts',
        description: 'Fondue au fromage à l\'érable et aux noix',
        descriptionEn: 'Maple and nuts cheese fondue',
        price: '1p. 27$ / 2p. 36$'
      }
    ]
  },
  {
    id: 'fondues-chinoise',
    name: 'Fondue Chinoise',
    nameEn: 'Chinese Fondue',
    note: 'Bouillon fait maison (option sans gluten disponible)\n\nCOMBINÉS / COMBOS:\n\nServie avec choix de: Patate au four, riz ou légumes\n\nExtras:\n- Patates ondulées - +2$\n- Patates douces frites - +3$\n- Patate toute garnie - +5$\n- Jardinière - +3$\n- Cubes de fromage - +4$\n\nTRILOGIE DE FONDUES - 49$\n1er service: Fromage / Cheese fondue\n2e service: Chinoise Bœuf ou poulet ou saucisses italiennes\n3e service: Chocolat au lait ou noir\n\nChoix de 2 sauces parmi:\nDijonnaise-Tomaté-Fines Herbes-Cari-Cajun-Aïoli-Fumée-5 poivres-Cocktail-Tex-Mex Parmesan & fines herbes\nSauce aux poivres chaude - +1,50$',
    items: [
      {
        id: 'boeuf',
        name: 'Bœuf',
        nameEn: 'Beef',
        description: 'Cubes de bœuf tendre pour fondue chinoise',
        descriptionEn: 'Tender beef cubes for Chinese fondue',
        price: '150gr: 34$ / 200gr: 40$'
      },
      {
        id: 'poulet',
        name: 'Poulet',
        nameEn: 'Chicken',
        description: 'Morceaux de poulet frais pour fondue chinoise',
        descriptionEn: 'Fresh chicken pieces for Chinese fondue',
        price: '150gr: 30$'
      },
      {
        id: 'saucisse-italienne',
        name: 'Saucisse italienne',
        nameEn: 'Italian sausage',
        description: 'Saucisse italienne artisanale pour fondue chinoise',
        descriptionEn: 'Artisanal Italian sausage for Chinese fondue',
        price: '150gr: 28$'
      },
      {
        id: 'saumon-bio',
        name: 'Saumon Bio',
        nameEn: 'Atlantic salmon',
        description: 'Saumon atlantique bio pour fondue chinoise',
        descriptionEn: 'Organic Atlantic salmon for Chinese fondue',
        price: '150gr: 30$'
      },
      {
        id: 'mignon-boeuf',
        name: 'Mignon de bœuf',
        nameEn: 'Beef filet mignon',
        description: 'Filet mignon de bœuf AAA pour fondue chinoise',
        descriptionEn: 'AAA beef filet mignon for Chinese fondue',
        price: '150gr: 35$'
      },
      {
        id: 'crevettes-petoncles',
        name: 'Crevettes & pétoncles',
        nameEn: 'Shrimps & scallops',
        description: 'Fruits de mer frais pour fondue chinoise',
        descriptionEn: 'Fresh seafood for Chinese fondue',
        price: '150gr: 32$'
      },
      {
        id: 'crevettes',
        name: 'Crevettes',
        nameEn: 'Shrimps',
        description: 'Crevettes fraîches pour fondue chinoise',
        descriptionEn: 'Fresh shrimps for Chinese fondue',
        price: '150gr: 31$'
      },
      {
        id: 'bison',
        name: 'Bison',
        nameEn: 'Bison',
        description: 'Viande de bison du Québec pour fondue chinoise',
        descriptionEn: 'Quebec bison meat for Chinese fondue',
        price: '150gr: 38$'
      },
      {
        id: 'cerf-rouge',
        name: 'Cerf rouge',
        nameEn: 'Red deer',
        description: 'Cerf rouge du terroir pour fondue chinoise',
        descriptionEn: 'Local red deer for Chinese fondue',
        price: '150gr: 38$'
      },
      {
        id: 'carnivore',
        name: 'Carnivore',
        nameEn: 'Carnivore',
        description: 'Bœuf-poulet-bison & cerf',
        descriptionEn: 'Beef-chicken-bison-red deer',
        price: '38$'
      },
      {
        id: 'terre-mer',
        name: 'Terre & Mer',
        nameEn: 'Surf & turf',
        description: 'Bœuf-poulet-crevettes-pétoncles',
        descriptionEn: 'Beef-chicken-shrimps-scallops',
        price: '36$'
      },
      {
        id: 'pecheur',
        name: 'Le pêcheur',
        nameEn: 'Fisherman',
        description: 'Saumon-crevettes-pétoncles',
        descriptionEn: 'Salmon-shrimps-scallops',
        price: '31$'
      },
      {
        id: 'chasseur',
        name: 'Le chasseur',
        nameEn: 'Hunter',
        description: 'Bison - cerf rouge',
        descriptionEn: 'Bison - red deer',
        price: '38$'
      }
    ]
  },
  {
    id: 'grills',
    name: 'Grillades',
    nameEn: 'Grills',
    note: 'Nos grillades sont servies avec légumes - frites & sauce aux poivres',
    items: [
      {
        id: 'burger-b16',
        name: 'Burger B16',
        nameEn: 'B16 Burger',
        description: 'Bœuf qualité Angus- portobello & fromage Oka - Servi avec frites',
        descriptionEn: 'Angus quality beef - portobello & Oka cheese - Served with fries',
        price: '29$'
      },
      {
        id: 'burger-terroir',
        name: 'Burger du Terroir',
        nameEn: 'Local Burger',
        description: 'Burger de bison - bacon & cheddar',
        descriptionEn: 'Bison burger - bacon & cheddar',
        price: '29$'
      },
      {
        id: 'bavette',
        name: 'Bavette de bœuf grillée 8oz',
        nameEn: '8 oz grilled beef bavette',
        description: 'Bavette de bœuf grillée',
        descriptionEn: '8 oz grilled beef bavette',
        price: '38$'
      },
      {
        id: 'contre-filet',
        name: 'Contre-filet grillé 8oz',
        nameEn: '8oz grilled striploin steak',
        description: 'Contre-filet grillé',
        descriptionEn: '8oz grilled striploin steak',
        price: '46$'
      },
      {
        id: 'filet-mignon',
        name: 'Bœuf Angus AAA',
        nameEn: 'Beef filet mignon',
        description: 'Filet mignon de bœuf Angus AAA',
        descriptionEn: 'AAA Angus beef filet mignon',
        price: '40$ / 46$ / 52$'
      },
      {
        id: 'duo-tartare',
        name: 'Notre fameux Duo de tartare B16',
        nameEn: 'Our famous B16 Tartare Duo',
        description: '2 choix parmi: bœuf - bison - saumon ou thon - Servi avec salade - frites - croûtons',
        descriptionEn: '2 choices among: beef - bison - salmon or tuna - Served with salad - fries - croutons',
        price: '39$'
      }
    ]
  },
  {
    id: 'plaque-volcanique',
    name: 'Plaque Volcanique',
    nameEn: 'Volcanic Plate',
    note: '(Disponible du jeudi au samedi seulement)\n\nServies avec légumes - sauce aux poivres et choix de pomme de terre au four ou frites ou riz\n\nExtras:\n- Patate toute garnie - 5$\n- Crevettes et/ou pétoncles - 12$\n- Sauce aux poivres - 1,50$\n- Cubes de fromage - 4$\n- Frites de patates douces - 2$\n- Crème sûre - 1$\n- Croûtons SG - 3$ / 5,50$',
    items: [
      {
        id: 'bavette-volcanique',
        name: 'Bavette de bœuf 8 oz',
        nameEn: '8 oz Beef Bavette',
        description: 'Bavette de bœuf grillée sur plaque volcanique',
        descriptionEn: 'Beef bavette grilled on volcanic plate',
        price: '38$'
      },
      {
        id: 'contre-filet-volcanique',
        name: 'Contre-filet 8oz',
        nameEn: 'Strip sirloin steak 8oz',
        description: 'Contre-filet grillé sur plaque volcanique',
        descriptionEn: 'Striploin grilled on volcanic plate',
        price: '46$'
      },
      {
        id: 'filet-mignon-volcanique',
        name: 'Filet mignon Angus',
        nameEn: 'Beef filet mignon',
        description: 'Filet mignon grillé sur plaque volcanique',
        descriptionEn: 'Filet mignon grilled on volcanic plate',
        price: '40$ / 46$ / 52$'
      }
    ]
  },
  {
    id: 'menu-enfants',
    name: 'Menu Enfants',
    nameEn: 'Kids Menu',
    note: 'Incluant jus ou liqueur & coupe vanille ou petit gâteau',
    items: [
      {
        id: 'croquettes-poulet',
        name: 'Croquettes de poulet',
        nameEn: 'Chicken nuggets',
        description: 'Croquettes de poulet croustillantes pour enfants',
        descriptionEn: 'Crispy chicken nuggets for kids',
        price: '10$'
      },
      {
        id: 'burger-enfant',
        name: 'Burger & frites',
        nameEn: 'Burger & fries',
        description: 'Mini burger avec frites pour enfants',
        descriptionEn: 'Mini burger with fries for kids',
        price: '12$'
      },
      {
        id: 'pates-enfant',
        name: 'Tortellini ou linguini',
        nameEn: 'Tortellini or linguini',
        description: 'Sauce marinara ou sauce rosée',
        descriptionEn: 'Marinara or rosé sauce',
        price: '10$'
      },
      {
        id: 'mini-fondue',
        name: 'Mini-fondue au bœuf ou poulet (120gr)',
        nameEn: 'Mini beef or chicken fondue (120gr)',
        description: 'Fondue chinoise adaptée aux enfants',
        descriptionEn: 'Chinese fondue adapted for children',
        price: '18$'
      }
    ]
  },
  {
    id: 'desserts',
    name: 'Desserts',
    nameEn: 'Desserts',
    note: '(10$)',
    items: [
      {
        id: 'mi-cuit-chocolat',
        name: 'Mi-cuit au chocolat maison / Chocolate half baked homemade',
        description: 'Dessert au chocolat coulant fait maison',
        price: '10$'
      },
      {
        id: 'cheesecake-ny',
        name: 'Gâteau fromage New-Yorkais & coulis / New-York cheesecake & coulis',
        description: 'Cheesecake traditionnel new-yorkais avec coulis de fruits',
        price: '10$'
      },
      {
        id: 'cheesecake-dulce',
        name: 'Gâteau fromage Dulce leche / Dulce leche cheesecake',
        description: 'Cheesecake onctueux au dulce de leche',
        price: '10$'
      },
      {
        id: 'gateau-chocolat-caramel',
        name: 'Gâteau chocolat-caramel / Chocolate caramel cake',
        description: 'Gâteau moelleux au chocolat avec caramel',
        price: '10$'
      },
      {
        id: 'gateau-lime',
        name: 'Gâteau à la meringue & lime / Key lime cake',
        description: 'Gâteau acidulé à la lime avec meringue',
        price: '10$'
      },
      {
        id: 'cheesecake-carotte',
        name: 'Gâteau fromage aux carottes & caramel / Carrots & caramel cheesecake',
        description: 'Cheesecake unique aux carottes et caramel',
        price: '10$'
      },
      {
        id: 'fondue-chocolat',
        name: 'Fondue au chocolat lait ou noir / Milk or dark chocolate fondue',
        description: '1 pers - 12$ / 2 pers - 18$',
        price: '12$ / 18$'
      }
    ]
  },
  {
    id: 'cafes',
    name: 'Cafés Nespresso',
    nameEn: 'Nespresso Coffee',
    note: 'Extra lait d\'amandes disponible avec supplément',
    items: [
      {
        id: 'espresso',
        name: 'Espresso',
        nameEn: 'Espresso',
        description: 'Café espresso italien serré',
        descriptionEn: 'Strong Italian espresso coffee',
        price: '4,75$'
      },
      {
        id: 'double-espresso',
        name: 'Double Espresso',
        nameEn: 'Double Espresso',
        description: 'Double dose d\'espresso italien',
        descriptionEn: 'Double shot of Italian espresso',
        price: '5,75$'
      },
      {
        id: 'cappuccino',
        name: 'Cappuccino',
        nameEn: 'Cappuccino',
        description: 'Espresso avec mousse de lait onctueuse',
        descriptionEn: 'Espresso with smooth milk foam',
        price: '5$'
      },
      {
        id: 'cafe-latte',
        name: 'Café latté',
        nameEn: 'Café latte',
        description: 'Espresso allongé avec lait vapeur',
        descriptionEn: 'Espresso with steamed milk',
        price: '6$'
      }
    ]
  },
  {
    id: 'inspirations',
    name: 'Les Inspirations du Chef',
    nameEn: 'Chef\'s Inspirations',
    note: 'Rendez votre plat en formule TH pour 10$:\nIncluant choix de potage ou césar(+2$) ou jardinière avec dessert spontané et café',
    items: [
      {
        id: 'nachos-asiatique',
        name: 'Nachos Asiatique',
        nameEn: 'Asian Nachos',
        description: 'Nachos revisités à la sauce asiatique',
        descriptionEn: 'Nachos revisited with Asian sauce',
        price: '14$'
      },
      {
        id: 'burrata-peche',
        name: 'Burrata & pêche poêlées au miel sur tomates colorées',
        nameEn: 'Burrata & honey-seared peach on colorful tomatoes',
        description: 'Burrata crémeuse avec pêches caramélisées au miel',
        descriptionEn: 'Creamy burrata with honey-caramelized peaches',
        price: '16$'
      },
      {
        id: 'chateaubriand',
        name: 'Planche Gourmande "Châteaubriand" 2 pers.',
        nameEn: 'Gourmet "Chateaubriand" Platter for 2',
        description: 'Filet mignon 10oz et 2 queues d\'homard - Légumes - pomme de terre - sauce aux poivres - Incluant une bouteille de vin sélection des patrons',
        descriptionEn: '10oz filet mignon and 2 lobster tails - Vegetables - potato - pepper sauce - Including a bottle of wine (owner\'s selection)',
        price: '160$',
        isSignature: true
      },
      {
        id: 'morue-islande',
        name: 'Longe de morue fraîche d\'Islande et pomme Boréal',
        nameEn: 'Fresh Iceland cod loin and Boreal apple',
        description: 'Morue fraîche d\'Islande avec garniture pomme Boréal',
        descriptionEn: 'Fresh Iceland cod with Boreal apple garnish',
        price: '35$'
      },
      {
        id: 'jarret-agneau',
        name: 'Jarret d\'agneau braisé création Le16',
        nameEn: 'Braised lamb shank Le16 creation',
        description: 'Jarret d\'agneau braisé selon la création spéciale du chef',
        descriptionEn: 'Braised lamb shank according to the chef\'s special creation',
        price: '42$'
      },
      {
        id: 'crevettes-bruschetta',
        name: 'Crevettes papillons grillées bruschetta & Mozzarella',
        nameEn: 'Grilled butterfly shrimp bruschetta & Mozzarella',
        description: 'Crevettes papillons grillées avec bruschetta et mozzarella',
        descriptionEn: 'Grilled butterfly shrimp with bruschetta and mozzarella',
        price: '43$'
      }
    ]
  },
  {
    id: 'promotions',
    name: 'Promotions',
    nameEn: 'Promotions',
    note: '*Aucune promotion ne peut être appliquée sur une autre promotion.',
    items: [
      {
        id: 'anniversaire',
        name: '🎂 ANNIVERSAIRE',
        nameEn: '🎂 BIRTHDAY',
        description: 'Obtenez votre âge en % sur votre repas principal à prix régulier (jusqu\'à un maximum de 50%)',
        descriptionEn: 'Get your age in % off your main meal at regular price (up to a maximum of 50%)',
        price: 'Variable'
      },
      {
        id: 'mardi-fondue',
        name: '🔵 MARDI PROMO - FONDUE',
        nameEn: '🔵 TUESDAY PROMO - FONDUE',
        description: '2e à moitié prix - 34$/150gr - 40$/200gr',
        descriptionEn: '2nd half price - $34/150gr - $40/200gr',
        price: '34$ / 40$'
      },
      {
        id: 'mercredi-pates',
        name: '🟠 MERCREDI PROMO - SOIRÉE PÂTES',
        nameEn: '🟠 WEDNESDAY PROMO - PASTA NIGHT',
        description: 'Mix ta pâte & ta sauce - Demandez à un membre de l\'équipe pour notre vin rouge en vedette',
        descriptionEn: 'Mix your pasta & sauce - Ask a team member about our featured red wine',
        price: '18$'
      },
      {
        id: 'jeudi-incontournables',
        name: '🟢 JEUDI PROMO - NOS INCONTOURNABLES',
        nameEn: '🟢 THURSDAY PROMO - OUR CLASSICS',
        description: 'Saumon Panko ou Bavette grillée Angus',
        descriptionEn: 'Panko Salmon or Grilled Angus Bavette',
        price: '28$'
      },
      {
        id: 'weekend-alcool',
        name: '🟠 VENDREDI & SAMEDI PROMO (à partir de 20h)',
        nameEn: '🟠 FRIDAY & SATURDAY PROMO (from 8pm)',
        description: '2 pour 1 alcool simple - 15$ - Shooters (sélectionnés) - 3$',
        descriptionEn: '2 for 1 simple alcohol - $15 - Shooters (selected) - $3',
        price: '15$ / 3$'
      }
    ]
  }
];
