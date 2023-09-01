import { COMPANY_NAME } from "@/app/const/navbar";
import styles from "./style.module.scss";
import Image from "next/image";

const Logo = () => {
  return (
    <div className={styles.container}>
      <Image
        src={"./assets/svg/Excludelogo.svg"}
        width={24}
        height={24}
        alt="logo"
      />
      <span className={styles.logoText}>{COMPANY_NAME}</span>
    </div>
  );
};

export default Logo;
