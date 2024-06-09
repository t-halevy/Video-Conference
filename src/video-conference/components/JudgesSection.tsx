import React from "react";
import styles from "../css/conference-screen.module.scss";
import { ParticipantCard } from "./ParticipantCard";

type Participant = {
  id: number;
  image: string;
  name: string;
  title: string;
  description: string;
};

type Props = {
  judges: Participant[];
  currentUserId: number;
  mutedStates: { [id: number]: boolean };
  cameraStates: { [id: number]: boolean };
};

export const JudgesSection = ({
  judges,
  currentUserId,
  mutedStates,
  cameraStates,
}: Props) => {
  return (
    <div className={styles.judgesSection}>
      {judges.map((judge) => (
        <div className={styles.judgeParticipant} key={judge.id}>
          <ParticipantCard
            image={judge.image}
            title={judge.title}
            name={judge.name}
            description={judge.description}
            isJudge={true}
            isMe={judge.id === currentUserId}
            isMuted={!!mutedStates[judge.id]}
            isCameraOn={!!cameraStates[judge.id]}
          />
        </div>
      ))}
    </div>
  );
};
