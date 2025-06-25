import useAxiosSecure from "../hooks/useAxiosSecure";

const useAllArtifactsApi = () => {
  const axiosInstance = useAxiosSecure();

  const allArtifactsPromise = (artifactName) => {
    return axiosInstance
      .get(`/artifacts?name=${artifactName}`)
      .then((res) => res.data);
  };
  return { allArtifactsPromise };
};

export default useAllArtifactsApi;
