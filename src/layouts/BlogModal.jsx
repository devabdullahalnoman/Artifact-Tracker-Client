import React from "react";

const BlogModal = ({ post, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center px-4">
      <div className="bg-base-100 w-full max-w-6xl max-h-[90vh] overflow-y-auto rounded-lg p-6 relative">
        <button
          onClick={onClose}
          className="btn btn-sm btn-circle absolute top-4 right-4"
        >
          ✕
        </button>
        <h2 className="text-3xl font-bold mb-4">{post.title}</h2>
        <p className="text-base-content text-xl whitespace-pre-line">
          {post.content}
        </p>
      </div>
    </div>
  );
};

export default BlogModal;
