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
      throw error; // Re-throw the error to handle it elsewhere if needed
    }
  };
  const blogs = await getBlogs();
  return (
    <section className="blog-section">
      <div className="boxcar-container">
        <div className="boxcar-title wow fadeInUp">
          <h2>Latest Blog Posts</h2>
        </div>
        <div className="row">
          {blogs &&
            blogs.data.map((post, index) => (
              <div
                className="blog-block col-lg-4 col-md-6 col-sm-12"
                key={index}
              >
                <div
                  className={`inner-box wow fadeInUp`}
                  data-wow-delay={post.wowDelay}
                >
                  <div className="image-box">
                    <figure className="image">
                      <Link href={`/blog-single/${post.id}`}>
                        <img
                          alt=""
                          src={`${apiUrl}/${post.image}`}
                          width={448}
                          height={300}
                        />
                      </Link>
                    </figure>
                  </div>
                  <div className="content-box">
                    <ul className="post-info">
                      <li>{new Date(post.updated_at).toLocaleDateString()}</li>
                    </ul>
                    <h6 className="title">
                      <Link href={`/blog-single/${post.id}`} title="">
                        {post.title}
                      </Link>
                    </h6>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
