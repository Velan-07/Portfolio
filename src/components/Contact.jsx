import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Github, Linkedin } from "lucide-react"; // lightweight vector icons

export default function Contact() {
  const [sent, setSent] = useState(false);

  // animation ease curve for smooth movement
  const easing = [0.22, 1, 0.36, 1];

  return (
    <section
      id="contact"
      className="relative min-h-screen px-6 md:px-20 pt-16 pb-12 text-center md:text-left overflow-hidden"
    >
      {/* ===== Background Glow ===== */}
      <motion.div
        animate={{ opacity: [0.3, 0.8, 0.3] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -inset-10 bg-gradient-to-r from-[#00B4D8]/15 via-transparent to-[#00FF88]/15 blur-[100px] -z-10"
      />

      {/* ===== Section Title ===== */}
      <motion.h2
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: easing }}
        className="text-3xl md:text-4xl font-bold text-[#00B4D8] mb-12 text-center"
      >
        Let’s Connect
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-10">
        {/* ===== Left Info Panel ===== */}
        <motion.div
          initial={{ x: -30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: easing }}
          className="bg-[#121212]/90 p-6 rounded-xl border border-[#00B4D8]/30 shadow-[0_0_25px_rgba(0,180,216,0.08)] hover:shadow-[0_0_35px_rgba(0,255,136,0.2)] transition-all duration-700"
        >
          {/* Email */}
          <motion.a
            href="mailto:velan.stack@gmail.com"
            whileHover={{
              scale: 1.05,
              color: "#00FF88",
              textShadow: "0 0 12px rgba(0,255,136,0.6)",
            }}
            className="flex items-center gap-3 text-slate-300 mb-4 transition-all duration-300"
          >
            <Mail className="text-[#00B4D8]" size={20} />
            <span className="font-medium">velan.stack@gmail.com</span>
          </motion.a>

          {/* Phone */}
          <motion.div
            whileHover={{
              scale: 1.05,
              color: "#00FF88",
              textShadow: "0 0 12px rgba(0,255,136,0.6)",
            }}
            className="flex items-center gap-3 text-slate-300 mb-4 cursor-default transition-all duration-300"
          >
            <Phone className="text-[#00B4D8]" size={20} />
            <span className="font-medium">+91 74183 53026</span>
          </motion.div>

          {/* GitHub */}
          <motion.a
            href="https://github.com/Velan-07"
            target="_blank"
            rel="noreferrer"
            whileHover={{
              scale: 1.05,
              color: "#00FF88",
              textShadow: "0 0 12px rgba(0,255,136,0.6)",
            }}
            className="flex items-center gap-3 text-slate-300 mb-4 transition-all duration-300"
          >
            <Github className="text-[#00B4D8]" size={20} />
            <span className="font-medium">github.com/Velan-07</span>
          </motion.a>

          {/* LinkedIn */}
          <motion.a
            href="https://www.linkedin.com/in/velan-fsd"
            target="_blank"
            rel="noreferrer"
            whileHover={{
              scale: 1.05,
              color: "#00FF88",
              textShadow: "0 0 12px rgba(0,255,136,0.6)",
            }}
            className="flex items-center gap-3 text-slate-300 mb-4 transition-all duration-300"
          >
            <Linkedin className="text-[#00B4D8]" size={20} />
            <span className="font-medium">linkedin.com/in/velan-fsd</span>
          </motion.a>
        </motion.div>

        {/* ===== Right Contact Form ===== */}
        <motion.form
          initial={{ x: 30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: easing }}
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
          className="bg-[#121212]/90 p-6 rounded-xl border border-[#00B4D8]/30 shadow-[0_0_25px_rgba(0,180,216,0.08)] hover:shadow-[0_0_35px_rgba(0,255,136,0.2)] transition-all duration-700"
        >
          <motion.input
            whileFocus={{
              borderColor: "#00B4D8",
              boxShadow: "0 0 10px rgba(0,180,216,0.4)",
            }}
            className="w-full p-3 rounded-md bg-[#0B0C10] text-[#EAEAEA] border border-[#00B4D8]/30 focus:outline-none focus:border-[#00FF88] transition mb-4"
            placeholder="Your Name"
            required
          />

          <motion.input
            whileFocus={{
              borderColor: "#00B4D8",
              boxShadow: "0 0 10px rgba(0,180,216,0.4)",
            }}
            className="w-full p-3 rounded-md bg-[#0B0C10] text-[#EAEAEA] border border-[#00B4D8]/30 focus:outline-none focus:border-[#00FF88] transition mb-4"
            type="email"
            placeholder="Your Email"
            required
          />

          <motion.textarea
            whileFocus={{
              borderColor: "#00B4D8",
              boxShadow: "0 0 10px rgba(0,180,216,0.4)",
            }}
            className="w-full p-3 rounded-md bg-[#0B0C10] text-[#EAEAEA] border border-[#00B4D8]/30 focus:outline-none focus:border-[#00FF88] transition mb-4"
            placeholder="Message"
            rows="5"
            required
          />

          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 18px rgba(0,255,136,0.5)",
            }}
            whileTap={{ scale: 0.95 }}
            className="w-full mt-3 px-4 py-2.5 bg-gradient-to-r from-[#00B4D8] to-[#00FF88] rounded-md text-[#0B0C10] font-semibold tracking-wide shadow-[0_0_15px_rgba(0,180,216,0.25)] transition"
          >
            Send Message
          </motion.button>

          {sent && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-3 text-sm text-[#00FF88]"
            >
              ✅ Thanks — I’ll get back to you soon!
            </motion.div>
          )}
        </motion.form>
      </div>
    </section>
  );
}
