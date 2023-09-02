"use client";
import BannerRightSide from "./components/Banner/BanerRightSide";
import Banner from "./components/Banner/Banner";
import BannerLeftSide from "./components/Banner/BannerLeftSide";
import Circle from "./components/Circle/Circle";
import Features from "./components/Features/Features";
import LandingAboutPanel from "./components/LandingAboutPanel/LandingAboutPanel";
import LogoSlider from "./components/LogoSlider/LogoSlider";
import PersonalSection from "./components/PersonalSection/PersonalSection";
import PersonalSectionLeft from "./components/PersonalSection/PersonalSectionLeft";
import PersonalSectionRight from "./components/PersonalSection/PersonalSectionRight";
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
      <LandingAboutPanel />
      <Space variant={spaceType.SPACE_1} />
      <LogoSlider />
      <Space variant={spaceType.SPACE_1} />
      <Features />
      <Space variant={spaceType.SPACE_1} />
      <Slider customStyle={styles.containerSliderPersonalSection}>
        <PersonalSection
          leftSlide={<PersonalSectionLeft />}
          rightSlide={<PersonalSectionRight />}
        />
      </Slider>
      <Space variant={spaceType.SPACE_1} />
    </main>
  );
}
