import NavBar from "../src/components/NavBar/NavBar";
import LandingHome from "../src/components/LandingHome/LandingHome";
import WhoWeAreHome from "@/components/WhoWeAreHome/WhoWeAreHome";
import TheWorkWeDo from "@/components/TheWorkWeDo/TheWorkWeDo";
import Footer from "@/components/footer/Footer";
import styles from "./index.module.scss";
import StatisticsSection from "@/components/StatisticsSection/StatisticsSection";
import OurTeam from "@/components/Ourteam/OurTeam";

export default function Home() {
  return (
    <div className={styles.container}>
      <main>
        <LandingHome />
        <WhoWeAreHome />
        <TheWorkWeDo />
        <StatisticsSection />
        <OurTeam />
      </main>
    </div>
  );
}
