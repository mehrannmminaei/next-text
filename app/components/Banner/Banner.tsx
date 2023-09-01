import { ReactNode } from "react";
import styles from "./style.module.scss";
export interface IBannerProp {
  leftSlide: ReactNode;
  rightSlide: ReactNode;
}
const Banner = ({ leftSlide, rightSlide }: IBannerProp) => {
  return (
    <div className={styles.container}>
      <div className={styles.leftContainer}>{leftSlide}</div>
      <div className={styles.rightContainer}>{rightSlide}</div>
    </div>
  );
};

export default Banner;
