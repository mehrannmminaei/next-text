"use client";
import { Fragment } from "react";
import Button from "../Button";
import { CONNECT_WALLET } from "@/app/const/navbar";
import styles from "./style.module.scss";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

const ConnectToWallet = () => {
  return (
    <Fragment>
      <WalletMultiButton style={{ backgroundColor: "transparent", padding: 0 }}>
        <Button className={styles.btnContainer} buttonClass={styles.btnConnect}>
          {CONNECT_WALLET}
        </Button>
      </WalletMultiButton>
    </Fragment>
  );
};

export default ConnectToWallet;
