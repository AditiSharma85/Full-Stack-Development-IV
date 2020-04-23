import React from "react";
import axios from "axios";
import CustomMaterialTable from "./CustomMaterialTable";
import "./log.css";

class EventDetails extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      eventLogs: null,
    };
  }

  render() {
    return (
      <div className="mainEventLogDiv">
        <section id="eventLogs">
          <section id="eventLogsActivity">
            {this.state.eventLogs !== null ? (
              <CustomMaterialTable
                data={this.state.eventLogs}
                tablename="EventLog"
              ></CustomMaterialTable>
            ) : (
              <tr>
              </tr>
            )}
          </section>
        </section>
      </div>
    );
  }

  componentWillMount() {
    this.getEventLogs();
  }

  getEventLogs = () => {
    axios.get("http://localhost:5000/getEventLogs/").then((res) => {
      const eventData = res.data;
      this.setState({ eventLogs: eventData });
    });
  };
}

export default EventDetails;
