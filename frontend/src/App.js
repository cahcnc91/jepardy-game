import React, { Suspense, lazy, Fragment, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AppBar from "./components/AppBar";
import "./App.css";

const Home = lazy(() => import("./routes/Home"));
const Game = lazy(() => import("./routes/Game"));

const App = () => {
  const [players, setPlayers] = useState([]);

  const addPlayer = (player) => {
    console.log(player);
    setPlayers([...players, player]);
  };

  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Fragment>
            <AppBar />
            <Route
              exact
              path="/"
              render={() => <Home addPlayer={addPlayer} players={players} />}
            />
            <Route path="/game" render={() => <Game players={players} />} />
          </Fragment>
        </Switch>
      </Suspense>
    </Router>
  );
};

export default App;
