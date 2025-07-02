import useAuth from "../../hooks/useAuth";
import useMyLikedArtifactsApi from "../../api/useMyLikedArtifactsApi";

import LikedArtifactsList from "./LikedArtifactsList";

const LikedArtifacts = () => {
  const { myLikedArtifactsPromise } = useMyLikedArtifactsApi();
  const { user } = useAuth();

  return (
    <div className="bg-base-200 py-6 md:py-12 lg:py-14 min-h-screen">
      <h1 className="text-center text-4xl font-bold py-5">
        My Liked Artifacts
      </h1>
      <LikedArtifactsList
        myLikedArtifactsPromise={myLikedArtifactsPromise}
        user={user}
      ></LikedArtifactsList>
    </div>
  );
};

export default LikedArtifacts;
