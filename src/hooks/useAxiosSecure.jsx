import axios from "axios";
import useAuth from "./useAuth";
import { auth } from "../firebase/firebase.init";
import Swal from "sweetalert2";

const axiosInstance = axios.create({
  baseURL: "https://artifact-tracker-server.vercel.app",
  headers: {
    "Content-Type": "application/json",
  },
});

const useAxiosSecure = () => {
  const { signOutUser } = useAuth();

  axiosInstance.interceptors.request.use(
    async (config) => {
      const user = auth.currentUser;

      if (user) {
        const token = await user.getIdToken();
        config.headers.authorization = `Bearer ${token}`;
      }

      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );

  axiosInstance.interceptors.response.use(
    (response) => {
      return response;
    },
    async (error) => {
      if (error.response?.status === 401) {
        const user = auth.currentUser;

        if (user) {
          try {
            const newToken = await user.getIdToken(true);
            error.config.headers.authorization = `Bearer ${newToken}`;
            return axiosInstance(error.config);
          } catch (error) {
            Swal.fire({
              title: "Error!",
              text: "Token refresh failed. Signing out...!",
              error,
              icon: "error",
              confirmButtonColor: "#3085d6",
              confirmButtonText: "Ok",
            });
            signOutUser();
          }
        }
      }
      return Promise.reject(error);
    }
  );

  return axiosInstance;
};

export default useAxiosSecure;
