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
    <div className="py-20 bg-base-300">
      <hr className="max-w-15 mx-auto text-yellow-600 border-2 rounded-2xl" />
      <div className="px-3 md:w-10/12 mx-auto">
        <h1 className="text-4xl text-center my-8 font-bold">
          Featured Artifacts
        </h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredArtifacts.map((artifact) => (
            <ArtifactCard key={artifact._id} artifact={artifact}></ArtifactCard>
          ))}
        </div>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 2 }}
          viewport={{ once: true }}
          className="flex justify-center my-3"
        >
          <Link to="/allArtifacts">
            <button className="btn btn-xl bg-base-100 hover:bg-accent mt-4 rounded-2xl">
              See All
            </button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default FeaturedArtifacts;
