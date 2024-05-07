import { FunctionComponent } from "react";
import CoachCard1, { Numbers } from "./CoachCard1";
import CoachCard from "./CoachCard";
import styles from "./FrameComponent.module.css";

const FrameComponent: FunctionComponent = () => {
  return (
    <section className={styles.aboutInner}>
      <div className={styles.frameParent}>
        <div className={styles.weTrainedYouToGainWrapper}>
          <h1 className={styles.weTrainedYou}>We Trained You to Gain</h1>
        </div>
        <div className={styles.frameGroup}>
          <CoachCard1
            image="/image@2x.png"
            coachName="Jane"
            star={Numbers.Five}
            speciality={`Crossfit Expoort, Nutrition & Rehab`}
          />
          <CoachCard1
            image="/image-1@2x.png"
            coachName="Danny"
            star={Numbers.Three}
            speciality="Reading book"
          />
          <CoachCard1
            image="/image-2@2x.png"
            coachName="Robert"
            star={Numbers.Four}
            speciality="Anime"
          />
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;
