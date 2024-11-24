import React from "react";
import Header1 from "../../components/headers/Header1";
import Login from "../../components/otherPages/Login";
import Footer1 from "../../components/footers/Footer1";

export const metadata = {
  title: "Login || Boxcar - React Nextjs Car Template",
  description: "Boxcar - React Nextjs Car Template",
};
export default function LoginPage() {
  return (
    <>
      <Header1 />
      <Login />
      <Footer1 />
    </>
  );
}
