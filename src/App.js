import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import Header from "./components/Header";
import Home from "./containers/Home";
import Character from "./containers/Character";
import ComicsH from "./containers/ComicsH";
import Comics from "./containers/Comics";

function App() {
  const [search, setSearch] = useState("");
  return (
    <Router>
      <Header search={search} setSearch={setSearch} />
      <Switch>
        <Route path="/comics/:id">
          <Comics />
        </Route>
        <Route path="/comics/">
          <ComicsH />
        </Route>
        <Route path="/character/:id">
          <Character />
        </Route>

        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
