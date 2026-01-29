"use client";
import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Roles", href: "#roles" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm">
      <nav className="max-w-6xl mx-auto px-4 md:px-0 py-4 md:py-2 flex items-center justify-between">
        {/* Logo */}
        <div className="font-heading text-xl font-bold text-amber-600">
          <h1 className="text-4xl">SM.</h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="text-gray-700 hover:text-amber-600 transition"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA (Desktop) */}
        <Link
          href="#contact"
          className="hidden lg:inline-flex bg-amber-600 text-white px-6 py-2 rounded-md text-sm font-medium"
        >
          Get in Touch
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-2xl text-gray-700"
        >
          <i className={open ? "ri-close-line" : "ri-menu-line"}></i>
        </button>
      </nav>

      {/* Mobile / Tablet Menu */}
      {open && (
        <div className="lg:hidden bg-white border-t">
          <ul className="flex flex-col gap-4 px-4 py-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block text-gray-700 hover:text-amber-600 transition"
                >
                  {link.name}
                </Link>
              </li>
            ))}

            <Link
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex justify-center bg-amber-600 text-white px-6 py-2 rounded-md text-sm font-medium"
            >
              Get in Touch
            </Link>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
