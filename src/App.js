import React from "react";
import { StaticRouter, Switch, Route, Link,BrowserRouter as Router } from "react-router-dom";
import { useState, useContext } from "react";

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import NotFound from "./pages/404";

import { LoadingContext } from "./contexts/LoadingContext";

import { HOME_URL, BLOGS_URL, CONTACT_URL,ARTS_URL } from "./routes/Web";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>

        <Route path="/contacts" exact>
          <Contact />
        </Route>

        <Route path="/blogs" exact>
          <Contact />
        </Route>

        <Route path="/arts" exact>
          <Contact />
        </Route>

        {/* The NotFoundRoute route */}
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
