import React from "react";

import Header from "@component/header/Header";
import Label from "@component/issues/label/Label";
import Milestones from "@component/issues/milestones/Milestones";
import MilestonesEditor from "@component/issues/milestones/MilestonesEditor";

import { GlobalStyle } from "@style/GlobalStyle";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <MilestonesEditor />
      <Milestones />
      <Label />
    </div>
  );
}

export default App;
