import { useState } from "react";

export default function AddTermsCondition() {
  const [formData, setFormData] = useState({
    terms: "",
    order: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting Terms & Conditions:", formData);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white rounded shadow-md">
      <h2 className="text-xl font-bold mb-4">Add Terms & Conditions</h2>

      <label className="block font-semibold mb-1">Terms</label>
      <textarea
        name="terms"
        value={formData.terms}
        onChange={handleChange}
        className="border p-2 w-full rounded"
        rows="6"
      ></textarea>

      <label className="block font-semibold mt-4 mb-1">Order</label>
      <input
        type="number"
        name="order"
        value={formData.order}
        onChange={handleChange}
        className="border p-2 w-full rounded"
      />

      <div className="mt-6">
        <button
          type="submit"
          className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
        >
          Add Terms
        </button>
      </div>
    </form>
  );
}
