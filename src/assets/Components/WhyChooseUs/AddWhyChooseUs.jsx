import { useState } from "react";
import ImageUploadBox from "../Layout/ImageUploadBox";

export default function AddWhyChooseUs() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    order: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (file) => {
    setFormData((prev) => ({ ...prev, image: file }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting:", formData);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white rounded shadow-md">
      <h2 className="text-xl font-bold mb-4">Add Why Choose Us</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block font-semibold mb-1">Image</label>
          <ImageUploadBox image={formData.image} onChange={handleImageChange} />
        </div>

        <div>
          <label className="block font-semibold mb-1">Title</label>
          <input
            type="text"
            name="title"
            placeholder="Why Choose Us Title"
            value={formData.title}
            onChange={handleChange}
            className="border p-2 w-full rounded"
          />

          <label className="block font-semibold mt-4 mb-1">Description</label>
          <textarea
            name="description"
            placeholder="Short description"
            value={formData.description}
            onChange={handleChange}
            rows={3}
            className="border p-2 w-full rounded resize-none"
          ></textarea>

          <label className="block font-semibold mt-4 mb-1">Order</label>
          <input
            type="number"
            name="order"
            placeholder="Display Order"
            value={formData.order}
            onChange={handleChange}
            className="border p-2 w-full rounded"
          />
        </div>
      </div>

      <div className="mt-6">
        <button
          type="submit"
          className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
        >
          Add Section
        </button>
      </div>
    </form>
  );
}
