import React from "react";
import styles from "../css/header-panel.module.scss";
import { ShieldIcon } from "video-conference/icons/shield-icon";
import { ExpandIcon } from "video-conference/icons/expand-icon";

type Props = {
  caseTitle: string;
  caseNumber: string;
  onShieldClick: () => void;
  onExpandClick: () => void;
};

export const HeaderPanel = ({
  caseTitle,
  caseNumber,
  onShieldClick,
  onExpandClick,
}: Props) => {
  return (
    <div className={styles.HeaderPanel}>
      <div className={styles.actionsSection}>
        <span className={styles.recordingIndicator}>
          מקליט<span className={styles.redCircle}></span>
        </span>
        <button className={styles.iconButton} onClick={onShieldClick}>
          <ShieldIcon />
        </button>
        <button className={styles.iconButton} onClick={onExpandClick}>
          <ExpandIcon />
        </button>
      </div>
      <div className={styles.titleSection}>
        <p className={styles.caseTitle}>{caseTitle}</p>
        <p className={styles.caseNumber}>{`${caseNumber} תיק מספר`}</p>
      </div>
    </div>
  );
};
