import { FunctionComponent } from "react";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import styles from "./About.module.css";

const About: FunctionComponent = () => {
  return (
    <div className={styles.about}>
      <div className={styles.f}>F</div>
      <div className={styles.f1}>F</div>
      <img className={styles.vectorIcon} alt="" src="/vector.svg" />
      <img className={styles.vectorIcon1} alt="" src="/vector1.svg" />
      <img className={styles.vectorIcon2} alt="" src="/vector2.svg" />
      <img className={styles.vectorIcon3} alt="" src="/vector3.svg" />
      <FrameComponent1 />
      <FrameComponent />
    </div>
  );
};

export default About;
