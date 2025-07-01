import { useState } from "react";
import viewtabledata from "../../../../Data/ViewTableData";
import ViewPageLayout from "../../Layout/ViewPageLayout";

export default function NewsletterManagement() {
  const [newsletters, setNewsletters] = useState(viewtabledata);

  const handleToggleStatus = (entry) => {
    setNewsletters((prev) =>
      prev.map((item) =>
        item.id === entry.id
          ? {
              ...item,
              status: item.status === "Active" ? "Unsubscribed" : "Active",
            }
          : item
      )
    );
  };

  const handleEdit = (entry) => {
    console.log("Newsletter entry selected:", entry);
  };

   const columns = [
    { key: "name", label: "Name" },
    { key: "email", label: "Email" },
    { key: "mobile", label: "Mobile Number" },
    { key: "status", label: "Status" },
  ];

  return (
    <ViewPageLayout
      title="View Newsletters"
      breadcrumb="Home / Enquiries / Newsletters"
      columns={columns}
      data={newsletters}
      onToggleStatus={handleToggleStatus}
      onEdit={handleEdit}
    />
  );
}
