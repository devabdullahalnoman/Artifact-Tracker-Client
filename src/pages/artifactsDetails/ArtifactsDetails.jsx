import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import useArtifactsDetailsApi from "../../api/useArtifactsDetailsApi";
import LoadingSpinner from "../../shared/LoadingSpinner";
import useAuth from "../../hooks/useAuth";
import useLikePostApi from "../../api/useLikePostApi";
import useLikeDeleteApi from "../../api/useLikeDeleteApi";
import useMyLikedArtifactsApi from "../../api/useMyLikedArtifactsApi";
import { Head } from "@unhead/react";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import Swal from "sweetalert2";
import { toast, ToastContainer } from "react-toastify";

const ArtifactsDetails = () => {
  const { id } = useParams();
  const [artifact, setArtifact] = useState([]);
  const [loading, setLoading] = useState(true);
  const [artifactLiker, setArtifactLiker] = useState();
  const [liked, setLiked] = useState(false);

  const { artifactDetailsPromise } = useArtifactsDetailsApi();
  const { myLikedArtifactsPromise } = useMyLikedArtifactsApi();
  const { deleteLikePromise } = useLikeDeleteApi();
  const { likePostPromise } = useLikePostApi();
  const { user } = useAuth();

  useEffect(() => {
    artifactDetailsPromise(id)
      .then((data) => {
        setArtifact(data);
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

  useEffect(() => {
    myLikedArtifactsPromise(user.email).then((data) => {
      const userLike = data.find((like) => like.artifactId === id);
      if (userLike) {
        setArtifactLiker(userLike);
        setLiked(true);
      }
    });
  }, [liked]);

  const handleLike = () => {
    const artifactId = artifact._id;
    const artifactImage = artifact.artifact_image;
    const artifactName = artifact.artifact_name;
    const artifactDiscoverer = artifact.discovered_by;
    const artifactDiscoveryPeriod = artifact.discovered_at;
    const userEmail = user.email;
    const likeInfo = {
      artifactId,
      artifactName,
      userEmail,
      artifactImage,
      artifactDiscoverer,
      artifactDiscoveryPeriod,
    };

    likePostPromise(likeInfo)
      .then((data) => {
        if (data.insertedId) {
          setArtifact({ ...artifact, likes_count: artifact.likes_count + 1 });
          setLiked(true);
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Liked this artifact!",
            showConfirmButton: false,
            timer: 1500,
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

  const handleDislike = () => {
    deleteLikePromise(artifactLiker._id).then((data) => {
      if (data.deletedCount) {
        setArtifact({ ...artifact, likes_count: artifact.likes_count - 1 });
        setLiked(false);
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "Disliked this artifact!",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  if (loading) {
    return <LoadingSpinner></LoadingSpinner>;
  }

  return (
    <div className="py-7 md:py-13 lg:py-15 bg-base-200">
      <div className="md:w-10/12 mx-auto grid md:grid-cols-12">
        <Head>
          <title>{artifact.artifact_name}</title>
        </Head>
        <div className="md:col-span-6">
          <h1 className="text-4xl text-center font-semibold mb-10">
            {artifact.artifact_name}
          </h1>
          <div className="flex justify-center mb-5">
            <img
              src={artifact.artifact_image}
              alt="Artifact Image"
              className="lg:max-w-md rounded-2xl"
            />
          </div>
        </div>
        <div className="divider divider-horizontal hidden md:flex"></div>
        <div className="max-w-11/12 mx-auto md:max-w-full md:col-span-5">
          <div className="flex justify-center md:justify-end">
            <fieldset className="fieldset bg-base-300 border-base-300 rounded-box w-xs border p-4">
              <legend className="legend text-2xl font-extrabold">Like</legend>
              <div className="my-3 flex items-center gap-5 justify">
                <p className="text-lg font-bold mb-2">
                  Likes: {artifact.likes_count}
                </p>
                {liked ? (
                  <button
                    onClick={handleDislike}
                    className="btn btn-outline text-2xl p-7 rounded-2xl"
                  >
                    <AiOutlineDislike />
                    Dislike
                  </button>
                ) : (
                  <button
                    onClick={handleLike}
                    className="btn btn-outline text-2xl p-7 rounded-2xl"
                  >
                    <AiOutlineLike />
                    like
                  </button>
                )}
              </div>
            </fieldset>
          </div>

          <div className="flex flex-col gap-5">
            <fieldset className="fieldset bg-base-300 border-base-300 rounded-box border p-4">
              <legend className="legend text-2xl font-extrabold">
                Basic Information
              </legend>
              <p className="text-lg font-bold">
                Artifact type: {artifact.artifact_type}
              </p>
              <p className="text-lg font-bold">
                Creation Period: {artifact.created_at}
              </p>
              <p className="text-lg font-bold">
                Historical Context: {artifact.historical_context}
              </p>
            </fieldset>

            <fieldset className="fieldset bg-base-300 border-base-300 rounded-box border p-4">
              <legend className="legend text-2xl font-extrabold">
                Discovery
              </legend>
              <p className="text-lg font-bold">
                Discovery Period: {artifact.discovered_at}
              </p>
              <p className="text-lg font-bold">
                Discoverer: {artifact.discovered_by}
              </p>
              <p className="text-lg font-bold">
                Present Location: {artifact.present_location}
              </p>
            </fieldset>

            <fieldset className="fieldset bg-base-300 border-base-300 rounded-box border p-4">
              <legend className="legend text-2xl font-extrabold">
                Description
              </legend>
              <p className="text-lg font-bold border rounded-2xl p-8 mx-auto">
                {artifact.short_description}
              </p>
            </fieldset>
          </div>
        </div>
        <ToastContainer></ToastContainer>
      </div>
    </div>
  );
};

export default ArtifactsDetails;
