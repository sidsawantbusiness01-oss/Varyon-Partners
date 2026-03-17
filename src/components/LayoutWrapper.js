"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import AdminLayout from "@/components/AdminLayout/AdminLayout";

export default function LayoutWrapper({ children }) {
  const pathname = usePathname();
  const isAdminPage = pathname.startsWith("/admin");

  if (isAdminPage) {
    return <AdminLayout>{children}</AdminLayout>;
  }

  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}