import { useState } from "react";
import viewtabledata from "../../../Data/ViewTableData";
import ViewPageLayout from "../Layout/ViewPageLayout";


export default function CategoryManagement() {
  const [categories, setCategories] = useState(viewtabledata);

  const handleToggleStatus = (category) => {
    setCategories((prev) =>
      prev.map((item) =>
        item.id === category.id
          ? {
              ...item,
              status: item.status === "Active" ? "Inactive" : "Active",
            }
          : item
      )
    );
  };

  const handleEdit = (category) => {
    console.log("Edit category:", category);
  };

  const columns = [
    { key: "name", label: "Category Name" },
    { key: "description", label: "Description" },
    { key: "order", label: "Order" },
    { key: "status", label: "Status" },
  ];

  return (
    <ViewPageLayout
      title="View Categories"
      breadcrumb="Home / Parent Categories / View"
      columns={columns}
      data={categories}
      onToggleStatus={handleToggleStatus}
      onEdit={handleEdit}
    />
  );
}
