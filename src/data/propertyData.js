import heroImg from "../Assets/suncity-monarch-hero.png";
import vid1 from "../Assets/VD1.mp4";
import vid2 from "../Assets/VD2.mp4";
import extraImg from "../Assets/Img.png";
import plan from "../Assets/Plan.png";
import SuncityMasterplan from "../Assets/SuncityMasterPlan.png";
import suncity1 from "../Assets/suncity1.png";
import suncity2 from "../Assets/suncity2.png";
import suncity4 from "../Assets/suncity4.png";
import emaar from "../Assets/emaar-serenity-map.jpg";
import emaar2 from "../Assets/serenity-lake-1.jpg";
import emaar3 from "../Assets/serenity-main.jpg";
import ConscientElaira from "../Assets/ConscientElaira.jpg";
import ConscientElaira2 from "../Assets/ConscientElaira2.png";
import ConscientElaira3 from "../Assets/ConscientElaira3.png";
import ConscientElaira4 from "../Assets/ConscientElaira4.jpg";
import ConscientElairaMap from "../Assets/ConscientElairaMap.png";
import ConscientElairaPlan from "../Assets/ConscientElairaPlan.png";
import ConscientElairaPlan2 from "../Assets/ConscientElairaPlan2.png";

export const properties = [
  {
    id: "serenity-hills-emaar",
    developer: "Emaar",
    name: "Serenity Hills",
    tagline: "Come Home to Acres of Nature",
    location: "Sector 86, Gurugram",
    price: "₹2.98 Cr - ₹5.68 Cr",
    image: emaar3,
    gallery: {
      images: [emaar, emaar3, emaar2 ],
      // videos: ["/Assets/VD1.mp4"],
    },
    videoUrl: "https://youtu.be/WYWZvjNQ16w",
    brochureUrl: "/docs/emaar-serenity-hills-brochure.pdf",
    paymentPlanUrl: "/docs/emaar-payment-plan.pdf",
    overview:
      "Spread across 25+ acres, Serenity Hills is a residential sanctuary featuring 8 acres of central greens and an IGBC Platinum Pre-Certified environment. Every home features full-height glass corners and stretched balconies to ensure a deep connection with nature.",
    configurations: [
      {
        type: "3 BHK Small",
        size: "₹2.98 to ₹3.32 Cr*",
        layout: "3BHK + 3T + Utility",
      },
      {
        type: "3 BHK Large",
        size: "₹3.87 to ₹4.41 Cr*",
        layout: "1218.25 sq.ft. Carpet + Niche",
      },
      {
        type: "4 BHK + Servant",
        size: "₹5.27 to ₹5.68 Cr*",
        layout: "206 Units Available",
      },
    ],
    amenities: {
      mind: [
        "8-Acre Central Green Zone",
        "Waterfront Walkway",
        "Waterbody Promenade",
      ],
      body: [
        "75,000 sq.ft. Clubhouse",
        "Wellness Zones",
        "Play Areas",
        "Sit-outs",
      ],
      soul: [
        "IGBC Platinum Living",
        "Waterfront Sit-outs",
        "Sweeping Green Views",
      ],
    },
    specifications: {
      flooring: "Imported Marble in Living/Dining",
      kitchen: "Modular Kitchen with Hob & Chimney",
      windows: "Full-height glass corners",
      structure: "7 Majestic Majestic Towers",
    },
    rera: [
      "RC/REP/HARERA/GGM/993/725/2025/96",
      "RC/REP/HARERA/GGM/994/726/2025/97",
    ],
    faqs: [
      {
        q: "Where is Serenity Hills?",
        a: "Located in the prime Sector 86 of Gurugram.",
      },
      {
        q: "What is the RERA status?",
        a: "IGBC Platinum Pre-Certified and RERA Registered.",
      },
    ],
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509.344464195254!2d76.9691883!3d28.4088926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d3d5786e248b1%3A0xe54199106e236f73!2sSector%2086%2C%20Gurugram%2C%20Haryana!5e0!3m2!1sen!2sin!4v1706123456789!5m2!1sen!2sin",
  },
  {
    id: "monarch-suncity",
    developer: "Suncity",
    name: "Suncity Monarch",
    tagline: "The Largest Sports Haven in Gurugram",
    location: "Sector 78, Shikohpur, Gurugram",
    price: "Pricing on Request",
    image: heroImg,
    gallery: {
      images: [heroImg, extraImg, plan, SuncityMasterplan, suncity1, suncity2],
      videos: [vid2],
    },
    overview:
      "A massive 16-acre landmark with only 5 towers (Regalia, Imperial, Crown, Altair, Majestic) and 92.5% open area. Monarch features a 3.15-acre Mega Sports Complex and a 1.25 Lakh sq.ft. clubhouse—one of the grandest in North India.",
    configurations: [
      {
        type: "3 BHK + Study",
        size: "2,350 sq.ft. (Saleable)",
        layout: "3BHK + 3T + Study + Private Usable Area: 1714 sq.ft.",
      },
      {
        type: "4 BHK + Servant",
        size: "3,150 sq.ft. (Saleable)",
        layout: "4BHK + 4T + Servant + 10 Ft Wide Balcony Deck",
      },
    ],
    amenities: {
      mind: ["1.25 Lakh sq.ft. Club", "Podcast Studio", "Private Theatre", "Library & Lounge", "Banquet Hall"],
      body: [
        "3.15 Acre Sports Zone",
        "Olympic-Size Infinity Pool",
        "Bowling Alley",
        "Boxing Ring & Shooting Range",
        "Zumba & Pilates Room",
        "Football Field & Cricket Net"
      ],
      soul: [
        "92.5% Open Area",
        "Dedicated Temple",
        "100% Ground Vehicle Free Zone",
        "2300 Mtr Jogging Track",
        "Reflexology Path"
      ],
    },
    specifications: {
      height: "3.48 Mts Slab to Slab",
      flooring: "Imported Marble (Living/Dining), Laminated Wood (Bedrooms)",
      kitchen: "Modular Kitchen with Hob & Chimney",
      cooling: "VRV Air-Conditioning System",
      doors: "Engineered Wood with Digital Locks",
      connectivity: "2 Mins from NH-8 / 3 Mins from Dwarka Expy",
    },
    rera: ["HRRERA Pending/Applied"],
    landmarks: [
      "NH-8 (2 Min)", 
      "Hyatt Regency (2 Min)", 
      "MatriKiran High School (5 Min)", 
      "Aarvy Healthcare (8 Min)", 
      "IGI Airport (30 Min)"
    ],
    faqs: [
      { q: "What is the total area?", a: "16 Acres with only 5 exclusive towers." },
      { q: "What are the special balcony sizes?", a: "The apartments feature massive 10 Ft. wide Balcony Decks." },
      { q: "Is the project vehicle-free?", a: "Yes, it features a 100% Ground Vehicle Free Zone for safety and peace." }
    ],
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509.324317181045!2d76.9856381!3d28.3813735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d3d5964f693e7%3A0xc3415e8105b3c552!2sSuncity%20Monarch!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
  },

  {
    id: "elaira-conscient",
    developer: "Conscient",
    name: "Conscient Elaira",
    tagline: "A Vision of Boundless Luxury",
    location: "HSIIDC, Sector 80, Gurugram",
    price: "Starting ₹3.00 Cr",
    image: ConscientElaira,
    gallery: {
      images: [ConscientElaira, ConscientElaira2, ConscientElaira3, ConscientElaira4, ConscientElairaMap, ConscientElairaPlan],
      videos: [], // Add your Elaira-specific video path here when ready
    },
    overview:
      "Designed by global architects Benoy, Hong Kong, Elaira Residences offers an unparalleled lifestyle balanced between tranquility and connectivity. Featuring CTFA® Technology (Clean Technology for Fresh Air) and IGBC Pre-Platinum certification, these residences are crafted for multidimensional wellbeing near the Aravalli Hills.",
    configurations: [
      {
        type: "Type A (3 BHK)",
        size: "2,045 sq.ft.",
        layout: "Phase I Sold Out | Intelligent Design",
      },
      {
        type: "Type E (Large)",
        size: "2,785 sq.ft.",
        layout: "3BHK + 4T + Utility | Optimum Ventilation",
      },
    ],
    amenities: {
      mind: [
        "Architecture by Benoy HK",
        "Library & Lounge",
        "Multiple Business Centres",
        "Open Air Theatre",
        "Unique Crown Facade",
      ],
      body: [
        "First-of-its-kind Padel Court", 
        "2 Swimming Pools", 
        "Badminton Court", 
        "State-of-the-art Gym",
        "Kids Play Area & Cafe"
      ],
      soul: [
        "CTFA® Powered Fresh Air Homes",
        "IGBC Pre-Platinum Certified",
        "Aravalli Hill Views",
        "Landscaped Podium Experience",
        "HSIIDC Tranquil Hub",
      ],
    },
    specifications: {
      height: "G+34 Floors (116.2m)",
      floorToFloor: "3.2m Height",
      basement: "3 Levels (4.5m each)",
      parking: "2 Dedicated Spaces per Unit",
      tech: "CTFA® Technology Powered",
      construction: "NCC (International Standards)",
    },
    rera: ["RERA-GRG-1584-2024"],
    faqs: [
      {
        q: "What are the tower specifications?",
        a: "Elaira features G+34 floors rising to 116.2m, with a 3.2m floor-to-floor height and 3 massive basement levels.",
      },
      {
        q: "Who is the developer?",
        a: "Conscient Infrastructure, with 40+ years of excellence and 12,000+ homes delivered across India.",
      },
      {
        q: "What is special about the air quality?",
        a: "The project uses CTFA® Technology (Clean Technology for Fresh Air) to ensure a pollution-free living environment.",
      },
    ],
    landmarks: [
      "NH-8 Connectivity",
      "Global Business Park",
      "Aravalli Hills View",
      "HSIIDC Planned Sector",
    ],
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3510.655!2d76.9912!3d28.3756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDIyJzMyLjIiTiA3NsKwNTknMjguMiJF!5e0!3m2!1sen!2sin!4v1706123456789",
  }
];
