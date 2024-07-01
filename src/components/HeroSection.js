import React from "react";
import { motion } from "framer-motion";
import "../styles/HeroSection.scss";

const HeroSection = () => {
  return (
    <div className="main">
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
      >
        Porsche Home
      </motion.h1>

      <motion.p
        className="country"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
      >
        Location: Georgia <img src="flag.png" alt="flag" />
      </motion.p>

      <motion.div
        className="main-poto"
        style={{
          backgroundImage: `url(carerra.png)`,
          opacity: 0,
          scale: 0.8,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          transition: { duration: 1, delay: 1.2, ease: "easeOut" },
        }}
      >
        <motion.div
          className="texts"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5, ease: "easeOut" }}
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.8, ease: "easeOut" }}
          >
            Drive Defines Us
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2, ease: "easeOut" }}
          >
            The New Carrera 4S
          </motion.p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
