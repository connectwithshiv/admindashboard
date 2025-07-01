import { useState } from "react";
import { ChromePicker } from "react-color";

export default function AddColorForm() {
  const [color, setColor] = useState("#000000");
  const [colorName, setColorName] = useState("");
  const [order, setOrder] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting:", { colorName, color, order });
  };

  return (
    <div className="bg-white p-6 rounded-md shadow-md border border-gray-300 max-w-3xl mx-auto mt-6">
      <h2 className="text-lg font-semibold bg-gray-100 p-3 border rounded-t-md">Add Colors</h2>

      <form onSubmit={handleSubmit} className="space-y-6 mt-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Color Name</label>
          <input
            type="text"
            value={colorName}
            onChange={(e) => setColorName(e.target.value)}
            placeholder="Enter Color Name"
            className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Color Picker</label>
          <div className="flex gap-4 items-center">
            <ChromePicker color={color} onChange={(updated) => setColor(updated.hex)} />
            <div
              className="w-10 h-10 border rounded-md"
              style={{ backgroundColor: color }}
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Order</label>
          <input
            type="number"
            value={order}
            onChange={(e) => setOrder(e.target.value)}
            placeholder="Enter Order"
            className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <button
          type="submit"
          className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-md shadow"
        >
          Add Color
        </button>
      </form>
    </div>
  );
}
