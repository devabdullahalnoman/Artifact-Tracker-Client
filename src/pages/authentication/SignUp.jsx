import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router";
import { ToastContainer, toast } from "react-toastify";
import useAuth from "../../hooks/useAuth";
import GSignIn from "./GSignIn";
import { Head } from "@unhead/react";
import { motion } from "motion/react";

const SignUp = () => {
  const { createUser, updateUser, setUser } = useAuth();
  const navigate = useNavigate();

  const displayError = (errorMessage) => {
    toast.error(errorMessage, {
      position: "top-left",
    });
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newUser = Object.fromEntries(formData.entries());
    const { name, email, photoUrl, password } = newUser;

    const passwordRegEx = /(?=.*[a-z])(?=.*[A-Z]).{6,}/;
    if (passwordRegEx.test(password) === false) {
      displayError(
        "Password must be 6 characters and must contain an uppercase and a lowercase character"
      );
      return;
    }

    createUser(email, password)
      .then((userCredential) => {
        const userData = userCredential.user;
        updateUser({ displayName: name, photoURL: photoUrl })
          .then(() => {
            setUser({ ...userData, displayName: name, photoURL: photoUrl });
          })
          .catch((error) => {
            setUser(userData);
            displayError(error.message);
          });

        if (userData) {
          Swal.fire({
            title: "Signed Up!",
            text: "You have successfully Signed Up!",
            icon: "success",
            confirmButtonColor: "#3085d6",
            confirmButtonText: "Ok",
          }).then((result) => {
            if (result.isConfirmed) {
              navigate("/");
            }
          });
        }
      })
      .catch((error) => {
        displayError(error.message);
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
        <title>Sign Up</title>
      </Head>
      <div className="hero bg-base-200 pt-10 md:pt-0 min-h-screen">
        <div className="hero-content w-xl">
          <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
            <div className="card-body">
              <h1 className="text-3xl font-bold p-4 text-center">Sign Up</h1>
              <GSignIn></GSignIn>
              <form onSubmit={handleSignUp} className="fieldset">
                <label className="label">Name</label>
                <input
                  type="text"
                  name="name"
                  className="input w-full"
                  placeholder="Name"
                />
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
                <label className="label">Photo URL</label>
                <input
                  type="url"
                  name="photoUrl"
                  className="input w-full"
                  placeholder="Photo URL"
                />

                <button type="submit" className="btn btn-neutral mt-4">
                  Sign Up
                </button>
              </form>
              <p>
                Already have an account? Sign In{" "}
                <Link
                  to="/signin"
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

export default SignUp;
