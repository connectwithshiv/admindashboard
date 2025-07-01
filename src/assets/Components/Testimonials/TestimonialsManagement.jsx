import ViewPageLayout from "../Layout/ViewPageLayout";
import { useState } from "react";
import viewtabledata from "../../../Data/ViewTableData";

export default function TestimonialManagement() {
  const [testimonials, setTestimonials] = useState(viewtabledata);

  const handleToggleStatus = (testimonial) => {
    setTestimonials((prev) =>
      prev.map((item) =>
        item.id === testimonial.id
          ? {
              ...item,
              status: item.status === "Active" ? "Inactive" : "Active",
            }
          : item
      )
    );
  };

  const handleEdit = (testimonial) => {
    console.log("Edit testimonial:", testimonial);
  };

  const columns = [
    { key: "name", label: "Client Name" },
    { key: "email", label: "Client Email" },
    { key: "mobile", label: "Mobile Number" },
    { key: "status", label: "Status" },
  ];

  return (
    <ViewPageLayout
      title="Testimonial Management"
      breadcrumb="Home / Content / Testimonials"
      columns={columns}
      data={testimonials}
      onToggleStatus={handleToggleStatus}
      onEdit={handleEdit}
    />
  );
}