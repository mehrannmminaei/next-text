import Image from "next/image";
import Button from "../Button";
import Space, { spaceType } from "../Space/Space";
import styles from "./style.module.scss";
import UsersAvatarList from "../UsersAvatarList/UsersAvatarList";
import UserCount from "./UserCount";
import WaveLine from "../WaveLine/WaveLine";

const BannerLeftSide = () => {
  return (
    <div className="h-full overflow-hidden">
      <div className=" absolute top-16 -z-10">
        <WaveLine />
      </div>
      <span className={styles.title}>
        Discover the Perfect Credit Card for You
      </span>
      <Space variant={spaceType.SPACE_2} />
      <div className={styles.subtitleContainer}>
        <span className={styles.subtitle}>
          Discover the power of our secure and rewarding credit cards. Explore
          our range of credit cards and take control of your finances today.
        </span>
      </div>
      <Space variant={spaceType.SPACE_2} />
      <Button className={styles.btnContainer} buttonClass={styles.btnConnect}>
        <div className="flex flex-row hover:scale-105">
          <span className="mr-4 ">Get Started</span>

          <Image
            src={"./assets/svg/arrowRight.svg"}
            width={22.5}
            height={16}
            alt="arrow"
          />
        </div>
      </Button>
      <Space variant={spaceType.SPACE_2} />
      <div className="flex flex-row  ">
        <div className="w-[135px]">
          <UsersAvatarList />
        </div>
        <div>
          <UserCount />
        </div>
      </div>
    </div>
  );
};
export default BannerLeftSide;
