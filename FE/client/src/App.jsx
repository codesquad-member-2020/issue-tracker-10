import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

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
      <Switch>
        <Route exact path="/labels" component={Label} />
        <Route exact path="/milestones" component={Milestones} />
        <Route path="/milestones/create" component={MilestonesEditor} />
        <Route path="/milestones/edit/:id" component={MilestonesEditor} />
      </Switch>
    </Router>
  );
}

export default App;
