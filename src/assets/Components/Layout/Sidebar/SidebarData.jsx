import {
  FaUser,
  FaEnvelope,
  FaPalette,
  FaCubes,
  FaLayerGroup,
  FaTags,
  FaBoxOpen,
  FaThumbsUp,
  FaShoppingCart,
  FaSlidersH,
  FaGlobe,
  FaComment,
  FaQuestion,
  FaFileContract,
} from "react-icons/fa";

export const SidebarData = [
  {
    title: "Dashboard",
    icon: <FaUser />,
    path: "/dashboard",
    subMenu: [],
  },
  {
    title: "Users",
    icon: <FaUser />,
    path: "/users",
    subMenu: [
      { title: "View User", path: "/users/view" },
    ],
  },
  {
    title: "Enquirys",
    icon: <FaEnvelope />,
    path: "/enquirys",
    subMenu: [
      { title: "Contact Enquirys", path: "/enquirys/contact" },
      { title: "Newsletters", path: "/enquirys/newsletters" },
    ],
  },
  {
    title: "Colors",
    icon: <FaPalette />,
    path: "/colors",
    subMenu: [
      { title: "Add Color", path: "/colors/add" },
      { title: "View Color", path: "/colors/view" },
    ],
  },
  {
    title: "Materials",
    icon: <FaCubes />,
    path: "/materials",
    subMenu: [
      { title: "Add Material", path: "/materials/add" },
      { title: "View Material", path: "/materials/view" },
    ],
  },
  {
    title: "Parent Categorys",
    icon: <FaLayerGroup />,
    path: "/parent-categories",
    subMenu: [
      { title: "Add Category", path: "/parent-categories/add" },
      { title: "View Category", path: "/parent-categories/view" },
    ],
  },
  {
    title: "Sub Categorys",
    icon: <FaTags />,
    path: "/sub-categories",
    subMenu: [
      { title: "Add Sub Category", path: "/sub-categories/add" },
      { title: "View Sub Category", path: "/sub-categories/view" },
    ],
  },
  {
    title: "Sub Sub Categorys",
    icon: <FaTags />,
    path: "/sub-sub-categories",
    subMenu: [
      { title: "Add Sub Sub Category", path: "/sub-sub-categories/add" },
      { title: "View Sub Sub Category", path: "/sub-sub-categories/view" },
    ],
  },
  {
    title: "Products",
    icon: <FaBoxOpen />,
    path: "/products",
    subMenu: [
      { title: "Add Product", path: "/products/add" },
      { title: "View Product", path: "/products/view" },
    ],
  },
  {
    title: "Why Choose Us",
    icon: <FaThumbsUp />,
    path: "/why-choose-us",
    subMenu: [
      { title: "Add Why Choose Us", path: "/why-choose-us/add" },
      { title: "View Why Choose Us", path: "/why-choose-us/view" },
    ],
  },
  {
    title: "Orders",
    icon: <FaShoppingCart />,
    path: "/orders",
    subMenu: [
      { title: "Orders", path: "/orders/view" },
    ],
  },
  {
    title: "Sliders",
    icon: <FaSlidersH />,
    path: "/sliders",
    subMenu: [
      { title: "Add Slider", path: "/sliders/add" },
      { title: "View Slider", path: "/sliders/view" },
    ],
  },
  {
    title: "Country",
    icon: <FaGlobe />,
    path: "/country",
    subMenu: [
      { title: "Add Country", path: "/country/add" },
      { title: "View Country", path: "/country/view" },
    ],
  },
  {
    title: "Testimonials",
    icon: <FaComment />,
    path: "/testimonials",
    subMenu: [
      { title: "Add Testimonial", path: "/testimonials/add" },
      { title: "View Testimonial", path: "/testimonials/view" },
    ],
  },
  {
    title: "Faqs",
    icon: <FaQuestion />,
    path: "/faqs",
    subMenu: [
      { title: "Add Faq", path: "/faqs/add" },
      { title: "View Faq", path: "/faqs/view" },
    ],
  },
  {
    title: "Terms & Conditions",
    icon: <FaFileContract />,
    path: "/terms-conditions",
    subMenu: [], // No submenus provided
  },
];
