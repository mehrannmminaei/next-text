import styles from "./style.module.scss";

export enum spaceType {
  SPACE_1 = "space1",
  SPACE_2 = "space2",
}
export interface ISpaceProp {
  variant: spaceType;
}
const Space = ({ variant }: ISpaceProp) => {
  return <div className={styles[variant]}></div>;
};

export default Space;
