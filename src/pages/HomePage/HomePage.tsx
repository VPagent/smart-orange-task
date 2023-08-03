import { FC } from "react";
import styles from "./HomePage.module.scss";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import About from "../../components/About/About";
import OurProjects from "../../components/OurProjects/OurProjects";
import ContactUs from "../../components/ContactUs/ContactUs";
import Footer from "../../components/Footer/Footer";

const HomePage: FC = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <Hero />
      <About />
      <OurProjects />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default HomePage;
