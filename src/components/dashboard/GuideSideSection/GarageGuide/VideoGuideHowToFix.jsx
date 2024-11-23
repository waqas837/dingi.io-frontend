"use client";

 import React, { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { apiUrl } from "../../../../../lib/api";

const API_URL = `${apiUrl}/api/guidevideos`;

export default function VideoGuideHowToFix() {
  const [videos, setVideos] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [videoFile, setVideoFile] = useState(null);

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

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!videoFile) {
      toast.error("Please select a video file");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("files", videoFile);
    const token = localStorage.getItem("adminToken");
    try {
      const res = await fetch(`${API_URL}/upload`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      if (!res.ok) throw new Error("Failed to upload video");
      toast.success("Video uploaded successfully!");
      setTitle("");
      setDescription("");
      setVideoFile(null);
      fetchVideos();
    } catch (error) {
      toast.error("Failed to upload video");
      console.error(error);
    }
  };

  const handleDelete = async (id) => {
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
    <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
      <Toaster />
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
        Video Guide Management
      </h1>
      <form onSubmit={handleUpload} style={{ marginBottom: "40px" }}>
        <div style={styles.formGroup}>
          <label style={styles.label}>Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={styles.input}
            placeholder="Enter video title"
            required
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            style={styles.textArea}
            placeholder="Enter video description"
            required
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Upload Video</label>
          <input
            type="file"
            accept="video/*"
            onChange={(e) => setVideoFile(e.target.files[0])}
            style={styles.input}
            required
          />
        </div>
        <button type="submit" style={styles.saveButton}>
          Upload Video
        </button>
      </form>

      <h2 style={{ marginBottom: "20px" }}>Uploaded Videos</h2>
      {videos.map((video) => (
        <div key={video.id} style={styles.videoCard}>
          <h3>{video.title}</h3>
          <p>{video.description}</p>
          <video
            src={`${apiUrl}/${video.video_path}`}
            controls
            style={{ width: "100%", borderRadius: "6px" }}
          ></video>
          <button
            onClick={() => handleDelete(video.id)}
            style={styles.deleteButton}
          >
            Delete Video
          </button>
        </div>
      ))}
    </div>
  );
}
const styles = {
  formGroup: {
    marginBottom: "20px",
  },
  label: {
    fontSize: "14px",
    fontWeight: "600",
    color: "#555",
    marginBottom: "8px",
    display: "block",
  },
  input: {
    width: "100%",
    padding: "12px",
    border: "1px solid #ddd",
    borderRadius: "6px",
    fontSize: "14px",
    color: "#333",
    boxSizing: "border-box",
    transition: "border-color 0.3s",
  },
  textArea: {
    width: "100%",
    padding: "12px",
    border: "1px solid #ddd",
    borderRadius: "6px",
    fontSize: "14px",
    color: "#333",
    boxSizing: "border-box",
    transition: "border-color 0.3s",
    minHeight: "100px",
  },
  saveButton: {
    padding: "12px 18px",
    backgroundColor: "#4a90e2",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "600",
    width: "100%",
    transition: "background-color 0.3s",
  },
  videoCard: {
    marginBottom: "20px",
    padding: "15px",
    border: "1px solid #ddd",
    borderRadius: "6px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  deleteButton: {
    marginTop: "10px",
    padding: "8px 16px",
    backgroundColor: "#e74c3c",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
};
