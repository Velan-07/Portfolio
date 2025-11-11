import React from "react";
import { motion } from "framer-motion";

const skillsArr = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Python",
  "Django",
  "MySQL",
  "SQL",
  "REST APIs",
  "Git",
  "GitHub",
];

export default function AboutAndSkills() {
  return (
    <section
      id="about"
      className="relative px-6 md:px-20 py-20 text-center md:text-left overflow-hidden"
    >
      {/* Background Glow */}
      <motion.div
        animate={{ opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -inset-10 bg-gradient-to-r from-[#00B4D8]/10 to-[#00FF88]/10 blur-3xl -z-10"
      />

      {/* Section Heading */}
      <motion.h2
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-3xl md:text-4xl font-bold text-[#00B4D8] mb-6"
      >
        About Me
      </motion.h2>

      {/* About Text */}
      <motion.p
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="text-slate-300 max-w-3xl mx-auto leading-relaxed"
      >
        I’m <span className="text-[#00FF88] font-medium">Velan P</span> — a
        passionate{" "}
        <span className="text-[#00B4D8] font-medium">
          Python Full Stack Developer
        </span>{" "}
        who builds responsive and dynamic web applications using{" "}
        <span className="text-[#00B4D8]">React.js</span> on the front end and{" "}
        <span className="text-[#00FF88]">Django</span> on the back end.
        <br />
        <br />
        I specialize in crafting performant REST APIs, scalable database models
        (MySQL / SQLite), and delivering production-ready web solutions. My goal
        is to bridge clean design with powerful backend logic to build seamless
        digital experiences.
      </motion.p>

      {/* Animated Divider */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="mx-auto mt-12 mb-10 h-[2px] w-32 bg-gradient-to-r from-[#00B4D8] to-[#00FF88] rounded-full"
      />

      {/* Skills Section */}
      <motion.h3
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-2xl font-semibold text-[#00B4D8] mb-6"
      >
        Skills
      </motion.h3>

      <div className="flex flex-wrap justify-center md:justify-start gap-4">
        {skillsArr.map((s, i) => (
          <motion.div
            key={s}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.06 * i, duration: 0.5 }}
            whileHover={{
              scale: 1.08,
              boxShadow: "0 0 12px rgba(0,255,136,0.4)",
              borderColor: "#00FF88",
              color: "#00FF88",
            }}
            className="px-4 py-2 border border-[#00B4D8]/40 text-sm rounded-full text-[#EAEAEA] transition-all duration-300 cursor-default"
          >
            {s}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
