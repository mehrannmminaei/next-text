import AboutItem from "./AboutItem";
import styles from "./style.module.module.scss";
const LandingAboutPanel = () => {
  return (
    <div className={styles.container}>
      <div className={styles.columnContainer}>
        <AboutItem comment="Ultra performance" count="3s" />
      </div>
      <div className={styles.columnContainer}>
        <AboutItem comment="Worldwide Clients" count="643" />
      </div>
      <div className={styles.columnContainer}>
        <AboutItem comment="Total transactions" count="+142K" />
      </div>
      <div className={styles.columnContainer}>
        <AboutItem comment="Total entrusted funds" count="+123M" />
      </div>
    </div>
  );
};

export default LandingAboutPanel;
