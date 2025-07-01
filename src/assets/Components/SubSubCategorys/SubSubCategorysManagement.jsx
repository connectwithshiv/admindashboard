import { useState } from "react";
import viewtabledata from "../../../Data/ViewTableData";
import ViewPageLayout from "../Layout/ViewPageLayout";

export default function SubSubCategoryManagement() {
  const [subSubCategories, setSubSubCategories] = useState(viewtabledata);

  const handleToggleStatus = (subSubCategory) => {
    setSubSubCategories((prev) =>
      prev.map((item) =>
        item.id === subSubCategory.id
          ? {
              ...item,
              status: item.status === "Active" ? "Inactive" : "Active",
            }
          : item
      )
    );
  };

  const handleEdit = (subSubCategory) => {
    console.log("Edit sub-sub-category:", subSubCategory);
  };

  const columns = [
    { key: "parentCategory", label: "Parent Category" },
    { key: "subCategory", label: "Sub Category" },
    { key: "name", label: "Sub Sub Category Name" },
    { key: "order", label: "Order" },
    { key: "status", label: "Status" },
  ];

  return (
    <ViewPageLayout
      title="View Sub Sub Categories"
      breadcrumb="Home / Sub Sub Categories / View"
      columns={columns}
      data={subSubCategories}
      onToggleStatus={handleToggleStatus}
      onEdit={handleEdit}
    />
  );
}
