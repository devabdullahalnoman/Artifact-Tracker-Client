import React from "react";
import useAxiosSecure from "../hooks/useAxiosSecure";

const useMyArtifactsApi = () => {
  const axiosInstance = useAxiosSecure();

  const myArtifactsPromise = (email) => {
    return axiosInstance
      .get(`/myArtifacts?email=${email}`)
      .then((res) => res.data);
  };
  return { myArtifactsPromise };
};

export default useMyArtifactsApi;
