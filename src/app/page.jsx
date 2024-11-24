import ChooseDingi from "@/components/HomeElements/ChooseDingi";
import ContactHeader from "@/components/HomeElements/ContactHeader";
import CustomerSaying from "@/components/HomeElements/CustomerSaying";
import DontWait from "@/components/HomeElements/DontWait";
import EasyInstallationSupport from "@/components/HomeElements/EasyInstallationSupport";
import Introduction from "@/components/HomeElements/Introduction/page";
import SimpleSteps from "@/components/HomeElements/SimpleSteps";
import TrustPage from "@/components/HomeElements/TrustPage";
import VehicleSafety from "@/components/HomeElements/VehicleSafety/page";
import WorldTrust from "@/components/HomeElements/WorldTrust";

const Home = () => {
  return (
    <div>
      <ContactHeader />
      <div className="pt-10">
        <Introduction />
      </div>
      <VehicleSafety />
      <TrustPage />
      <DontWait />
      <CustomerSaying />
      <WorldTrust />
      <DontWait />
      <EasyInstallationSupport />
      <DontWait />
      <SimpleSteps />
      <DontWait />
      <ChooseDingi />
      <DontWait />
    </div>
  );
};

export default Home;
