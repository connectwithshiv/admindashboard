import { useState } from "react";
import { MdToggleOn, MdToggleOff } from "react-icons/md";
import { FaTrashAlt, FaEdit } from "react-icons/fa";
import viewtabledata from "../../../Data/ViewTableData";
import ViewPageLayout from "../Layout/ViewPageLayout";

export default function WhyChooseUsManagement() {
  const [sections, setSections] = useState(viewtabledata);

  const handleToggleStatus = (item) => {
    setSections((prev) =>
      prev.map((section) =>
        section.id === item.id
          ? {
              ...section,
              status: section.status === "Active" ? "Inactive" : "Active",
            }
          : section
      )
    );
  };

  const handleEdit = (item) => {
    console.log("Edit section:", item);
  };

  const handleDelete = (id) => {
    setSections((prev) => prev.filter((item) => item.id !== id));
  };

  const columns = [
    { key: "id", label: "S. No." },
    { key: "name", label: "Title" }, // Assuming 'name' is used as title
    { key: "email", label: "Description" }, // Placeholder, repurpose 'email' as description
    {
      key: "mobile",
      label: "Thumbnail",
      render: () => (
        <img
          src="https://via.placeholder.com/50"
          alt="Icon"
          className="w-10 h-10 rounded object-cover"
        />
      ),
    },
    {
      key: "actions",
      label: "Action",
      render: (item) => (
        <div className="flex gap-2 items-center text-lg">
          <FaTrashAlt
            className="text-red-600 cursor-pointer"
            onClick={() => handleDelete(item.id)}
          />
          <span className="text-gray-400">|</span>
          <FaEdit
            className="text-yellow-600 cursor-pointer"
            onClick={() => handleEdit(item)}
          />
        </div>
      ),
    },
    {
      key: "status",
      label: "Status",
      render: (item) => (
        <span
          className={`flex items-center gap-1 text-sm font-medium cursor-pointer ${
            item.status === "Active" ? "text-green-600" : "text-gray-500"
          }`}
          onClick={() => handleToggleStatus(item)}
        >
          {item.status}
          {item.status === "Active" ? (
            <MdToggleOn size={20} />
          ) : (
            <MdToggleOff size={20} />
          )}
        </span>
      ),
    },
  ];

  return (
    <ViewPageLayout
      title="Why Choose Us Sections"
      breadcrumb="Home / Content / Why Choose Us"
      columns={columns}
      data={sections}
      onToggleStatus={handleToggleStatus}
      onEdit={handleEdit}
    />
  );
}
