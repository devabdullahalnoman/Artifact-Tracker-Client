import React from "react";
import { Link } from "react-router";

const LikedArtifactsRows = ({ artifact }) => {
  const {
    artifactId,
    artifactImage,
    artifactName,
    artifactDiscoverer,
    artifactDiscoveryPeriod,
  } = artifact;

  return (
    <tr className="text-center">
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12">
              <img src={artifactImage} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{artifactName}</div>
          </div>
        </div>
      </td>
      <td className="hidden md:block">
        {artifactDiscoverer}
        <br />
        <span className="badge badge-ghost badge-sm">
          {artifactDiscoveryPeriod}
        </span>
      </td>
      <th>
        <Link to={`/artifact/${artifactId}`}>
          <button className="btn btn-ghost">Details</button>
        </Link>
      </th>
    </tr>
  );
};

export default LikedArtifactsRows;
