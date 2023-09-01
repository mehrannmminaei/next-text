import { ReactNode } from "react";
import styles from "./style.module.scss";
import clsx from "clsx";
export interface ISliderProp {
  children: ReactNode;
  customStyle?: string;
}
const Slider = ({ children, customStyle }: ISliderProp) => {
  const styleCombine = clsx(customStyle, styles.container);
  return <div className={styleCombine}>{children}</div>;
};

export default Slider;
