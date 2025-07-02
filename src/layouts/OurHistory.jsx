import React from "react";
import { motion } from "motion/react";
import OurHistoryPhoto from "./OurHistoryPhoto";

const OurHistory = () => {
  return (
    <div className="py-20 bg-base-200">
      <hr className="max-w-15 mx-auto text-yellow-600 border-2 rounded-2xl" />
      <div className="px-3 md:max-w-10/12 mx-auto">
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 2 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center my-8"
        >
          Preserving the Legacy of Our Past
        </motion.h1>
        <div className="grid grid-cols-1 lg:grid-cols-12 mt-15">
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 2 }}
            viewport={{ once: true }}
            className="text-2xl font-medium leading-9 lg:col-span-6 mb-14"
          >
            History is more than just dates and events—it is the thread that
            connects generations, shaping our identity and guiding our future.
            From ancient civilizations to groundbreaking discoveries, each
            artifact tells a story of innovation, resilience, and cultural
            evolution. With the Historical Artifacts Tracker, we bring these
            treasures to life, allowing enthusiasts and historians alike to
            explore, contribute, and engage with the rich tapestry of human
            history. Whether it's the enigmatic Antikythera Mechanism or the
            Rosetta Stone, each entry in our collection offers a glimpse into
            the minds of those who came before us. Join us in uncovering the
            mysteries of the past, one artifact at a time.
          </motion.p>
          <div className="divider divider-horizontal"></div>
          <div className="lg:col-span-5">
            <OurHistoryPhoto></OurHistoryPhoto>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurHistory;
