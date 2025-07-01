import ViewPageLayout from "../Layout/ViewPageLayout";
import { useState } from "react";
import viewtabledata from "../../../Data/ViewTableData";

export default function FAQsManagement() {
  const [faqs, setFaqs] = useState(viewtabledata);

  const handleToggleStatus = (faq) => {
    setFaqs((prev) =>
      prev.map((item) =>
        item.id === faq.id
          ? {
              ...item,
              status: item.status === "Active" ? "Inactive" : "Active",
            }
          : item
      )
    );
  };

  const handleEdit = (faq) => {
    console.log("Edit FAQ:", faq);
  };

  const columns = [
    { key: "name", label: "Question" },
    { key: "email", label: "Answer" },
    { key: "status", label: "Status" },
  ];

  return (
    <ViewPageLayout
      title="FAQs Management"
      breadcrumb="Home / Content / FAQs"
      columns={columns}
      data={faqs}
      onToggleStatus={handleToggleStatus}
      onEdit={handleEdit}
    />
  );
}
