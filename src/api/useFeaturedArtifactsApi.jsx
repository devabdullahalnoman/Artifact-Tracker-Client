import React from "react";
import useAxiosSecure from "../hooks/useAxiosSecure";

const useFeaturedArtifactsApi = () => {
  const axiosInstance = useAxiosSecure();

  const featuredArtifactsPromise = () => {
    return axiosInstance.get("/featuredArtifacts").then((res) => res.data);
  };
  return { featuredArtifactsPromise };
};

export default useFeaturedArtifactsApi;
