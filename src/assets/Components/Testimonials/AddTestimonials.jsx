import { useState } from "react";
import ImageUploadBox from "../Layout/ImageUploadBox";

export default function AddTestimonial() {
  const [formData, setFormData] = useState({
    name: "",
    designation: "",
    rating: "",
    order: "",
    message: "",
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
    console.log("Submitting Testimonial:", formData);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white rounded shadow-md">
      <h2 className="text-xl font-bold mb-4">Add Testimonial</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block font-semibold mb-1">Testimonial Image</label>
          <ImageUploadBox image={formData.image} onChange={handleImageChange} />
        </div>

        <div>
          <label className="block font-semibold mb-1">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="border p-2 w-full rounded"
          />

          <label className="block font-semibold mt-4 mb-1">Designation</label>
          <input
            type="text"
            name="designation"
            value={formData.designation}
            onChange={handleChange}
            className="border p-2 w-full rounded"
          />

          <label className="block font-semibold mt-4 mb-1">Rating (out of 5)</label>
          <input
            type="number"
            name="rating"
            max="5"
            min="1"
            value={formData.rating}
            onChange={handleChange}
            className="border p-2 w-full rounded"
          />

          <label className="block font-semibold mt-4 mb-1">Order</label>
          <input
            type="number"
            name="order"
            value={formData.order}
            onChange={handleChange}
            className="border p-2 w-full rounded"
          />
        </div>
      </div>

      <label className="block font-semibold mt-6 mb-1">Message</label>
      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        className="border p-2 w-full rounded"
        rows="4"
      ></textarea>

      <div className="mt-6">
        <button
          type="submit"
          className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
        >
          Add Testimonial
        </button>
      </div>
    </form>
  );
}
