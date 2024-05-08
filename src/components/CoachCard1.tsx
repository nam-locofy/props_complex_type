import { FunctionComponent } from "react";
import styles from "./CoachCard1.module.css";

export enum Numbers {
  Zero,
  One,
  Two,
  Three,
  Four,
  Five
}

export type CoachCard1Type = {
  image?: string;
  coachName?: 'Jane' | 'Danny' | 'Robert';
  star: Numbers;
  speciality: string;
  age: number;
  renderRed?: boolean,
  habit?: string,
};

const CoachCard1: FunctionComponent<CoachCard1Type> = ({
  image,
  coachName,
  star,
  speciality,
  age,
  renderRed,
  habit
}) => {
  return (
    <div className={styles.imageParent}>
      <img className={styles.imageIcon} loading="lazy" alt="" src={image} />
      <div className={styles.details}>
        <div className={styles.frameParent}>
          <div className={styles.amandaParent}>
            <div className={styles.amanda}>{coachName}</div>
            <div className={styles.frameWrapper}>
              <div className={styles.frameGroup}>
                <div className={styles.starWrapper}>
                  <img
                    className={styles.starIcon}
                    loading="lazy"
                    alt=""
                    src="/star.svg"
                  />
                </div>
                <div className={styles.div}>{star}</div>
              </div>
            </div>
            <div>Age: {age}</div>
          </div>
          <div className={styles.line} />
          <div className={styles.specialisationsParent}>
            <b className={styles.specialisations}>Specialisations :</b>
            <div className={styles.crossfitExpoortNutrition}>{speciality}</div>
          </div>
          {habit && <div className={styles.specialisationsParent}>
            <b className={styles.specialisations}>Habit :</b>
            <div className={styles.crossfitExpoortNutrition}>{habit}</div>
          </div>}
        </div>
        <div className={styles.instaParent} style={renderRed ? {
          backgroundColor: 'red',
        } : {}}>
          <img
            className={styles.instaIcon}
            loading="lazy"
            alt=""
            src="/insta.svg"
          />
          <img className={styles.fbIcon} loading="lazy" alt="" src="/fb.svg" />
        </div>
      </div>
    </div>
  );
};

export default CoachCard1;
