import React from "react";
import Link from "next/link";
import axios from "axios";
import { apiUrl } from "../../../../lib/api";

export default async function Blogs() {
  const getBlogs = async () => {
    try {
      const response = await axios.get(
        `${apiUrl}/api/blogs/guides-gpstracker?limit=3`
      );
      return response.data; // Assuming the blogs are in the `data` field of the response
    } catch (error) {
      console.error("Error fetching blogs:", error);
      throw error;
    }
  };

  const blogs = await getBlogs();

  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800">
            Latest Blog Posts
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogs &&
            blogs.data.map((post, index) => (
              <div
                className="bg-white shadow-md rounded-lg overflow-hidden transform transition hover:-translate-y-1 hover:shadow-lg"
                key={index}
              >
                <div>
                  <Link href={`/blog-details/${post.id}`}>
                    <img
                      alt={post.title}
                      src={`${apiUrl}/${post.image}`}
                      width={448}
                      height={300}
                      className="w-full h-48 object-cover"
                    />
                  </Link>
                </div>
                <div className="p-4">
                  <ul className="text-sm text-gray-500 mb-2">
                    <li>{new Date(post.updated_at).toLocaleDateString()}</li>
                  </ul>
                  <h6 className="text-lg font-semibold text-gray-800 hover:text-blue-600">
                    <Link href={`/blog-details/${post.id}`}>{post.title}</Link>
                  </h6>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
