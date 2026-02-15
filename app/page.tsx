import BookCategoriesSection from "@/sections/BookCategoriesSection";
import Features from "@/sections/Features";
import GitaPressSection from "@/sections/GitaPressSection";
import Hero from "@/sections/Hero";
import HowItWorks from "@/sections/HowItWorks";
import { BookOpen, Phone, Mail, MessageCircle, ShoppingCart, ShieldCheck, Truck, Star, Users } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function BookForValueLanding() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <Hero/>
      <BookCategoriesSection/>
      <Features/>
      <HowItWorks/>
      <GitaPressSection/>


      {/* Books visual */}
      <section id="books" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center">Explore Our Book Collection</h2>
          <div className="grid md:grid-cols-4 gap-6 mt-14">
            {Array.from({ length: 8 }).map((_, i) => (
              <img
                key={i}
                src={`https://source.unsplash.com/400x400/?books,study,library&sig=${i}`}
                className="rounded-2xl object-cover w-full h-56"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-slate-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Contact BookForValue</h2>
          <p className="mt-6 text-slate-300 max-w-2xl mx-auto">
            Have questions or need help choosing books? Reach out to our team.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <button className="bg-white text-slate-900 px-6 py-3 rounded-xl font-semibold flex items-center gap-2">
              <Mail className="w-5 h-5" /> support@bookforvalue.com
            </button>

            <button className="bg-white text-slate-900 px-6 py-3 rounded-xl font-semibold flex items-center gap-2">
              <Phone className="w-5 h-5" /> Contact Us
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
              <li>support@bookforvalue.com</li>
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
