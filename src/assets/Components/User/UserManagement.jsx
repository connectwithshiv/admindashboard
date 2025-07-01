import { useState } from "react";
import viewtabledata from "../../../Data/ViewTableData";
import ViewPageLayout from "../Layout/ViewPageLayout";

export default function UserManagement() {
  const [users, setUsers] = useState(viewtabledata);

  const handleToggleStatus = (user) => {
    setUsers((prev) =>
      prev.map((u) =>
        u.id === user.id
          ? { ...u, status: u.status === "Active" ? "Deactive" : "Active" }
          : u
      )
    );
  };

  const handleEdit = (user) => {
    console.log("Edit user:", user);
  };

  const columns = [
    { key: "name", label: "Name" },
    { key: "email", label: "Email" },
    { key: "mobile", label: "Mobile Number" },
    { key: "status", label: "Status" },
  ];

  return (
    <ViewPageLayout
      title="View User"
      breadcrumb="Home / User / View"
      columns={columns}
      data={users}
      onToggleStatus={handleToggleStatus}
      onEdit={handleEdit}
    />
  );
}
