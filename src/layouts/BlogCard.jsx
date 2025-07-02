import { useState } from "react";
import BlogModal from "./BlogModal";

const BlogCard = ({ post }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="bg-base-300 p-6 rounded-lg shadow hover:shadow-lg transition flex flex-col justify-between items-start">
        <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
        <p className="text-sm text-base-content">{post.excerpt}</p>
        <button
          onClick={() => setOpen(true)}
          className="btn btn-link mt-2 px-0"
        >
          Read More
        </button>
      </div>
      {open && <BlogModal post={post} onClose={() => setOpen(false)} />}
    </>
  );
};

export default BlogCard;
