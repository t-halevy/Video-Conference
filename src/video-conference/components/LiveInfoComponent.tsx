import React from "react";
import styles from "../css/control-panel.module.scss";

type Props = {
  time: number;
};

const LiveInfoComponent = (props: Props) => {
  const { time } = props;

  const formatTime = (time: number) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    const formattedHours = hours > 0 ? `${hours}:` : "";
    const formattedMinutes = `${minutes < 10 ? `0${minutes}` : minutes}:`;
    const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;

    return `${formattedHours}${formattedMinutes}${formattedSeconds}`;
  };

  return (
    <div className={styles.liveInfo}>
      <span className={styles.liveLabel}>LIVE</span>
      <span className={styles.timer}>{formatTime(time)}</span>
    </div>
  );
};

export default LiveInfoComponent;
