import styles from "./style.module.scss";
const UserCount = () => {
  return (
    <div className="flex flex-col w-36 ">
      <span className={styles.userCount}>10.2k+</span>

      <span className={styles.userCountComment}>
        Active users around the wordls
      </span>
    </div>
  );
};

export default UserCount;
