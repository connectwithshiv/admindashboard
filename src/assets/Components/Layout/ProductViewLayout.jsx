import { FaTrashAlt, FaEdit } from "react-icons/fa";
import { MdToggleOn, MdToggleOff } from "react-icons/md";

export default function ProductViewLayout({
  title,
  breadcrumb,
  data,
  onToggleStatus,
  onEdit,
  onDelete,
}) {
  return (
    <div className="p-5">
      <p className="text-sm text-gray-600 mb-1">{breadcrumb}</p>

      <div className="bg-white rounded border">
        <h2 className="bg-blue-50 px-4 py-3 border-b text-xl font-semibold">
          {title}
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-700">
            <thead className="bg-gray-100 border-b text-xs uppercase">
              <tr>
                <th className="px-4 py-2">Delete</th>
                <th className="px-4 py-2">S. No.</th>
                <th className="px-4 py-2">Product Name</th>
                <th className="px-4 py-2">Description</th>
                <th className="px-4 py-2">Short Description</th>
                <th className="px-4 py-2">Thumbnails</th>
                <th className="px-4 py-2">Action</th>
                <th className="px-4 py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr
                  key={item.id}
                  className="border-b hover:bg-gray-50 transition"
                >
                  <td className="px-4 py-3">
                    <input type="checkbox" />
                  </td>
                  <td className="px-4 py-3">{index + 1}</td>
                  <td className="px-4 py-3">{item.name}</td>
                  <td className="px-4 py-3 text-gray-700">
                    {item.description?.slice(0, 25) || "N/A"}
                    {item.description?.length > 25 && (
                      <span className="text-blue-600 ml-1 cursor-pointer">
                        Read More
                      </span>
                    )}
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    {item.shortDescription?.slice(0, 25) || "N/A"}
                    {item.shortDescription?.length > 25 && (
                      <span className="text-blue-600 ml-1 cursor-pointer">
                        Read More
                      </span>
                    )}
                  </td>
                  <td className="px-4 py-3">
                    <img
                      src={item.thumbnail || "https://via.placeholder.com/50"}
                      alt="thumb"
                      className="w-12 h-12 rounded object-cover"
                    />
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex gap-2 text-lg items-center">
                      <FaTrashAlt
                        className="text-red-600 cursor-pointer"
                        onClick={() => onDelete(item.id)}
                      />
                      <span className="text-gray-400">|</span>
                      <FaEdit
                        className="text-yellow-600 cursor-pointer"
                        onClick={() => onEdit(item)}
                      />
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <span
                      className={`inline-flex items-center gap-1 font-medium cursor-pointer ${
                        item.status === "Active"
                          ? "text-green-600"
                          : "text-gray-500"
                      }`}
                      onClick={() => onToggleStatus(item)}
                    >
                      {item.status}
                      {item.status === "Active" ? (
                        <MdToggleOn size={20} />
                      ) : (
                        <MdToggleOff size={20} />
                      )}
                    </span>
                  </td>
                </tr>
              ))}
              {data.length === 0 && (
                <tr>
                  <td colSpan={8} className="text-center py-4 text-gray-400">
                    No products found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
