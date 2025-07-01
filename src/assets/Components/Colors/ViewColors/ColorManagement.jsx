import { useState } from "react";
import viewtabledata from "../../../../Data/ViewTableData";
import ViewPageLayout from "../../Layout/ViewPageLayout";

export default function ColorManagement() {
  const [colors, setColors] = useState(viewtabledata);

  const handleToggleStatus = (color) => {
    setColors((prev) =>
      prev.map((item) =>
        item.id === color.id
          ? {
              ...item,
              status: item.status === "Active" ? "Inactive" : "Active",
            }
          : item
      )
    );
  };

  const handleEdit = (color) => {
    console.log("Edit color:", color);
  };

  const columns = [
    { key: "name", label: "Color Name" },
    { key: "code", label: "Color Code" },
    { key: "order", label: "Order" },
    { key: "status", label: "Status" },
  ];

  return (
    <ViewPageLayout
      title="View Colors"
      breadcrumb="Home / Colors / View"
      columns={columns}
      data={colors}
      onToggleStatus={handleToggleStatus}
      onEdit={handleEdit}
    />
  );
}
