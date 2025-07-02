import React, { useEffect, useState } from "react";
import LikedArtifactNoData from "./LikedArtifactNoData";
import LikedArtifactsRows from "./LikedArtifactsRows";
import { Head } from "@unhead/react";
import LoadingSpinner from "../../shared/LoadingSpinner";

const LikedArtifactsList = ({ myLikedArtifactsPromise, user }) => {
  const [likedArtifacts, setLikedArtifacts] = useState([]);
  const [loading, setLoading] = useState(true);
  console.log(myLikedArtifactsPromise);

  useEffect(() => {
    myLikedArtifactsPromise(user.email).then((data) => {
      setLikedArtifacts(data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <LoadingSpinner></LoadingSpinner>;
  }

  if (likedArtifacts.length === 0) {
    return <LikedArtifactNoData></LikedArtifactNoData>;
  }

  return (
    <div className="w-10/12 mx-auto my-8">
      <Head>
        <title>My Liked Artifacts</title>
      </Head>
      <div className="overflow-x-auto">
        <table className="table">
          <thead className="text-center">
            <tr>
              <th>Artifact Name</th>
              <th className="hidden md:block">Discovered By</th>
              <th>Actions</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {likedArtifacts.map((artifact) => (
              <LikedArtifactsRows
                key={artifact._id}
                artifact={artifact}
              ></LikedArtifactsRows>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LikedArtifactsList;
