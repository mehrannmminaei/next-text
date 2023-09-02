import Image from "next/image";
import styles from "./style.module.scss";
const Features = () => {
  return (
    <div className={styles.container}>
      <div className={styles.headerDiv}>
        <span className={styles.titleHeader}>What do we offer?</span>
      </div>

      <div className={styles.containerItems}>
        <div className={styles.itemCell}>
          <div className="mr-2">
            <Image
              src={"/assets/svg/foffer1.svg"}
              alt=""
              width={64}
              height={64}
            />
          </div>
          <div className={styles.itemCellTextContainer}>
            <span className={styles.textCellTitle}>Security Guarantee </span>
            <span className={styles.textCellsubTitle}>
              Your data and funds will be securely protected.
            </span>
          </div>
        </div>
        <div className={styles.itemCell}>
          <div className="mr-2">
            <Image
              src={"/assets/svg/foffer2.svg"}
              alt=""
              width={64}
              height={64}
            />
          </div>
          <div className={styles.itemCellTextContainer}>
            <span className={styles.textCellTitle}>Investing </span>
            <span className={styles.textCellsubTitle}>
              Your data and funds will be securely protected.
            </span>
          </div>
        </div>
        <div className={styles.itemCell}>
          <div className="mr-2">
            <Image
              src={"/assets/svg/foffer3.svg"}
              alt=""
              width={64}
              height={64}
            />
          </div>
          <div className={styles.itemCellTextContainer}>
            <span className={styles.textCellTitle}>Multiple Method </span>
            <span className={styles.textCellsubTitle}>
              Your data and funds will be securely protected.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Features;
