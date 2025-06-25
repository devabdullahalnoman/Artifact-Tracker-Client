import React from "react";
import { motion } from "motion/react";

const OurHistoryPhoto = () => {
  return (
    <motion.div
      initial={{ x: 50, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 2 }}
      viewport={{ once: true }}
    >
      <img
        src="https://i.ibb.co/jkwTDxZP/about-us.jpg"
        className="w-full max-h-[500px]"
        alt=""
      />
    </motion.div>
  );
};

export default OurHistoryPhoto;
