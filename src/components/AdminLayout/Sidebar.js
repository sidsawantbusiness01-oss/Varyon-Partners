"use client";

import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import {
  FaTachometerAlt,
  FaUsers,
  FaBriefcase,
  FaSignOutAlt,
} from "react-icons/fa";
import styles from "./adminLayout.module.css";

export default function SideBar({ sidebarOpen }) {
  const router = useRouter();
  const pathname = usePathname();

  const logout = async () => {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/login");
  };

  return (
    <aside className={`${styles.sidebar} ${sidebarOpen ? styles.open : ""}`}>
      <div>
        <div className={styles.logo}>VARYON PARTNERS</div>

        <nav className={styles.nav}>
          <Link
            href="/admin/dashboard"
            className={pathname === "/admin/dashboard" ? styles.active : ""}
          >
            <FaTachometerAlt /> Dashboard
          </Link>

          <Link
            href="/admin/insights"
            className={pathname === "/admin/insights" ? styles.active : ""}
          >
            <FaUsers /> Manage Insights
          </Link>

          <Link
            href="/admin/case-studies"
            className={pathname === "/admin/case-studies" ? styles.active : ""}
          >
            <FaBriefcase /> Case Studies
          </Link>
        </nav>
      </div>

      <button className={styles.logout} onClick={logout}>
        <FaSignOutAlt /> Logout
      </button>
    </aside>
  );
}
