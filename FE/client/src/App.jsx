import React from "react";

import Label from "@component/issues/label/Label";
import Milestones from "@component/issues/milestones/Milestones";
import MilestonesEditor from "@component/issues/milestones/MilestonesEditor";

import { GlobalStyle } from "@style/GlobalStyle";

function App() {
  return (
    <div>
      <GlobalStyle />
      <MilestonesEditor />
      <Milestones />
      <Label />
    </div>
  );
}

export default App;
