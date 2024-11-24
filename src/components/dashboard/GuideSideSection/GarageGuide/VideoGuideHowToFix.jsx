import React, { useState, useEffect } from "react";
import { Plus, Pencil, Trash2 } from "lucide-react";
import { apiUrl } from "../../../../../lib/api";
import toast, { Toaster } from "react-hot-toast";

const API_URL = `${apiUrl}/api/guidevideos`;

export default function VideoGuideHowToFix() {
  const [videos, setVideos] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState("create"); // 'create' or 'edit'
  const [formData, setFormData] = useState({
    id: null,
    title: "",
    description: "",
    videoFile: null,
  });

  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    try {
      const res = await fetch(API_URL);
      if (!res.ok) throw new Error("Failed to fetch videos");
      const data = await res.json();
      setVideos(data);
    } catch (error) {
      toast.error("Failed to fetch videos");
      console.error(error);
    }
  };

  const handleOpenModal = (mode = "create", video = null) => {
    setModalMode(mode);
    if (mode === "edit" && video) {
      setFormData({
        id: video.id,
        title: video.title,
        description: video.description,
        videoFile: null,
      });
    } else {
      setFormData({
        id: null,
        title: "",
        description: "",
        videoFile: null,
      });
    }
    setIsModalOpen(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append("title", formData.title);
    formDataToSend.append("description", formData.description);
    if (formData.videoFile) {
      formDataToSend.append("files", formData.videoFile);
    }

    const token = localStorage.getItem("adminToken");
    const url =
      modalMode === "edit" ? `${API_URL}/${formData.id}` : `${API_URL}/upload`;

    try {
      const res = await fetch(url, {
        method: modalMode === "edit" ? "PUT" : "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formDataToSend,
      });

      if (!res.ok) throw new Error(`Failed to ${modalMode} video`);
      toast.success(`Video ${modalMode}d successfully!`);
      setIsModalOpen(false);
      fetchVideos();
    } catch (error) {
      toast.error(`Failed to ${modalMode} video`);
      console.error(error);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this video?")) return;

    try {
      const token = localStorage.getItem("adminToken");
      const res = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!res.ok) throw new Error("Failed to delete video");
      toast.success("Video deleted successfully!");
      fetchVideos();
    } catch (error) {
      toast.error("Failed to delete video");
      console.error(error);
    }
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <Toaster />

      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Video Guide Management</h1>
        <button
          onClick={() => handleOpenModal("create")}
          className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
        >
          <Plus size={20} />
          Add Video
        </button>
      </div>

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
                Video
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {videos.map((video) => (
              <tr key={video.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 text-sm">{video.title}</td>
                <td className="px-6 py-4 text-sm">{video.description}</td>
                <td className="px-6 py-4">
                  <video
                    src={`${apiUrl}/${video.video_path}`}
                    controls
                    className="w-48 rounded"
                  />
                </td>
                <td className="px-6 py-4">
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleOpenModal("edit", video)}
                      className="p-2 text-blue-600 hover:bg-blue-50 rounded-full"
                    >
                      <Pencil size={18} />
                    </button>
                    <button
                      onClick={() => handleDelete(video.id)}
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

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 w-full max-w-2xl">
            <h2 className="text-xl font-bold mb-4">
              {modalMode === "create" ? "Add New Video" : "Edit Video"}
            </h2>

            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Title
                </label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) =>
                    setFormData({ ...formData, title: e.target.value })
                  }
                  className="w-full p-2 border rounded-lg"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Description
                </label>
                <textarea
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                  className="w-full p-2 border rounded-lg min-h-24"
                  required
                />
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Video File
                </label>
                <input
                  type="file"
                  accept="video/*"
                  onChange={(e) =>
                    setFormData({ ...formData, videoFile: e.target.files[0] })
                  }
                  className="w-full p-2 border rounded-lg"
                  required={modalMode === "create"}
                />
              </div>

              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 border rounded-lg hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                >
                  {modalMode === "create" ? "Upload" : "Update"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
