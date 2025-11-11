import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Typewriter({ text = "", speed = 60 }) {
  const [display, setDisplay] = useState("");

  useEffect(() => {
    let i = 0;
    setDisplay("");
    const id = setInterval(() => {
      setDisplay((prev) => text.slice(0, i + 1));
      i++;
      if (i >= text.length) clearInterval(id);
    }, speed);
    return () => clearInterval(id);
  }, [text, speed]);

  return (
    <motion.span
      key={text}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="typewriter font-medium tracking-wide text-[#00B4D8]"
    >
      {display}
      <motion.span
        animate={{ opacity: [1, 0, 1] }}
        transition={{ repeat: Infinity, duration: 0.9, ease: "easeInOut" }}
        className="inline-block w-[8px] h-[20px] bg-[#00FF88] ml-[2px] rounded-sm align-middle"
      ></motion.span>
    </motion.span>
  );
}
