import HeroCarousel from "@/components/common/HeroCarsole";
import BookCategoriesSection from "@/sections/BookCategoriesSection";
import Features from "@/sections/Features";
import GitaPressSection from "@/sections/ViewBooks";
import Hero from "@/sections/Hero";
import HowItWorks from "@/sections/HowItWorks";
import { Phone, Mail, MessageCircle } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import Hero1 from "@/assets/HeroCarsole/hero1.png"
import Hero2 from "@/assets/HeroCarsole/hero2.png"
import Hero3 from "@/assets/HeroCarsole/hero3.png"
import Hero4 from "@/assets/HeroCarsole/hero4.png"

import GeetaPressBook from "@/data/gitaPressBooks.json"

export default function BookForValueLanding() {
  const images = [
  Hero1, Hero2, Hero3, Hero4
];
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      {/* <Hero/> */}
      <HeroCarousel images={images}/>
      <GitaPressSection id="geetapressbooks" title="Gita Press Books Collection" description="Collection of most popular spiritual books by Geeta Press" books={GeetaPressBook}/>
      <BookCategoriesSection/>
      <Features/>
      <HowItWorks/>

      {/* Contact */}
      <section id="contact" className="bg-slate-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Contact BookForValue</h2>
          <p className="mt-6 text-slate-300 max-w-2xl mx-auto">
            Have questions or need help choosing books? Reach out to our team.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <button className="bg-white text-slate-900 px-6 py-3 rounded-xl font-semibold flex items-center gap-2">
              <Mail className="w-5 h-5" /> info@bookforvalue.com
            </button>

            <button className="bg-white text-slate-900 px-6 py-3 rounded-xl font-semibold flex items-center gap-2">
              <MessageCircle className="w-5 h-5" /> Chat Now
            </button>

            <button className="bg-green-600 text-white px-6 py-3 rounded-xl font-semibold flex items-center gap-2">
              <FaWhatsapp className="w-5 h-5" /> Chat on WhatsApp
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-12">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">
          <div>
            <div className="text-slate-900 font-bold text-xl">BookForValue</div>
            <p className="mt-4 text-sm text-slate-600">
              A trusted destination to buy quality books online in India.
            </p>
          </div>

          <div>
            <div className="text-slate-900 font-semibold">Contact</div>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li>info@bookforvalue.com</li>
              <li>bookforvalue.in</li>
              <li>bookforvalue.com</li>
            </ul>
          </div>

          <div>
            <div className="text-slate-900 font-semibold">Company</div>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li>About</li>
              <li>Privacy</li>
              <li>Terms</li>
            </ul>
          </div>
        </div>

        <div className="text-center text-xs text-slate-500 mt-12">
          © {new Date().getFullYear()} BookForValue. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
