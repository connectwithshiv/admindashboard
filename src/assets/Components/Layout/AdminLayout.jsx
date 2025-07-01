import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar/Sidebar.jsx";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

export default function AdminLayout() {
  return (
    <div className="flex">
      <div className="w-64 min-h-screen bg-white shadow-md fixed">
        <Sidebar />
      </div>

      <div className="flex-1 ml-64 flex flex-col min-h-screen bg-gray-100">
        <Header />

        <main className="flex-1 p-6">
          <Outlet />
        </main>

        <Footer />
      </div>
    </div>
  );
}
