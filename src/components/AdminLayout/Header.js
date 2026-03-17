"use client";

import { FaBars, FaTimes } from "react-icons/fa";
import styles from "./adminLayout.module.css";

export default function Header({ sidebarOpen, setSidebarOpen }) {
  return (
    <header className={styles.header}>
      <h2>Admin Dashboard</h2>
    </header>
  );
}