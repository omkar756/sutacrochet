// Biography.js
import React from "react";
import { motion } from "framer-motion";

const Biography = () => {
  return (
    <motion.section
      className="biography-section my-5 mx-auto"
      style={{ maxWidth: "800px" }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, type: "spring", bounce: 0.5 }}
    >
      <motion.h2
        className="text-center mb-4"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8, repeat: 1, repeatType: "reverse" }}
      >
        About SutaCrochet
      </motion.h2>
      <motion.div
        className="biography-content p-4 bg-light rounded shadow"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <p className="text-center">
          SutaCrochet was born from a passion for creating timeless, handmade treasures. Founded in 2024 by Suta, a self-taught crochet artist, this small business blossomed from a hobby into a celebration of craftsmanship. Each piece—whether a vibrant flower, cozy scarf, or stylish bag—is meticulously crafted with love, blending traditional techniques with modern flair.
        </p>
        <p className="text-center">
          Inspired by nature and the joy of creating, SutaCrochet aims to bring warmth and beauty into every home. What started as a single skein of yarn has grown into a community of crochet enthusiasts, all connected by the threads of creativity and care.
        </p>
      </motion.div>
    </motion.section>
  );
};

export default Biography;