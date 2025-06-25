import ArtifactCard from "./ArtifactCard";
import { IoSearchSharp } from "react-icons/io5";
import LoadingSpinner from "../../shared/LoadingSpinner";
import { useEffect, useRef, useState } from "react";
import useAllArtifactsApi from "../../api/useAllArtifactsApi";
import { Head } from "@unhead/react";
import { toast, ToastContainer } from "react-toastify";

const AllArtifacts = () => {
  const [loading, setLoading] = useState(true);
  const [allArtifacts, setAllArtifacts] = useState([]);
  const artifactNameRef = useRef();

  const { allArtifactsPromise } = useAllArtifactsApi();

  useEffect(() => {
    allArtifactsPromise("")
      .then((data) => {
        setAllArtifacts(data);
        setLoading(false);
      })
      .catch((error) => {
        const ErrorMessage = error.message;
        toast.error(ErrorMessage, {
          position: "top-left",
        });
        setLoading(false);
      });
  }, []);

  const handleSearch = () => {
    const artifactName = artifactNameRef.current.value;
    setLoading(true);
    setAllArtifacts([]);
    allArtifactsPromise(artifactName)
      .then((data) => {
        setAllArtifacts(data);
        setLoading(false);
      })
      .catch((error) => {
        const ErrorMessage = error.message;
        toast.error(ErrorMessage, {
          position: "top-left",
        });
        setLoading(false);
      });
  };

  if (loading) {
    return <LoadingSpinner></LoadingSpinner>;
  }

  return (
    <div className="bg-base-300">
      <div className="max-w-11/12 mx-auto py-10">
        <Head>
          <title>All Artifact</title>
        </Head>
        <h1 className="text-5xl text-center my-8 font-extrabold">
          Browse Artifacts
        </h1>
        <div className="flex flex-col md:flex-row justify-center items-center gap-2 mb-10">
          <label className="input w-3/12 h-12">
            <svg
              className="h-[2em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input
              type="search"
              name="artifactName"
              required
              placeholder="Search by Artifact name"
              ref={artifactNameRef}
            />
          </label>
          <button onClick={handleSearch} className="btn rounded-xl py-6">
            <IoSearchSharp size={30} />
          </button>
        </div>
        <div>
          {allArtifacts.length === 0 ? (
            <>
              <div className="flex flex-col items-center gap-5">
                <p className="text-2xl text-center">No Items Found!</p>
                <button
                  onClick={handleSearch}
                  className="btn btn-lg btn-primary"
                >
                  All Artifacts
                </button>
              </div>
            </>
          ) : (
            <>
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10">
                {allArtifacts.map((artifact) => (
                  <ArtifactCard
                    key={artifact._id}
                    artifact={artifact}
                  ></ArtifactCard>
                ))}
              </div>
            </>
          )}
        </div>
        <ToastContainer></ToastContainer>
      </div>
    </div>
  );
};

export default AllArtifacts;
