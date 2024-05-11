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
            speciality={`Crossfit Expoort, Nutrition & Rehab`}
            renderRed
            star={Numbers.Four}
            age={21}
            habit="reading books"
            itemList={[1,2,3,4]}
            // object={{"dsds": '2', 'dsad': 'dsad', 'Hello': "world"}}
          />
          {/* <CoachCard1
            image="/image-1@2x.png"
            coachName="Danny"
            speciality="Reading book"
          />
          <CoachCard1
            image="/image-2@2x.png"
            coachName="Robert"
            speciality="Anime"
          /> */}
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;
