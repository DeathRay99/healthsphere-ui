import NavBar from "@/components/NavBar";
import Sidebar from "@/components/AdminSidebar";
import TopNav from "@/components/AdminTopNav";

export default function AdminLayout({ children }) {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-auto">
        <TopNav/>
        <main>{children}</main>
        <div />
      </div>
    </div>
  );
}
