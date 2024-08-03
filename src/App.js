import React from "react";
import TopBanner from "./components/TopBanner/TopBanner";
import Services from "./components/Services/Services";
import TopNavigation from "./components/TopNavigation/TopNavigation";
import Analysis from "./components/Analysis/Analysis";
import Summary from "./components/Summary/Summary";
import RecentProject from "./components/RecentProject/RecentProject";

import Video from "./components/Video/Video";
import Courses from "./components/Courses/Courses";

function App() {
  return (
    <div className="App">
      <TopNavigation />

      <TopBanner />
      <Services />
      <Analysis />
      <Summary />
      <RecentProject />
      <Courses />

      <Video />
    </div>
  );
}

export default App;
