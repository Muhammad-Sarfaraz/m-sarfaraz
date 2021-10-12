import { StaticRouter, Switch, Route, Link } from "react-router-dom";
import { Fragment, useCallback, useContext, useEffect, useState } from "react";

import Home from "./pages/Home";
import NotFound from "./pages/Home";
import { APIContext } from "./context/Api";
import {HOME_URL} from './routes/Web';
function App() {

  const [data, setData] = useContext(APIContext);

  console.log(setData);

  return (
    <StaticRouter>
      <Switch>
        <Route path={HOME_URL} exact>
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
