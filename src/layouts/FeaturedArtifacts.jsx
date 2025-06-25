import React, { useEffect, useState } from "react";
import useFeaturedArtifactsApi from "../api/useFeaturedArtifactsApi";
import ArtifactCard from "../pages/allArtifacts/ArtifactCard";
import LoadingSpinner from "../shared/LoadingSpinner";
import { Link } from "react-router";
import { motion } from "motion/react";

const FeaturedArtifacts = () => {
  const [featuredArtifacts, setFeaturedArtifacts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { featuredArtifactsPromise } = useFeaturedArtifactsApi();

  useEffect(() => {
    featuredArtifactsPromise().then((data) => {
      setFeaturedArtifacts(data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <LoadingSpinner></LoadingSpinner>;
  }

  return (
    <div className="rounded-2xl">
      <hr className="max-w-15 mx-auto text-yellow-600 border-2 rounded-2xl" />
      <div className="w-11/12 mx-auto">
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 2 }}
          viewport={{ once: true }}
          className="text-4xl text-center mt-6 mb-8 font-bold"
        >
          Featured Artifacts
        </motion.h1>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 2 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6"
        >
          {featuredArtifacts.map((artifact) => (
            <ArtifactCard key={artifact._id} artifact={artifact}></ArtifactCard>
          ))}
        </motion.div>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 2 }}
          viewport={{ once: true }}
          className="flex justify-center my-3"
        >
          <Link to="/allArtifacts">
            <button className="btn btn-xl btn-outline mt-4 rounded-xl">
              See All
            </button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default FeaturedArtifacts;
