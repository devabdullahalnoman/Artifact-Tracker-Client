import React from "react";
import useAxiosSecure from "../hooks/useAxiosSecure";

const useArtifactsDetailsApi = () => {
  const axiosInstance = useAxiosSecure();

  const artifactDetailsPromise = (id) => {
    return axiosInstance.get(`/artifact/${id}`).then((res) => res.data);
  };
  return { artifactDetailsPromise };
};

export default useArtifactsDetailsApi;
