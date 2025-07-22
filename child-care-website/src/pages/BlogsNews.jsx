import React from "react";
import { useNavigate } from "react-router-dom";
import blogData from "../data/blogs";

const BlogsNews = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-blue-50 px-6 py-10 text-gray-800">
      <h1 className="text-3xl font-bold mb-6 text-blue-900">Blogs & News</h1>
      <p className="mb-6">Stay updated with articles and news related to child protection, laws, and digital safety.</p>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {blogData.map((blog) => (
          <div
            key={blog.id}
            onClick={() => navigate(`/blogs-news/${blog.slug}`)}
            className="bg-white rounded-lg shadow hover:shadow-md cursor-pointer transition-all"
          >
            <img src={blog.image} alt={blog.title} className="w-full h-40 object-cover rounded-t-lg" />
            <div className="p-4">
              <h3 className="text-blue-800 font-semibold">{blog.title}</h3>
              <p className="text-sm text-gray-600 mt-2 line-clamp-3">{blog.excerpt}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogsNews;
