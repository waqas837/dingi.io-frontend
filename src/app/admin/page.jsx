import React from "react";
import Header1 from "../../components/headers/Header1";
import AdminLogin from "../../components/otherPages/AdminLogin";
import Footer1 from "../../components/footers/Footer1";

export const metadata = {
  title: "Admin Login || Dingi - React Nextjs Car Template",
  description: "Dingi - React Nextjs Car Template",
};

export default function AdminPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <Header1 />

      {/* Admin Login Section */}
      <main className="flex-grow">
        <AdminLogin />
      </main>

      {/* Footer */}
      <Footer1 />
    </div>
  );
}
