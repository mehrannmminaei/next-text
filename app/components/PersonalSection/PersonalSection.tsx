import { ReactNode } from "react";
import styles from "./style.module.scss";
export interface IPersonalSectionProp {
  leftSlide: ReactNode;
  rightSlide: ReactNode;
}

const PersonalSection = ({ leftSlide, rightSlide }: IPersonalSectionProp) => {
  return (
    <div className={styles.container}>
      <div className={styles.leftContainer}>{leftSlide}</div>
      <div className={styles.rightContainer}>{rightSlide}</div>
    </div>
  );
};
export default PersonalSection;
