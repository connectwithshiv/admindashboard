import { FaArrowUp, FaArrowDown, FaUser, FaBoxOpen, FaListAlt, FaShoppingCart } from "react-icons/fa";

export const dashboardStats = [
  {
    title: "Users",
    value: "26K",
    change: "-12.4%",
    isUp: false,
    icon: <FaUser />,
    color: "bg-indigo-600",
  },
  {
    title: "Product",
    value: "$6,200",
    change: "40.9%",
    isUp: true,
    icon: <FaBoxOpen />,
    color: "bg-blue-500",
  },
  {
    title: "Category",
    value: "2.49%",
    change: "84.7%",
    isUp: true,
    icon: <FaListAlt />,
    color: "bg-yellow-500",
  },
  {
    title: "Orders",
    value: "44K",
    change: "-23.6%",
    isUp: false,
    icon: <FaShoppingCart />,
    color: "bg-red-500",
  },
];
