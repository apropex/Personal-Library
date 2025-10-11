//
import { AppSidebar } from "@/components/AppSidebar";
import SidebarNav from "@/components/layouts/navbar/SidebarNav";
import { SidebarProvider } from "@/components/ui/sidebar";
import { cookies } from "next/headers";

export default async function PrivateLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const defaultOpen = cookieStore.get("sidebar_state")?.value === "true";
  return (
    <SidebarProvider defaultOpen={defaultOpen}>
      <AppSidebar />
      <div className="px-4 w-full flex flex-col">
        <SidebarNav />
        <div className="flex-1">{children}</div>
      </div>
    </SidebarProvider>
  );
}
