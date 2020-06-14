import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "@components/login/Login";
import Header from "@components/header/Header";
import Issue from "@components/issues/Issue";
import IssuesEditor from "@components/issues/issuesEditor/IssuesEditor";
import Label from "@components/issues/label/Label";
import Milestone from "@components/issues/milestone/Milestone";
import MilestoneEditor from "@components/issues/milestone/MilestoneEditor";

import { GlobalStyle } from "@style/GlobalStyle";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/issues" component={Issue} />
        <Route path="/issues/create" component={IssuesEditor} />
        <Route exact path="/labels" component={Label} />
        <Route exact path="/milestones" component={Milestone} />
        <Route path="/milestone/create" component={MilestoneEditor} />
        <Route path="/milestone/edit/:id" component={MilestoneEditor} />
      </Switch>
    </Router>
  );
}

export default App;
