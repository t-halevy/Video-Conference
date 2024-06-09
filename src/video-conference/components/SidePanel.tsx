import React from "react";
import styles from "../css/side-panel.module.scss";
import { PeopleIcon } from "video-conference/icons/people-icon";
import { CourtIcon } from "video-conference/icons/court-icon";
import { ShieldIcon } from "video-conference/icons/shield-icon";
import { SettingsIcon } from "video-conference/icons/settings-icon";
import { SidePanelButton } from "./SidePanelButton";

const symbolImg = require("../assets/images/symbol.png");

type Props = {
  numOfPeople: number;
  onPeopleClick: () => void;
  onCaseDetailsClick: () => void;
  onManagerClick: () => void;
  onSettingsClick: () => void;
  onExitClick: () => void;
};

export const SidePanel = (props: Props) => {
  const {
    numOfPeople,
    onPeopleClick,
    onCaseDetailsClick,
    onManagerClick,
    onSettingsClick,
    onExitClick,
  } = props;

  return (
    <div className={styles.sidePanel}>
      <div className={styles.symbolWrapper}>
        <img src={symbolImg} alt="Symbol" className={styles.symbolImage} />
      </div>
      <div className={styles.buttonsContainer}>
        <SidePanelButton
          icon={<PeopleIcon />}
          text="אנשים"
          badge={numOfPeople}
          onClick={onPeopleClick}
        />
        <SidePanelButton
          icon={<CourtIcon />}
          text="פרטי דיון"
          onClick={onCaseDetailsClick}
        />
        <SidePanelButton
          icon={<ShieldIcon />}
          text="מנהל דיון"
          onClick={onManagerClick}
        />
        <SidePanelButton
          icon={<SettingsIcon />}
          text="הגדרות"
          onClick={onSettingsClick}
        />
      </div>
      <button className={styles.exitButton} onClick={onExitClick}>
        <span>יציאה מהדיון</span>
      </button>
    </div>
  );
};
