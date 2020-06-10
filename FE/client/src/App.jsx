import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "@component/header/Header";
import Label from "@component/issues/label/Label";
import Milestones from "@component/issues/milestones/Milestones";
import MilestonesEditor from "@component/issues/milestones/MilestonesEditor";

import { GlobalStyle } from "@style/GlobalStyle";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Header />
      <Route exact path="/labels" component={Label} />
      <Route exact path="/milestones" component={Milestones} />
      <Route exact path="/milestones/edit" component={MilestonesEditor} />
    </Router>
  );
}

export default App;
