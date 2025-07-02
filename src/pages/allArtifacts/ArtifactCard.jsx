// import React from "react";
// import { Link } from "react-router";
// import { motion } from "motion/react";

// const ArtifactCard = ({ artifact }) => {
//   const { artifact_name, artifact_image, short_description, discovered_by } =
//     artifact;

//   return (
//     <motion.div
//       initial={{ y: 50, opacity: 0 }}
//       whileInView={{ y: 0, opacity: 1 }}
//       transition={{ duration: 0.5 }}
//       viewport={{ once: true }}
//     >
//       <div className="card card-side bg-base-100 max-h-80 md:h-56 shadow-sm">
//         <figure className="max-w-40 md:w-70">
//           <img src={artifact_image} alt="Movie" />
//         </figure>
//         <div className="card-body">
//           <h2 className="card-title">{artifact_name}</h2>
//           <p>{short_description}</p>
//           <p>
//             Discovered by: <span>{discovered_by}</span>
//           </p>
//           {artifact.likes_count ? (
//             <p>Likes: {artifact.likes_count}</p>
//           ) : (
//             <p>Likes: 0</p>
//           )}
//           <div className="card-actions md:justify-end">
//             <Link to={`/artifact/${artifact._id}`}>
//               <button className="btn btn-outline">View Details</button>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export default ArtifactCard;

import React from "react";
import { Link } from "react-router";
import { motion } from "motion/react";

const ArtifactCard = ({ artifact }) => {
  const { artifact_name, artifact_image, short_description, discovered_by } =
    artifact;

  return (
    <motion.div
      initial={{ y: 150, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 2 }}
      viewport={{ once: true }}
      className="h-full"
    >
      <div className="card bg-base-100 shadow-sm h-full flex flex-col overflow-hidden">
        <figure className="w-full h-48">
          <img
            src={artifact_image}
            alt={artifact_name}
            className="object-cover w-full h-full"
          />
        </figure>
        <div className="card-body flex flex-col justify-between flex-1">
          <div className="flex flex-col gap-3">
            <h2 className="card-title text-xl">{artifact_name}</h2>
            <p className="text-base font-medium">{short_description}</p>
            <p className="text-base">
              Discovered by:{" "}
              <span className="font-semibold">{discovered_by}</span>
            </p>
            <p className="text-base">Likes: {artifact.likes_count || 0}</p>
          </div>
          <div className="card-actions justify-end mt-4">
            <Link to={`/artifact/${artifact._id}`}>
              <button className="btn rounded-2xl bg-base-200 hover:bg-accent">
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ArtifactCard;
