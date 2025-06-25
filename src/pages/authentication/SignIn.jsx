import { toast, ToastContainer } from "react-toastify";
import Swal from "sweetalert2";
import { Link, useLocation, useNavigate } from "react-router";
import useAuth from "../../hooks/useAuth";
import GSignIn from "./GSignIn";
import { Head } from "@unhead/react";
import { motion } from "motion/react";

const SignIn = () => {
  const { signInUser } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const redirect = location.state || "/";

  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const userData = Object.fromEntries(formData.entries());
    const { email, password } = userData;

    signInUser(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
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
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 2 }}
      viewport={{ once: true }}
    >
      <Head>
        <title>Sign In</title>
      </Head>
      <div className="hero bg-base-200 pt-10 md:pt-0 min-h-screen">
        <div className="hero-content md:w-xl">
          <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
            <div className="card-body">
              <h1 className="text-3xl font-bold p-4 text-center">Sign In</h1>
              <GSignIn></GSignIn>
              <form onSubmit={handleSignIn} className="fieldset">
                <label className="label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="input w-full"
                  placeholder="Email"
                />
                <label className="label">Password</label>
                <input
                  type="password"
                  name="password"
                  className="input w-full"
                  placeholder="Password"
                />
                <button type="submit" className="btn btn-neutral mt-4">
                  Sign In
                </button>
              </form>
              <p>
                Don't have an account? Create one{" "}
                <Link
                  to="/signup"
                  className="text-lg font-bold cursor-pointer hover:underline hover:text-blue-500"
                >
                  here
                </Link>
                !
              </p>
              <ToastContainer />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SignIn;
