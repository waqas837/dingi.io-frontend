import Footer1 from "../../components/footers/Footer1";
import Header1 from "../../components/headers/Header1";
import Blogs from "../../components/homes/home-1/Blogs";
import Hero from "../../components/homes/home-1/Hero";

 

export const metadata = {
  title: "Home 1 || Dingi - React Nextjs Car Template",
  description: "Dingi - React Nextjs Car Template",
};
export default function CarServiceLocator() {
  return (
    <>
      <Header1 />
      <Hero />
      <Blogs />
      <Footer1 />
    </>
  );
}
