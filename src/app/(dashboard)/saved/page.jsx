 

 import React from "react";
import Saved from "../../../components/dashboard/Saved";
import Footer1 from "../../../components/footers/Footer1";
import HeaderDashboard from "../../../components/headers/HeaderDashboard";

export const metadata = {
  title: "Saved || Dingi - React Nextjs Car Template",
  description: "Dingi - React Nextjs Car Template",
};
export default function SavedPage() {
  return (
    <>
      <div style={{ background: "var(--theme-color-dark)" }}>
        <HeaderDashboard />

        <Saved />
        <Footer1 parentClass="Dingi-footer footer-style-one v2" />
      </div>
    </>
  );
}
