import React from "react";
import Header1 from "../../components/headers/Header1";
import AdminLogin from "../../components/otherPages/AdminLogin";
import Footer1 from "../../components/footers/Footer1";

export const metadata = {
  title: "Admin Login || Boxcar - React Nextjs Car Template",
  description: "Boxcar - React Nextjs Car Template",
};

export default function AdminPage() {
  return (
    <>
      <Header1 headerClass="boxcar-header header-style-v1 style-two inner-header cus-style-1" />
      <AdminLogin />
      <Footer1 parentClass="boxcar-footer footer-style-one v1 cus-st-1" />
    </>
  );
}
