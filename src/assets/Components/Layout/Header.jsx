import { FaBars } from "react-icons/fa";

export default function Header({ toggleSidebar }) {
  return (
    <header className="flex justify-between items-center px-6 py-4 bg-white shadow-sm border-b">
      <div className="flex items-center gap-3">
        <button onClick={toggleSidebar} className="text-gray-600 text-xl lg:hidden">
          <FaBars />
        </button>
        <h1 className="text-lg font-semibold text-gray-800">Dashboard</h1>
      </div>

      <div>
        <img
          src="https://i.pravatar.cc/40"
          alt="User"
          className="w-10 h-10 rounded-full object-cover"
        />
      </div>
    </header>
  );
}
