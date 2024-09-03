import styles from "./AboutUs.module.scss";
import NavBar from "@/components/NavBar/NavBar";
import WhoWeAreHome from "@/components/WhoWeAreHome/WhoWeAreHome";
import TheWorkWeDo from "@/components/TheWorkWeDo/TheWorkWeDo";
import OurTeam from "@/components/Ourteam/OurTeam";
import Footer from "@/components/footer/Footer";



const AboutUs = () => {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <WhoWeAreHome />
        <OurTeam />
      </div>
    </div>
  );
};

export default AboutUs;
