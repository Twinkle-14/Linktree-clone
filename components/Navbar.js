"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // for hamburger icons

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: "/templates", label: "Templates" },
    { href: "/marketplace", label: "Marketplace" },
    { href: "/discover", label: "Discover" },
    { href: "/pricing", label: "Pricing" },
    { href: "/learn", label: "Learn" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <Link
          href="/"
          className="text-3xl font-bold text-black hover:text-purple-700 transition-colors"
        >
          Linktree*
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-gray-700 hover:text-purple-600 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <button className="px-4 py-2 bg-gray-200 rounded-xl hover:bg-gray-300 transition">
            Log in
          </button>
          <button className="px-4 py-2 bg-black text-white rounded-xl hover:bg-gray-800 transition">
            Sign up free
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg hover:bg-gray-100"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white/90 backdrop-blur-md border-t border-gray-200 px-6 py-4 space-y-3 shadow-lg animate-slide-down">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block text-lg font-medium text-gray-700 hover:text-purple-600 transition-colors"
            >
              {link.label}
            </Link>
          ))}

          <div className="flex flex-col gap-3 pt-3 border-t border-gray-100">
            <button className="w-full px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition">
              Log in
            </button>
            <button className="w-full px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition">
              Sign up free
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
