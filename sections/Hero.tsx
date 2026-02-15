import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import HeroImg from "@/assets/hero.png";
import { FaWhatsapp } from "react-icons/fa";

function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-5 sm:px-6 pt-12 md:pt-20 pb-16 md:pb-24">
      <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        
        {/* IMAGE — bigger and dominant */}
        <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
          <div className="w-full max-w-[420px] sm:max-w-[520px] md:max-w-[560px] lg:max-w-none">
            <Image
              src={HeroImg}
              alt="Stack of books ink illustration"
              priority
              className="w-full h-auto object-contain drop-shadow-xl"
            />
          </div>
        </div>

        {/* TEXT */}
        <div className="order-2 lg:order-1 text-center lg:text-left">
          
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold leading-snug md:leading-tight tracking-tight text-slate-900">
            Buy Quality Books at the Best Price Online in India
          </h1>

          <p className="mt-4 md:mt-6 text-sm sm:text-base md:text-lg text-slate-600 max-w-xl mx-auto lg:mx-0">
            BookForValue is a trusted platform to purchase academic,
            competitive exam, and curated books at affordable prices.
            High-quality books delivered directly — no peer-to-peer selling.
          </p>

          {/* BUTTONS — always single row */}
          <div className="mt-6 md:mt-8 flex flex-nowrap justify-center lg:justify-start gap-3">
            
            <a className="bg-slate-900 text-xs sm:text-sm md:text-base text-white px-4 sm:px-5 py-2.5 rounded-lg font-semibold hover:bg-slate-800 transition flex items-center gap-2 whitespace-nowrap">
              <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5" />
              Browse Books
            </a>

            <a className="bg-green-600 text-xs sm:text-sm md:text-base text-white px-4 sm:px-5 py-2.5 rounded-lg font-semibold hover:bg-green-700 transition flex items-center gap-2 whitespace-nowrap">
              <FaWhatsapp className="w-4 h-4 sm:w-5 sm:h-5" />
              WhatsApp Us
            </a>
          </div>

          <p className="mt-5 md:mt-6 text-xs sm:text-sm text-slate-500">
            Trusted by students and readers across India.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
