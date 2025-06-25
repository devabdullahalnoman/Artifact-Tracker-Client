import React from "react";
import useAxiosSecure from "../hooks/useAxiosSecure";

const useDeleteArtifactApi = () => {
  const axiosInstance = useAxiosSecure();

  const deleteArtifactPromise = (id) => {
    return axiosInstance.delete(`/artifact/${id}`).then((res) => res.data);
  };
  return { deleteArtifactPromise };
};

export default useDeleteArtifactApi;
