import React from "react";
import useAxiosSecure from "../hooks/useAxiosSecure";

const useUpdateArtifactApi = () => {
  const axiosInstance = useAxiosSecure();

  const updateArtifactPromise = (id, artifactInfo) => {
    return axiosInstance
      .patch(`/updateArtifact/${id}`, artifactInfo)
      .then((res) => res.data);
  };
  return { updateArtifactPromise };
};

export default useUpdateArtifactApi;
