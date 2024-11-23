import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import Loader from "./Loader";

const EditNote = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "Others",
  });
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);

  useEffect(() => {
    let isMounted = true;

    const fetchNote = async () => {
      try {
        const response = await axios.get(
          `https://personal-notes-manager-backend-geoo.onrender.com/api/notes/${id}`
        );
        if (isMounted) {
          setFormData({
            title: response.data.title || "",
            description: response.data.description || "",
            category: response.data.category || "Others",
          });
        }
      } catch (error) {
        if (isMounted) toast.error("Failed to fetch note. Please try again.");
        console.error("Error fetching note:", error);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchNote();

    return () => {
      isMounted = false; // Cleanup on unmount
    };
  }, [id]);

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.title.trim() || !formData.description.trim()) {
      toast.error("Title and Description are required!");
      return;
    }

    setUpdating(true);
    try {
      await axios.put(
        `https://personal-notes-manager-backend-geoo.onrender.com/api/notes/${id}`,
        formData
      );
      toast.success("Note updated successfully!");
      navigate("/");
    } catch (error) {
      toast.error("Failed to update note. Please try again.");
      console.error("Error updating note:", error);
    } finally {
      setUpdating(false);
    }
  };

  if (loading) return <Loader />;

  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 min-h-screen flex items-center justify-center p-6">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-lg">
        <h2 className="text-3xl font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
          Edit Note
        </h2>

        <button
          onClick={() => navigate("/")}
          className="mb-4 text-blue-600 hover:text-blue-800 focus:outline-none"
        >
          &lt; Back
        </button>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter title"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Enter description"
              rows="4"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="category"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Category
            </label>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="Work">Work</option>
              <option value="Personal">Personal</option>
              <option value="Others">Others</option>
            </select>
          </div>
          <button
            type="submit"
            className={`w-full py-3 text-white font-medium rounded-lg transition-all duration-300 ${
              updating
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
            disabled={updating}
          >
            {updating ? "Updating..." : "Update Note"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditNote;
