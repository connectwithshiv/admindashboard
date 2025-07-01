export default function FilterBar({ title, showFilter, onToggleFilter }) {
  return (
    <>
      <div className="flex justify-between items-center bg-gray-100 p-4 rounded-t-md">
        <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
        <div className="flex gap-2">
          <button
            onClick={onToggleFilter}
            className="bg-blue-600 text-white px-3 py-2 rounded hover:bg-blue-700"
          >
            Filter
          </button>
          <button className="bg-green-600 text-white px-3 py-2 rounded hover:bg-green-700">
            Change Status
          </button>
          <button className="bg-red-600 text-white px-3 py-2 rounded hover:bg-red-700">
            Delete
          </button>
        </div>
      </div>

      {showFilter && (
        <div className="bg-white border-b px-4 py-3">
          <input
            type="text"
            placeholder="Search..."
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      )}
    </>
  );
}
