"use client";

import { useState, useEffect } from "react";
import { BookOpen, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Close menu when route changes
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Close when any nav item clicked
  const handleNavClick = () => {
    setOpen(false);
  };

  return (
    <header className="w-full border-b border-slate-200 bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between py-4">

          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 text-2xl font-bold tracking-tight text-slate-900"
            onClick={handleNavClick}
          >
            <BookOpen className="w-7 h-7 text-slate-800" />
            BookForValue
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10 text-sm font-medium">
            <Link href="/#how" className="text-slate-600 hover:text-slate-900 transition">
              How it works
            </Link>
            <Link href="/#features" className="text-slate-600 hover:text-slate-900 transition">
              Features
            </Link>
            <Link href="/books" className="text-slate-600 hover:text-slate-900 transition">
              Books
            </Link>
            <Link href="/#contact" className="text-slate-600 hover:text-slate-900 transition">
              Contact
            </Link>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3 text-slate-500">
            <Link
              href="/#contact"
              className="border border-slate-300 px-5 py-2 rounded-xl text-sm font-semibold hover:bg-slate-200 transition"
            >
              Contact
            </Link>

            <Link
              className="bg-slate-900 text-white px-6 py-2 rounded-xl text-sm font-semibold hover:bg-slate-800 transition"
              href="/books"
            >
              Browse Books
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden flex items-center justify-center w-11 h-11 rounded-xl border border-slate-200 transition"
          >
            {open ? (
              <X className="w-6 h-6 text-slate-400" />
            ) : (
              <Menu className="w-6 h-6 text-slate-400" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-[400px] border-t border-slate-200" : "max-h-0"
        }`}
      >
        <div className="px-6 py-6 flex flex-col gap-5 bg-white">

          <Link href="/#how" onClick={handleNavClick} className="text-slate-700 font-medium">
            How it works
          </Link>

          <Link href="/#features" onClick={handleNavClick} className="text-slate-700 font-medium">
            Features
          </Link>

          <Link href="/books" onClick={handleNavClick} className="text-slate-700 font-medium">
            Books
          </Link>

          <Link href="/#contact" onClick={handleNavClick} className="text-slate-700 font-medium">
            Contact
          </Link>

          <div className="flex flex-col gap-3 pt-4 text-slate-500">
            <Link
              href="/#contact"
              onClick={handleNavClick}
              className="border border-slate-300 text-center px-5 py-3 rounded-xl font-semibold"
            >
              Contact
            </Link>

            <Link
              href="/books"
              onClick={handleNavClick}
              className="bg-slate-900 text-center text-white px-5 py-3 rounded-xl font-semibold"
            >
              Browse Books
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
