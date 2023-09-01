import clsx from "clsx";
import styles from "./styles.module.scss";
export interface ICircleProp {
  customClass?: string;
}
const Circle = ({ customClass }: ICircleProp) => {
  const containerStyle = clsx(customClass, styles.container);
  return <div className={containerStyle}></div>;
};

export default Circle;
