"use client";
import BannerRightSide from "./components/Banner/BanerRightSide";
import Banner from "./components/Banner/Banner";
import BannerLeftSide from "./components/Banner/BannerLeftSide";
import Circle from "./components/Circle/Circle";
import LandingAboutPanel from "./components/LandingAboutPanel/LandingAboutPanel";
import Slider from "./components/Slider/Slider";
import Space, { spaceType } from "./components/Space/Space";
import styles from "./landing.module.scss";

export default function Home() {
  return (
    <main className="flex  w-full flex-col items-center ">
      <Space variant={spaceType.SPACE_1} />

      <Slider customStyle={styles.containerSliderBanner}>
        <Circle customClass={styles.circleCustomStyle} />
        <Banner
          leftSlide={<BannerLeftSide />}
          rightSlide={<BannerRightSide />}
        />
      </Slider>
      <Space variant={spaceType.SPACE_1} />
      <Slider customStyle={styles.containerSliderBanner}>
        <LandingAboutPanel />
      </Slider>

      <Space variant={spaceType.SPACE_1} />
    </main>
  );
}
