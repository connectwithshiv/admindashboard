import { useState } from "react";
import { SidebarData } from "./SidebarData";
import SidebarItem from "./SidebarItem";

export default function Sidebar() {
  const [activeMenu, setActiveMenu] = useState(null); // name or index of active menu

  return (
    <div className="w-64 bg-gray-900 h-screen overflow-y-auto text-white shadow-lg fixed">
      <div className="p-4 font-bold text-xl text-blue-400">WsCube Tech</div>
      <nav className="flex flex-col">
        {SidebarData.map((item, idx) => (
          <SidebarItem
            key={idx}
            item={item}
            isActive={activeMenu === idx}
            onClick={() =>
              setActiveMenu(activeMenu === idx ? null : idx)
            }
          />
        ))}
      </nav>
    </div>
  );
}
