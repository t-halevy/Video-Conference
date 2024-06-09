import React, { useState, useEffect } from "react";
import styles from "../css/control-panel.module.scss";

type Props = {
  onClick: () => void;
  label: string;
  icon: React.ReactNode;
};

export const ControlButton = (props: Props) => {
  const { onClick, label, icon } = props;

  return (
    <button className={styles.controlButton} onClick={onClick}>
      <span>{label}</span>
      {icon}
    </button>
  );
};
