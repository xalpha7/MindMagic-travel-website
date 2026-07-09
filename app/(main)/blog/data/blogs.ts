import { TravelExperience } from "../types/travel";

export const blogs: TravelExperience[] = [
  {
    id: "paris-7-days",
    title: "Paris Complete Travel Experience",
    thumbnail: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=80",
    shortDescription: "Explore Paris through history, culture, food and unforgettable experiences.",
    description: `
    Paris, the City of Light, offers a perfect combination
    of art, architecture, fashion and cuisine.
    Discover iconic landmarks, hidden streets,
    romantic cafes and unforgettable French experiences.
    `,
    country: "France",
    city: "Paris",
    gallery: [
      {
        day: 1,
        title: "Arrival & Eiffel Tower",
        description: "Airport arrival followed by central Paris exploration.",
        media: [
          {
            url: "https://images.unsplash.com/photo-1431274172761-fca41d930114?auto=format&fit=crop&w=800&q=80",
            type: "image",
            caption: "Eiffel Tower evening view"
          },
          {
            url: "https://www.youtube.com/watch?v=6JAESY0by04",
            type: "video",
            caption: "Paris night experience"
          }
        ]
      },
      {
        day: 2,
        title: "Art & History Day",
        description: "Explore museums and historical monuments.",
        media: [
          {
            url: "https://images.unsplash.com/photo-1500039436846-25ae2f11882e?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            type: "image",
            caption: "Louvre Museum"
          }
        ]
      }
    ],
    itinerary: [
      {
        day: 1,
        title: "Discover Central Paris",
        activities: {
          morning: [
            {
              time: "09:00 AM",
              title: "Airport Pickup",
              description: "Private transfer to hotel."
            }
          ],
          afternoon: [
            {
              time: "02:00 PM",
              title: "Eiffel Tower",
              description: "Visit the iconic Paris landmark.",
              location: "Champ de Mars"
            }
          ],
          evening: [
            {
              time: "07:00 PM",
              title: "Seine River Cruise",
              description: "Enjoy Paris skyline at night."
            }
          ]
        }
      }
    ],
    attractions: [
      {
        id: "eiffel",
        name: "Eiffel Tower",
        category: "historical",
        description: "The most iconic monument of Paris.",
        location: {
          latitude: 48.8584,
          longitude: 2.2945
        },
        rating: 4.8,
        media: [
          {
            url: "https://images.unsplash.com/photo-1639519306888-419e98f8a5b6?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            type: "image"
          }
        ]
      },
      {
        id: "louvre",
        name: "Louvre Museum",
        category: "culture",
        description: "World famous museum housing thousands of artworks.",
        location: {
          latitude: 48.8606,
          longitude: 2.3376
        },
        rating: 4.7,
        media: [
          {
            url: "https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?auto=format&fit=crop&w=800&q=80",
            type: "image"
          }
        ]
      }
    ],
    route: {
      source: {
        id: "airport",
        name: "Charles de Gaulle Airport",
        coordinates: {
          latitude: 49.0097,
          longitude: 2.5479
        },
        description: "Starting point of journey.",
        media: [
          {
            url: "https://images.unsplash.com/photo-1672310708154-771583101dbb?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            type: "image"
          }
        ],
        activities: ["Airport pickup", "Hotel transfer"]
      },
      stops: [
        {
          id: "eiffel",
          name: "Eiffel Tower",
          coordinates: {
            latitude: 48.8584,
            longitude: 2.2945
          },
          description: "First sightseeing destination.",
          media: [
            {
              url: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=800&q=80",
              type: "image"
            }
          ],
          activities: ["Photography", "Tower visit"]
        }
      ],
      destination: {
        id: "city-center",
        name: "Paris City Center",
        coordinates: {
          latitude: 48.8566,
          longitude: 2.3522
        },
        description: "Main city exploration area.",
        media: [
          {
            url: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80",
            type: "image"
          }
        ],
        activities: ["Shopping", "Cafe experience"]
      }
    },
    hotels: [
      {
        name: "Paris Luxury Hotel",
        category: "luxury",
        priceRange: "€300-500/night",
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80"
      }
    ],
    food: [
      {
        name: "French Cuisine Experience",
        description: "Traditional Paris food experience.",
        mustTry: ["Croissant", "French Cheese", "Macarons"],
        image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=80"
      }
    ],
    tips: [
      {
        title: "Best Time",
        description: "April to June and September to October."
      },
      {
        title: "Transport",
        description: "Use Metro for affordable city travel."
      }
    ],
    reviews: [
      {
        userName: "John",
        rating: 5,
        comment: "Amazing Paris experience.",
        date: "2026-01-10"
      }
    ],
    booking: {
      duration: "7 Days / 6 Nights",
      bestSeason: "Spring",
      estimatedBudget: {
        currency: "EUR",
        amount: 1500
      },
      availablePackages: ["Budget", "Premium", "Luxury"]
    }
  },
  {
    id: "kyoto-5-days",
    title: "Kyoto Ancient Capital Discovery",
    thumbnail: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=80",
    shortDescription: "Immerse yourself in Japan's cultural heart with historic temples and bamboo groves.",
    description: `
    Kyoto, the former imperial capital of Japan, houses thousands of classical 
    Buddhist temples, pristine gardens, stunning Shinto shrines, and traditional 
    wooden merchant townhouses known as machiya.
    `,
    country: "Japan",
    city: "Kyoto",
    gallery: [
      {
        day: 1,
        title: "The Path of a Thousand Gates",
        description: "Walking through the iconic red torii corridor at sunset.",
        media: [
          {
            url: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?auto=format&fit=crop&w=800&q=80",
            type: "image",
            caption: "Fushimi Inari Taisha walkway"
          },
          {
            url: "https://www.youtube.com/watch?v=tPYdWHwJpaw",
            type: "video",
            caption: "Cinematic Kyoto Highlights"
          }
        ]
      },
      {
        day: 2,
        title: "Arashiyama Bamboo Forest",
        description: "Morning paths through towering stalks of historic green bamboo.",
        media: [
          {
            url: "https://images.unsplash.com/photo-1531021713651-fdd4ac075ac1?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            type: "image",
            caption: "Arashiyama Path"
          }
        ]
      }
    ],
    itinerary: [
      {
        day: 1,
        title: "Gateway to the Old Capital",
        activities: {
          morning: [
            {
              time: "10:30 AM",
              title: "Haruka Express Arrival",
              description: "Train transfer from Kansai International Airport directly into Kyoto Station."
            }
          ],
          afternoon: [
            {
              time: "02:00 PM",
              title: "Fushimi Inari Taisha",
              description: "Hike the mountain paths beneath thousands of vibrant red torii gates.",
              location: "Fushimi Ward"
            }
          ],
          evening: [
            {
              time: "06:30 PM",
              title: "Gion District Evening Walk",
              description: "Stroll down Hanamikoji Street to catch a glimpse of old tea houses."
            }
          ]
        }
      }
    ],
    attractions: [
      {
        id: "fushimi-inari",
        name: "Fushimi Inari Taisha",
        category: "historical",
        description: "The head Shinto shrine of the god Inari, famous for its thousands of vermilion gates.",
        location: {
          latitude: 34.9671,
          longitude: 135.7727
        },
        rating: 4.9,
        media: [
          {
            url: "https://images.unsplash.com/photo-1571754687694-15eb9a3ac00b?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            type: "image"
          }
        ]
      },
      {
        id: "kinkakuji",
        name: "Kinkaku-ji (The Golden Pavilion)",
        category: "culture",
        description: "A Zen Buddhist temple whose top two floors are completely covered in brilliant gold leaf.",
        location: {
          latitude: 35.0394,
          longitude: 135.7292
        },
        rating: 4.8,
        media: [
          {
            url: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=800&q=80",
            type: "image"
          }
        ]
      }
    ],
    route: {
      source: {
        id: "kix-airport",
        name: "Kansai International Airport",
        coordinates: {
          latitude: 34.4320,
          longitude: 135.2304
        },
        description: "Primary international entry point for Western Japan.",
        media: [
          {
            url: "https://images.unsplash.com/photo-1775113207373-8a6a48d8a931?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            type: "image"
          }
        ],
        activities: ["Customs clearance", "JR Rail pass exchange"]
      },
      stops: [
        {
          id: "kyoto-station",
          name: "Kyoto Station Central Hub",
          coordinates: {
            latitude: 34.9858,
            longitude: 135.7588
          },
          description: "Ultra-modern transit gateway contrasting with the old city.",
          media: [
            {
              url: "https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?auto=format&fit=crop&w=800&q=80",
              type: "image"
            }
          ],
          activities: ["Hotel drop-off", "Lunch at Ramen Alley"]
        }
      ],
      destination: {
        id: "gion",
        name: "Gion Historic Center",
        coordinates: {
          latitude: 34.9961,
          longitude: 135.7778
        },
        description: "The primary base for historical city exploration.",
        media: [
          {
            url: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80",
            type: "image"
          }
        ],
        activities: ["Tea house experience", "Historical photography"]
      }
    },
    hotels: [
      {
        name: "Higashiyama Ryokan Elite",
        category: "luxury",
        priceRange: "¥65,000-90,000/night",
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=800&q=80"
      }
    ],
    food: [
      {
        name: "Traditional Kaiseki Dining",
        description: "Multi-course seasonal Japanese art on a plate.",
        mustTry: ["Uji Matcha Parfait", "Yuba (Tofu Skin)", "Kyoto Style Ramen"],
        image: "https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?auto=format&fit=crop&w=800&q=80"
      }
    ],
    tips: [
      {
        title: "Local Etiquette",
        description: "Never touch or chase a Maiko on the street for photos; respect local private street warnings."
      },
      {
        title: "Transit Tip",
        description: "Buy an ICOCA card or use mobile transit passes for seamless boarding on Kyoto City Buses."
      }
    ],
    reviews: [
      {
        userName: "Yuki",
        rating: 5,
        comment: "Breathtakingly serene early in the morning before crowds arrive.",
        date: "2026-03-15"
      }
    ],
    booking: {
      duration: "5 Days / 4 Nights",
      bestSeason: "Autumn / Cherry Blossom",
      estimatedBudget: {
        currency: "JPY",
        amount: 180000
      },
      availablePackages: ["Standard Cultural", "Luxury Ryokan Experience"]
    }
  },
  {
    id: "rome-4-days",
    title: "Rome Eternal City Exploration",
    thumbnail: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=1200&q=80",
    shortDescription: "Step back into the ancient empire, marvelous fountains, and world-class culinary crafts.",
    description: `
    Rome, Italy's vibrant capital, boasts nearly 3,000 years of globally influential 
    art, ancient ruins, and architectural masterpieces. Experience the layers of history 
    woven into modern Roman street life.
    `,
    country: "Italy",
    city: "Rome",
    gallery: [
      {
        day: 1,
        title: "The Roman Empire Lives",
        description: "Standing inside the monumental walls of the Flavian Amphitheatre.",
        media: [
          {
            url: "https://images.unsplash.com/photo-1699012462295-bace478f27bc?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            type: "image",
            caption: "The Mighty Colosseum"
          },
          {
            url: "https://www.youtube.com/watch?v=1-bLGdChz3Q",
            type: "video",
            caption: "Cinematic Visuals of Rome"
          }
        ]
      },
      {
        day: 2,
        title: "Vatican Treasures",
        description: "Stunning architecture and masterworks of the Renaissance.",
        media: [
          {
            url: "https://images.unsplash.com/photo-1542820229-081e0c12af0b?auto=format&fit=crop&w=800&q=80",
            type: "image",
            caption: "St. Peter's Basilica Dome"
          }
        ]
      }
    ],
    itinerary: [
      {
        day: 1,
        title: "Footsteps of Emperors",
        activities: {
          morning: [
            {
              time: "08:30 AM",
              title: "Fiumicino Airport Pick-Up",
              description: "Direct shuttle transfer straight to your central hotel."
            }
          ],
          afternoon: [
            {
              time: "01:30 PM",
              title: "Colosseum & Forum VIP Tour",
              description: "Skip-the-line access exploration of ancient Rome's political core.",
              location: "Piazza del Colosseo"
            }
          ],
          evening: [
            {
              time: "07:00 PM",
              title: "Trastevere Food Stroll",
              description: "Walking tour sampling historic Roman street food across cobblestone lanes."
            }
          ]
        }
      }
    ],
    attractions: [
      {
        id: "colosseum",
        name: "The Colosseum",
        category: "historical",
        description: "The world's largest ancient amphitheater built under the Flavian dynasty.",
        location: {
          latitude: 41.8902,
          longitude: 12.4922
        },
        rating: 4.9,
        media: [
          {
            url: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=800&q=80",
            type: "image"
          }
        ]
      },
      {
        id: "trevi-fountain",
        name: "Trevi Fountain",
        category: "culture",
        description: "An iconic Baroque masterpiece where tossing a coin ensures your eventual return to Rome.",
        location: {
          latitude: 41.9009,
          longitude: 12.4833
        },
        rating: 4.8,
        media: [
          {
            url: "https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?auto=format&fit=crop&w=800&q=80",
            type: "image"
          }
        ]
      }
    ],
    route: {
      source: {
        id: "fco-airport",
        name: "Leonardo da Vinci–Fiumicino Airport",
        coordinates: {
          latitude: 41.7999,
          longitude: 12.2466
        },
        description: "Primary international entry aviation hub of Italy.",
        media: [
          {
            url: "https://images.unsplash.com/photo-1558204692-5f402fe220b9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            type: "image"
          }
        ],
        activities: ["Baggage claim", "Private driver greeting"]
      },
      stops: [
        {
          id: "termini",
          name: "Roma Termini Station",
          coordinates: {
            latitude: 41.9014,
            longitude: 12.5020
          },
          description: "The pulsing modern transit nexus linking Rome's distinct layers.",
          media: [
            {
              url: "https://images.unsplash.com/photo-1520175480921-4edfa2983e0f?auto=format&fit=crop&w=800&q=80",
              type: "image"
            }
          ],
          activities: ["Metro pass purchase", "Espresso pit-stop"]
        }
      ],
      destination: {
        id: "pantheon-district",
        name: "Pantheon Central Plaza",
        coordinates: {
          latitude: 41.8986,
          longitude: 12.4769
        },
        description: "The pristine core base of classical city exploration.",
        media: [
          {
            url: "https://images.unsplash.com/photo-1531572753322-ad063cecc140?auto=format&fit=crop&w=800&q=80",
            type: "image"
          }
        ],
        activities: ["Piazza exploration", "Architectural study"]
      }
    },
    hotels: [
      {
        name: "Singer Palace Hotel Rome",
        category: "luxury",
        priceRange: "€400-650/night",
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80"
      }
    ],
    food: [
      {
        name: "Cucina Romana Masterclass",
        description: "Rich, creamy yolk sauces and slow-simmered regional meats.",
        mustTry: ["Rigatoni alla Carbonara", "Cacio e Pepe", "Artisanal Pistachio Gelato"],
        image: "https://images.unsplash.com/photo-1546549032-9571cd6b27df?auto=format&fit=crop&w=800&q=80"
      }
    ],
    tips: [
      {
        title: "Water trick",
        description: "Carry a reusable bottle. Rome is full of continuous-flow fountains ('Nasoni') offering clean, free cold drinking water."
      },
      {
        title: "Ticket Rules",
        description: "Colosseum and Vatican entries sell out weeks early; secure your slots online at least 30 days before arrival."
      }
    ],
    reviews: [
      {
        userName: "Matteo",
        rating: 5,
        comment: "Eating carbonara right outside the Pantheon at sunset is magic.",
        date: "2026-05-18"
      }
    ],
    booking: {
      duration: "4 Days / 3 Nights",
      bestSeason: "Spring / Autumn",
      estimatedBudget: {
        currency: "EUR",
        amount: 950
      },
      availablePackages: ["Classic Archaeology Tour", "Roman Culinary Experience"]
    }
  },
  {
    id: "nyc-5-days",
    title: "New York City Urban Adventure",
    thumbnail: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=1200&q=80",
    shortDescription: "Experience the non-stop energy of the Big Apple, from Broadway lights to Central Park avenues.",
    description: `
    New York City is a global hub of culture, entertainment, art, and finance.
    Walk through diverse neighborhoods, look out from world-famous skyscrapers, 
    and enjoy iconic theatrical productions.
    `,
    country: "United States",
    city: "New York",
    gallery: [
      {
        day: 1,
        title: "Midtown Neon Lights",
        description: "Standing in the heart of Times Square as night falls over Manhattan.",
        media: [
          {
            url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
            type: "image",
            caption: "Manhattan Grid at Twilight"
          },
          {
            url: "https://www.youtube.com/watch?v=aca-m_ijKF8",
            type: "video",
            caption: "Vibrant New York Guide"
          }
        ]
      },
      {
        day: 2,
        title: "Central Park Exploration",
        description: "A peaceful retreat from the fast-paced concrete jungle.",
        media: [
          {
            url: "https://images.unsplash.com/photo-1702569111308-d02dcc169afd?q=80&w=1051&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            type: "image",
            caption: "The Mall Pathway in Central Park"
          }
        ]
      }
    ],
    itinerary: [
      {
        day: 1,
        title: "Skylines & Theater Rows",
        activities: {
          morning: [
            {
              time: "07:30 AM",
              title: "JFK Terminal Transit",
              description: "Fast express rail link connection straight into central Manhattan."
            }
          ],
          afternoon: [
            {
              time: "01:45 PM",
              title: "Summit One Vanderbilt",
              description: "A multi-sensory observation deck featuring beautiful mirrored rooms.",
              location: "Midtown East"
            }
          ],
          evening: [
            {
              time: "08:00 PM",
              title: "Broadway Theatre Performance",
              description: "Watch a world-class live production in the historic theater district."
            }
          ]
        }
      }
    ],
    attractions: [
      {
        id: "statue-liberty",
        name: "Statue of Liberty",
        category: "historical",
        description: "America's monumental symbol of freedom standing proud in New York Harbor.",
        location: {
          latitude: 40.6892,
          longitude: -74.0445
        },
        rating: 4.8,
        media: [
          {
            url: "https://images.unsplash.com/photo-1699025095617-5570bc591fb4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            type: "image"
          }
        ]
      },
      {
        id: "the-met",
        name: "The Metropolitan Museum of Art",
        category: "culture",
        description: "Over 5,000 years of global artistic excellence housed along Museum Mile.",
        location: {
          latitude: 40.7794,
          longitude: -73.9632
        },
        rating: 4.9,
        media: [
          {
            url: "https://images.unsplash.com/photo-1753363754464-58a41b3b954b?q=80&w=1174&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            type: "image"
          }
        ]
      }
    ],
    route: {
      source: {
        id: "jfk-airport",
        name: "John F. Kennedy International Airport",
        coordinates: {
          latitude: 40.6413,
          longitude: -73.7781
        },
        description: "The primary global entry point into New York City.",
        media: [
          {
            url: "https://images.unsplash.com/photo-1773140149705-3bd846fd50a9?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            type: "image"
          }
        ],
        activities: ["Customs arrival", "LGA/JFK shuttle linkage"]
      },
      stops: [
        {
          id: "grand-central",
          name: "Grand Central Terminal",
          coordinates: {
            latitude: 40.7527,
            longitude: -73.9772
          },
          description: "An architectural masterpiece and major commuter hub featuring a celestial ceiling.",
          media: [
            {
              url: "https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?auto=format&fit=crop&w=800&q=80",
              type: "image"
            }
          ],
          activities: ["Oyster Bar lunch", "Architecture viewing"]
        }
      ],
      destination: {
        id: "times-square-core",
        name: "Times Square Hub",
        coordinates: {
          latitude: 40.7580,
          longitude: -73.9855
        },
        description: "The bright, electronic heart of midtown Manhattan.",
        media: [
          {
            url: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=800&q=80",
            type: "image"
          }
        ],
        activities: ["Broadway viewing", "Red Steps seating"]
      }
    },
    hotels: [
      {
        name: "The Plaza Hotel New York",
        category: "luxury",
        priceRange: "$750-1200/night",
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80"
      }
    ],
    food: [
      {
        name: "New York Classic Delicatessen & Slices",
        description: "Authentic coal-fired pizza crusts and loaded local pastrami sandwiches.",
        mustTry: ["Manhattan Style Thin Crust Pizza", "Everything Bagel with Lox", "Classic NY Cheesecake"],
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80"
      }
    ],
    tips: [
      {
        title: "Subway Navigation",
        description: "Tap your phone or credit card using OMNY at the turnstiles for fast, cashless entry."
      },
      {
        title: "Tipping Culture",
        description: "Standard restaurant tipping in New York ranges between 18% to 22% of the total bill."
      }
    ],
    reviews: [
      {
        userName: "Sarah",
        rating: 5,
        comment: "The fast-paced energy here is absolutely contagious. Highly recommend visiting in the Fall!",
        date: "2026-04-02"
      }
    ],
    booking: {
      duration: "5 Days / 4 Nights",
      bestSeason: "September to November",
      estimatedBudget: {
        currency: "USD",
        amount: 1800
      },
      availablePackages: ["Manhattan Highlights Pack", "Broadway & Fine Arts Pass"]
    }
  },
  {
    id: "bali-6-days",
    title: "Bali Tropical Paradise Tour",
    thumbnail: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80",
    shortDescription: "Find peace along deep volcanic rice terraces, historic sea temples, and rich coastal culture.",
    description: `
    Bali, the legendary Island of the Gods, combines rich spirituality with scenic 
    landscapes, volcanic peaks, pristine sandy shorelines, and internationally 
    renowned luxury resorts.
    `,
    country: "Indonesia",
    city: "Bali",
    gallery: [
      {
        day: 1,
        title: "The Cultural Core of Ubud",
        description: "Walking through early morning mist draping over deep terraced valleys.",
        media: [
          {
            url: "https://images.unsplash.com/photo-1633820313053-fa030b13ef94?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            type: "image",
            caption: "Tegalalang Rice Terraces"
          },
          {
            url: "https://www.youtube.com/watch?v=zHcr32gRRCs",
            type: "video",
            caption: "Cinematic Journey Across Bali"
          }
        ]
      },
      {
        day: 2,
        title: "Cliffside Architecture",
        description: "Ancient spiritual sanctuaries perched high above roaring ocean swells.",
        media: [
          {
            url: "https://images.unsplash.com/photo-1539367628448-4bc5c9d171c8?auto=format&fit=crop&w=800&q=80",
            type: "image",
            caption: "Uluwatu Sunset Horizon"
          }
        ]
      }
    ],
    itinerary: [
      {
        day: 1,
        title: "Ubud Rain Canopy Welcomes",
        activities: {
          morning: [
            {
              time: "09:30 AM",
              title: "Denpasar Airport Greeting",
              description: "Meet your private local guide for a scenic air-conditioned drive up into Ubud."
            }
          ],
          afternoon: [
            {
              time: "02:30 PM",
              title: "Sacred Monkey Forest Sanctuary",
              description: "Walk under jungle canopies housing hundreds of long-tailed macaques.",
              location: "Padangtegal Village"
            }
          ],
          evening: [
            {
              time: "06:30 PM",
              title: "Ubud Royal Palace Dance",
              description: "Watch complex, stylized traditional Legong dances by torchlight."
            }
          ]
        }
      }
    ],
    attractions: [
      {
        id: "tanah-lot",
        name: "Tanah Lot Temple",
        category: "historical",
        description: "An iconic offshore religious rock formation, highly famous for ocean photography at sunset.",
        location: {
          latitude: -8.6212,
          longitude: 115.0868
        },
        rating: 4.8,
        media: [
          {
            url: "https://images.unsplash.com/photo-1573790387438-4da905039392?auto=format&fit=crop&w=800&q=80",
            type: "image"
          }
        ]
      },
      {
        id: "tegalalang",
        name: "Tegalalang Rice Terraces",
        category: "culture",
        description: "Sloping valley paddies managed via the traditional, centuries-old Balinese subak irrigation system.",
        location: {
          latitude: -8.4326,
          longitude: 115.2786
        },
        rating: 4.7,
        media: [
          {
            url: "https://images.unsplash.com/photo-1501183007986-d0d080b147f9?auto=format&fit=crop&w=800&q=80",
            type: "image"
          }
        ]
      }
    ],
    route: {
      source: {
        id: "dps-airport",
        name: "Ngurah Rai International Airport",
        coordinates: {
          latitude: -8.7481,
          longitude: 115.1662
        },
        description: "The primary international gateway to the Indonesian island province of Bali.",
        media: [
          {
            url: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80",
            type: "image"
          }
        ],
        activities: ["Visa processing", "Local SIM card setup"]
      },
      stops: [
        {
          id: "ubud-center",
          name: "Ubud Artistic Center",
          coordinates: {
            latitude: -8.5069,
            longitude: 115.2625
          },
          description: "The lush inland geographic heart of traditional arts, carving, and organic living.",
          media: [
            {
              url: "https://images.unsplash.com/photo-1546484475-7f7bd55792da?auto=format&fit=crop&w=800&q=80",
              type: "image"
            }
          ],
          activities: ["Art market shopping", "Wellness spa visits"]
        }
      ],
      destination: {
        id: "seminyak-coast",
        name: "Seminyak Beachfront",
        coordinates: {
          latitude: -8.6913,
          longitude: 115.1481
        },
        description: "The premier upscale coastal destination for beach clubs and ocean dinners.",
        media: [
          {
            url: "https://images.unsplash.com/photo-1672708484804-1f288bb22733?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            type: "image"
          }
        ],
        activities: ["Sunset beach clubs", "Seafood dining"]
      }
    },
    hotels: [
      {
        name: "Hanging Gardens of Bali Resort",
        category: "luxury",
        priceRange: "IDR 6,500,000-11,000,000/night",
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80"
      }
    ],
    food: [
      {
        name: "Balinese Ceremonial Feast",
        description: "Complex, locally source hand-ground spice pastes roasted over wood fire pits.",
        mustTry: ["Nasi Goreng Special", "Sate Lilit (Minced Seafood Skewers)", "Traditional Bebek Betutu"],
        image: "https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&w=800&q=80"
      }
    ],
    tips: [
      {
        title: "Temple Dress",
        description: "Always tie a traditional sarong around your waist before passing inside Balinese temple courtyards."
      },
      {
        title: "Hydration Note",
        description: "Drink only bottled water or filtered water ('Bali Belly' prevention). Avoid unfiltered tap water."
      }
    ],
    reviews: [
      {
        userName: "David",
        rating: 5,
        comment: "An absolute dream. The hospitality of the Balinese people is completely unmatched globally.",
        date: "2026-06-22"
      }
    ],
    booking: {
      duration: "6 Days / 5 Nights",
      bestSeason: "Dry Season (May to September)",
      estimatedBudget: {
        currency: "IDR",
        amount: 12500000
      },
      availablePackages: ["Eco-Wellness Retreat", "Tropical Adventure & Surf Tour"]
    }
  }
];