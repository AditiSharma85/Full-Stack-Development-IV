import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import EventDetails from "./EventDetails";
import ChatDetails from "./ChatDetails";
import "./log.css";

class Landing extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div>
        <header>
          <h1>Chat And Event Log History</h1>
          <br/>
          <h4> Welcome to the Log page! Click a button to view Chat and Events History! </h4>
        </header>
        <br/>
        <br/>
        <div>
          <BrowserRouter>
            &nbsp;&nbsp;<button className = "logbutton">
              <Link classname = "logbutton" to="/EventDetails">Event History</Link>
            </button>
            &nbsp;&nbsp;&nbsp;
            <button className = "logbutton">
              <Link classname = "logbutton" to="/ChatDetails">Chat History</Link>
            </button>
            <br/>
            <br/>
            <br/>
            <Route path="/EventDetails" component={EventDetails} />
            <Route path="/ChatDetails" component={ChatDetails} />
          </BrowserRouter>
        </div>
      </div>
    );
  }
}

export default Landing;
