import ChooseDingi from "@/components/HomeElements/ChooseDingi";
import ComparisonHeader from "@/components/HomeElements/ComparisonHeader";
import ComparisonTable from "@/components/HomeElements/ComparisonTable";
import ContactHeader from "@/components/HomeElements/ContactHeader";
import CustomerSaying from "@/components/HomeElements/CustomerSaying";
import DontWait from "@/components/HomeElements/DontWait";
import EasyInstallationSupport from "@/components/HomeElements/EasyInstallationSupport";
import Introduction from "@/components/HomeElements/Introduction/page";
import PowerInstant from "@/components/HomeElements/PowerInstant";
import SimpleSteps from "@/components/HomeElements/SimpleSteps";
import TrustPage from "@/components/HomeElements/TrustPage";
import VehicleSafety from "@/components/HomeElements/VehicleSafety/page";
import WorldTrust from "@/components/HomeElements/WorldTrust";
import NewsLine from "@/components/HomeElements/NewsLine";
import IncrementComponent from "@/components/HomeElements/IncrementComponent";
import Specification from "@/components/HomeElements/Specification/Specification";
import HomeFooter from "@/components/HomeElements/HomeFooter";
import Guarantee from "@/components/HomeElements/GuarranteSection";
import FAQ from "@/components/HomeElements/FrequentlyAsked";

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
      <ComparisonHeader />
      <ComparisonTable />
      <DontWait />
      <PowerInstant />
      <DontWait />
      <NewsLine />
      <IncrementComponent />
      <Specification />
      <FAQ />
      <Guarantee />
      <HomeFooter />
    </div>
  );
};

export default Home;
