import { useState } from "react";

export default function AddCountry() {
  const [formData, setFormData] = useState({
    name: "",
    order: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting Country:", formData);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white rounded shadow-md">
      <h2 className="text-xl font-bold mb-4">Add Country</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block font-semibold mb-1">Country Name</label>
          <input
            type="text"
            name="name"
            placeholder="Country Name"
            value={formData.name}
            onChange={handleChange}
            className="border p-2 w-full rounded"
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">Order</label>
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
          Add Country
        </button>
      </div>
    </form>
  );
}
