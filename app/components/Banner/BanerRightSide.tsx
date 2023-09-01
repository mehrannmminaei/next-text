import { SignalIcon } from "@/public/assets/svg/bankCard";
import styles from "./style.module.scss";

const BannerRightSide = () => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.warper}>
        <SignalIcon
          height={348}
          width={551}
          textColor="#FFF"
          backgroundColor="#fff"
        />
      </div>
    </div>
  );
};

export default BannerRightSide;
