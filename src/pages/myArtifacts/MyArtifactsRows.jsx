import React from "react";
import { Link } from "react-router";
import useDeleteArtifactApi from "../../api/useDeleteArtifactApi";
import Swal from "sweetalert2";

const MyArtifactsRows = ({ artifact, artifacts, setArtifacts }) => {
  const { _id, artifact_image, artifact_name, discovered_by, discovered_at } =
    artifact;

  const { deleteArtifactPromise } = useDeleteArtifactApi();

  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteArtifactPromise(_id).then((data) => {
          if (data.deletedCount) {
            Swal.fire({
              title: "Deleted!",
              text: "The Artifact has been deleted.",
              icon: "success",
            });
            const remainingArtifacts = artifacts.filter(
              (singleArtifact) => singleArtifact._id !== _id
            );
            setArtifacts(remainingArtifacts);
          }
        });
      }
    });
  };

  return (
    <tr>
      <td>
        <div className="md:w-1/3 mx-auto">
          <div className="flex items-center justify-start w-fit gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img src={artifact_image} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{artifact_name}</div>
            </div>
          </div>
        </div>
      </td>
      <td className="hidden md:block text-center">
        {discovered_by}
        <br />
        <span className="badge badge-ghost badge-sm">{discovered_at}</span>
      </td>
      <td className="text-center">
        <Link to={`/artifact/${_id}`}>
          <button className="btn btn-ghost mb-1">Details</button>
        </Link>
        <Link to={`/updateArtifact/${_id}`}>
          <button className="btn btn-ghost mb-1">Update</button>
        </Link>
        <button onClick={handleDelete} className="btn btn-ghost">
          delete
        </button>
      </td>
    </tr>
  );
};

export default MyArtifactsRows;
