import {
  MessageCircle,
  PhoneCall,
  CreditCard,
  Camera,
  Truck,
  MapPin,
  ArrowRight,
} from "lucide-react";
import React from "react";

function HowItWorks() {
  const steps = [
    {
      icon: MessageCircle,
      title: "Order on WhatsApp",
      desc: "Send us the book name or screenshot and place your order directly through WhatsApp.",
    },
    {
      icon: PhoneCall,
      title: "We Contact You",
      desc: "Our team confirms availability, delivery address, and total order details.",
    },
    {
      icon: CreditCard,
      title: "Secure Payment",
      desc: "Complete payment safely using UPI or bank transfer after confirmation.",
    },
    {
      icon: Camera,
      title: "Photo Before Dispatch",
      desc: "We share real photos of your packed books before shipping for transparency.",
    },
    {
      icon: Truck,
      title: "Order Dispatched",
      desc: "Your books are packed securely and shipped via reliable delivery partners.",
    },
    {
      icon: MapPin,
      title: "Tracking ID Shared",
      desc: "Receive tracking details and delivery updates until the order reaches you.",
    },
  ];

  return (
    <section id="how" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            How BookForValue Works
          </h2>
          <p className="mt-4 text-slate-600">
            A simple, transparent process to order books through WhatsApp and
            receive doorstep delivery with tracking support.
          </p>
        </div>

        {/* Flow Grid (2 rows) */}
        <div className="mt-16 grid md:grid-cols-3 gap-10">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="relative bg-slate-50 border border-slate-200 rounded-2xl p-7 hover:shadow-lg transition"
              >
                <Icon className="w-10 h-10 text-slate-800" />

                <h3 className="mt-5 text-lg font-semibold text-slate-900">
                  {step.title}
                </h3>

                <p className="mt-3 text-slate-600 text-sm leading-relaxed">
                  {step.desc}
                </p>

                {/* Desktop arrows */}
                {index !== 2 && index !== 5 && (
                  <ArrowRight className="hidden md:block absolute -right-6 top-1/2 -translate-y-1/2 text-slate-300 w-7 h-7" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
