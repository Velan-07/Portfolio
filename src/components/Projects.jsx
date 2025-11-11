import React from "react";
import projects from "../data/projects";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative mt-1 px-6 md:px-2 py-20 overflow-hidden"
    >
      {/* Background Glow */}
      <motion.div
        animate={{ opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -inset-10 bg-gradient-to-r from-[#00B4D8]/10 to-[#00FF88]/10 blur-3xl -z-10"
      />

      {/* Section Title */}
      <motion.h2
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-3xl md:text-4xl font-bold text-[#00B4D8] mb-12 text-center"
      >
        Projects
      </motion.h2>

      {/* Projects Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((p, idx) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              delay: 0.1 * idx,
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={{
              scale: 1.03,
              y: -8,
              boxShadow: "0 0 25px rgba(0,255,136,0.25)",
              borderColor: "#00FF88",
            }}
            className="relative bg-[#121212]/90 p-5 rounded-xl border border-[#00B4D8]/30 shadow-[0_0_25px_rgba(0,180,216,0.05)] hover:shadow-[0_0_40px_rgba(0,255,136,0.15)] transition-all duration-500"
          >
            {/* Image */}
            <div className="relative w-full h-44 overflow-hidden rounded-lg">
              <img
                src={p.screenshot}
                alt={p.title}
                className="w-full h-full object-cover rounded-md transition-transform duration-500 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0C10]/60 to-transparent opacity-70"></div>
            </div>

            {/* Title */}
            <h4 className="mt-4 font-semibold text-[#EAEAEA] text-lg">
              {p.title}
            </h4>

            {/* Description */}
            <p className="mt-2 text-slate-400 text-sm leading-relaxed">
              {p.description}
            </p>

            {/* Buttons */}
            <div className="mt-4 flex gap-3">
              {p.live && (
                <motion.a
                  href={p.live}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 0 12px rgba(0,180,216,0.5)",
                  }}
                  className="text-sm px-4 py-2 rounded-lg bg-[#00B4D8] text-[#0B0C10] font-semibold transition"
                >
                  Live Demo
                </motion.a>
              )}
              {p.github && (
                <motion.a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 0 12px rgba(0,255,136,0.5)",
                  }}
                  className="text-sm px-4 py-2 rounded-lg border border-[#00FF88]/60 text-[#00FF88] font-semibold hover:bg-[#00FF88]/10 transition"
                >
                  GitHub
                </motion.a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
