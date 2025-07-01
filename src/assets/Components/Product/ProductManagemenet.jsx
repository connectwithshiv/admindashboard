import { useState } from "react";
import { ProductData } from "./ProductData";
import ProductViewLayout from "../Layout/ProductViewLayout";

export default function ProductManagement() {
  const [products, setProducts] = useState(ProductData);

  const handleToggleStatus = (product) => {
    setProducts((prev) =>
      prev.map((item) =>
        item.id === product.id
          ? {
              ...item,
              status: item.status === "Active" ? "Inactive" : "Active",
            }
          : item
      )
    );
  };

  const handleEdit = (product) => {
    console.log("Edit product:", product);
  };

  const handleDelete = (productId) => {
    setProducts((prev) => prev.filter((item) => item.id !== productId));
  };

  return (
    <ProductViewLayout
      title="Product Items"
      breadcrumb="Home / Product / Product Items"
      data={products}
      onToggleStatus={handleToggleStatus}
      onEdit={handleEdit}
      onDelete={handleDelete}
    />
  );
}
