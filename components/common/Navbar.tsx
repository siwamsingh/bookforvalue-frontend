"use client"
import { useState } from "react";
import { BookOpen, Menu, X } from "lucide-react";
import React from "react";
import Link from "next/link";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full border-b border-slate-200 bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between py-4">
          
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 text-2xl font-bold tracking-tight text-slate-900">
            <BookOpen className="w-7 h-7 text-slate-800" />
            BookForValue
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10 text-sm font-medium">
            <a href="#how" className="text-slate-600 hover:text-slate-900 transition">
              How it works
            </a>
            <a href="#features" className="text-slate-600 hover:text-slate-900 transition">
              Features
            </a>
            <a href="#books" className="text-slate-600 hover:text-slate-900 transition">
              Books
            </a>
            <a href="#contact" className="text-slate-600 hover:text-slate-900 transition">
              Contact
            </a>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3 text-slate-500" >
            <a href="#contact" className="border border-slate-300 px-5 py-2 rounded-xl text-sm font-semibold hover:bg-slate-200 transition">
              Contact
            </a>
            <Link className="bg-slate-900 text-white px-6 py-2 rounded-xl text-sm font-semibold hover:bg-slate-800 transition" href="/books">
              Browse Books
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden flex items-center justify-center w-11 h-11 rounded-xl border border-slate-200 transition"
          >
            {open ? <X className="w-6 h-6 text-slate-400" /> : <Menu className="w-6 h-6 text-slate-400" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu (animated with Tailwind) */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-[400px] border-t border-slate-200" : "max-h-0"
        }`}
      >
        <div className="px-6 py-6 flex flex-col gap-5 bg-white">
          <a href="#how" className="text-slate-700 font-medium">
            How it works
          </a>
          <a href="#features" className="text-slate-700 font-medium">
            Features
          </a>
          <a href="#books" className="text-slate-700 font-medium">
            Books
          </a>
          <a href="#contact" className="text-slate-700 font-medium">
            Contact
          </a>

          <div className="flex flex-col gap-3 pt-4 text-slate-500">
            <button className="border border-slate-300 px-5 py-3 rounded-xl font-semibold">
              Contact
            </button>
            <button className="bg-slate-900 text-white px-5 py-3 rounded-xl font-semibold">
              Browse Books
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
