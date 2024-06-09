import React from "react";
import styles from "../css/participant-card.module.scss";
import { MicrophoneIcon } from "video-conference/icons/microphone-icon";
import { MuteIcon } from "video-conference/icons/mute-icon";
const symbolImg = require("../assets/images/symbol.png");

type Props = {
  image: string;
  name: string;
  description: string;
  title: string;
  isJudge: boolean;
  isMe: boolean;
  isMuted: boolean;
  isCameraOn: boolean;
};

export const ParticipantCard = (props: Props) => {
  const {
    image,
    title,
    name,
    description,
    isJudge,
    isMe,
    isMuted,
    isCameraOn,
  } = props;

  return (
    <div className={styles.participantCard}>
      <img src={image} alt={name} className={styles.participantImage} />
      <div
        className={isMe ? styles.currentUserDescription : styles.description}
      >
        {isMe ? `אני - ${description}` : description}
      </div>
      <div className={styles.participantDetails}>
        <button className={styles.microphoneButton}>
          {isMuted ? <MuteIcon /> : <MicrophoneIcon />}
        </button>
        <div className={styles.participantInfo}>
          <div className={styles.textInfo}>
            <p className={styles.participantTitle}>{title}</p>
            <p className={styles.participantName}>{name}</p>
          </div>
          {isJudge && (
            <img src={symbolImg} className={styles.symbolImage} alt="" />
          )}
        </div>
      </div>
    </div>
  );
};
