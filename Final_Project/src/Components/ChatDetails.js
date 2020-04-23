import React from "react";
import axios from "axios";
import CustomMaterialTable from "./CustomMaterialTable";
import "./log.css";

class ChatDetails extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      chatActivity: null,
    };
  }

  render() {
    return (
      <div className="mainAdminDiv">
        <section id="messages">
          <section id="messagesActivity">
            {this.state.chatActivity !== null ? (
              <CustomMaterialTable
                data={this.state.chatActivity}
                tablename="MessageActivity"
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
    this.getChatActivity();
  }

  getChatActivity = () => {
    axios.get("http://localhost:5000/getChatActivity/").then((res) => {
      const chatData = res.data;
      this.setState({ chatActivity: chatData });
    });
  };
}

export default ChatDetails;
