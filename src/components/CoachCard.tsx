import { FunctionComponent } from "react";
import styles from "./CoachCard.module.css";

const CoachCard: FunctionComponent = () => {
  return (
    <div className={styles.imageParent}>
      <img className={styles.imageIcon} alt="" src="/image-1@2x.png" />
      <div className={styles.details}>
        <div className={styles.frameParent}>
          <div className={styles.madisonFroningParent}>
            <div className={styles.madisonFroning}>Madison Froning</div>
            <div className={styles.frameWrapper}>
              <div className={styles.frameGroup}>
                <div className={styles.starWrapper}>
                  <img className={styles.starIcon} alt="" src="/star.svg" />
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
          <div className={styles.twiterWrapper}>
            <img
              className={styles.twiterIcon}
              loading="lazy"
              alt=""
              src="/twiter.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoachCard;
