import React from "react";
import useAxiosSecure from "../hooks/useAxiosSecure";

const useLikePostApi = () => {
  const axiosInstance = useAxiosSecure();

  const likePostPromise = (likeInfo) => {
    return axiosInstance.post("/likes", likeInfo).then((res) => res.data);
  };
  return { likePostPromise };
};

export default useLikePostApi;
