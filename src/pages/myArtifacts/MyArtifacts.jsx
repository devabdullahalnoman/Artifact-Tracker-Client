import React from "react";
import useAuth from "../../hooks/useAuth";
import useMyArtifactsApi from "../../api/useMyArtifactsApi";
import { Suspense } from "react";
import LoadingSpinner from "../../shared/LoadingSpinner";
import MyArtifactsList from "./MyArtifactsList";

const MyArtifacts = () => {
  const { user } = useAuth();

  const { myArtifactsPromise } = useMyArtifactsApi();

  return (
    <div className="bg-base-300 py-14">
      <h1 className="text-center text-4xl font-bold">My Artifacts List</h1>
      <Suspense fallback={<LoadingSpinner></LoadingSpinner>}>
        <MyArtifactsList
          myArtifactsPromise={myArtifactsPromise(user.email)}
        ></MyArtifactsList>
      </Suspense>
    </div>
  );
};

export default MyArtifacts;
