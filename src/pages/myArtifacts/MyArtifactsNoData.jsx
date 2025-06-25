import { Head } from "@unhead/react";
import React from "react";
import { Link } from "react-router";

const MyArtifactsNoData = () => {
  return (
    <div className="flex flex-col gap-9 justify-center items-center h-screen">
      <Head>
        <title>No Artifact!</title>
      </Head>
      <h1 className="text-7xl font-bold">You haven't added any Artifact!</h1>
      <p className="text-2xl">Please add one first.</p>
      <Link to="/addArtifact">
        <button className="btn text-xl p-7 rounded-lg">Add Artifact</button>
      </Link>
    </div>
  );
};

export default MyArtifactsNoData;
