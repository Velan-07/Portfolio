import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      id="footer"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
      className="relative  py-7 bg-gradient-to-r from-[#0B0C10] via-[#121212] to-[#1A1A1A] border-t border-[#00B4D8]/40 text-white overflow-hidden"
    >
      {/* Blue-Green Glow Background Animation */}
      <motion.div
        animate={{ opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -inset-1 bg-gradient-to-r from-[#00B4D8]/20 via-transparent to-[#00FF88]/20 blur-3xl -z-10"
      ></motion.div>

      {/* Content */}
      <div className="container-max mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
        {/* Left - Copyright */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-slate-300 text-sm"
        >
          © {currentYear}{" "}
          <span className="text-[#00FF88] font-semibold hover:tracking-wide transition-all duration-300">
            VELAN P
          </span>
          . All rights reserved.
        </motion.div>

        {/* Right - Social Icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="flex gap-6 text-slate-300 text-sm"
        >
          <motion.a
            href="https://github.com/Velan-07"
            target="_blank"
            rel="noreferrer"
            whileHover={{
              scale: 1.2,
              color: "#00B4D8",
              textShadow: "0px 0px 10px rgba(0,180,216,0.8)",
            }}
            className="flex items-center gap-2 transition-all duration-300"
          >
            <Github size={18} /> <span className="hidden sm:inline">GitHub</span>
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/velan-fsd"
            target="_blank"
            rel="noreferrer"
            whileHover={{
              scale: 1.2,
              color: "#00FF88",
              textShadow: "0px 0px 10px rgba(0,255,136,0.7)",
            }}
            className="flex items-center gap-2 transition-all duration-300"
          >
            <Linkedin size={18} />{" "}
            <span className="hidden sm:inline">LinkedIn</span>
          </motion.a>

          <motion.a
            href="https://www.instagram.com/king_of_haters_07___?igsh=MTNkdW9xZHE2amxqdA=="
            target="_blank"
            rel="noreferrer"
            whileHover={{
              scale: 1.2,
              color: "#00FF88",
              textShadow: "0px 0px 10px rgba(0,255,136,0.8)",
            }}
            className="flex items-center gap-2 transition-all duration-300"
          >
            <Instagram size={18} />{" "}
            <span className="hidden sm:inline">Instagram</span>
          </motion.a>
        </motion.div>
      </div>

      {/* Footer Glow Line */}
      <motion.div
        animate={{ opacity: [0.2, 0.8, 0.2] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#00B4D8] to-transparent"
      ></motion.div>
    </motion.footer>
  );
}
