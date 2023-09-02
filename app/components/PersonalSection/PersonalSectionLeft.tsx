import Image from "next/image";
import Button from "../Button";
import Space, { spaceType } from "../Space/Space";
import styles from "./style.module.scss";

const PersonalSectionLeft = () => {
  return (
    <div className="h-full overflow-hidden">
      <span className={styles.title}>
        Design your personalized credit card.
      </span>
      <Space variant={spaceType.SPACE_2} />
      <div className={styles.subtitleContainer}>
        <span className={styles.subtitle}>
          You have the freedom to personalize the design of your credit card,
          ensuring a truly unique experience that makes you feel extraordinary
        </span>
      </div>
      <Space variant={spaceType.SPACE_2} />
      <Button className={styles.btnContainer} buttonClass={styles.btnConnect}>
        <div className="flex flex-row hover:scale-105">
          <span className="mr-4 whitespace-nowrap ">Create New Card</span>

          <Image
            src={"./assets/svg/arrowRight.svg"}
            width={22.5}
            height={16}
            alt="arrow"
          />
        </div>
      </Button>
    </div>
  );
};
export default PersonalSectionLeft;
