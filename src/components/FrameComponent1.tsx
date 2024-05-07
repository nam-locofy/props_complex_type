import { FunctionComponent } from "react";
import styles from "./FrameComponent1.module.css";

const FrameComponent1: FunctionComponent = () => {
  return (
    <header className={styles.frameParent}>
      <div className={styles.frameWrapper}>
        <div className={styles.frameGroup}>
          <div className={styles.ellipseParent}>
            <div className={styles.frameChild} />
            <img
              className={styles.vectorIcon}
              loading="lazy"
              alt=""
              src="/vector.svg"
            />
          </div>
          <div className={styles.strengthyWrapper}>
            <h3 className={styles.strengthy}>Strengthy</h3>
          </div>
        </div>
      </div>
      <div className={styles.frameContainer}>
        <div className={styles.frameDiv}>
          <div className={styles.frameParent1}>
            <div className={styles.aboutWrapper}>
              <div className={styles.about}>About</div>
            </div>
            <div className={styles.homeWrapper}>
              <div className={styles.home}>Home</div>
            </div>
            <div className={styles.classesWrapper}>
              <div className={styles.classes}>Classes</div>
            </div>
            <div className={styles.trainersWrapper}>
              <div className={styles.trainers}>Trainers</div>
            </div>
            <div className={styles.newssWrapper}>
              <div className={styles.newss}>Newss</div>
            </div>
            <div className={styles.contactWrapper}>
              <div className={styles.contact}>Contact</div>
            </div>
            <button className={styles.button}>
              <div className={styles.bookClass}>Book Class</div>
            </button>
          </div>
        </div>
        <div className={styles.ourTrainers}>Our Trainers</div>
      </div>
    </header>
  );
};

export default FrameComponent1;
