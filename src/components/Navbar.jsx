import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu on route change
    setMenuOpen(false);
  }, [location]);

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          isScrolled
    ? "bg-gradient-to-r from-[#00FF88]/10 via-[#00B4D8]/10 to-[#0B0C10]/90 shadow-[0_0_25px_rgba(0,255,136,0.3)] backdrop-blur-md"
    : "bg-gradient-to-b from-[#00FF88]/20 via-[#00B4D8]/10 to-transparent"
}`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* === Logo === */}
        <motion.div
          whileHover={{ scale: 1.08, color: "#00B4D8" }}
          whileTap={{ scale: 0.95 }}
          className="text-white text-xl md:text-2xl font-extrabold tracking-widest cursor-pointer select-none"
        >
          <Link to="/" className="flex items-center gap-1">
            <span className="text-[#00FF88]">PORTFOLIO</span>
          </Link>
        </motion.div>

        {/* === Desktop Links === */}
        <div className="hidden md:flex space-x-8">
          {links.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <motion.div key={link.path} className="relative">
                <Link
                  to={link.path}
                  className={`text-sm font-semibold transition duration-300 ${
                    isActive ? "text-[#00B4D8]" : "text-slate-200"
                  }`}
                >
                  {link.name}
                </Link>
                {isActive && (
                  <motion.span
                    layoutId="underline"
                    className="absolute left-0 -bottom-1 w-full h-[2px] bg-[#00B4D8] rounded"
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </motion.div>
            );
          })}
        </div>

        {/* === Contact Button (Desktop) === */}
        <motion.div
          whileHover={{
            scale: 1.08,
            boxShadow: "0 0 12px rgba(0,255,136,0.7)",
            backgroundColor: "#00FF88",
            color: "#0B0C10",
          }}
          whileTap={{ scale: 0.95 }}
          className="hidden md:inline-block border border-[rgb(10,227,126)] text-[#EAEAEA] font-bold px-5 py-2 rounded-lg shadow-md transition relative overflow-hidden"
        >
          <Link to="/contact">
            <motion.span
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              Let’s Talk
            </motion.span>
          </Link>
        </motion.div>

        {/* === Mobile Menu Icon === */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-[#EAEAEA] focus:outline-none"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* === Mobile Dropdown === */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="md:hidden bg-[#0B0C10]/95 border-t border-[#00B4D8]/30 backdrop-blur-md flex flex-col items-center py-6 space-y-5"
          >
            {links.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-lg font-medium transition-all ${
                    isActive
                      ? "text-[#00B4D8]"
                      : "text-[#EAEAEA] hover:text-[#00FF88]"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}

            {/* Contact Button in Mobile Menu */}
            <Link
              to="/contact"
              className="mt-3 px-5 py-2 rounded-md border border-[#00FF88] text-[#EAEAEA] hover:bg-[#00FF88]/10 transition"
            >
              Let’s Talk
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
