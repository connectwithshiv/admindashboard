import { useState } from "react";
import viewtabledata from "../../../../Data/ViewTableData";
import ViewPageLayout from "../../Layout/ViewPageLayout";

export default function ContactEnquiryManagement() {
  const [contactEnquiries, setContactEnquiries] = useState(viewtabledata);

  const handleToggleStatus = (enquiry) => {
    setContactEnquiries((prev) =>
      prev.map((item) =>
        item.id === enquiry.id
          ? { ...item, status: item.status === "Active" ? "Deactive" : "Active" }
          : item
      )
    );
  };

  const handleEdit = (enquiry) => {
    console.log("Edit enquiry:", enquiry);
  };

  const columns = [
    { key: "name", label: "User Info" },
    { key: "email", label: "Subject" },
    { key: "mobile", label: "Message" },
    { key: "status", label: "Status" },
  ];

  return (
    <ViewPageLayout
      title="View Contact Enquiries"
      breadcrumb="Home / Enquiries / Contact"
      columns={columns}
      data={contactEnquiries}
      onToggleStatus={handleToggleStatus}
      onEdit={handleEdit}
    />
  );
}
