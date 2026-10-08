# GO ONE MORE APP — Landing Page

A high-converting, single-page marketing landing site built with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS**.

---

## 🚀 Quick Start

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Configure Environment Variables**:
   Copy `.env.example` to `.env.local` and set your WhatsApp contact details:
   ```env
   NEXT_PUBLIC_WHATSAPP_NUMBER=1234567890
   NEXT_PUBLIC_WHATSAPP_MESSAGE=Hello! I want to unlock one week free for the Go One More App.
   ```

3. **Run Development Server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

4. **Production Build**:
   ```bash
   npm run build
   npm start
   ```

---

## 🎨 Media Asset Reference (Drop-in Guide)

To replace placeholder media with your custom photography and videos, simply replace the files in `/public/images/` and `/public/videos/` with the exact filenames and recommended dimensions below:

### 📸 Images (`/public/images/`)

| Filename | Section | Recommended Dimensions | Description |
| :--- | :--- | :--- | :--- |
| `logo.png` | Navbar & Footer | **150 x 90 px** (PNG with transparent bg) | White hand-lettered stacked brand logo |
| `hero.jpg` | Section 1 (Hero) | **1920 x 1080 px** | Dark moody outdoor athlete shot |
| `video-poster.jpg` | Section 2 (Intro Video) | **750 x 438 px** (16:9 aspect) | Intro video cover poster |
| `phone-workout-1.png` | Section 3 (System) | **420 x 700 px** (PNG transparent) | Left tilted phone mockup (workout video) |
| `phone-workout-2.png` | Section 3 (System) | **420 x 700 px** (PNG transparent) | Right tilted phone mockup (exercise checklist) |
| `badge.jpg` | Section 3 (System) | **300 x 300 px** (1:1 square) | Circular badge community photo |
| `inside-athlete-1.jpg` | Section 5 (What's Inside) | **600 x 400 px** (3:2 aspect) | Slide 1 dark athlete photo |
| `inside-athlete-2.jpg` | Section 5 (What's Inside) | **600 x 400 px** (3:2 aspect) | Slide 2 dark athlete photo |
| `inside-athlete-3.jpg` | Section 5 (What's Inside) | **600 x 400 px** (3:2 aspect) | Slide 3 dark athlete photo |
| `app-profile-1.png` | Section 5 (What's Inside) | **240 x 520 px** (PNG transparent) | Slide 1 app profile screen (behind) |
| `app-program-1.png` | Section 5 (What's Inside) | **240 x 520 px** (PNG transparent) | Slide 1 app workout screen (front) |
| `app-profile-2.png` | Section 5 (What's Inside) | **240 x 520 px** (PNG transparent) | Slide 2 app profile screen |
| `app-program-2.png` | Section 5 (What's Inside) | **240 x 520 px** (PNG transparent) | Slide 2 app workout screen |
| `app-profile-3.png` | Section 5 (What's Inside) | **240 x 520 px** (PNG transparent) | Slide 3 app profile screen |
| `app-program-3.png` | Section 5 (What's Inside) | **240 x 520 px** (PNG transparent) | Slide 3 app workout screen |
| `method-bg.jpg` | Section 6 (Method) | **1920 x 800 px** | Dark gym background image |
| `step-1.png` | Section 7 (Steps) | **320 x 600 px** (PNG transparent) | Step 1 phone mockup (Sign Up screen) |
| `step-2.png` | Section 7 (Steps) | **320 x 600 px** (PNG transparent) | Step 2 phone mockup (Daily program screen) |
| `step-3.png` | Section 7 (Steps) | **320 x 600 px** (PNG transparent) | Step 3 phone mockup (Workout video screen) |
| `nutrition-bg.jpg` | Section 8 (Nutrition 101) | **760 x 900 px** | High-protein nutrition / food preparation photo |
| `nutrition-phone.png` | Section 8 (Nutrition 101) | **320 x 780 px** (PNG transparent) | Nutrition 101 phone mockup |

---

### 🎥 Videos (`/public/videos/`)

| Filename | Section | Aspect / Resolution | Description |
| :--- | :--- | :--- | :--- |
| `intro.mp4` | Section 2 (Intro Video) | **16:9** (e.g. 1920x1080 or 1280x720) | Full intro explanation video with sound |
| `transformation-1.mp4` | Section 4 (Social Proof) | **1:1 Square** (475x475 px or 1080x1080) | Athlete transformation clip 1 |
| `transformation-2.mp4` | Section 4 (Social Proof) | **1:1 Square** (475x475 px or 1080x1080) | Athlete transformation clip 2 |
| `transformation-3.mp4` | Section 4 (Social Proof) | **1:1 Square** (475x475 px or 1080x1080) | Athlete transformation clip 3 |
| `transformation-4.mp4` | Section 4 (Social Proof) | **1:1 Square** (475x475 px or 1080x1080) | Athlete transformation clip 4 |
| `transformation-5.mp4` | Section 4 (Social Proof) | **1:1 Square** (475x475 px or 1080x1080) | Athlete transformation clip 5 |
| `transformation-6.mp4` | Section 4 (Social Proof) | **1:1 Square** (475x475 px or 1080x1080) | Athlete transformation clip 6 |

---

## ✏️ How to Edit Copy & Content

All textual content is centralized in **`/content/siteContent.ts`**:
- **Brand name & logo**: `BRAND` constant
- **Navigation links**: `navigationContent`
- **Hero Section**: `heroContent`
- **Intro Video**: `introVideoContent`
- **About The System**: `systemContent`
- **Social Proof / Transformations**: `resultsContent`
- **What's Inside / App Preview**: `insideContent`
- **The Method**: `methodContent`
- **Steps**: `stepsContent`
- **Nutrition 101**: `nutritionContent`
- **Footer**: `footerContent`

---

## 🔍 Ctrl+F Code Comments

Every component is thoroughly annotated with searchable header comments:
- Header format: `// ===== SECTION X: [NAME] =====`
- Elements format: `{/* ===== [SECTION X] IMAGE/TEXT/HEADING/BUTTON: [Description] ===== */}`
- Links back to the corresponding key in `/content/siteContent.ts`.
