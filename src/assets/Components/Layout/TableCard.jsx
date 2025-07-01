import { FaEdit } from "react-icons/fa";

export default function TableCard({ item, columns, onEdit, onToggleStatus }) {
  return (
    <tr className="border-b border-gray-700">
      <td className="px-6 py-4">
        <input type="checkbox" />
      </td>

      {columns.map((col) => (
        <td key={col.key} className="px-6 py-4">
          {col.key === "status" ? (
            <button
              onClick={() => onToggleStatus(item)}
              className={`text-xs font-medium px-3 py-1 rounded-full cursor-pointer ${
                item.status === "Active"
                  ? "bg-green-600 text-white hover:bg-green-700"
                  : "bg-red-600 text-white hover:bg-red-700"
              }`}
            >
              {item.status}
            </button>
          ) : (
            item[col.key]
          )}
        </td>
      ))}

      <td className="px-6 py-4">
        <button
          onClick={() => onEdit(item)}
          className="bg-blue-600 hover:bg-blue-700 p-2 rounded-full text-white"
        >
          <FaEdit />
        </button>
      </td>
    </tr>
  );
}
