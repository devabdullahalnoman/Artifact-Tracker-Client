import React from "react";
import useAxiosSecure from "../hooks/useAxiosSecure";

const useLikeDeleteApi = () => {
  const axiosInstance = useAxiosSecure();

  const deleteLikePromise = (id) => {
    return axiosInstance.delete(`/likes/${id}`).then((res) => res.data);
  };
  return { deleteLikePromise };
};

export default useLikeDeleteApi;
