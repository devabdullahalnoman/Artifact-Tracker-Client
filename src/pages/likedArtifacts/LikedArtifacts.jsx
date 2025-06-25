import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import useMyLikedArtifactsApi from "../../api/useMyLikedArtifactsApi";
import LoadingSpinner from "../../shared/LoadingSpinner";
import LikedArtifactsRows from "./LikedArtifactsRows";
import LikedArtifactNoData from "./LikedArtifactNoData";
import { Head } from "@unhead/react";
import { toast, ToastContainer } from "react-toastify";

const LikedArtifacts = () => {
  const { myLikedArtifactsPromise } = useMyLikedArtifactsApi();
  const { user } = useAuth();
  const [likedArtifacts, setLikedArtifacts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    myLikedArtifactsPromise(user.email)
      .then((data) => {
        setLikedArtifacts(data);
        setLoading(false);
      })
      .catch((error) => {
        const ErrorMessage = error.message;
        toast.error(ErrorMessage, {
          position: "top-left",
        });
      });
  }, []);

  if (loading) {
    return <LoadingSpinner></LoadingSpinner>;
  }

  if (likedArtifacts.length === 0) {
    return <LikedArtifactNoData></LikedArtifactNoData>;
  }

  return (
    <div className="w-11/12 mx-auto pt-10 my-5 h-screen">
      <Head>
        <title>My Liked Artifacts</title>
      </Head>
      <h1 className="text-4xl mb-4 text-center font-bold">
        My Liked Artifacts
      </h1>
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
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default LikedArtifacts;
