import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Homepage from "./Homepage";

// set up your routes here
export default function Day21Play() {
  return <Router>
    <Switch>
        <Route path="/">
            <Homepage />
        </Route>
    </Switch>
  </Router>;
}
