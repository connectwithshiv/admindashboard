import { useState } from "react";

export default function AddMaterial() {
  const [materialName, setMaterialName] = useState("");
  const [order, setOrder] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Material Submitted:", { materialName, order });
  };

  return (
    <div className="bg-white p-6 rounded shadow-md max-w-xl mx-auto mt-6 border border-gray-200">
      <h2 className="text-xl font-semibold mb-4 border-b pb-2">Add Material</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Material Name</label>
          <input
            type="text"
            value={materialName}
            onChange={(e) => setMaterialName(e.target.value)}
            placeholder="Enter material name"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Order</label>
          <input
            type="number"
            value={order}
            onChange={(e) => setOrder(e.target.value)}
            placeholder="Enter order"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>

        <div>
          <button
            type="submit"
            className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition"
          >
            Add Material
          </button>
        </div>
      </form>
    </div>
  );
}
