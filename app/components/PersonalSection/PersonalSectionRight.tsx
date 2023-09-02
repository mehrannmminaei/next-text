import { SignalIcon } from "@/public/assets/svg/bankCard";
import styles from "./style.module.scss";

const PersonalSectionRight = () => {
  return (
    <div>
      <div className={styles.cardContainer1}>
        <div className={styles.warper}>
          <SignalIcon
            height={274}
            width={435}
            textColor="#FFF"
            backgroundColor="#fff"
          />
        </div>
      </div>
      <div className={styles.cardContainer2}>
        <div className={styles.warper}>
          <SignalIcon
            height={274}
            width={435}
            textColor="#000"
            backgroundColor="#2BB32A"
            fillOpacity="1"
          />
        </div>
      </div>
      <div className={styles.cardContainer3}>
        <div className={styles.warper}>
          <SignalIcon
            height={274}
            width={435}
            textColor="#000"
            backgroundColor="#fff"
            fillOpacity="1"
          />
        </div>
      </div>
    </div>
  );
};

export default PersonalSectionRight;
