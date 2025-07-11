import React from "react";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router";
import { toast, ToastContainer } from "react-toastify";
import Swal from "sweetalert2";

const GSignIn = () => {
  const { googleSignIn } = useAuth();
  const location = useLocation();
  const redirect = location.state || "/";
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        if (user) {
          Swal.fire({
            title: "Signed In!",
            text: "You have successfully Signed In!",
            icon: "success",
            confirmButtonColor: "#3085d6",
            confirmButtonText: "Ok",
          }).then((result) => {
            if (result.isConfirmed) {
              navigate(redirect);
            }
          });
        }
      })
      .catch((error) => {
        const ErrorMessage = error.message;
        toast.error(ErrorMessage, {
          position: "top-left",
        });
      });
  };

  return (
    <div className="flex flex-col">
      <button
        onClick={handleGoogleSignIn}
        className="btn bg-white text-black hover:bg-accent border-[#e5e5e5] text-lg"
      >
        <svg
          aria-label="Google logo"
          width="25"
          height="25"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <g>
            <path d="m0 0H512V512H0" fill="#fff"></path>
            <path
              fill="#34a853"
              d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
            ></path>
            <path
              fill="#4285f4"
              d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
            ></path>
            <path
              fill="#fbbc02"
              d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
            ></path>
            <path
              fill="#ea4335"
              d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
            ></path>
          </g>
        </svg>
        Sign In with Google
      </button>
      <ToastContainer></ToastContainer>
      <div className="divider mb-0">OR</div>
    </div>
  );
};

export default GSignIn;
