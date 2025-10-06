Next.js-এ নতুন ফন্ট এড করার জন্য, বিশেষ করে যদি আপনি `next/font/google` ব্যবহার করেন এবং shadcn/ui-এর সাথে কাজ করেন, তাহলে আপনি সহজেই **Tangerine** ফন্ট এড করতে পারেন। নিচে ধাপে ধাপে প্রক্রিয়া বাংলায় ব্যাখ্যা করা হলো, এবং কোড ইংরেজিতে দেওয়া হলো।

### ধাপগুলো:

1. **Google Fonts থেকে ফন্ট ইম্পোর্ট করা**:

   - Next.js-এর `@next/font/google` মডিউল ব্যবহার করে Google Fonts থেকে Tangerine ফন্ট ইম্পোর্ট করতে হবে।
   - আপনি ইতিমধ্যে কোডে দেখিয়েছেন যে `Tangerine` ফন্ট ইম্পোর্ট করেছেন। এটি সঠিক প্রথম ধাপ।

2. **ফন্ট কনফিগার করা**:

   - ফন্ট ইনস্ট্যান্স তৈরি করতে হবে এবং এর জন্য একটি CSS ভেরিয়েবল সেট করতে হবে (যেমন `--font-tangerine`) যাতে এটি সহজে ব্যবহার করা যায়।
   - আপনি `subsets` এবং অন্যান্য অপশন (যেমন `weight`, `style`) কনফিগার করতে পারেন। Tangerine ফন্টের জন্য সাধারণত `weight: ['400', '700']` এবং `subsets: ['latin']` ব্যবহার করা হয়।

3. **ফন্ট গ্লোবালি অথবা নির্দিষ্ট কম্পোনেন্টে এপ্লাই করা**:

   - গ্লোবালি ফন্ট এপ্লাই করতে, আপনার `app/layout.tsx` ফাইলে ফন্টের CSS ভেরিয়েবল বডি বা রুট এলিমেন্টে যোগ করতে হবে।
   - shadcn/ui ব্যবহার করলে, আপনি `cn` ইউটিলিটি বা কাস্টম CSS ক্লাস ব্যবহার করে নির্দিষ্ট কম্পোনেন্টে ফন্ট এপ্লাই করতে পারেন।

4. **Tailwind CSS-এর সাথে ইন্টিগ্রেশন (যদি shadcn ব্যবহার করেন)**:

   - shadcn/ui Tailwind CSS-এর উপর নির্ভর করে। তাই Tailwind কনফিগারেশনে ফন্ট ফ্যামিলি যোগ করতে হবে যাতে আপনি `font-tangerine` ক্লাস ব্যবহার করতে পারেন।
   - এটি করতে `tailwind.config.js`-এ কাস্টম ফন্ট ফ্যামিলি এড করতে হবে।

5. **ফন্ট লোডিং অপটিমাইজেশন**:
   - Next.js-এর `@next/font` স্বয়ংক্রিয়ভাবে ফন্ট লোডিং অপটিমাইজ করে। তবে নিশ্চিত করুন যে আপনি শুধু প্রয়োজনীয় ওয়েট এবং সাবসেট ইম্পোর্ট করছেন।

### ধাপে ধাপে বাস্তবায়ন:

#### ১. ফন্ট ইম্পোর্ট ও কনফিগার করা

আপনার দেওয়া কোডে দেখা যাচ্ছে যে আপনি ইতিমধ্যে `Tangerine` ইম্পোর্ট করেছেন। তবে এটি কনফিগার করা হয়নি। নিচে Tangerine ফন্ট কনফিগারেশনের উদাহরণ দেওয়া হলো:

```jsx
import { Geist, Geist_Mono, Tangerine } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const tangerine = Tangerine({
  variable: "--font-tangerine",
  subsets: ["latin"],
  weight: ["400", "700"], // Tangerine-এর উপলব্ধ ওয়েট
});
```

#### ২. ফন্ট গ্লোবালি এপ্লাই করা (`app/layout.tsx`)

আপনার রুট লেআউট ফাইলে (সাধারণত `app/layout.tsx`) ফন্ট ক্লাসগুলো বডিতে যোগ করুন যাতে এটি গ্লোবালি অ্যাক্সেসযোগ্য হয়।

```jsx
import { Geist, Geist_Mono, Tangerine } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const tangerine = Tangerine({
  variable: "--font-tangerine",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${tangerine.variable}`}>{children}</body>
    </html>
  );
}
```

- এখানে `className` এ তিনটি ফন্টের ভেরিয়েবল যোগ করা হয়েছে, যাতে এগুলো সব কম্পোনেন্টে ব্যবহার করা যায়।

#### ৩. Tailwind CSS-এ ফন্ট ফ্যামিলি যোগ করা

যেহেতু আপনি shadcn/ui ব্যবহার করছেন, Tailwind CSS-এর মাধ্যমে ফন্ট ব্যবহার করা সুবিধাজনক। `tailwind.config.js`-এ Tangerine ফন্ট যোগ করুন:

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
        tangerine: ["var(--font-tangerine)", "cursive"], // Tangerine ফন্ট যোগ করা
      },
    },
  },
  plugins: [],
};
```

- এখানে `fontFamily.tangerine` যোগ করা হয়েছে, যাতে আপনি Tailwind ক্লাস `font-tangerine` ব্যবহার করতে পারেন।

#### ৪. কম্পোনেন্টে ফন্ট ব্যবহার করা

এখন আপনি যেকোনো কম্পোনেন্টে Tangerine ফন্ট ব্যবহার করতে পারেন। উদাহরণস্বরূপ, আপনার `Home` কম্পোনেন্টে:

```jsx
export default function Home() {
  return (
    <div className="min-h-screen w-full bg-black relative">
      {/* Crimson Core Glow */}
      <div
        className="fixed top-0 left-0 z-0"
        style={{
          height: "100vh",
          width: "100vw",
          background:
            "linear-gradient(0deg, rgba(0,0,0,0.6), rgba(0,0,0,0.6)), radial-gradient(68% 58% at 50% 50%, #c81e3a 0%, #a51d35 16%, #7d1a2f 32%, #591828 46%, #3c1722 60%, #2a151d 72%, #1f1317 84%, #141013 94%, #0a0a0a 100%), radial-gradient(90% 75% at 50% 50%, rgba(228,42,66,0.06) 0%, rgba(228,42,66,0) 55%), radial-gradient(150% 120% at 8% 8%, rgba(0,0,0,0) 42%, #0b0a0a 82%, #070707 100%), radial-gradient(150% 120% at 92% 92%, rgba(0,0,0,0) 42%, #0b0a0a 82%, #070707 100%), radial-gradient(60% 50% at 50% 60%, rgba(240,60,80,0.06), rgba(0,0,0,0) 60%), #050505",
        }}
      />
      {/* Soft vignette to blend edges */}
      <div
        className="fixed top-0 left-0 z-0 pointer-events-none"
        style={{
          height: "100vh",
          width: "100vw",
          backgroundImage: "radial-gradient(circle at 50% 50%, rgba(0,0,0,0) 55%, rgba(0,0,0,0.5) 100%)",
          opacity: 0.95,
        }}
      />

      {/* MAIN CONTENT */}
      <div className="font-tangerine min-h-screen w-full text-white relative z-50 h-[2000px]">
        <h2 className="text-4xl">Here is something</h2>
      </div>
    </div>
  );
}
```

- এখানে মেইন কনটেন্ট ডিভে `font-tangerine` ক্লাস যোগ করা হয়েছে, যাতে Tangerine ফন্ট ব্যবহৃত হয়।

#### ৫. ফন্ট লোডিং অপটিমাইজেশন

- `next/font/google` স্বয়ংক্রিয়ভাবে ফন্ট প্রি-লোড করে এবং FOUT (Flash of Unstyled Text) প্রতিরোধ করে। তবে নিশ্চিত করুন যে আপনি শুধু প্রয়োজনীয় `weight` এবং `subsets` ইম্পোর্ট করছেন (যেমন `['400', '700']` এবং `['latin']`)।
- যদি আপনি শুধু নির্দিষ্ট পেজে ফন্ট ব্যবহার করতে চান, তাহলে `app/layout.tsx`-এর বদলে নির্দিষ্ট পেজ কম্পোনেন্টে ফন্ট ইম্পোর্ট করুন।

### সম্ভাব্য সমস্যা ও সমাধান:

- **ফন্ট লোড না হওয়া**: নিশ্চিত করুন ইন্টারনেট সংযোগ আছে, কারণ `@next/font/google` Google Fonts থেকে ফন্ট লোড করে। যদি লোড না হয়, তাহলে `Tangerine` ফন্টের নাম এবং ওয়েট সঠিক কিনা চেক করুন।
- **Tailwind ক্লাস কাজ না করা**: `tailwind.config.js`-এ ফন্ট ফ্যামিলি সঠিকভাবে যোগ করা হয়েছে কিনা চেক করুন। ভুল হলে `font-tangerine` ক্লাস কাজ করবে না।
- **shadcn/ui-এর সাথে কনফ্লিক্ট**: shadcn/ui কম্পোনেন্টে ডিফল্ট ফন্ট থাকতে পারে। নির্দিষ্ট কম্পোনেন্টে `font-tangerine` ক্লাস যোগ করে ফন্ট ওভাররাইড করুন।

### পরীক্ষা করা:

- আপনার অ্যাপ রান করুন (`npm run dev`) এবং ব্রাউজারে দেখুন Tangerine ফন্ট প্রয়োগ হয়েছে কিনা।
- ডেভেলপার টুলস (Inspect Element) ব্যবহার করে নিশ্চিত করুন যে `--font-tangerine` ভেরিয়েবল এবং ফন্ট ফ্যামিলি সঠিকভাবে লোড হচ্ছে।

যদি কোনো সমস্যা হয় বা আরও স্পেসিফিক কিছু জানতে চান, তাহলে বিস্তারিত বলুন, আমি সাহায্য করব!
