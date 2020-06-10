import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "@component/header/Header";
import Label from "@component/issues/label/Label";
import Milestone from "@component/issues/milestone/Milestone";
import MilestoneEditor from "@component/issues/milestone/MilestoneEditor";

import { GlobalStyle } from "@style/GlobalStyle";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route exact path="/labels" component={Label} />
        <Route exact path="/milestones" component={Milestone} />
        <Route path="/milestone/create" component={MilestoneEditor} />
        <Route path="/milestone/edit/:id" component={MilestoneEditor} />
      </Switch>
    </Router>
  );
}

export default App;
