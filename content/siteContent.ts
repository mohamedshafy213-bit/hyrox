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
    { name: "NUTRITION 101", href: "#nutrition101" },
  ] as NavLink[],
};

// ===== SECTION 1: HERO (id="intro") =====
export const heroContent = {
  h1: "KHAIRY HYBRID APP",
  subtitle: "Hybrid Athlete Training, Nutrition & Community",
  ctaText: "UNLOCK ONE WEEK FREE",
  bgImage: "/images/hero.jpg",
  bgAlt: "Khairy Hybrid athlete running outdoors",
};

// ===== SECTION 2: INTRO VIDEO (id="introvid") =====
export const introVideoContent = {
  headingLine1: "LEARN MORE ABOUT THE",
  headingLine2: "KHAIRY HYBRID METHOD",
  subtitle: "Achieve your highest level of fitness with the hybrid athlete program.",
  posterImage: "/images/video-poster.jpg",
  posterAlt: "Intro video preview poster showcasing athlete training",
  videoSrc: "/videos/intro.mp4",
};

// ===== SECTION 2.5: TRANSITION STATEMENT & TICKER =====
export const transitionContent = {
  heading: "You Don’t have to sacrifice strength for running",
  paragraph:
    "As someone who loves to run and lift weights, I can relate to the struggle to balance both. However, with the right nutrition, workouts and recovery, you can achieve both.",
};

// ===== SECTION 3: ABOUT THE SYSTEM (id="aboutthesystem") =====
export const systemContent = {
  headingLine1: "THE SYSTEM BEHIND",
  headingLine2: "KHAIRY HYBRID",
  subHeading: "Khairy Hybrid Daily",
  paragraphs: [
    "My weekly training, nutrition, and mentorship program designed to help you become stronger, build endurance, and create habits that carry into every area of your life.",
    "This is how I train, fuel, recover, and pursue the standard of Train Beyond Limits as an athlete and entrepreneur.",
  ],
  badge: {
    image: "/images/badge.jpg",
    imageAlt: "Khairy Hybrid community badge",
    title: "KH",
    subtitle: "DAILY",
  },
  phones: {
    workoutVideo: "/images/phone-workout-1.jpg",
    workoutVideoAlt: "Phone showing workout exercise list with sets and reps",
    exerciseList: "/images/phone-workout-2.jpg",
    exerciseListAlt: "Phone showing app workout video and nutrition tracker",
  },
  bulletPoints: [
    {
      lead: "Structured weekly training",
      text: "that develops strength and endurance together",
    },
    {
      lead: "Practical nutrition guidance",
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
  ctaText: "UNLOCK ONE WEEK FREE",
};

// ===== SECTION 4: SOCIAL PROOF / TRANSFORMATIONS (id="results") =====
// Real client transformation photos in an infinite horizontal marquee
export const resultsContent = {
  heading: "JOIN THOUSANDS OF OTHERS",
  items: [
    { id: "t0", image: "/images/transformation-0.jpg", alt: "Client transformation before and after" },
    { id: "t1", image: "/images/transformation-1.jpg", alt: "Client transformation before and after" },
    { id: "t2", image: "/images/transformation-2.jpg", alt: "Client transformation before and after" },
    { id: "t3", image: "/images/transformation-3.jpg", alt: "Client transformation before and after" },
    { id: "t4", image: "/images/transformation-4.jpg", alt: "Client transformation before and after" },
    { id: "t5", image: "/images/transformation-5.jpg", alt: "Client transformation before and after" },
    { id: "t6", image: "/images/transformation-6.jpg", alt: "Client transformation before and after" },
  ] as TransformationItem[],
};

// ===== SECTION 5: WHAT'S INSIDE / APP PREVIEW (id="whatsinside") =====
export const insideContent = {
  headingLine1: "A LOOK INSIDE",
  headingLine2: "THE APP",
  ctaText: "UNLOCK ONE WEEK FREE",
  slides: [
    {
      id: 1,
      title: "A LOOK INSIDE THE APP",
      subtitle: "Programs designed for you.",
      description:
        "My workout programs focus on building size and strength with bodyweight and resistance training, improving your endurance with running workouts, and increasing your recovery with dedicated mobility sessions.",
      athleteImage: "/images/inside-athlete-1.jpg",
      phoneBack: "/images/app-profile-1.jpg",
      phoneFront: "/images/app-program-1.jpg",
    },
    {
      id: 2,
      title: "A LOOK INSIDE THE APP",
      subtitle: "Nutrition guides.",
      description:
        "My app comes complete with 8 nutrition lessons designed to provide you a foundation to nutrition education.",
      athleteImage: "/images/inside-athlete-2.jpg",
      phoneBack: "/images/app-profile-2.jpg",
      phoneFront: "/images/app-program-2.jpg",
    },
    {
      id: 3,
      title: "A LOOK INSIDE THE APP",
      subtitle: "Coaching & Communities",
      bullets: [
        "Q&As with me",
        "Share your success with me",
        "Tell me what content you want to see",
      ],
      athleteImage: "/images/inside-athlete-3.jpg",
      phoneBack: "/images/app-profile-3.jpg",
      phoneFront: "/images/app-program-3.jpg",
    },
    {
      id: 4,
      title: "A LOOK INSIDE THE APP",
      subtitle: "Bonus features to help you succeed",
      bullets: [
        "Running guidance and resources to improve your endurance training and run efficiency",
        "Supplement recommendations",
        "Exclusive shopping lists, recipes, and meal prep ideas",
      ],
      athleteImage: "/images/inside-athlete-4.jpg",
      phoneBack: "/images/app-profile-1.jpg",
      phoneFront: "/images/app-program-1.jpg",
    },
  ] as InsideSlide[],
};

// ===== SECTION 6: THE METHOD (id="goonemoremethod") =====
export const methodContent = {
  headingLine1: "THE KHAIRY HYBRID",
  headingLine2: "METHOD",
  paragraph:
    "The Go One More method is rooted in a simple but demanding idea: growth happens in the space just beyond where you want to quit. It's consistently choosing the hard right over the easy wrong, where small choices compound into a meaningfully different life over time. The framework isn't about doing more; its foundation is focus and intention. We get to choose: set goals based on what the world wants for us, or eliminate the noise and pursue purpose rooted in the values and beliefs that are true to who we are.",
  ctaText: "UNLOCK ONE WEEK FREE",
  frameworkTitle: "THE FRAMEWORK",
  frameworkItems: [
    { num: "1", title: "Honoring Commitments" },
    { num: "2", title: "Athletic Performance" },
    { num: "3", title: "Nutrition as a Daily Choice" },
    { num: "4", title: "Consistency Over Intensity" },
    { num: "5", title: "Family and Presence" },
    { num: "6", title: "Value-based and Purpose-driven" },
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
      image: "/images/step-1.jpg",
      imageAlt: "App workout exercise list screen",
    },
    {
      num: 2,
      title: "FOLLOW THE DAILY PROGRAM",
      description:
        "Complete the weekly training, apply the nutrition guidance, and learn the principles behind the work.",
      image: "/images/step-2.jpg",
      imageAlt: "App profile and program overview screen",
    },
    {
      num: 3,
      title: "REACH YOUR GOALS",
      description:
        "Develop the strength, endurance, discipline, and sustainable habits that help you Train Beyond Limits in every area of life.",
      image: "/images/step-3.jpg",
      imageAlt: "App training progress and achievements screen",
    },
  ] as StepItem[],
  ctaText: "UNLOCK ONE WEEK FREE",
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
  ctaText: "UNLOCK ONE WEEK FREE",
};

// ===== FOOTER =====
export const footerContent = {
  brandName: "KHAIRY HYBRID",
  copyright: `© ${new Date().getFullYear()} KHAIRY HYBRID. All rights reserved.`,
  tagline: "TRAIN BEYOND LIMITS",
  whatsappText: "Need help or have questions? Chat with our team on WhatsApp",
};
