"use client";
import { useEffect, useState } from "react";
import GuideModal from "./GuideModal/Index";
import { apiUrl } from "../../../../../lib/api";
import axios from "axios";
import { Pencil, Trash2 } from "lucide-react";

const GuideForGPSTracker = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [blogs, setblogs] = useState([]);
  const [singleBlog, setsingleBlog] = useState(null);
  const [mode, setmode] = useState([]);
  const toggleModal = (modeType) => {
    setIsOpen((prev) => !prev);
    if (modeType === "Add Mode") {
      setmode(null);
    }
  };
  useEffect(() => {
    getBlogs();
  }, []);

  const getBlogs = async () => {
    try {
      const { data } = await axios.get(`${apiUrl}/api/blogs/guides-gpstracker`);
      setblogs(data.data); // Assuming the blogs are in the `data` field of the response
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  const getSingleBlog = async (id) => {
    try {
      setmode("update");
      const { data } = await axios.get(
        `${apiUrl}/api/blogs/guides-gpstracker/${id}`
      );
      setsingleBlog(data.data[0]);
      toggleModal();
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };
  const handleDelete = async (id) => {
    try {
      let token = localStorage.getItem("adminToken");
      const { data } = await axios.delete(
        `${apiUrl}/api/blogs/guides-gpstracker/${id}`,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      if (data.success) {
        getBlogs();
      }
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };
  return (
    <div className="w-full mx-auto p-5 font-roboto">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold mb-5">All Guides</h2>
        {/* Plus Button */}
        <button
          onClick={() => toggleModal("Add Mode")}
          className="px-3 py-2 bg-blue-500 rounded-md shadow transform hover:scale-105 hover:shadow-2xl text-white transition-all duration-300 ease-in-out"
        >
          + Add Guide
        </button>
      </div>
      {/* Guide modal */}
      <GuideModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        getBlogs={getBlogs}
        mode={mode}
        singleBlog={mode ? singleBlog : null}
      />
      {/* Table to show the data */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse bg-white rounded-lg shadow">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                Title
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                Description
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                image
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {blogs &&
              blogs.map((val) => (
                <tr key={val.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm">{val.title}</td>
                  <td className="px-6 py-4 text-sm">{val.description}</td>
                  <td className="px-6 py-4">
                    <img
                      src={`${apiUrl}/${val.image}`}
                      className="w-48 h-24 rounded"
                    />
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex gap-2">
                      <button
                        onClick={() => getSingleBlog(val.id)}
                        className="p-2 text-blue-600 hover:bg-blue-50 rounded-full"
                      >
                        <Pencil size={18} />
                      </button>
                      <button
                        onClick={() => handleDelete(val.id)}
                        className="p-2 text-red-600 hover:bg-red-50 rounded-full"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GuideForGPSTracker;
