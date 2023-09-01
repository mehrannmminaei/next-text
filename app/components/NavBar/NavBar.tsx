"use client";
import Link from "next/link";
import styles from "./style.module.scss";

import {
  FAQS,
  OUR_PROCESS,
  PAYMENT,
  SERVICES,
  Why_US,
} from "@/app/const/navbar";
import ConnectToWallet from "../ConnectToWallet/ConnectToWallet";
import Logo from "../Logo/Logo";
const NavBar = () => (
  <div className={styles.container}>
    <div className={styles.leftRightContainer}>
      <Logo />
    </div>
    <div className={styles.containerMenu}>
      <Link href={""}>
        <span className={styles.label}>{Why_US}</span>
      </Link>
      <Link href={""}>
        <span className={styles.label}>{SERVICES}</span>
      </Link>
      <Link href={""}>
        <span className={styles.label}>{OUR_PROCESS}</span>
      </Link>
      <Link href={""}>
        <span className={styles.label}>{PAYMENT}</span>
      </Link>
      <Link href={""}>
        <span className={styles.label}>{FAQS}</span>
      </Link>
    </div>
    <div className={styles.leftRightContainer}>
      <ConnectToWallet />
    </div>
  </div>
);
export default NavBar;
