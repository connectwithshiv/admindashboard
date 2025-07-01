import { useState } from "react";
import viewtabledata from "../../../Data/ViewTableData";
import ViewPageLayout from "../Layout/ViewPageLayout";

export default function MaterialManagement() {
  const [materials, setMaterials] = useState(viewtabledata);

  const handleToggleStatus = (material) => {
    setMaterials((prev) =>
      prev.map((item) =>
        item.id === material.id
          ? {
              ...item,
              status: item.status === "Active" ? "Inactive" : "Active",
            }
          : item
      )
    );
  };

  const handleEdit = (material) => {
    console.log("Edit material:", material);
  };

  const columns = [
    { key: "name", label: "Material Name" },
    { key: "description", label: "Description" },
    { key: "order", label: "Order" },
    { key: "status", label: "Status" },
  ];

  return (
    <ViewPageLayout
      title="View Materials"
      breadcrumb="Home / Materials / View"
      columns={columns}
      data={materials}
      onToggleStatus={handleToggleStatus}
      onEdit={handleEdit}
    />
  );
}
