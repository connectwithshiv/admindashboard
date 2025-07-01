import { Link, useLocation } from "react-router-dom";

export default function SubMenu({ subMenu }) {
  const location = useLocation();

  return (
    <div className="pl-10 bg-gray-900">
      {subMenu.map((subItem, idx) => {
        const isActive = location.pathname === subItem.path;

        return (
          <Link
            key={idx}
            to={subItem.path}
            className={`block py-2 text-sm rounded-md px-2 my-1 transition-colors duration-150
              ${
                isActive
                  ? "bg-blue-600 text-white font-medium"
                  : "text-gray-400 hover:text-white hover:bg-gray-700"
              }`}
          >
            {subItem.title}
          </Link>
        );
      })}
    </div>
  );
}
