// =============================================================================
// SITE CONTENT CONFIGURATION
// All text content, image paths, video paths, and labels for the landing page.
// Edit the values below to update any copy or media across the entire website.
// =============================================================================

export interface NavLink {
  name: string;
  href: string;
}

export interface BulletPoint {
  lead: string;
  text: string;
}

export interface TransformationItem {
  id: string;
  image: string;
  alt: string;
}

export interface InsideSlide {
  id: number;
  title: string;
  subtitle: string;
  description?: string;
  bullets?: string[];
  athleteImage: string;
  phoneBack: string;
  phoneFront: string;
}

export interface FrameworkItem {
  num: string;
  title: string;
}

export interface StepItem {
  num: number;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}

// ===== BRAND SETTINGS =====
// Edit this constant to change the company name, slogan, and logos
export const BRAND = {
  name: "KHAIRY HYBRID",
  programName: "Khairy Hybrid",
  slogan: "TRAIN BEYOND LIMITS",
  logo: "/images/logo.svg",
  logoRed: "/images/logo-red.svg",
  logoAlt: "Train Beyond Limits Logo",
  logoWidth: 150,
  logoHeight: 90,
  whatsappUrl: "https://wa.me/message/OW7BVKQQEABYK1",
};

// ===== NAVIGATION LINKS =====
// Header and mobile navigation anchor items
export const navigationContent = {
  links: [
    { name: "INTRO", href: "#introvid" },
    { name: "ABOUT THE SYSTEM", href: "#aboutthesystem" },
    { name: "WHAT'S INSIDE", href: "#whatsinside" },
    { name: "THE METHOD", href: "#goonemoremethod" },
  ] as NavLink[],
};

// ===== SECTION 1: HERO (id="intro") =====
export const heroContent = {
  h1: "KHAIRY HYBRID APP",
  subtitle: "Hybrid Athlete Training, Nutrition & Community",
  ctaText: "BEYOND YOUR LIMITS STARTS HERE",
  bgImage: "/images/hero.jpg",
  bgAlt: "Khairy Hybrid athlete running outdoors",
};

// ===== SECTION 2: INTRO VIDEO (id="introvid") =====
export const introVideoContent = {
  headingLine1: "LEARN MORE ABOUT THE",
  headingLine2: "KHAIRY HYBRID METHOD",
  subtitle: "Achieve your highest level of fitness with the hybrid athlete program.",
  posterImage: "/images/start/3.jpeg",
  posterAlt: "Intro video preview poster showcasing athlete training",
  videoSrc: "/videos/khairy.mp4",
};

// ===== SECTION 2.5: TRANSITION STATEMENT & TICKER =====
export const transitionContent = {
  heading: "",
  paragraph:
    "",
};

// ===== SECTION 3: ABOUT THE SYSTEM (id="aboutthesystem") =====
export const systemContent = {
  headingLine1: "THE SYSTEM BEHIND",
  headingLine2: "KHAIRY HYBRID",
  subHeading: "",
  paragraphs: [
    "My weekly training, nutrition, and mentorship program designed to help you become stronger, build endurance, and create habits that carry into every area of your life.",
    "This is how I train, fuel, recover, then customize every client’s training to pursue the Train Beyond Limits standard.",
  ],
  badge: {
    image: "/images/badge.jpg",
    imageAlt: "Khairy Hybrid community badge",
    title: "",
    subtitle: "",
  },
  phones: {
    workoutVideo: "/images/phone-workout-1.jpg",
    workoutVideoAlt: "Phone showing Day 4 workout exercises and intervals",
    exerciseList: "/images/phone-workout-2.jpg",
    exerciseListAlt: "Phone showing Mobility Day 1 exercises and routine",
  },
  bulletPoints: [
    {
      lead: "Structured weekly training",
      text: "that develops strength and endurance together",
    },
    {
      lead: "Practical nutrition plan & guidance",
      text: "including recipes to help you fuel training and everyday life",
    },
    {
      lead: "Direct mentorship from me",
      text: "on performance, discipline, and sustainable habits",
    },
    {
      lead: "A repeatable framework",
      text: "built for long-term consistency",
    },
  ] as BulletPoint[],
  ctaText: "BEYOND YOUR LIMITS STARTS HERE",
};

// ===== SECTION 4: SOCIAL PROOF / TRANSFORMATIONS (id="results") =====
// Real client transformation photos in an infinite horizontal marquee
export const resultsContent = {
  heading: "THEY TRAINED BEYOND LIMITS. SO CAN YOU.",
  items: [
    { id: "t1", image: "/images/transforamtions/transformation-1.jpeg", alt: "Client transformation 1" },
    { id: "t2", image: "/images/transforamtions/transformation-2.jpeg", alt: "Client transformation 2" },
    { id: "t3", image: "/images/transforamtions/transformation-3.jpeg", alt: "Client transformation 3" },
    { id: "t4", image: "/images/transforamtions/transformation-4.jpeg", alt: "Client transformation 4" },
    { id: "t5", image: "/images/transforamtions/transformation-5.jpeg", alt: "Client transformation 5" },
    { id: "t6", image: "/images/transforamtions/transformation-6.jpeg", alt: "Client transformation 6" },
    { id: "t7", image: "/images/transforamtions/transformation-7.jpeg", alt: "Client transformation 7" },
    { id: "t8", image: "/images/transforamtions/transformation-8.jpeg", alt: "Client transformation 8" },
  ] as TransformationItem[],
};

// ===== SECTION 5: WHAT'S INSIDE / APP PREVIEW (id="whatsinside") =====
export const insideContent = {
  headingLine1: "A LOOK INSIDE",
  headingLine2: "THE APP",
  ctaText: "BEYOND YOUR LIMITS STARTS HERE",
  slides: [
    {
      id: 1,
      title: "A LOOK INSIDE THE APP",
      subtitle: "Programs designed for you.",
      description:
        "My workout programs focus on building size and strength with bodyweight and resistance training, improving your endurance with running workouts, and increasing your recovery with dedicated mobility sessions.",
      athleteImage: "/images/inside-athlete-1.jpg",
      phoneBack: "/images/whats-inside/2.jpeg",
      phoneFront: "/images/whats-inside/1.jpeg",
    },
    {
      id: 2,
      title: "A LOOK INSIDE THE APP",
      subtitle: "Customized Nutrition plan .",
      description:
        "My app comes complete with nutrition lessons, and a nutrition plan customized for each client, built around your body, goal, and lifestyle.",
      athleteImage: "/images/inside-athlete-2.jpg",
      phoneBack: "/images/whats-inside/3.jpeg",
      phoneFront: "/images/whats-inside/4.jpeg",
    },
    {
      id: 3,
      title: "A LOOK INSIDE THE APP",
      subtitle: "Bonus features to help you succeed",
      bullets: [
        "Running guidance and resources to improve your endurance training and run efficiency",
        "Supplement recommendations",
        "Exclusive shopping lists, recipes, and meal prep ideas",
      ],
      athleteImage: "/images/inside-athlete-4.jpg",
      phoneBack: "/images/whats-inside/5.jpeg",
      phoneFront: "/images/whats-inside/6.jpeg",
    },
  ] as InsideSlide[],
};

// ===== SECTION 6: THE METHOD (id="goonemoremethod") =====
export const methodContent = {
  headingLine1: "THE KHAIRY HYBRID",
  headingLine2: "METHOD",
  paragraph:
    "The Beyond Your Limits method is simple: real growth happens just past the point where you want to quit. It’s about choosing the hard right over the easy wrong. Small choices, repeated every day, add up to a very different life.You don’t need to do more. You need to focus on what matters and train with purpose. And the goals should be yours, based on what you truly value, not what everyone else expects of you.",
  ctaText: "BEYOND YOUR LIMITS STARTS HERE",
  frameworkTitle: "THE FRAMEWORK",
  frameworkItems: [
    { num: "1", title: "Honoring Commitments" },
    { num: "2", title: "Athletic Performance" },
    { num: "3", title: "Eat With Purpose, Every Day" },
    { num: "4", title: "Consistency Over Intensity" },
    { num: "5", title: "Value-based and Purpose-driven" },


  ] as FrameworkItem[],
  bgImage: "/images/method-bg.jpg",
  bgAlt: "Atmospheric dark gym background",
};

// ===== SECTION 7: START BUILDING YOUR STANDARD (id="steps") =====
export const stepsContent = {
  heading: "START BUILDING YOUR STANDARD",
  steps: [
    {
      num: 1,
      title: "SIGN UP",
      description:
        "Create your account and unlock your first week inside the app.",
      image: "/images/start/5.jpeg",
      imageAlt: "App workout exercise list screen",
    },
    {
      num: 2,
      title: "FOLLOW THE CUSTOMIZED PROGRAM",
      description:
        "Complete the weekly training, apply the nutrition guidance, and learn the principles behind the work.",
      image: "/images/start/4.jpeg",
      imageAlt: "App profile and program overview screen",
    },
    {
      num: 3,
      title: "REACH YOUR GOALS",
      description:
        "Develop the strength, endurance, discipline, and sustainable habits that help you Train Beyond Limits in every area of life.",
      image: "/images/start/1.jpeg",
      imageAlt: "App training progress and achievements screen",
    },
  ] as StepItem[],
  ctaText: "BEYOND YOUR LIMITS STARTS HERE",
};

// ===== SECTION 8: NUTRITION 101 (id="nutrition101") =====
export const nutritionContent = {
  heading: "Nutrition 101",
  paragraphs: [
    "I've said it a hundred times: you can't out-train a bad diet. I don't care how many miles you run or how heavy you lift — if your nutrition isn't dialed in, you're leaving results on the table.",
    "That's why I built this 8-lesson nutrition course into the app. No fad diets. No extreme restriction. Just the same approach I use to fuel marathons, ultras, and heavy lifting sessions — broken down so you can build a plan that actually works for your life.",
  ],
  whatsInsideLabel: "What’s Inside:",
  pillars: [
    "The Nutrition Mindset Shift",
    "Macros 101",
    "Pillar 1: The Foundation",
    "Pillar 2: Consistency Systems",
    "Pillar 3: Fueling Performance",
    "Pillar 4: Body Composition – Building Muscle & Losing Fat",
    "Pillar 5: Long-Term Sustainability",
    "Supplement Guidance",
  ],
  bgImage: "/images/nutrition-bg.jpg",
  bgAlt: "Wholesome high-protein athletic nutrition ingredients and meal prep",
  phoneImage: "/images/nutrition-phone.jpg",
  phoneAlt: "Phone screen showing Nutrition 101 course overview",
  ctaText: "BEYOND YOUR LIMITS STARTS HERE",
};

// ===== FOOTER =====
export const footerContent = {
  brandName: "KHAIRY HYBRID",
  copyright: `© ${new Date().getFullYear()} KHAIRY HYBRID. All rights reserved.`,
  tagline: "TRAIN BEYOND LIMITS",
  whatsappText: "Need help or have questions? Chat with our team on WhatsApp",
};
