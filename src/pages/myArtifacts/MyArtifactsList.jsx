import React, { useEffect, useState } from "react";
import { use } from "react";
import MyArtifactsRows from "./MyArtifactsRows";
import MyArtifactsNoData from "./MyArtifactsNoData";
import { Head } from "@unhead/react";

const MyArtifactsList = ({ myArtifactsPromise }) => {
  const [artifacts, setArtifacts] = useState([]);
  const myArtifactsData = use(myArtifactsPromise);

  console.log(myArtifactsPromise);

  useEffect(() => {
    setArtifacts(myArtifactsData);
  }, []);

  if (artifacts.length === 0) {
    return <MyArtifactsNoData></MyArtifactsNoData>;
  }

  return (
    <div className="w-11/12 md:w-10/12 mx-auto my-8">
      <Head>
        <title>My Artifacts</title>
      </Head>
      <div className="overflow-x-auto">
        <table className="table">
          <thead className="text-center">
            <tr>
              <th>Artifact Name</th>
              <th className="hidden md:block">Discovered By</th>
              <th>Actions</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {artifacts.map((artifact) => (
              <MyArtifactsRows
                key={artifact._id}
                artifacts={artifacts}
                setArtifacts={setArtifacts}
                artifact={artifact}
              ></MyArtifactsRows>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyArtifactsList;
