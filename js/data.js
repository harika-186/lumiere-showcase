const PRODUCTS = [
  {
    id: "001",
    name: "Nuit de Velours",
    category: "oriental",
    price: 420,
    shortDescription: "An opulent nocturne of oud, amber, and dark rose.",
    fullDescription: "Nuit de Velours was born from a single obsession: the scent of a room just after candlelight is extinguished. Deep oud from Laos anchors a heart of Bulgarian rose absolute and aged patchouli, while ambergris from the coast of Madagascar seals it all into something irreducibly personal. This is a perfume for the hours that don't belong to tomorrow.",
    fragranceNotes: {
      top: ["Saffron", "Black pepper", "Bergamot"],
      heart: ["Bulgarian rose absolute", "Oud Laos", "Aged patchouli"],
      base: ["Ambergris", "Benzoin", "Labdanum", "Castoreum"]
    },
    size: "50ml Eau de Parfum",
    longevity: "10–14 hours",
    occasion: "Evening, formal events, intimate encounters",
    image: "https://images.unsplash.com/photo-1541643600914-78b084683702?w=800&q=80",
    featured: true
  },
  {
    id: "002",
    name: "Blanc Absolu",
    category: "floral",
    price: 310,
    shortDescription: "White flowers suspended in translucent musk.",
    fullDescription: "A study in restraint. Blanc Absolu renders the impossible: the exact coolness of jasmine sambac at dawn, before the heat of the day has drawn out its indolic undertow. Ylang ylang and tuberose orbit a core of musks so clean they read almost like absence. To wear Blanc Absolu is to occupy negative space.",
    fragranceNotes: {
      top: ["Aldehydes", "White peach", "Green leaf"],
      heart: ["Jasmine sambac", "Tuberose", "Ylang ylang absolute"],
      base: ["White musk", "Sandalwood", "Soft cedar", "Iris root"]
    },
    size: "75ml Eau de Parfum",
    longevity: "7–10 hours",
    occasion: "Daytime, weddings, understated elegance",
    image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=800&q=80",
    featured: true
  },
  {
    id: "003",
    name: "L'Architecte",
    category: "woody",
    price: 380,
    shortDescription: "Cedarwood, vetiver, and cold stone. Structured precision.",
    fullDescription: "L'Architecte is not worn — it is inhabited. The opening is deliberate: a thin slice of cold grapefruit over raw cedarwood, like morning light through a concrete window. Haitian vetiver arrives slowly, joining forces with smoked birch and a mineral accord that suggests rain on marble. There is nothing decorative here. Only structure.",
    fragranceNotes: {
      top: ["Cold grapefruit", "Cardamom", "Violet leaf"],
      heart: ["Cedarwood", "Vetiver Haiti", "Guaiac wood"],
      base: ["Smoked birch", "Mineral accord", "Moss absolute", "Benzoin"]
    },
    size: "50ml Eau de Parfum",
    longevity: "8–12 hours",
    occasion: "Professional, urban environments, year-round",
    image: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=800&q=80",
    featured: true
  },
  {
    id: "004",
    name: "Soie de Cuir",
    category: "leather",
    price: 495,
    shortDescription: "Supple leather warmed by honey, iris and tobacco.",
    fullDescription: "Every great leather perfume is also a love letter to memory. Soie de Cuir opens with the faint bitterness of birch tar and tobacco blossom before softening dramatically into an iris-forward heart of unusual creaminess. The dry-down is honey-glazed leather — not the aggression of suede but something older, more patient. A perfume that improves as you wear it.",
    fragranceNotes: {
      top: ["Birch tar", "Tobacco blossom", "Cinnamon bark"],
      heart: ["Iris absolute", "Honey accord", "Leather accord"],
      base: ["Dark tobacco", "Amber", "Vetiver", "Tonka bean"]
    },
    size: "50ml Extrait de Parfum",
    longevity: "14–18 hours",
    occasion: "Autumn, evening, travel",
    image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=800&q=80",
    featured: false
  },
  {
    id: "005",
    name: "Aqua Meridiana",
    category: "aquatic",
    price: 265,
    shortDescription: "Mediterranean salt air, fig leaf, and sun-warmed skin.",
    fullDescription: "To understand Aqua Meridiana, close your eyes and place yourself at noon on a stone terrace above the sea. Fig leaf absolute — sharp, milky, green — opens the composition with startling freshness. Sea spray and petrichor suggest weather. Slowly, ambrette seed and warm musk settle everything into something like contentment. The lightest thing we have ever made.",
    fragranceNotes: {
      top: ["Fig leaf absolute", "Bergamot", "Sea salt accord"],
      heart: ["Petrichor", "Aquatic accord", "White tea"],
      base: ["Ambrette seed", "Driftwood", "Warm musk", "Coconut water"]
    },
    size: "100ml Eau de Parfum",
    longevity: "5–7 hours",
    occasion: "Summer, daytime, resort, casual luxury",
    image: "https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=800&q=80",
    featured: false
  },
  {
    id: "006",
    name: "Rose Étrange",
    category: "floral",
    price: 355,
    shortDescription: "Rose pushed to its limits — metallic, mossy, almost disturbing.",
    fullDescription: "Rose Étrange was designed as a provocation. Every rose note imaginable was assembled and then deliberately corrupted: metallic aldehydes, violet leaf, cold woods. The result is a rose that has been somewhere it should not have been. Unsettling in the best sense. If you prefer your roses comfortable, this is not your perfume.",
    fragranceNotes: {
      top: ["Metallic aldehydes", "Violet leaf", "Bitter lemon"],
      heart: ["Rose centifolia", "Rose absolute", "Geranium"],
      base: ["Oakmoss", "Grey amber", "Vetiver", "Patchouli dark"]
    },
    size: "50ml Eau de Parfum",
    longevity: "9–12 hours",
    occasion: "Evening, gallery openings, singular occasions",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&q=80",
    featured: false
  },
  {
    id: "007",
    name: "Encens Glacé",
    category: "oriental",
    price: 440,
    shortDescription: "Sacred incense cooled by frost and crystalline woods.",
    fullDescription: "A paradox: incense made cold. The opening is frankincense — church-dark, resinous — but immediately tempered by an unusual accord of frosted ozonic notes and pale cedar. The effect is incense as seen from outside in winter, smoke rising into cold air. The base settles into myrrh and dark musks, a slow burn that lasts the day.",
    fragranceNotes: {
      top: ["Frankincense", "Cold ozonic accord", "Pale cedar"],
      heart: ["Olibanum absolute", "Elemi", "Icy woods"],
      base: ["Myrrh resin", "Dark musk", "Labdanum", "Benzoin"]
    },
    size: "50ml Extrait de Parfum",
    longevity: "12–16 hours",
    occasion: "Winter, contemplative moods, spiritual occasions",
    image: "https://images.unsplash.com/photo-1566977776052-6e61e35bf9be?w=800&q=80",
    featured: false
  },
  {
    id: "008",
    name: "Jardin Secret",
    category: "green",
    price: 290,
    shortDescription: "Wet grass, green tomato leaf, and the ghost of an old garden.",
    fullDescription: "Jardin Secret is a landscape, not a perfume. It opens green and almost aggressive — tomato leaf, crushed grass, a thin bite of violet absolute. The heart introduces something warmer: osmanthus and warm hay. The base is moss and soft woods, the smell of garden furniture at the end of summer. An essay in remembrance.",
    fragranceNotes: {
      top: ["Tomato leaf", "Crushed grass", "Violet absolute"],
      heart: ["Osmanthus", "Warm hay accord", "Rose de mai"],
      base: ["Forest moss", "Cedarwood", "Musk", "Soft woods"]
    },
    size: "75ml Eau de Parfum",
    longevity: "6–9 hours",
    occasion: "Spring, outdoor events, nostalgic occasions",
    image: "https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=800&q=80",
    featured: false
  }
];

const CATEGORIES = ["all", "oriental", "floral", "woody", "leather", "aquatic", "green"];
