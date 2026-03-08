import { Mail, MessageCircle } from "lucide-react";
import React from "react";
import { FaWhatsapp } from "react-icons/fa";

function Footer() {
  return (
    <div>
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
    </div>
  );
}

export default Footer;
