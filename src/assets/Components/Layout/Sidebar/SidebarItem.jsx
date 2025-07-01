import { useLocation, useNavigate } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";
import SubMenu from "./SubMenu";

export default function SidebarItem({ item, isActive, onClick }) {
  const location = useLocation();
  const navigate = useNavigate();

  const hasSubmenu = item.subMenu && item.subMenu.length > 0;
  const isRouteActive =
    location.pathname === item.path ||
    item?.subMenu?.some((sub) => location.pathname === sub.path);

  const handleClick = () => {
    if (hasSubmenu) {
      onClick(); // toggle open/close
    } else {
      navigate(item.path); // go to page
    }
  };

  return (
    <div>
      {/* Main Menu Item */}
      <div
        onClick={handleClick}
        className={`relative flex items-center justify-between px-4 py-2 cursor-pointer
          transition-all duration-300 ease-in-out
          ${isRouteActive ? "bg-gray-800 text-white font-semibold" : "text-gray-300 hover:bg-gray-700"}
        `}
      >
        <div className="flex items-center gap-3">
          {item.icon}
          <span>{item.title}</span>
        </div>

        {hasSubmenu && (
          <FaChevronDown
            className={`transition-transform duration-200 ${
              isActive ? "rotate-180" : ""
            }`}
          />
        )}
      </div>

      {/* Submenu */}
      {hasSubmenu && isActive && <SubMenu subMenu={item.subMenu} />}
    </div>
  );
}
