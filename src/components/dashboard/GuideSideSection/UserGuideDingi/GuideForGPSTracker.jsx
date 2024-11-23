"use client";
import React, { useState } from "react";
import { Editor, EditorState, RichUtils, convertToRaw } from "draft-js";
import "draft-js/dist/Draft.css";
import { apiUrl } from "../../../../../lib/api";

const GuideForGPSTracker = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [formState, setFormState] = useState({
    title: "",
    description: "",
    content: "",
  });
  const [images, setImages] = useState([]);

  const handleEditorChange = (state) => {
    setEditorState(state);
    const rawContent = convertToRaw(state.getCurrentContent());
    setFormState((prev) => ({
      ...prev,
      content: JSON.stringify(rawContent),
    }));
  };

  const handleKeyCommand = (command, state) => {
    const newState = RichUtils.handleKeyCommand(state, command);
    if (newState) {
      setEditorState(newState);
      return "handled";
    }
    return "not-handled";
  };

  const toggleBlockType = (blockType) => {
    // Handle alignment separately
    if (blockType.startsWith("align-")) {
      setEditorState(RichUtils.toggleBlockType(editorState, blockType));
    } else {
      setEditorState(RichUtils.toggleBlockType(editorState, blockType));
    }
  };

  const toggleInlineStyle = (inlineStyle) => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, inlineStyle));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setImages(selectedFiles);
  };

  const removeImage = (indexToRemove) => {
    setImages((prev) => prev.filter((_, index) => index !== indexToRemove));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { title, description, content } = formState;

    if (!title || !content || !description) {
      alert("Please provide a title, description, and content for the guide.");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("content", content);

    images.forEach((file) => {
      formData.append("files", file);
    });

    try {
      const adminToken = localStorage.getItem("adminToken");
      if (!adminToken) {
        alert("Authentication token not found");
        return;
      }

      const response = await fetch(`${apiUrl}/api/blogs/guides-gpstracker`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${adminToken}`,
        },
        body: formData,
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText || "Failed to submit guide");
      }

      await response.json();

      setFormState({
        title: "",
        description: "",
        content: "",
      });
      setImages([]);
      setEditorState(EditorState.createEmpty());

      alert("Guide submitted successfully!");
    } catch (error) {
      console.error("Submission Error:", error);
      alert(error.message);
    }
  };

  // Toolbar button styles
  const toolbarButtonStyle =
    "p-2 bg-gray-200 rounded hover:bg-gray-300 text-sm";
  const toolbarGroupStyle =
    "flex gap-2 items-center border-r border-gray-300 pr-2 mr-2 last:border-0";

  // Get current block type
  const selection = editorState.getSelection();
  const blockType = editorState
    .getCurrentContent()
    .getBlockForKey(selection.getStartKey())
    .getType();

  return (
    <div className="max-w-xl mx-auto p-5 font-roboto">
      <h2 className="text-xl font-bold mb-5">Create Guide</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-lg font-medium text-gray-700">
            Title
            <input
              type="text"
              name="title"
              value={formState.title}
              onChange={handleChange}
              className="w-full mt-1 p-2 border border-gray-300 rounded-lg"
              required
            />
          </label>
        </div>

        <div>
          <label className="block text-lg font-medium text-gray-700">
            Description
            <textarea
              name="description"
              value={formState.description}
              onChange={handleChange}
              className="w-full mt-1 p-2 border border-gray-300 rounded-lg h-24"
              required
            />
          </label>
        </div>

        <div>
          <label className="block text-lg font-medium text-gray-700">
            Upload Images
            <input
              type="file"
              name="files"
              multiple
              accept="image/*"
              onChange={handleImageChange}
              className="w-full mt-1"
            />
          </label>
        </div>

        {images.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {images.map((file, index) => (
              <div key={index} className="relative">
                <img
                  src={URL.createObjectURL(file)}
                  alt={`Preview ${index}`}
                  className="w-24 h-24 object-cover rounded-lg"
                />
                <button
                  type="button"
                  onClick={() => removeImage(index)}
                  className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center"
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        )}

        <div>
          <label className="block text-lg font-medium text-gray-700">
            Content
          </label>
          <div className="border border-gray-300 rounded-lg p-2 mt-2">
            <div className="flex flex-wrap gap-2 mb-2 border-b border-gray-200 pb-2">
              {/* Headings Group */}
              <div className={toolbarGroupStyle}>
                <button
                  type="button"
                  onClick={() => toggleBlockType("header-one")}
                  className={`${toolbarButtonStyle} ${
                    blockType === "header-one" ? "bg-gray-300" : ""
                  }`}
                >
                  H1
                </button>
                <button
                  type="button"
                  onClick={() => toggleBlockType("header-two")}
                  className={`${toolbarButtonStyle} ${
                    blockType === "header-two" ? "bg-gray-300" : ""
                  }`}
                >
                  H2
                </button>
                <button
                  type="button"
                  onClick={() => toggleBlockType("header-three")}
                  className={`${toolbarButtonStyle} ${
                    blockType === "header-three" ? "bg-gray-300" : ""
                  }`}
                >
                  H3
                </button>
                <button
                  type="button"
                  onClick={() => toggleBlockType("header-four")}
                  className={`${toolbarButtonStyle} ${
                    blockType === "header-four" ? "bg-gray-300" : ""
                  }`}
                >
                  H4
                </button>
              </div>

              {/* Text Style Group */}
              <div className={toolbarGroupStyle}>
                <button
                  type="button"
                  onClick={() => toggleInlineStyle("BOLD")}
                  className={toolbarButtonStyle}
                >
                  Bold
                </button>
                <button
                  type="button"
                  onClick={() => toggleInlineStyle("ITALIC")}
                  className={toolbarButtonStyle}
                >
                  Italic
                </button>
                <button
                  type="button"
                  onClick={() => toggleInlineStyle("UNDERLINE")}
                  className={toolbarButtonStyle}
                >
                  Underline
                </button>
              </div>

              {/* List Group */}
              <div className={toolbarGroupStyle}>
                <button
                  type="button"
                  onClick={() => toggleBlockType("unordered-list-item")}
                  className={`${toolbarButtonStyle} ${
                    blockType === "unordered-list-item" ? "bg-gray-300" : ""
                  }`}
                >
                  Bullet List
                </button>
                <button
                  type="button"
                  onClick={() => toggleBlockType("ordered-list-item")}
                  className={`${toolbarButtonStyle} ${
                    blockType === "ordered-list-item" ? "bg-gray-300" : ""
                  }`}
                >
                  Numbered List
                </button>
              </div>

              {/* Alignment Group */}
              <div className={toolbarGroupStyle}></div>
            </div>
            <div className="relative">
              <Editor
                editorState={editorState}
                onChange={handleEditorChange}
                handleKeyCommand={handleKeyCommand}
                placeholder="Write your content here..."
              />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <button
            type="submit"
            className="w-full p-3 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition"
          >
            Submit Guide
          </button>
        </div>
      </form>
    </div>
  );
};

export default GuideForGPSTracker;
