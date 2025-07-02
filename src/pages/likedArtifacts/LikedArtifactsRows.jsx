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
    <tr>
      <td>
        <div className="md:w-1/3 mx-auto">
          <div className="flex items-center justify-start gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img src={artifactImage} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{artifactName}</div>
            </div>
          </div>
        </div>
      </td>
      <td className="hidden md:block text-center">
        {artifactDiscoverer}
        <br />
        <span className="badge badge-ghost badge-sm">
          {artifactDiscoveryPeriod}
        </span>
      </td>
      <th className="text-center">
        <Link to={`/artifact/${artifactId}`}>
          <button className="btn btn-ghost">Details</button>
        </Link>
      </th>
    </tr>
  );
};

export default LikedArtifactsRows;
