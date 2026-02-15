import {
  ShieldCheck,
  BadgeIndianRupee,
  TrendingUp,
} from "lucide-react";
import React from "react";

function Features() {
  const features = [
    {
      icon: ShieldCheck,
      title: "Verified Book Quality",
      desc: "Every book is inspected for condition, correct edition, and completeness before reaching customers.",
    },
    {
      icon: BadgeIndianRupee,
      title: "Affordable Student Pricing",
      desc: "Books priced significantly lower than market rates, making education more accessible and budget-friendly.",
    },
    {
      icon: TrendingUp,
      title: "100+ Books Sold Daily",
      desc: "Trusted by students across India with consistent daily orders and growing demand.",
    },
  ];

  return (
    <section id="features" className="py-20 bg-slate-100">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Why Choose BookForValue
          </h2>
          <p className="mt-4 text-slate-600">
            A reliable platform for students and readers to buy quality academic
            and exam preparation books at affordable prices across India.
          </p>
        </div>

        {/* 3 High-impact Features */}
        <div className="grid md:grid-cols-3 gap-8 mt-14">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <div
                key={i}
                className="bg-white p-8 rounded-2xl border border-slate-200 hover:shadow-md transition"
              >
                <Icon className="w-10 h-10 text-slate-800" />
                <h3 className="mt-5 font-semibold text-lg text-slate-900">
                  {feature.title}
                </h3>
                <p className="mt-3 text-slate-600 text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Features;
