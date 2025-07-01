import ViewPageLayout from "../Layout/ViewPageLayout";
import { useState } from "react";
import viewtabledata from "../../../Data/ViewTableData";

export default function CountryManagement() {
  const [countries, setCountries] = useState(viewtabledata);

  const handleToggleStatus = (country) => {
    setCountries((prev) =>
      prev.map((item) =>
        item.id === country.id
          ? {
              ...item,
              status: item.status === "Active" ? "Inactive" : "Active",
            }
          : item
      )
    );
  };

  const handleEdit = (country) => {
    console.log("Edit country:", country);
  };

  const columns = [
    { key: "name", label: "Country Name" },
    { key: "status", label: "Status" },
  ];

  return (
    <ViewPageLayout
      title="Country Management"
      breadcrumb="Home / Location / Country"
      columns={columns}
      data={countries}
      onToggleStatus={handleToggleStatus}
      onEdit={handleEdit}
    />
  );
}