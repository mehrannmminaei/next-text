import Image from "next/image";
import styles from "./style.module.scss";

const LogoSlider = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image
          src={"/assets/svg/Vectorbrand1.svg"}
          width={105}
          height={32}
          alt="brand"
        />
      </div>
      <div className={styles.item}>
        <Image
          src={"/assets/svg/Vectorbrand2.svg"}
          width={90}
          height={32}
          alt="brand"
        />
      </div>
      <div className={styles.item}>
        <Image
          src={"/assets/svg/Vectorbrand3.svg"}
          width={107}
          height={32}
          alt="brand"
        />
      </div>
      <div className={styles.item}>
        <Image
          src={"/assets/svg/Vectorbrand4.svg"}
          width={237}
          height={32}
          alt="brand"
        />
      </div>
      <div className={styles.itemLeft}>
        <Image
          src={"/assets/svg/Vectorbrand5.svg"}
          width={102}
          height={32}
          alt="brand"
        />
      </div>
      <div className={styles.itemLeft}>
        <Image
          src={"/assets/svg/Vectorbrand6.svg"}
          width={105}
          height={32}
          alt="brand"
        />
      </div>
    </div>
  );
};
export default LogoSlider;
