import React from "react";
import { useParams } from "react-router-dom";
import blogData from "../data/blogs";

const BlogDetail = () => {
  const { slug } = useParams();
  const blog = blogData.find((b) => b.slug === slug);

  if (!blog) return <p>Blog not found.</p>;

  return (
    <div className="min-h-screen bg-blue-50 py-10 px-6 max-w-[90%] mx-auto">
      <h1 className="text-3xl font-bold text-blue-900 mb-4">{blog.title}</h1>
      <img src={blog.image} alt={blog.title} className="w-full max-h-96 object-cover rounded mb-6" />

      {blog.content ? (
        <p className="text-gray-800 whitespace-pre-line">{blog.content}</p>
      ) : (
        <p className="text-gray-700">
          This blog is from an external source. Read the full article{" "}
          <a href={blog.source} target="_blank" rel="noopener noreferrer" className="text-blue-700 underline">
            here
          </a>.
        </p>
      )}
    </div>
  );
};

export default BlogDetail;
