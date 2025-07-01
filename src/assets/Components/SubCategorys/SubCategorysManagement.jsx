import { useState } from "react";
import viewtabledata from "../../../Data/ViewTableData";
import ViewPageLayout from "../Layout/ViewPageLayout";

export default function SubCategoryManagement() {
  const [subCategories, setSubCategories] = useState(viewtabledata);

  const handleToggleStatus = (subCategory) => {
    setSubCategories((prev) =>
      prev.map((item) =>
        item.id === subCategory.id
          ? {
              ...item,
              status: item.status === "Active" ? "Inactive" : "Active",
            }
          : item
      )
    );
  };

  const handleEdit = (subCategory) => {
    console.log("Edit sub-category:", subCategory);
  };

  const columns = [
    { key: "parentCategory", label: "Parent Category" },
    { key: "name", label: "Sub Category Name" },
    { key: "order", label: "Order" },
    { key: "status", label: "Status" },
  ];

  return (
    <ViewPageLayout
      title="View Sub Categories"
      breadcrumb="Home / Sub Categories / View"
      columns={columns}
      data={subCategories}
      onToggleStatus={handleToggleStatus}
      onEdit={handleEdit}
    />
  );
}
