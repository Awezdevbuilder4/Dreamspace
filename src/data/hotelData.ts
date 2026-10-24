/**
 * Mountain View Resort - Fictional Demonstration Knowledge Base
 * 
 * NOTE: This is demonstration data for the DreamSpace AI Hotel Receptionist.
 * The AI assistant only responds with verified facts contained within this repository.
 */

export interface RoomType {
  id: string;
  name: string;
  basePricePerNight: number;
  bedConfig: string;
  maxGuests: number;
  sizeSqFt: number;
  image: string;
  description: string;
  amenities: string[];
}

export interface HotelFacility {
  id: string;
  name: string;
  hours: string;
  location: string;
  details: string;
  highlights: string[];
  image?: string;
}

export const MOUNTAIN_VIEW_RESORT = {
  name: "Mountain View Resort",
  classification: "Luxury Alpine Sanctuary & Spa",
  address: "740 Alpine Valley Way, Pine Ridge, CO 80424 (Demonstration Address)",
  tagline: "Serenity elevated above the pines",
  policies: {
    checkInTime: "3:00 PM",
    checkOutTime: "11:00 AM",
    earlyCheckIn: "Subject to availability upon arrival, complimentary luggage storage provided.",
    lateCheckOut: "Available until 1:00 PM upon request (based on availability).",
    quietHours: "10:00 PM to 7:00 AM daily",
    parking: "Complimentary self-parking and heated underground garage with level 2 EV charging stations.",
    wifi: "Free high-speed fiber Wi-Fi throughout all guest rooms, suites, lobby, pool deck, and restaurant. Network: 'MountainView-Guest' (No password or room credentials needed).",
    petPolicy: "Service animals welcome anytime. Well-behaved pets under 40 lbs permitted in select ground-floor Standard Rooms only with advance reservation and a $35/night cleaning surcharge.",
    smokingPolicy: "100% smoke-free property across all indoor areas and outdoor terraces."
  },
  rooms: [
    {
      id: "standard",
      name: "Standard Room",
      basePricePerNight: 140,
      bedConfig: "1 Queen Bed with luxury goose-down bedding",
      maxGuests: 2,
      sizeSqFt: 280,
      image: "/src/assets/images/hero_luxury_resort_1792466466968.jpg",
      description: "Comfortable and elegantly appointed sanctuary overlooking the inner alpine garden and pine grove. Perfect for solo travelers and couples.",
      amenities: [
        "Ensuite bathroom with rain shower",
        "Nespresso coffee bar with artisanal teas",
        "50-inch 4K Smart TV with streaming support",
        "High-speed fiber Wi-Fi",
        "Individual climate control & heating",
        "Organic botanical bath amenities"
      ]
    },
    {
      id: "deluxe",
      name: "Deluxe Mountain Room",
      basePricePerNight: 210,
      bedConfig: "1 King Bed with custom memory-foam mattress",
      maxGuests: 2,
      sizeSqFt: 420,
      image: "/src/assets/images/room_deluxe_suite_1792466467411.jpg",
      description: "Spacious luxury room featuring floor-to-ceiling glass sliding doors opening to a private wooden balcony with uninhibited panoramic views of snow-dusted alpine peaks.",
      amenities: [
        "Private balcony with panoramic mountain vista",
        "Natural stone gas fireplace",
        "Deep soaking tub and separate rainfall shower",
        "Nespresso Vertuo coffee machine & mini-refrigerator",
        "Plush waffle bathrobes and slippers",
        "55-inch 4K Smart TV",
        "High-speed fiber Wi-Fi"
      ]
    },
    {
      id: "family-suite",
      name: "Family Alpine Suite",
      basePricePerNight: 320,
      bedConfig: "1 King Bed in primary bedroom + 2 Twin beds in second bedroom + Queen pullout sleeper sofa",
      maxGuests: 5,
      sizeSqFt: 750,
      image: "/src/assets/images/resort_restaurant_dining_1792466492198.jpg",
      description: "Expansive multi-room suite tailored for families and small groups, featuring a warm communal living room, kitchenette with dining counter, and two full bathrooms.",
      amenities: [
        "Two private bedrooms + living room",
        "Two full bathrooms (one soaking tub, two showers)",
        "Kitchenette with microwave, sink, mini-fridge & dining nook",
        "Two 55-inch 4K Smart TVs with streaming",
        "Board games and cozy alpine reading library",
        "In-suite laundry washer and dryer",
        "High-speed fiber Wi-Fi"
      ]
    }
  ] as RoomType[],
  facilities: [
    {
      id: "pool",
      name: "Heated Alpine Infinity Pool & Vitality Spa",
      hours: "7:00 AM – 10:00 PM daily (All ages) · 10:00 PM – 11:00 PM (Adults 18+ only)",
      location: "Terrace Level (Floor 1)",
      details: "Year-round heated outdoor infinity pool maintained at a soothing 30°C (86°F), seamlessly overlooking pine valleys and peaks. Adjoining cedarwood dry sauna and outdoor bubbling hot tub.",
      highlights: [
        "Heated to 30°C / 86°F year-round",
        "Complimentary plush towel service & heated cabana loungers",
        "Herbal infusion tea and infused citrus water station",
        "Outdoor cedar hot tub and whirlpool"
      ],
      image: "/src/assets/images/hotel_infinity_pool_1792466491695.jpg"
    },
    {
      id: "restaurant",
      name: "The Alpine Table Restaurant & Lounge",
      hours: "Breakfast: 6:30 AM – 10:30 AM · Lunch: 12:00 PM – 2:30 PM · Dinner: 5:30 PM – 10:00 PM",
      location: "Main Lodge (Floor 2, Central Hearth)",
      details: "Farm-to-table culinary destination showcasing regional seasonal produce, artisanal mountain cheeses, and grilled specialties. Casual smart attire. Reservations recommended for dinner.",
      highlights: [
        "Daily gourmet buffet and à la carte breakfast",
        "Extensive vegetarian, vegan, and gluten-free dedicated options",
        "Stone hearth open fireplace and panoramic mountain windows",
        "In-room dining service available during operational hours"
      ],
      image: "/src/assets/images/resort_restaurant_dining_1792466492198.jpg"
    },
    {
      id: "wifi",
      name: "Complimentary High-Speed Fiber Wi-Fi",
      hours: "24 hours / 7 days a week",
      location: "Entire resort property",
      details: "Ultra-fast symmetrical 300 Mbps fiber internet access available across all guest rooms, suites, lobby lounge, poolside sun deck, and dining areas.",
      highlights: [
        "SSID Network: 'MountainView-Guest'",
        "No password, no landing page captcha, no room number required",
        "Sufficient bandwidth for 4K video streaming, Zoom, and remote work",
        "Dedicated guest tech support available through the front desk"
      ]
    }
  ] as HotelFacility[]
};

/**
 * Strictly grounded query response logic for Mountain View Resort demonstration.
 * Never fabricates facts outside the demo knowledge base.
 */
export function queryResortAssistant(userQuestion: string): {
  answer: string;
  sourceCategory: string;
  isGrounded: boolean;
  suggestedAction?: "book_room" | "view_amenity" | "contact_owner";
} {
  const q = userQuestion.toLowerCase().trim();

  // Swimming pool queries
  if (
    q.includes("pool") ||
    q.includes("swim") ||
    q.includes("hot tub") ||
    q.includes("sauna") ||
    q.includes("jacuzzi")
  ) {
    return {
      answer: "Our heated outdoor infinity pool is open daily from 7:00 AM to 10:00 PM for all guests, with an adult-only hour from 10:00 PM to 11:00 PM. The water is maintained year-round at a comfortable 30°C (86°F). You'll find complimentary warm towels, heated lounge chairs, a hot tub, and an herbal tea bar right on the Terrace Level.",
      sourceCategory: "Facilities / Infinity Pool",
      isGrounded: true,
      suggestedAction: "view_amenity"
    };
  }

  // Restaurant & food queries
  if (
    q.includes("restaurant") ||
    q.includes("food") ||
    q.includes("eat") ||
    q.includes("breakfast") ||
    q.includes("dinner") ||
    q.includes("lunch") ||
    q.includes("dining") ||
    q.includes("alpine table") ||
    q.includes("vegan") ||
    q.includes("vegetarian") ||
    q.includes("gluten")
  ) {
    return {
      answer: "The Alpine Table is our farm-to-table restaurant located on the 2nd floor of the Main Lodge. We serve breakfast from 6:30 AM to 10:30 AM, lunch from 12:00 PM to 2:30 PM, and dinner from 5:30 PM to 10:00 PM. We offer dedicated vegetarian, vegan, and gluten-free choices, as well as in-room dining during those hours.",
      sourceCategory: "Facilities / The Alpine Table",
      isGrounded: true,
      suggestedAction: "view_amenity"
    };
  }

  // Wi-Fi queries
  if (
    q.includes("wifi") ||
    q.includes("wi-fi") ||
    q.includes("internet") ||
    q.includes("connection") ||
    q.includes("network") ||
    q.includes("password")
  ) {
    return {
      answer: "Yes, complimentary high-speed fiber Wi-Fi (300 Mbps) is available property-wide, including in all guest rooms, the pool terrace, and restaurant. Simply connect to the network named 'MountainView-Guest'. No password or room login is required.",
      sourceCategory: "Amenities / Free Wi-Fi",
      isGrounded: true
    };
  }

  // Check-in and check-out times
  if (
    q.includes("check in") ||
    q.includes("check-in") ||
    q.includes("check out") ||
    q.includes("check-out") ||
    q.includes("arrival") ||
    q.includes("departure") ||
    q.includes("early check") ||
    q.includes("late check")
  ) {
    return {
      answer: "Standard check-in begins at 3:00 PM and check-out is by 11:00 AM. If you arrive early, you are welcome to store your luggage with us and enjoy our facilities. Late check-out up to 1:00 PM can be requested subject to room availability.",
      sourceCategory: "Resort Policies / Front Desk",
      isGrounded: true
    };
  }

  // Room types, pricing, and rates
  if (
    q.includes("room") ||
    q.includes("rate") ||
    q.includes("price") ||
    q.includes("cost") ||
    q.includes("suite") ||
    q.includes("standard") ||
    q.includes("deluxe") ||
    q.includes("bed") ||
    q.includes("stay") ||
    q.includes("accommodat")
  ) {
    if (q.includes("family")) {
      return {
        answer: "Our Family Alpine Suite is $320 per night. It spans 750 sq ft and comfortably sleeps up to 5 guests with 1 King bed, 2 Twin beds, a pullout sofa, two full bathrooms, and a convenient kitchenette.",
        sourceCategory: "Accommodations / Family Suite",
        isGrounded: true,
        suggestedAction: "book_room"
      };
    }
    if (q.includes("deluxe")) {
      return {
        answer: "Our Deluxe Mountain Room is $210 per night. It features 420 sq ft of space, 1 King bed, a natural stone gas fireplace, deep soaking tub, and a private wooden balcony with panoramic mountain views.",
        sourceCategory: "Accommodations / Deluxe Room",
        isGrounded: true,
        suggestedAction: "book_room"
      };
    }
    if (q.includes("standard")) {
      return {
        answer: "Our Standard Room is $140 per night. It offers 280 sq ft with 1 Queen bed, garden/pine grove views, a modern ensuite bathroom with rain shower, and a Nespresso coffee bar. It accommodates up to 2 guests.",
        sourceCategory: "Accommodations / Standard Room",
        isGrounded: true,
        suggestedAction: "book_room"
      };
    }
    return {
      answer: "Mountain View Resort offers three room types: Standard Rooms ($140/night, 1 Queen bed, garden view), Deluxe Mountain Rooms ($210/night, 1 King bed, private balcony & fireplace), and Family Alpine Suites ($320/night, sleeps up to 5 with 2 bedrooms & kitchenette). All include free high-speed Wi-Fi and pool access.",
      sourceCategory: "Accommodations / Directory",
      isGrounded: true,
      suggestedAction: "book_room"
    };
  }

  // Parking queries
  if (q.includes("park") || q.includes("garage") || q.includes("ev") || q.includes("car")) {
    return {
      answer: "We offer complimentary self-parking on site, as well as a heated underground garage equipped with Level 2 EV charging stations for our guests at no additional charge.",
      sourceCategory: "Resort Policies / Parking",
      isGrounded: true
    };
  }

  // Pet queries
  if (q.includes("pet") || q.includes("dog") || q.includes("cat") || q.includes("animal")) {
    return {
      answer: "Service animals are always welcome. In addition, well-behaved pets under 40 lbs are welcome in designated ground-floor Standard Rooms with advance notice and a $35/night pet sanitation fee.",
      sourceCategory: "Resort Policies / Pet Rules",
      isGrounded: true
    };
  }

  // Smoking queries
  if (q.includes("smoke") || q.includes("smoking") || q.includes("cigarette") || q.includes("vape")) {
    return {
      answer: "Mountain View Resort is a 100% non-smoking property across all indoor guest rooms, suites, balconies, and public terraces.",
      sourceCategory: "Resort Policies / Safety",
      isGrounded: true
    };
  }

  // Booking or reservation question
  if (q.includes("book") || q.includes("reserve") || q.includes("reservation") || q.includes("availability")) {
    return {
      answer: "You can submit an inquiry through our Booking Assistant section below! You can select your check-in/out dates, guest count, and preferred room type (Standard $140, Deluxe $210, or Family Suite $320). Please note this is an interactive demo and does not charge or confirm actual bookings.",
      sourceCategory: "Reservations / Demo",
      isGrounded: true,
      suggestedAction: "book_room"
    };
  }

  // Address or Location
  if (q.includes("where") || q.includes("location") || q.includes("address") || q.includes("map")) {
    return {
      answer: "Mountain View Resort is located at 740 Alpine Valley Way, Pine Ridge, CO 80424 (demonstration address). We are nestled in the alpine pines with easy paved highway access.",
      sourceCategory: "General Information / Location",
      isGrounded: true
    };
  }

  // Unverified / Out of Knowledge base queries (e.g. Casino, Helicopter, Golf course, Spa massages, etc.)
  return {
    answer: "I do not have verified information on that in our Mountain View Resort demonstration directory. To prevent inaccurate details, our AI receptionist is configured to only answer questions backed by official resort records (Standard/Deluxe/Family rooms, our swimming pool, The Alpine Table restaurant, Wi-Fi, and check-in/parking policies). If you are a hotelier, your DreamSpace AI receptionist can be connected directly to your hotel's custom PMS and handbook.",
    sourceCategory: "Unverified / Out of Demo Scope",
    isGrounded: false,
    suggestedAction: "contact_owner"
  };
}

export const SAMPLE_QUESTIONS = [
  "What time does the swimming pool close?",
  "Tell me about the Family Suite and rates",
  "Do you have free Wi-Fi?",
  "What are your check-in and check-out times?",
  "What food is served at The Alpine Table?",
  "Do you have a casino on site?"
];
