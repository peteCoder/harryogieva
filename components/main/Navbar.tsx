"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Container from "./Container";
import { cn } from "@/lib/utils";

const Navbar = ({ isDefaultBg }: { isDefaultBg?: boolean }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Harry" },
    { href: "/properties", label: "Properties" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white backdrop-blur-md shadow-md"
          : isDefaultBg
          ? "bg-white"
          : "bg-transparent"
      }`}
    >
      <Container>
        <div className="flex items-center justify-between py-4 px-2 text-[#b19a55]">
          {/* Logo */}
          <Link
            href={"/"}
            className="font-semibold text-2xl tracking-wide inline-block"
          >
            <span
              className={cn(
                scrolled
                  ? "text-black"
                  : isDefaultBg
                  ? " text-black"
                  : "text-white"
              )}
            >
              HARRY{" "}
            </span>
            <span className="text-[#b19a55]">OGIEVA</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 text-sm uppercase tracking-wide">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  `hover:text-white transition-colors`,
                  scrolled
                    ? "hover:text-black"
                    : isDefaultBg
                    ? "hover:text-black"
                    : ""
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden focus:outline-none"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </Container>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 w-full bg-white/95 backdrop-blur-md shadow-md md:hidden"
          >
            <div className="flex flex-col items-center space-y-4 py-6 text-[#b19a55] font-medium">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="hover:text-gray-900"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
