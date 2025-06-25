import React from "react";
import { motion } from "motion/react";

const AboutUs = () => {
  return (
    <div className="bg-base-300 px-5 py-14 pb-18 rounded-2xl">
      <hr className="max-w-15 mx-auto text-yellow-600 border-2 rounded-2xl" />
      <div className=" mx-auto w-11/12">
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 2 }}
          viewport={{ once: true }}
          className="text-4xl text-center font-bold my-8"
        >
          Who We Are
        </motion.h1>
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 2 }}
          viewport={{ once: true }}
          className="text-xl mb-3"
        >
          At Historical Artifacts Tracker, we are passionate about preserving
          and sharing history. Our platform is designed for historians,
          enthusiasts, and curious minds alike—providing a space where users can
          explore, contribute, and appreciate the world's most fascinating
          artifacts.
        </motion.p>
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 2 }}
          viewport={{ once: true }}
          className="text-2xl font-semibold mb-3"
        >
          Our Mission
        </motion.h1>
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 2 }}
          viewport={{ once: true }}
          className="text-xl mb-3"
        >
          We aim to create an interactive and user-friendly experience that
          allows people to discover, track, and engage with historical
          treasures. By bridging the gap between the past and the present, we
          empower users to learn, connect, and contribute to the legacy of human
          civilization.
        </motion.p>
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 2 }}
          viewport={{ once: true }}
          className="text-2xl font-semibold mb-3"
        >
          Join Us in Preserving History
        </motion.h1>
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 2 }}
          viewport={{ once: true }}
          className="text-xl"
        >
          Whether you’re a researcher, a history buff, or simply curious about
          the past, our platform offers a place to explore and celebrate human
          achievements. Be part of the journey as we uncover the stories behind
          the artifacts that shaped our world.
        </motion.p>
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 2 }}
          viewport={{ once: true }}
          className="text-xl"
        >
          Be part of the journey as we uncover the stories behind the artifacts
          that shaped our world," you could phrase it more engagingly: "Join our
          vibrant community in exploring and preserving history. Your
          discoveries help keep our shared heritage alive!"
        </motion.p>
      </div>
    </div>
  );
};

export default AboutUs;
