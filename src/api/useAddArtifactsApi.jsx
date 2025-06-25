import React from "react";
import useAxiosSecure from "../hooks/useAxiosSecure";

const useAddArtifactsApi = () => {
  const axiosInstance = useAxiosSecure();

  const addArtifactPromise = (newArtifact) => {
    return axiosInstance
      .post("/artifacts", newArtifact)
      .then((res) => res.data);
  };
  return { addArtifactPromise };
};

export default useAddArtifactsApi;
