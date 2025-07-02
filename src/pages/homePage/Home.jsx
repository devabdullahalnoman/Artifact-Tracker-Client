import React from "react";
import Banner from "../../layouts/Banner";
import FeaturedArtifacts from "../../layouts/FeaturedArtifacts";
import { Head } from "@unhead/react";
import OurHistory from "../../layouts/OurHistory";
import AboutUs from "../../layouts/AboutUs";
import { motion } from "motion/react";
import Categories from "../../layouts/Categories";
import Blogs from "../../layouts/Blogs";
import NewsLetter from "../../layouts/NewsLetter";

const Home = () => {
  return (
    <div>
      <div className="bg-base-200">
        <Head>
          <title>Home - Artifact Tracker</title>
          <meta name="description" content="Artifact Tracker Home" />
        </Head>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 3 }}
          viewport={{ once: true }}
        >
          <Banner></Banner>
        </motion.div>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 3 }}
          viewport={{ once: true }}
        >
          <Categories></Categories>
        </motion.div>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 3 }}
          viewport={{ once: true }}
        >
          <FeaturedArtifacts></FeaturedArtifacts>
        </motion.div>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 3 }}
          viewport={{ once: true }}
        >
          <Blogs></Blogs>
        </motion.div>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 3 }}
          viewport={{ once: true }}
        >
          <OurHistory></OurHistory>
        </motion.div>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 3 }}
          viewport={{ once: true }}
        >
          <NewsLetter></NewsLetter>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
