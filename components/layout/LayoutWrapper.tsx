"use client";

import { usePathname } from "next/navigation";
import { Navbar, Footer } from "@/components/layout";
import React from "react";

interface LayoutWrapperProps {
  children: React.ReactNode;
}

/**
 * LayoutWrapper conditionally wraps the children with customer-facing
 * Navbar and Footer components. It bypasses this wrapping for admin routes
 * (matching /Admin-login, /Admin-Dashboard, and general /admin* routes).
 */
export default function LayoutWrapper({ children }: LayoutWrapperProps) {
  const pathname = usePathname();

  // Check if current path matches an admin route (case-insensitive)
  const isAdminRoute = pathname
    ? /^\/admin(-|\/|$)/i.test(pathname)
    : false;

  if (isAdminRoute) {
    // Admin interface manages its own layout/scrolling
    return <>{children}</>;
  }

  // Regular pages get standard public header and footer
  return (
    <>
      <Navbar />
      <main style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        {children}
      </main>
      <Footer />
    </>
  );
}
