import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import createBrowserHistory from "history/createBrowserHistory";
import "./App.css";

import Landing from "./Components/Landing";

const customHistory = createBrowserHistory();
function App() {
  return (
    <BrowserRouter history={customHistory}>
      <div>
        <Switch>
          
          <Route path="/" component={Landing} />
          <Route component={Error} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
