import ArtifactCard from "./ArtifactCard";
import { IoSearchSharp } from "react-icons/io5";
import LoadingSpinner from "../../shared/LoadingSpinner";
import { useEffect, useRef, useState } from "react";
import useAllArtifactsApi from "../../api/useAllArtifactsApi";
import { Head } from "@unhead/react";
import { toast, ToastContainer } from "react-toastify";
import { IoIosOptions } from "react-icons/io";

const AllArtifacts = () => {
  const [loading, setLoading] = useState(true);
  const [allArtifacts, setAllArtifacts] = useState([]);
  const [sortOption, setSortOption] = useState("name-asc");
  const artifactNameRef = useRef();

  const { allArtifactsPromise } = useAllArtifactsApi();

  const fetchArtifacts = (name = "", sort = "name-asc") => {
    setLoading(true);
    allArtifactsPromise(name, sort)
      .then((data) => {
        setAllArtifacts(data);
        setLoading(false);
      })
      .catch((error) => {
        toast.error(error.message, { position: "top-left" });
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchArtifacts("", sortOption);
  }, [sortOption]);

  const handleSearch = () => {
    const artifactName = artifactNameRef.current.value;
    fetchArtifacts(artifactName, sortOption);
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="bg-base-200 py-14">
      <div className="max-w-10/12 mx-auto">
        <Head>
          <title>All Artifact</title>
        </Head>
        <h1 className="text-5xl text-center my-5 font-extrabold">
          Browse Artifacts
        </h1>

        <div className="md:hidden mb-6">
          <details className="dropdown w-full">
            <summary className="btn btn-ghost bg-base-100 hover:bg-accent w-fit">
              <IoIosOptions size={25} />
            </summary>
            <div className="dropdown-content z-[1] menu p-4 shadow bg-base-100 rounded-box w-full space-y-4">
              <select
                className="select select-bordered w-full"
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
              >
                <option value="name-asc">Name (A–Z)</option>
                <option value="name-desc">Name (Z–A)</option>
                <option value="date-desc">Newest First</option>
                <option value="date-asc">Oldest First</option>
              </select>

              <label className="input w-full h-12">
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

              <button onClick={handleSearch} className="btn w-full">
                <IoSearchSharp size={20} className="mr-2" />
                Search
              </button>
            </div>
          </details>
        </div>

        <div className="md:flex flex-row justify-between items-center gap-4 mb-10 hidden">
          <select
            className="select select-bordered md:w-3/12 h-12"
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
          >
            <option value="name-asc">Name (A–Z)</option>
            <option value="name-desc">Name (Z–A)</option>
            <option value="date-desc">Newest First</option>
            <option value="date-asc">Oldest First</option>
          </select>

          <div className="flex min-w-1/3">
            <label className="input w-full h-12 mr-3">
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
        </div>

        <div>
          {allArtifacts.length === 0 ? (
            <div className="flex flex-col items-center gap-5">
              <p className="text-2xl text-center">No Items Found!</p>
              <button
                onClick={() => fetchArtifacts("", sortOption)}
                className="btn btn-lg btn-primary"
              >
                All Artifacts
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10">
              {allArtifacts.map((artifact) => (
                <ArtifactCard key={artifact._id} artifact={artifact} />
              ))}
            </div>
          )}
        </div>

        <ToastContainer />
      </div>
    </div>
  );
};

export default AllArtifacts;
