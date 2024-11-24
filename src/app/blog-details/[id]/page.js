"use client";
import React, { use, useEffect, useState } from "react";
import axios from "axios";
import { apiUrl } from "../../../../lib/api";
import { Calendar, Clock, User } from "lucide-react";
import Header1 from "@/components/headers/Header1";
import Footer1 from "@/components/footers/Footer1";

const BlogDetails = ({ params }) => {
  const { id } = use(params);
  const [blogData, setBlogData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getSingleBlog = async () => {
      try {
        const { data } = await axios.get(
          `${apiUrl}/api/blogs/guides-gpstracker/${id}`
        );
        setBlogData(data.data[0]);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setIsLoading(false);
      }
    };
    getSingleBlog();
  }, [id]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-pulse space-y-4">
          <div className="h-4 w-32 bg-gray-200 rounded"></div>
          <div className="h-4 w-24 bg-gray-200 rounded"></div>
        </div>
      </div>
    );
  }

  if (!blogData) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-gray-500">No blog post found</div>
      </div>
    );
  }

  return (
    <>
      <Header1 />
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 py-12">
          {/* Hero Section */}
          <div className="relative rounded-xl overflow-hidden shadow-xl mb-12">
            {blogData.image && (
              <div className="relative h-96">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <img
                  src={`${apiUrl}/${blogData.image}`}
                  alt={blogData.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            <div className="absolute bottom-0 left-0 right-0 p-8">
              <h1 className="text-4xl font-bold text-white mb-4">
                {blogData.title}
              </h1>
              <div className="flex items-center gap-6 text-gray-200">
                <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  <span>
                    {new Date(blogData.updated_at).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={16} />
                  <span>5 min read</span>
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <article className="bg-white rounded-xl shadow-md p-8 mb-12">
            {/* Description */}
            <div className="text-xl text-gray-600 mb-8 leading-relaxed border-l-4 border-blue-500 pl-6">
              {blogData.description}
            </div>

            {/* Main Content */}
            <div className="prose prose-lg max-w-none">
              <div className="space-y-6 text-gray-700 leading-relaxed">
                {blogData.content.split("\n").map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
          </article>

          {/* Author Section */}
          <div className="bg-white rounded-xl shadow-md p-8">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center">
                <User size={24} className="text-gray-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Written by</h3>
                <p className="text-gray-600">GPS Tracker Expert</p>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="mt-12 flex justify-between text-gray-600">
            <button className="px-6 py-3 bg-white rounded-lg shadow-md hover:bg-gray-50 transition-colors">
              ← Previous Article
            </button>
            <button className="px-6 py-3 bg-white rounded-lg shadow-md hover:bg-gray-50 transition-colors">
              Next Article →
            </button>
          </div>
        </div>
      </div>
      <Footer1 />
    </>
  );
};

export default BlogDetails;
