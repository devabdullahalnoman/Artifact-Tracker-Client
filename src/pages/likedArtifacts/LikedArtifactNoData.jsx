import { Head } from "@unhead/react";
import React from "react";
import { Link } from "react-router";

const LikedArtifactNoData = () => {
  return (
    <div className="flex flex-col gap-9 justify-center items-center h-screen pt-10 md:pt-0">
      <Head>
        <title>No Artifact!</title>
      </Head>
      <h1 className="text-7xl font-bold">You haven't liked any Artifact!</h1>
      <p className="text-2xl">Please like one first.</p>
      <Link to="/allArtifacts">
        <button className="btn text-xl p-7 rounded-lg">Browse Artifacts</button>
      </Link>
    </div>
  );
};

export default LikedArtifactNoData;
