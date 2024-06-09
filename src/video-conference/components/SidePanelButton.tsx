import React from "react";
import styles from "../css/side-panel.module.scss";

type Props = {
  icon: JSX.Element;
  text: string;
  badge?: number;
  onClick: () => void;
};

export const SidePanelButton = (props: Props) => {
  const { icon, text, badge, onClick } = props;

  return (
    <button className={styles.sidePanelButton} onClick={onClick}>
      {icon}
      {badge !== undefined && <span className={styles.iconBadge}>{badge}</span>}
      <span>{text}</span>
    </button>
  );
};
