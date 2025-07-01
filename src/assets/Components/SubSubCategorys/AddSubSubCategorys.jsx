import { useState } from "react";
import ImageUploadBox from "../Layout/ImageUploadBox";

export default function AddSubSubCategory() {
  const [formData, setFormData] = useState({
    parentCategory: "",
    subCategory: "",
    name: "",
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
    console.log("Sub Sub Category Submitted:", formData);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white rounded shadow-md">
      <h2 className="text-xl font-bold mb-4">Add Sub Sub Category</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block font-semibold mb-1">Category Image</label>
          <ImageUploadBox image={formData.image} onChange={handleImageChange} />
        </div>

        <div>
          <label className="block font-semibold mb-1">Parent Category</label>
          <select
            name="parentCategory"
            value={formData.parentCategory}
            onChange={handleChange}
            className="border p-2 w-full rounded"
            required
          >
            <option value="">Select Parent Category</option>
            <option value="lighting">Lighting</option>
            <option value="decor">Decor</option>
          </select>

          <label className="block font-semibold mt-4 mb-1">Parent Sub Category</label>
          <select
            name="subCategory"
            value={formData.subCategory}
            onChange={handleChange}
            className="border p-2 w-full rounded"
            required
          >
            <option value="">Select Sub Category</option>
            <option value="wall-lamps">Wall Lamps</option>
            <option value="table-lamps">Table Lamps</option>
          </select>

          <label className="block font-semibold mt-4 mb-1">Sub Sub Category Name</label>
          <input
            type="text"
            name="name"
            placeholder="Sub Sub Category Name"
            value={formData.name}
            onChange={handleChange}
            className="border p-2 w-full rounded"
          />

          <label className="block font-semibold mt-4 mb-1">Order</label>
          <input
            type="number"
            name="order"
            placeholder="Order"
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
          Add Sub Sub Category
        </button>
      </div>
    </form>
  );
}
