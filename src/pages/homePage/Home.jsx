import React from "react";
import Banner from "../../layouts/Banner";
import FeaturedArtifacts from "../../layouts/FeaturedArtifacts";
import { Head } from "@unhead/react";
import OurHistory from "../../layouts/OurHistory";
import AboutUs from "../../layouts/AboutUs";
import { motion } from "motion/react";

const Home = () => {
  return (
    <div>
      <div className="pb-10">
        <Head>
          <title>Home - Artifact Tracker</title>
          <meta name="description" content="Artifact Tracker Home" />
        </Head>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 3 }}
          viewport={{ once: true }}
          className="mb-10 pt-1 md:pt-0"
        >
          <Banner></Banner>
        </motion.div>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 3 }}
          viewport={{ once: true }}
          className="bg-base-300 py-15 md:w-11/12 mx-auto rounded-2xl"
        >
          <FeaturedArtifacts></FeaturedArtifacts>
        </motion.div>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 3 }}
          viewport={{ once: true }}
          className="md:w-11/12 mx-auto"
        >
          <OurHistory></OurHistory>
        </motion.div>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 3 }}
          viewport={{ once: true }}
        >
          <AboutUs></AboutUs>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
