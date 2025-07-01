import FilterBar from "./FilterBar";
import TableCard from "./TableCard";
import { useState } from "react";

export default function ViewPageLayout({
  title,
  breadcrumb,
  columns,
  data,
  onToggleStatus,
  onEdit,
}) {
  const [filterVisible, setFilterVisible] = useState(false);

  return (
    <div className="p-4">
      <div className="text-sm text-gray-600 mb-2">{breadcrumb}</div>

      <FilterBar
        title={title}
        showFilter={filterVisible}
        onToggleFilter={() => setFilterVisible((prev) => !prev)}
      />

      <div className="overflow-x-auto rounded-b-md border border-t-0">
        <table className="min-w-full text-sm text-left text-white">
          <thead className="bg-gray-800 text-xs uppercase">
            <tr>
              <th className="px-6 py-3"><input type="checkbox" /></th>
              {columns.map((col) => (
                <th key={col.key} className="px-6 py-3">{col.label}</th>
              ))}
              <th className="px-6 py-3">Action</th>
            </tr>
          </thead>
          <tbody className="bg-gray-900">
            {data.map((item) => (
              <TableCard
                key={item.id}
                item={item}
                columns={columns}
                onToggleStatus={onToggleStatus}
                onEdit={onEdit}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
