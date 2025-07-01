import ViewPageLayout from "../Layout/ViewPageLayout";
import { useState } from "react";
import viewtabledata from "../../../Data/ViewTableData";

export default function SliderManagement() {
  const [sliders, setSliders] = useState(viewtabledata);

  const handleToggleStatus = (slider) => {
    setSliders((prev) =>
      prev.map((item) =>
        item.id === slider.id
          ? {
              ...item,
              status: item.status === "Active" ? "Inactive" : "Active",
            }
          : item
      )
    );
  };

  const handleEdit = (slider) => {
    console.log("Edit slider:", slider);
  };

  const columns = [
    { key: "name", label: "Slider Title" },
    { key: "status", label: "Status" },
  ];

  return (
    <ViewPageLayout
      title="Slider Management"
      breadcrumb="Home / Content / Slider"
      columns={columns}
      data={sliders}
      onToggleStatus={handleToggleStatus}
      onEdit={handleEdit}
    />
  );
}