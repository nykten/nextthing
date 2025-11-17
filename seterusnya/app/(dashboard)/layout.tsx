import { ReactNode } from "react";
import DashboardSidebar from "@/components/ui/sidebar";
import Navbar from "@/components/ui/navbar";

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="flex h-screen">
      <DashboardSidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <main className="p-6 bg-gray-100 flex-1 overflow-auto">{children}</main>
      </div>
    </div>
  );
}
