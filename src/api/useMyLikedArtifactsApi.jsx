import React from "react";
import useAxiosSecure from "../hooks/useAxiosSecure";

const useMyLikedArtifactsApi = () => {
  const axiosInstance = useAxiosSecure();

  const myLikedArtifactsPromise = (email) => {
    return axiosInstance.get(`/liked?email=${email}`).then((res) => res.data);
  };
  return { myLikedArtifactsPromise };
};

export default useMyLikedArtifactsApi;
