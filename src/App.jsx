import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function AnimatedRoutes() {
  const location = useLocation();

  // Page animation variants
  const pageVariants = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -30 },
  };

  const transition = { duration: 0.6, ease: "easeInOut" };

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={transition}
            >
              <Hero />
            </motion.div>
          }
        />
        <Route
          path="/about"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={transition}
            >
              <About />
            </motion.div>
          }
        />
        <Route
          path="/projects"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={transition}
            >
              <Projects />
            </motion.div>
          }
        />
        <Route
          path="/contact"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={transition}
            >
              <Contact />
            </motion.div>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
   <BrowserRouter>
  <div className="min-h-screen bg-[#0B0C10] text-[#EAEAEA] font-inter">
    <Navbar />
    <main className="pt-20 pb-10 overflow-hidden">
      <AnimatedRoutes />
    </main>
    <Footer />
  </div>
</BrowserRouter>

  );
}
