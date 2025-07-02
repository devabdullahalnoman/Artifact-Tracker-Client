import React from "react";
import useAuth from "../../hooks/useAuth";
import useAddArtifactsApi from "../../api/useAddArtifactsApi";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";
import { Head } from "@unhead/react";
import { toast, ToastContainer } from "react-toastify";

const AddArtifact = () => {
  const { user } = useAuth();
  const { addArtifactPromise } = useAddArtifactsApi();

  const navigate = useNavigate();

  const handleAddArtifact = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const artifactInfo = Object.fromEntries(formData.entries());

    addArtifactPromise(artifactInfo)
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Congratulations!",
            text: "You have successfully added an Artifact!",
            icon: "success",
            confirmButtonColor: "#3085d6",
            confirmButtonText: "Ok",
          }).then((result) => {
            if (result.isConfirmed) {
              navigate("/myArtifacts");
            }
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

  return (
    <div className="bg-base-200 py-6 md:py-12 lg:py-14">
      <div className="w-10/12 mx-auto">
        <Head>
          <title>Add Artifact</title>
        </Head>
        <h1 className="text-4xl font-bold text-center py-5">Add Artifact</h1>
        <form onSubmit={handleAddArtifact}>
          <fieldset className="bg-base-300 border-base-100 rounded-box border md:flex gap-6 p-4 mb-4">
            <legend className="fieldset-legend">Adder Information</legend>

            <div className="w-full">
              <label className="label">Adder Name</label>
              <input
                type="text"
                className="input w-full bg-base-200 text-lg"
                name="adder_name"
                value={user.displayName}
              />
            </div>

            <div className="w-full">
              <label className="label">Adder Email</label>
              <input
                type="email"
                className="input w-full bg-base-200 text-lg"
                name="adder_email"
                value={user.email}
              />
            </div>
          </fieldset>

          <fieldset className="bg-base-300 border-base-100 rounded-box border p-4 mb-4">
            <legend className="fieldset-legend">Basic Information</legend>

            <div className="md:flex gap-6 mb-4">
              <div className="w-full">
                <label className="label">Artifact Name</label>
                <input
                  type="text"
                  name="artifact_name"
                  className="input w-full bg-base-200 text-lg"
                  placeholder="Artifact Name"
                />
              </div>

              <div className="w-full">
                <label className="label">Artifact Image</label>
                <input
                  type="url"
                  name="artifact_image"
                  className="input w-full bg-base-200 text-lg"
                  placeholder="Artifact Image URL"
                />
              </div>
            </div>

            <div className="md:flex gap-6 mb-4">
              <div className="w-full">
                <label className="label">Artifact Type</label>
                <br />
                <select
                  defaultValue="Pick an artifact type"
                  className="select w-full bg-base-200 text-lg"
                  name="artifact_type"
                >
                  <option disabled={true}>Pick an artifact type</option>
                  <option>Documents</option>
                  <option>Sculptures</option>
                  <option>Writings</option>
                  <option>Tools</option>
                  <option>Textiles</option>
                  <option>Jewelry</option>
                  <option>Weapons</option>
                </select>
              </div>

              <div className="w-full">
                <label className="label">Created At</label>
                <input
                  type="text"
                  className="input w-full bg-base-200 text-lg"
                  name="created_at"
                  placeholder="Creation Period (e.g., 100 BC)"
                />
              </div>
            </div>

            <div className="md:flex gap-6">
              <div className="w-full">
                <label className="label">Historical Context</label>
                <input
                  type="text"
                  className="input w-full bg-base-200 text-lg"
                  name="historical_context"
                  placeholder="Historical Context"
                />
              </div>
              <div className="w-full">
                <label className="label">Present Location</label>
                <input
                  type="text"
                  className="input w-full bg-base-200 text-lg"
                  name="present_location"
                  placeholder="Location"
                />
              </div>
            </div>
          </fieldset>
          <fieldset className="bg-base-300 border-base-100 rounded-box border p-4 mb-4">
            <legend className="fieldset-legend">Discovery</legend>

            <div className="md:flex gap-6 mb-4">
              <div className="w-full">
                <label className="label">Discovered By</label>
                <input
                  type="text"
                  name="discovered_by"
                  className="input w-full bg-base-200 text-lg"
                  placeholder="Discoverer Name"
                />
              </div>

              <div className="w-full">
                <label className="label">Discovered At</label>
                <input
                  type="text"
                  name="discovered_at"
                  className="input w-full bg-base-200 text-lg"
                  placeholder="Discovery Period (e.g., 1799)"
                />
              </div>
            </div>
            <fieldset className="">
              <legend className="label">Short Description</legend>
              <textarea
                className="textarea h-24 bg-base-200 text-lg w-full"
                name="short_description"
                placeholder="Short Description"
              ></textarea>
            </fieldset>
          </fieldset>
          <button
            className="btn mb-8 p-7 w-full rounded-lg text-2xl bg-base-100 hover:bg-accent hover:text-white"
            type="submit"
          >
            Add Artifact
          </button>
        </form>
        <ToastContainer></ToastContainer>
      </div>
    </div>
  );
};

export default AddArtifact;
