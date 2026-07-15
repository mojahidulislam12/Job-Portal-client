import { ReactNode } from "react";
import { DashboardSidebar } from "../../../components/dashboard/DashboardSidebar";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen mt-16 mb-16 w-[92%] mx-auto">
      <DashboardSidebar></DashboardSidebar>
      <div className="flex-1">{children}</div>
    </div>
  );
}
