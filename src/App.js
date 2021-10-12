import React from "react";
import { StaticRouter, Switch, Route, Link } from "react-router-dom";
import { useState,useContext } from "react";

import Home from "./pages/Home";
import NotFound from "./pages/404";

import { LoadingContext } from "./contexts/LoadingContext";

import { HOME_URL } from "./routes/Web";

function App() {

  const [loading,setLoading]=useContext(LoadingContext);

  return (
    <StaticRouter>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>

        {/* The NotFoundRoute route */}
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </StaticRouter>
  );
}

export default App;
