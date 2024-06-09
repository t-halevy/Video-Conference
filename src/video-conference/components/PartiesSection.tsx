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
  parties: Participant[];
  currentUserId: number;
  mutedStates: { [id: number]: boolean };
  cameraStates: { [id: number]: boolean };
};

export const PartiesSection = ({
  parties,
  currentUserId,
  mutedStates,
  cameraStates,
}: Props) => {
  return (
    <div className={styles.partiesSection}>
      {parties.map((party) => (
        <div className={styles.partyParticipant} key={party.id}>
          <ParticipantCard
            image={party.image}
            title={party.title}
            name={party.name}
            description={party.description}
            isJudge={false}
            isMe={party.id === currentUserId}
            isMuted={!!mutedStates[party.id]}
            isCameraOn={!!cameraStates[party.id]}
          />
        </div>
      ))}
    </div>
  );
};
