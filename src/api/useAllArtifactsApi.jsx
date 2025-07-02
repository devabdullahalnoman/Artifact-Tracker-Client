import useAxiosSecure from "../hooks/useAxiosSecure";

const useAllArtifactsApi = () => {
  const axiosInstance = useAxiosSecure();

  const allArtifactsPromise = (artifactName = "", sort = "name-asc") => {
    return axiosInstance
      .get(`/artifacts?name=${artifactName}&sort=${sort}`)
      .then((res) => res.data);
  };

  return { allArtifactsPromise };
};

export default useAllArtifactsApi;
