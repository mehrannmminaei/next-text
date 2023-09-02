import styles from "./style.module.module.scss";
export interface IAboutItemProps {
  count: string;
  comment: string;
}
const AboutItem = ({ comment, count }: IAboutItemProps) => {
  return (
    <div className="flex flex-col items-center">
      <span className={styles.countAbout}>{count}</span>
      <span className={styles.commentAbout}>{comment}</span>
    </div>
  );
};
export default AboutItem;
