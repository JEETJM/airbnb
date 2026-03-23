const sampleListings = [
  {
    title: "Emerald Sky Suite",
    description: "Ultra luxury 5-star suite with panoramic skyline glass view.",
    image: {
      url: "https://images.unsplash.com/photo-1600585152915-d208bec867a1?auto=format&fit=crop&w=800&q=60",
    },
    price: 5200,
    location: "Dubai",
    country: "United Arab Emirates",
  },
  {
    title: "Velvet Royal Room",
    description: "Premium velvet interior room with golden lighting.",
    image: {
      url: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=800&q=60",
    },
    price: 4100,
    location: "Paris",
    country: "France",
  },
  {
    title: "Ocean Pearl Suite",
    description: "5-star ocean facing suite with private balcony.",
    image: {
      url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=60",
    },
    price: 4800,
    location: "Maldives",
    country: "Maldives",
  },
  {
    title: "Golden Horizon Penthouse",
    description: "Top floor penthouse with sunset skyline view.",
    image: {
      url: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=60",
    },
    price: 6000,
    location: "New York",
    country: "United States",
  },
  {
    title: "Crystal Palace Room",
    description: "Luxury crystal chandelier interior with king bed.",
    image: {
      url: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=800&q=60",
    },
    price: 3900,
    location: "Rome",
    country: "Italy",
  },
  {
    title: "Infinity Blue Suite",
    description: "Private infinity pool luxury 5-star suite.",
    image: {
      url: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=60",
    },
    price: 7000,
    location: "Bali",
    country: "Indonesia",
  },
  {
    title: "Silver Executive Room",
    description: "Executive platinum room with premium marble finish.",
    image: {
      url: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=60",
    },
    price: 4500,
    location: "London",
    country: "United Kingdom",
  },
  {
    title: "Luxury Heritage Chamber",
    description: "Royal heritage themed palace style room.",
    image: {
      url: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=800&q=60",
    },
    price: 4300,
    location: "Jaipur",
    country: "India",
  },
  {
    title: "Sky Glass Luxury Room",
    description: "Modern glass wall suite with city view.",
    image: {
      url: "https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=800&q=60",
    },
    price: 5100,
    location: "Singapore",
    country: "Singapore",
  },
  {
    title: "Royal Sandalwood Suite",
    description: "Classic luxury suite with wooden premium interior.",
    image: {
      url: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=800&q=60",
    },
    price: 3700,
    location: "Doha",
    country: "Qatar",
  },
  {
    title: "Pearl Crown Suite",
    description: "5-star honeymoon suite with ambient mood lighting.",
    image: {
      url: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&w=800&q=60",
    },
    price: 4900,
    location: "Santorini",
    country: "Greece",
  },
  {
    title: "Urban Elite Penthouse",
    description: "High-end elite penthouse in downtown area.",
    image: {
      url: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=800&q=60",
    },
    price: 6500,
    location: "Chicago",
    country: "United States",
  },
  {
    title: "Emerald Forest Suite",
    description: "Luxury forest facing premium suite.",
    image: {
      url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=60",
    },
    price: 3400,
    location: "Zurich",
    country: "Switzerland",
  },
  {
    title: "Golden Arcadia Room",
    description: "Golden luxury themed royal suite.",
    image: {
      url: "https://images.unsplash.com/photo-1560448075-bb485b067938?auto=format&fit=crop&w=800&q=60",
    },
    price: 4200,
    location: "Istanbul",
    country: "Turkey",
  },
  {
    title: "Royal Moonlight Suite",
    description: "Romantic candle light premium suite.",
    image: {
      url: "https://images.unsplash.com/photo-1587985064135-0366536eab42?auto=format&fit=crop&w=800&q=60",
    },
    price: 4600,
    location: "Venice",
    country: "Italy",
  },
  {
    title: "Infinity Edge Balcony Room",
    description: "Luxury balcony room with breathtaking views.",
    image: {
      url: "https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=800&q=60",
    },
    price: 5000,
    location: "Barcelona",
    country: "Spain",
  },
  {
    title: "Grand Platinum Suite",
    description: "Premium platinum category 5-star hotel suite.",
    image: {
      url: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=800&q=60",
    },
    price: 7200,
    location: "Los Angeles",
    country: "United States",
  },
  {
    title: "Modern Luxury Loft",
    description: "Ultra modern luxury loft with premium interior.",
    image: {
      url: "https://images.unsplash.com/photo-1586375300773-8384e3e4916f?auto=format&fit=crop&w=800&q=60",
    },
    price: 3800,
    location: "Tokyo",
    country: "Japan",
  },
  {
    title: "Ocean Breeze Royal Suite",
    description: "Luxury ocean breeze suite with balcony.",
    image: {
      url: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&w=800&q=60",
    },
    price: 6100,
    location: "Phuket",
    country: "Thailand",
  },
  {
    title: "Elite Grand Palace Room",
    description: "Grand palace style luxury room.",
    image: {
      url: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?auto=format&fit=crop&w=800&q=60",
    },
    price: 5400,
    location: "Abu Dhabi",
    country: "United Arab Emirates",
  },
  {
    title: "Skyline Diamond Suite",
    description: "Premium diamond class suite with skyline terrace view.",
    image: {
      url: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=800&q=60",
    },
    price: 6800,
    location: "Hong Kong",
    country: "China",
  },
  {
    title: "Royal Sapphire Room",
    description: "Sapphire themed luxury suite with royal decor.",
    image: {
      url: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=800&q=60",
    },
    price: 4700,
    location: "Vienna",
    country: "Austria",
  },
  {
    title: "Imperial Gold Suite",
    description: "Imperial gold finish luxury hotel suite.",
    image: {
      url: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=800&q=60",
    },
    price: 5900,
    location: "Seoul",
    country: "South Korea",
  },
  {
    title: "Mountain View Elite Room",
    description: "Premium mountain facing glass view room.",
    image: {
      url: "https://images.unsplash.com/photo-1505692794403-34f92b29a6e3?auto=format&fit=crop&w=800&q=60",
    },
    price: 3600,
    location: "Manali",
    country: "India",
  },
  {
    title: "Desert Pearl Suite",
    description: "Luxury desert facing premium suite.",
    image: {
      url: "https://images.unsplash.com/photo-1582582429416-6d48f3d6e1b2?auto=format&fit=crop&w=800&q=60",
    },
    price: 5200,
    location: "Riyadh",
    country: "Saudi Arabia",
  },
  {
    title: "Royal Garden Palace",
    description: "Luxury garden facing palace themed room.",
    image: {
      url: "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?auto=format&fit=crop&w=800&q=60",
    },
    price: 4300,
    location: "Bangkok",
    country: "Thailand",
  },
  {
    title: "Infinity Crystal Room",
    description: "Crystal clear luxury interior with infinity lighting.",
    image: {
      url: "https://images.unsplash.com/photo-1582719478176-455b02a6b1d2?auto=format&fit=crop&w=800&q=60",
    },
    price: 5100,
    location: "Dubai",
    country: "United Arab Emirates",
  },
  {
    title: "Urban Luxe Executive Suite",
    description: "Executive class suite with modern design.",
    image: {
      url: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=800&q=60",
    },
    price: 4800,
    location: "Toronto",
    country: "Canada",
  },
  {
    title: "Ocean Star Penthouse",
    description: "Penthouse with private ocean deck.",
    image: {
      url: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=60",
    },
    price: 7500,
    location: "Sydney",
    country: "Australia",
  },
  {
    title: "Royal Mirage Suite",
    description: "Premium suite with magical lighting ambiance.",
    image: {
      url: "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&w=800&q=60",
    },
    price: 4900,
    location: "Marrakech",
    country: "Morocco",
  },
  {
    title: "Grand Horizon Elite",
    description: "Luxury horizon facing executive suite.",
    image: {
      url: "https://images.unsplash.com/photo-1582582494700-0b9dba4b6d9a?auto=format&fit=crop&w=800&q=60",
    },
    price: 6200,
    location: "San Francisco",
    country: "United States",
  },
  {
    title: "Royal Orchid Suite",
    description: "Orchid themed luxury honeymoon suite.",
    image: {
      url: "https://images.unsplash.com/photo-1584132915807-fd1f5fbc078f?auto=format&fit=crop&w=800&q=60",
    },
    price: 5300,
    location: "Kuala Lumpur",
    country: "Malaysia",
  },
  {
    title: "Majestic Pearl Palace",
    description: "Royal palace style majestic room.",
    image: {
      url: "https://images.unsplash.com/photo-1590490359683-658d3d23f972?auto=format&fit=crop&w=800&q=60",
    },
    price: 5600,
    location: "Budapest",
    country: "Hungary",
  },
  {
    title: "Sunset Royal Terrace",
    description: "Terrace suite with stunning sunset view.",
    image: {
      url: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=800&q=60",
    },
    price: 6000,
    location: "Cape Town",
    country: "South Africa",
  },
  {
    title: "Crystal Bay Luxury Room",
    description: "Bay facing crystal clear premium suite.",
    image: {
      url: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=800&q=60",
    },
    price: 4700,
    location: "Miami",
    country: "United States",
  },
  {
    title: "Royal Emerald Palace",
    description: "Emerald palace themed ultra luxury suite.",
    image: {
      url: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=800&q=60",
    },
    price: 6800,
    location: "Monaco",
    country: "Monaco",
  },
  {
    title: "Luxury Snow Peak Suite",
    description: "Snow mountain facing premium glass suite.",
    image: {
      url: "https://images.unsplash.com/photo-1505692794403-34f92b29a6e3?auto=format&fit=crop&w=800&q=60",
    },
    price: 3900,
    location: "Aspen",
    country: "United States",
  },
  {
    title: "Royal Amber Room",
    description: "Amber themed golden interior luxury room.",
    image: {
      url: "https://images.unsplash.com/photo-1560448075-bb485b067938?auto=format&fit=crop&w=800&q=60",
    },
    price: 4500,
    location: "Prague",
    country: "Czech Republic",
  },
  {
    title: "Elite Cityscape Suite",
    description: "Cityscape luxury executive class suite.",
    image: {
      url: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=800&q=60",
    },
    price: 6100,
    location: "Berlin",
    country: "Germany",
  },
  {
    title: "Golden Pearl Horizon",
    description: "Premium golden horizon themed suite.",
    image: {
      url: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=800&q=60",
    },
    price: 6400,
    location: "Lisbon",
    country: "Portugal",
  },
  {
    title: "Skyline Diamond Suite",
    description: "Premium diamond class suite with skyline terrace view.",
    image: {
      url: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=800&q=60",
    },
    price: 6800,
    location: "Hong Kong",
    country: "China",
  },
  {
    title: "Royal Sapphire Room",
    description: "Sapphire themed luxury suite with royal decor.",
    image: {
      url: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=800&q=60",
    },
    price: 4700,
    location: "Vienna",
    country: "Austria",
  },
  {
    title: "Imperial Gold Suite",
    description: "Imperial gold finish luxury hotel suite.",
    image: {
      url: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=800&q=60",
    },
    price: 5900,
    location: "Seoul",
    country: "South Korea",
  },
  {
    title: "Mountain View Elite Room",
    description: "Premium mountain facing glass view room.",
    image: {
      url: "https://images.unsplash.com/photo-1505692794403-34f92b29a6e3?auto=format&fit=crop&w=800&q=60",
    },
    price: 3600,
    location: "Manali",
    country: "India",
  },
  {
    title: "Desert Pearl Suite",
    description: "Luxury desert facing premium suite.",
    image: {
      url: "https://images.unsplash.com/photo-1582582429416-6d48f3d6e1b2?auto=format&fit=crop&w=800&q=60",
    },
    price: 5200,
    location: "Riyadh",
    country: "Saudi Arabia",
  },
  {
    title: "Royal Garden Palace",
    description: "Luxury garden facing palace themed room.",
    image: {
      url: "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?auto=format&fit=crop&w=800&q=60",
    },
    price: 4300,
    location: "Bangkok",
    country: "Thailand",
  },
  {
    title: "Infinity Crystal Room",
    description: "Crystal clear luxury interior with infinity lighting.",
    image: {
      url: "https://images.unsplash.com/photo-1582719478176-455b02a6b1d2?auto=format&fit=crop&w=800&q=60",
    },
    price: 5100,
    location: "Dubai",
    country: "United Arab Emirates",
  },
  {
    title: "Urban Luxe Executive Suite",
    description: "Executive class suite with modern design.",
    image: {
      url: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=800&q=60",
    },
    price: 4800,
    location: "Toronto",
    country: "Canada",
  },
  {
    title: "Ocean Star Penthouse",
    description: "Penthouse with private ocean deck.",
    image: {
      url: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=60",
    },
    price: 7500,
    location: "Sydney",
    country: "Australia",
  },
  {
    title: "Royal Mirage Suite",
    description: "Premium suite with magical lighting ambiance.",
    image: {
      url: "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&w=800&q=60",
    },
    price: 4900,
    location: "Marrakech",
    country: "Morocco",
  },
  {
    title: "Grand Horizon Elite",
    description: "Luxury horizon facing executive suite.",
    image: {
      url: "https://images.unsplash.com/photo-1582582494700-0b9dba4b6d9a?auto=format&fit=crop&w=800&q=60",
    },
    price: 6200,
    location: "San Francisco",
    country: "United States",
  },
  {
    title: "Royal Orchid Suite",
    description: "Orchid themed luxury honeymoon suite.",
    image: {
      url: "https://images.unsplash.com/photo-1584132915807-fd1f5fbc078f?auto=format&fit=crop&w=800&q=60",
    },
    price: 5300,
    location: "Kuala Lumpur",
    country: "Malaysia",
  },
  {
    title: "Majestic Pearl Palace",
    description: "Royal palace style majestic room.",
    image: {
      url: "https://images.unsplash.com/photo-1590490359683-658d3d23f972?auto=format&fit=crop&w=800&q=60",
    },
    price: 5600,
    location: "Budapest",
    country: "Hungary",
  },
  {
    title: "Sunset Royal Terrace",
    description: "Terrace suite with stunning sunset view.",
    image: {
      url: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=800&q=60",
    },
    price: 6000,
    location: "Cape Town",
    country: "South Africa",
  },
  {
    title: "Crystal Bay Luxury Room",
    description: "Bay facing crystal clear premium suite.",
    image: {
      url: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=800&q=60",
    },
    price: 4700,
    location: "Miami",
    country: "United States",
  },
  {
    title: "Royal Emerald Palace",
    description: "Emerald palace themed ultra luxury suite.",
    image: {
      url: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=800&q=60",
    },
    price: 6800,
    location: "Monaco",
    country: "Monaco",
  },
  {
    title: "Luxury Snow Peak Suite",
    description: "Snow mountain facing premium glass suite.",
    image: {
      url: "https://images.unsplash.com/photo-1505692794403-34f92b29a6e3?auto=format&fit=crop&w=800&q=60",
    },
    price: 3900,
    location: "Aspen",
    country: "United States",
  },
  {
    title: "Royal Amber Room",
    description: "Amber themed golden interior luxury room.",
    image: {
      url: "https://images.unsplash.com/photo-1560448075-bb485b067938?auto=format&fit=crop&w=800&q=60",
    },
    price: 4500,
    location: "Prague",
    country: "Czech Republic",
  },
  {
    title: "Elite Cityscape Suite",
    description: "Cityscape luxury executive class suite.",
    image: {
      url: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=800&q=60",
    },
    price: 6100,
    location: "Berlin",
    country: "Germany",
  },
  {
    title: "Golden Pearl Horizon",
    description: "Premium golden horizon themed suite.",
    image: {
      url: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=800&q=60",
    },
    price: 6400,
    location: "Lisbon",
    country: "Portugal",
  },
  {
    title: "Cozy Beachfront Villa",
    description:
      "Beautiful villa right next to the beach with amazing sunset views.",
    image: {
      url: "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
    },
    price: 3200,
    location: "Goa",
    country: "India",
  },

  {
    title: "Mountain View Cabin",
    description: "Peaceful wooden cabin surrounded by mountains and nature.",
    image: {
      url: "https://images.unsplash.com/photo-1505692794403-34f92b29a6e3",
    },
    price: 2100,
    location: "Manali",
    country: "India",
  },

  {
    title: "Modern City Apartment",
    description: "Luxury apartment in the heart of the city with skyline view.",
    image: {
      url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
    },
    price: 2800,
    location: "New York",
    country: "United States",
  },

  {
    title: "Lake Side Cottage",
    description: "Relaxing cottage beside a beautiful lake.",
    image: {
      url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
    },
    price: 2400,
    location: "Zurich",
    country: "Switzerland",
  },

  {
    title: "Traditional Japanese House",
    description: "Experience authentic Japanese stay with tatami rooms.",
    image: { url: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb" },
    price: 3500,
    location: "Kyoto",
    country: "Japan",
  },

  {
    title: "Desert Luxury Camp",
    description: "Luxury desert tent experience with cultural activities.",
    image: {
      url: "https://images.unsplash.com/photo-1600585152220-90363fe7e115",
    },
    price: 2900,
    location: "Dubai",
    country: "UAE",
  },

  {
    title: "Forest Treehouse",
    description: "Unique treehouse stay in the middle of the forest.",
    image: {
      url: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae",
    },
    price: 2600,
    location: "Bali",
    country: "Indonesia",
  },

  {
    title: "Paris Romantic Studio",
    description: "Small but beautiful studio perfect for couples.",
    image: { url: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2" },
    price: 3100,
    location: "Paris",
    country: "France",
  },

  {
    title: "Luxury Beach Resort Room",
    description: "Premium beach resort room with private balcony.",
    image: {
      url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
    },
    price: 4200,
    location: "Maldives",
    country: "Maldives",
  },

  {
    title: "Rustic Farm Stay",
    description: "Enjoy countryside life with animals and fresh food.",
    image: {
      url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
    },
    price: 1800,
    location: "Tuscany",
    country: "Italy",
  },
  {
    title: "Royal Atlantis Sky Suite",
    description: "Ultra premium sky suite with 360° city and ocean view.",
    image: {
      url: "https://images.unsplash.com/photo-1560185008-b033106af5c3",
    },
    price: 8200,
    location: "Dubai",
    country: "United Arab Emirates",
  },

  {
    title: "Crystal Lagoon Resort Suite",
    description: "Luxury lagoon side suite with private infinity pool.",
    image: {
      url: "https://images.unsplash.com/photo-1560448075-bb485b067938",
    },
    price: 7600,
    location: "Bora Bora",
    country: "French Polynesia",
  },

  {
    title: "Imperial Crown Palace Room",
    description: "Royal palace interior with antique luxury design.",
    image: {
      url: "https://images.unsplash.com/photo-1590490359683-658d3d23f972",
    },
    price: 6900,
    location: "London",
    country: "United Kingdom",
  },

  {
    title: "Aurora Arctic Glass Suite",
    description: "Glass igloo luxury suite to watch northern lights.",
    image: {
      url: "https://images.unsplash.com/photo-1505692794403-34f92b29a6e3",
    },
    price: 7400,
    location: "Lapland",
    country: "Finland",
  },

  {
    title: "Santorini White Pearl Villa",
    description: "Luxury cliffside villa with stunning sea views.",
    image: {
      url: "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
    },
    price: 6700,
    location: "Santorini",
    country: "Greece",
  },

  {
    title: "Tokyo Skyline Executive Suite",
    description: "Modern executive suite with Tokyo night skyline view.",
    image: {
      url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
    },
    price: 6100,
    location: "Tokyo",
    country: "Japan",
  },

  {
    title: "Maldives Overwater Villa",
    description: "Luxury villa above crystal clear ocean water.",
    image: {
      url: "https://images.unsplash.com/photo-1582719508461-905c673771fd",
    },
    price: 8900,
    location: "Maldives",
    country: "Maldives",
  },

  {
    title: "Venice Grand Canal Suite",
    description: "Romantic luxury suite overlooking the Grand Canal.",
    image: {
      url: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",
    },
    price: 5900,
    location: "Venice",
    country: "Italy",
  },

  {
    title: "Alpine Snow Luxury Chalet",
    description: "Private luxury chalet with snowy mountain views.",
    image: {
      url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
    },
    price: 6200,
    location: "Zermatt",
    country: "Switzerland",
  },

  {
    title: "Miami Oceanfront Penthouse",
    description: "Ultra luxury penthouse with private ocean deck.",
    image: {
      url: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae",
    },
    price: 7100,
    location: "Miami",
    country: "United States",
  },

  {
    title: "Dubai Burj View Elite Suite",
    description: "Premium suite with Burj Khalifa view terrace.",
    image: {
      url: "https://images.unsplash.com/photo-1600585152915-d208bec867a1",
    },
    price: 8300,
    location: "Dubai",
    country: "United Arab Emirates",
  },

  {
    title: "Paris Diamond Luxury Room",
    description: "Elegant luxury suite near Eiffel Tower.",
    image: {
      url: "https://images.unsplash.com/photo-1616046229478-9901c5536a45",
    },
    price: 6500,
    location: "Paris",
    country: "France",
  },

  {
    title: "Singapore Marina Bay Suite",
    description: "High-end suite overlooking Marina Bay skyline.",
    image: {
      url: "https://images.unsplash.com/photo-1600210492493-0946911123ea",
    },
    price: 7200,
    location: "Singapore",
    country: "Singapore",
  },

  {
    title: "Royal Palace Heritage Suite",
    description: "Traditional royal palace stay with luxury decor.",
    image: {
      url: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7",
    },
    price: 5400,
    location: "Udaipur",
    country: "India",
  },

  {
    title: "Cape Town Ocean Cliff Villa",
    description: "Cliffside luxury villa with Atlantic ocean views.",
    image: {
      url: "https://images.unsplash.com/photo-1591088398332-8a7791972843",
    },
    price: 6800,
    location: "Cape Town",
    country: "South Africa",
  },
  {
    title: "Rustic Farm Stay",
    description: "Enjoy countryside life with animals and fresh food.",
    image: {
      url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
    },
    price: 1800,
    location: "Tuscany",
    country: "Italy",
  },
  {
    title: "Royal Atlantis Sky Suite",
    description: "Ultra premium sky suite with 360° city and ocean view.",
    image: {
      url: "https://images.unsplash.com/photo-1560185008-b033106af5c3",
    },
    price: 8200,
    location: "Dubai",
    country: "United Arab Emirates",
  },
  {
    title: "Crystal Lagoon Resort Suite",
    description: "Luxury lagoon side suite with private infinity pool.",
    image: {
      url: "https://images.unsplash.com/photo-1560448075-bb485b067938",
    },
    price: 7600,
    location: "Bora Bora",
    country: "French Polynesia",
  },
  {
    title: "Imperial Crown Palace Room",
    description: "Royal palace interior with antique luxury design.",
    image: {
      url: "https://images.unsplash.com/photo-1590490359683-658d3d23f972",
    },
    price: 6900,
    location: "London",
    country: "United Kingdom",
  },
  {
    title: "Aurora Arctic Glass Suite",
    description: "Glass igloo luxury suite to watch northern lights.",
    image: {
      url: "https://images.unsplash.com/photo-1505692794403-34f92b29a6e3",
    },
    price: 7400,
    location: "Lapland",
    country: "Finland",
  },
  {
    title: "Santorini White Pearl Villa",
    description: "Luxury cliffside villa with stunning sea views.",
    image: {
      url: "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
    },
    price: 6700,
    location: "Santorini",
    country: "Greece",
  },
  {
    title: "Tokyo Skyline Executive Suite",
    description: "Modern executive suite with Tokyo night skyline view.",
    image: {
      url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
    },
    price: 6100,
    location: "Tokyo",
    country: "Japan",
  },
  {
    title: "Maldives Overwater Villa",
    description: "Luxury villa above crystal clear ocean water.",
    image: {
      url: "https://images.unsplash.com/photo-1582719508461-905c673771fd",
    },
    price: 8900,
    location: "Maldives",
    country: "Maldives",
  },
  {
    title: "Venice Grand Canal Suite",
    description: "Romantic luxury suite overlooking the Grand Canal.",
    image: {
      url: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",
    },
    price: 5900,
    location: "Venice",
    country: "Italy",
  },
  {
    title: "Alpine Snow Luxury Chalet",
    description: "Private luxury chalet with snowy mountain views.",
    image: {
      url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
    },
    price: 6200,
    location: "Zermatt",
    country: "Switzerland",
  },
  {
    title: "Miami Oceanfront Penthouse",
    description: "Ultra luxury penthouse with private ocean deck.",
    image: {
      url: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae",
    },
    price: 7100,
    location: "Miami",
    country: "United States",
  },
  {
    title: "Dubai Burj View Elite Suite",
    description: "Premium suite with Burj Khalifa view terrace.",
    image: {
      url: "https://images.unsplash.com/photo-1600585152915-d208bec867a1",
    },
    price: 8300,
    location: "Dubai",
    country: "United Arab Emirates",
  },
  {
    title: "Paris Diamond Luxury Room",
    description: "Elegant luxury suite near Eiffel Tower.",
    image: {
      url: "https://images.unsplash.com/photo-1616046229478-9901c5536a45",
    },
    price: 6500,
    location: "Paris",
    country: "France",
  },
  {
    title: "Singapore Marina Bay Suite",
    description: "High-end suite overlooking Marina Bay skyline.",
    image: {
      url: "https://images.unsplash.com/photo-1600210492493-0946911123ea",
    },
    price: 7200,
    location: "Singapore",
    country: "Singapore",
  },
  {
    title: "Royal Palace Heritage Suite",
    description: "Traditional royal palace stay with luxury decor.",
    image: {
      url: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7",
    },
    price: 5400,
    location: "Udaipur",
    country: "India",
  },
  {
    title: "Cape Town Ocean Cliff Villa",
    description: "Cliffside luxury villa with Atlantic ocean views.",
    image: {
      url: "https://images.unsplash.com/photo-1591088398332-8a7791972843",
    },
    price: 6800,
    location: "Cape Town",
    country: "South Africa",
  },
];

const initializedListings = sampleListings.map((listing, index) => ({
  ...listing,
  image: {
    url: listing.image.url,
    filename: `Zenvyra/listings/sample-${index + 1}`,
  },
}));

module.exports = { data: initializedListings };

// module.exports = { data: sampleListings };
