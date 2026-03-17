"use client";

import { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import styles from "./adminLayout.module.css";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";

export default function AdminLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className={styles.container}>
      <Sidebar sidebarOpen={sidebarOpen} />

      <div className={styles.main}>
        <Header
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />

        <div className={styles.content}>
          <Breadcrumbs />
          {children}
        </div>
      </div>
    </div>
  );
}