import React from "react";
import { motion } from "framer-motion";
import Typewriter from "./Typewriter";
import profile from "../assets/profile.jpg";
import { Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";



const easing = [0.22, 1, 0.36, 1];

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-[97vh] pt-1 px-6 md:px-16 grid md:grid-cols-2 gap-12 items-center bg-gradient-to-b from-[#0B0C10] via-[#121212] to-[#1A1A1A] text-[#EAEAEA]"
    >
      {/* ===== Left Side - Intro ===== */}
      <div>
        {/* Name */}
        <motion.h1
          initial={{ y: 28, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.08, duration: 0.9, ease: easing }}
          className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight"
        >
          VELAN P
        </motion.h1>

        {/* Typewriter Title */}
        <motion.div
          initial={{ y: 18, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.38, duration: 0.9, ease: easing }}
          className="font-medium mt-3 text-lg text-[#00B4D8]"
        >
          <Typewriter
            text={"Python Full-Stack Developer | React & Django"}
            speed={45}
          />
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ y: 18, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.62, duration: 0.9, ease: easing }}
          className="mt-6 text-slate-300 max-w-xl leading-relaxed"
        >
          I build responsive, production-ready web apps using React and Django.
          I focus on clean UI, performant APIs, and scalable database design —
          turning ideas into reliable, modern digital products.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.95, duration: 0.8 }}
          className="mt-8 flex gap-4"
        >
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2.5 bg-[#00B4D8] text-[#0B0C10] font-semibold rounded-lg shadow-[0_0_15px_rgba(0,180,216,0.4)] hover:shadow-[0_0_25px_rgba(0,180,216,0.6)] transform transition hover:scale-105"
          >
            Download CV
          </a>
          <Link
            to="/contact"
            className="inline-block px-5 py-2.5 border border-[#00FF88] text-[#EAEAEA] font-medium rounded-lg 
             hover:bg-[#00FF88]/15 hover:text-[#00FF88] transition-all duration-300 ease-out
             shadow-sm hover:shadow-[0_0_10px_#00FF8855] backdrop-blur-sm"
          >
            <span>Contact Me</span>
          </Link>

        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.15, duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
          className="mt-6 flex flex-col sm:flex-row sm:items-center gap-3 text-sm text-slate-400"
        >
          {/* Email */}
          <motion.a
            href="mailto:velan.stack@gmail.com"
            whileHover={{ scale: 1.05, color: "#00FF88" }}
            transition={{ type: "spring", stiffness: 220 }}
            className="flex items-center gap-2 transition-all duration-300"
          >
            <Mail size={16} className="text-[#00B4D8]" />
            <span className="underline hover:text-[#00FF88]">
              velan.stack@gmail.com
            </span>
          </motion.a>

          <span className="hidden sm:inline text-[#555]">•</span>

          {/* Phone */}
          <motion.div
            whileHover={{ scale: 1.05, color: "#00FF88" }}
            transition={{ type: "spring", stiffness: 220 }}
            className="flex items-center gap-2 transition-all duration-300"
          >
            <Phone size={16} className="text-[#00B4D8]" />
            <span className="font-medium text-[#EAEAEA]">+91 74183 53026</span>
          </motion.div>
        </motion.div>

      </div>

      {/* ===== Right Side - Profile with Glow ===== */}
      <motion.div
        initial={{ scale: 0.96, opacity: 0, y: 10 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 1.0, ease: easing }}
        className="flex justify-center md:justify-end relative"
      >
        {/* Glowing Background Circle */}
        <motion.div
          animate={{
            scale: [1, 1.04, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-72 h-72 md:w-96 md:h-96 bg-gradient-to-r from-[#00B4D8] to-[#00FF88] rounded-full blur-[90px] opacity-40"
        ></motion.div>

        {/* Profile Image Card */}
        <motion.div
          animate={{
            y: [0, -6, 0],
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="relative w-60 h-60 md:w-80 md:h-80 rounded-3xl overflow-hidden shadow-[0_0_30px_rgba(0,255,136,0.15)] hover:shadow-[0_0_40px_rgba(0,255,136,0.3)] transition-all duration-300"
        >
          {/* Image Overlay for Contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0C10]/60 via-transparent to-transparent z-10"></div>

          <img
            src={profile}
            alt="Velan"
            className="w-full h-full object-cover"
          />

          {/* Floating Label */}
          <div className="absolute -bottom-3 -right-3 bg-[#00B4D8] text-[#0B0C10] px-3 py-1 rounded-lg text-xs font-semibold shadow-[0_0_10px_rgba(0,180,216,0.4)] z-20">
            Python • React • Django
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
