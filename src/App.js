import React from "react";
import { ConferenceScreen } from "./video-conference/components/ConferenceScreen";

function App() {
  const judges = [
    {
      id: 1,
      image: require("./video-conference/assets/images/court1.png"),
      name: " כבוד השופטת ישראלה ישראלוף",
      title: "ועדת ערר לעניני קורונה",
      description: "דובר",
    },
  ];

  const parties = [
    {
      id: 2,
      image: require("./video-conference/assets/images/court2.jpg"),
      name: 'עו"ד בני בנימין',
      title: "צד משיב",
      description: "צד משיב",
    },
    {
      id: 3,
      image: require("./video-conference/assets/images/court3.jpg"),
      name: 'עו"ד קובי יעקב',
      title: "צד עורר",
      description: "צד עורר",
    },
    {
      id: 4,
      image: require("./video-conference/assets/images/court4.jpg"),
      name: 'עו"ד נעם נעמן',
      title: "צד משיב",
      description: "צד משיב",
    },
  ];

  const currentUserId = 1;

  return (
    <ConferenceScreen
      judges={judges}
      parties={parties}
      currentUserId={currentUserId}
      caseTitle="משרד המשפטים, ועדת ערר לענייני קורונה - השתתפות בהוצאות"
      caseNumber="12345-56-22"
    />
  );
}

export default App;
