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
            coachName="Amanda"
            star={Numbers.Five}
            speciality={`Crossfit Expoort, Nutrition & Rehab`}
          />
          <CoachCard />
          <div className={styles.imageParent}>
            <img className={styles.imageIcon} alt="" src="/image-2@2x.png" />
            <div className={styles.headingParent}>
              <img className={styles.headingIcon} alt="" src="/heading.svg" />
              <div className={styles.details}>
                <div className={styles.frameContainer}>
                  <div className={styles.joshuaFrankilinParent}>
                    <div className={styles.joshuaFrankilin}>
                      Joshua Frankilin
                    </div>
                    <div className={styles.frameWrapper}>
                      <div className={styles.frameDiv}>
                        <div className={styles.starWrapper}>
                          <img
                            className={styles.starIcon}
                            alt=""
                            src="/star.svg"
                          />
                        </div>
                        <div className={styles.div}>/5</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.line} />
                  <div className={styles.specialisationsParent}>
                    <b className={styles.specialisations}>Specialisations :</b>
                    <div
                      className={styles.crossfitExpoortNutrition}
                    >{`Crossfit Expoort, Nutrition & Rehab`}</div>
                  </div>
                </div>
                <div className={styles.instaParent}>
                  <img className={styles.instaIcon} alt="" src="/insta.svg" />
                  <img className={styles.fbIcon} alt="" src="/fb.svg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;
