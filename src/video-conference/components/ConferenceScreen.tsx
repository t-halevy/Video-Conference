import React, { useState, useEffect } from "react";
import styles from "../css/conference-screen.module.scss";
import { ControlPanel } from "./ControlPanel";
import { HeaderPanel } from "./HeaderPanel";
import { SidePanel } from "./SidePanel";
import { JudgesSection } from "./JudgesSection";
import { PartiesSection } from "./PartiesSection";

type Participant = {
  id: number;
  image: string;
  name: string;
  title: string;
  description: string;
};

type Props = {
  judges: Participant[];
  parties: Participant[];
  currentUserId: number;
  caseTitle: string;
  caseNumber: string;
};

export const ConferenceScreen = (props: Props) => {
  const { judges, parties, currentUserId, caseTitle, caseNumber } = props;
  const [mutedStates, setMutedStates] = useState<{ [id: number]: boolean }>({});
  const [cameraStates, setCameraStates] = useState<{ [id: number]: boolean }>(
    {},
  );

  useEffect(() => {
    const judgesColumns = Math.max(judges.length, 1) + 1;
    const partiesColumns = Math.max(parties.length, 1) + 1;

    document.documentElement.style.setProperty(
      "--judges-columns",
      String(judgesColumns),
    );
    document.documentElement.style.setProperty(
      "--parties-columns",
      String(partiesColumns),
    );
  }, [judges.length, parties.length]);

  const handleShieldClick = () => {};
  const handleExpandClick = () => {};
  const handleParticipantsClick = () => {};
  const handleCaseDetailsClick = () => {};
  const handleManagerClick = () => {};
  const handleSettingsClick = () => {};
  const handleExitClick = () => {};

  const toggleMute = (id: number) => {
    setMutedStates((prevMutedStates) => ({
      ...prevMutedStates,
      [id]: !prevMutedStates[id],
    }));
  };

  const toggleCamera = (id: number) => {
    setCameraStates((prevCameraStates) => ({
      ...prevCameraStates,
      [id]: !prevCameraStates[id],
    }));
  };

  return (
    <div className={styles.conferenceScreen}>
      <div className={styles.contentContainer}>
        <HeaderPanel
          caseTitle={caseTitle}
          caseNumber={caseNumber}
          onShieldClick={handleShieldClick}
          onExpandClick={handleExpandClick}
        />
        <JudgesSection
          judges={judges}
          currentUserId={currentUserId}
          mutedStates={mutedStates}
          cameraStates={cameraStates}
        />
        <PartiesSection
          parties={parties}
          currentUserId={currentUserId}
          mutedStates={mutedStates}
          cameraStates={cameraStates}
        />
        <ControlPanel
          isMuted={!!mutedStates[currentUserId]}
          toggleMute={() => toggleMute(currentUserId)}
          isCameraOn={!!cameraStates[currentUserId]}
          toggleCamera={() => toggleCamera(currentUserId)}
        />
      </div>
      <SidePanel
        numOfPeople={judges.length + parties.length}
        onPeopleClick={handleParticipantsClick}
        onCaseDetailsClick={handleCaseDetailsClick}
        onManagerClick={handleManagerClick}
        onSettingsClick={handleSettingsClick}
        onExitClick={handleExitClick}
      />
    </div>
  );
};
