"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import DashboardPage from "./dashboard/page";

export default function AdminLayout({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // To manage loading state
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("adminToken");

    if (!token) {
      setIsAuthenticated(false);
      router.push("/admin"); // Redirect to login page if token is missing
    } else {
      setIsAuthenticated(true);
    }

    setIsLoading(false); // Loading check complete
  }, [router]);

  if (isLoading) {
    // Show a loading message or spinner while checking authentication
    return <p>Checking authentication...</p>;
  }

  if (!isAuthenticated) {
    // While redirecting, display a fallback message
    return <>Unauthorized access! Redirecting to login...</>;
  }

  return (
    <>
      <div>{/* Render your admin navigation and sidebar here */}</div>
      <main>{<DashboardPage />}</main>
    </>
  );
}
