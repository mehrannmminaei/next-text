import { Fragment } from "react";
import Button from "../Button";
import { CONNECT_WALLET } from "@/app/const/navbar";
import styles from "./style.module.scss";

const ConnectToWallet = () => {
  return (
    <Fragment>
      <Button className={styles.btnContainer} buttonClass={styles.btnConnect}>
        {CONNECT_WALLET}
      </Button>
    </Fragment>
  );
};

export default ConnectToWallet;
