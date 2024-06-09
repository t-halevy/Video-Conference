import React, { useState, useEffect } from "react";
import styles from "../css/control-panel.module.scss";
import { MuteIcon } from "video-conference/icons/mute-icon";
import { MicrophoneIcon } from "video-conference/icons/microphone-icon";
import { CameraIcon } from "video-conference/icons/camera-icon";
import { CameraOffIcon } from "video-conference/icons/camera-off-icon";
import { ShareIcon } from "video-conference/icons/share-icon";
import { ControlButton } from "./ControlButton";
import LiveInfoComponent from "./LiveInfoComponent";

type Props = {
  isMuted: boolean;
  toggleMute: () => void;
  isCameraOn: boolean;
  toggleCamera: () => void;
};

export const ControlPanel = (props: Props) => {
  const [time, setTime] = useState(0);
  const { isMuted, toggleMute, isCameraOn, toggleCamera } = props;

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const share = () => {};

  return (
    <div className={styles.controlPanel}>
      <LiveInfoComponent time={time} />
      <div className={styles.controls}>
        <ControlButton onClick={share} label="שיתוף" icon={<ShareIcon />} />
        <ControlButton
          onClick={toggleMute}
          label="מיקרופון"
          icon={isMuted ? <MuteIcon /> : <MicrophoneIcon />}
        />
        <ControlButton
          onClick={toggleCamera}
          label="מצלמה"
          icon={isCameraOn ? <CameraIcon /> : <CameraOffIcon />}
        />
      </div>
    </div>
  );
};
