import React from "react";

const Categories = () => {
  return (
    <div>
      <div className="py-20 bg-base-200">
        <hr className="max-w-15 mx-auto text-yellow-600 border-2 rounded-2xl" />
        <div className="md:max-w-10/12 mx-auto px-4">
          <h2 className="text-4xl font-bold text-center my-8">
            Artifact Categories
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              "Sculptures",
              "Manuscripts",
              "Tools",
              "Relics",
              "Coins",
              "Weapons",
              "Inscriptions",
              "Paintings",
            ].map((category) => (
              <div
                key={category}
                className="bg-base-100 p-6 rounded-lg shadow hover:shadow-lg transition"
              >
                <h3 className="text-xl font-semibold text-center">
                  {category}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
