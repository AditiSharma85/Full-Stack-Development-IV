const http = require("http"),
  io = require("socket.io"),
  express = require("express"),
  bodyparser = require("body-parser"),
  cors = require("cors"),
  event1="Joined Chat",
event2="Disconnected Chat";


const Message = require("./model/Message");

const ServerEvent = require("./model/EventLogger");

const mongoose = require("mongoose");

const connectionString =
  "mongodb+srv://aditiSharma85:Green@pple2020@cluster0-qmzao.azure.mongodb.net/AditiDB?retryWrites=true&w=majority";

mongoose.connect(connectionString, { useNewUrlParser: true }).then(
  () => {
    console.log("Mongoose Aditi DB connected successfully");
  },
  (error) => {
    console.log("Mongoose could not be connected to database: " + error);
  }
);

const EventLogger = (data) => {
  ServerEvent.create([
    {
      event: data.event,
      sender: data.sender,
    },
  ])
    .then(() => console.log("Logged the event"))
    .catch((e) => console.log(e));
};

//const server = http.createServer(function (req, res) {});

const server = express();

server.use(bodyparser.json());
server.use(bodyparser.urlencoded({ extended: true }));
server.use(cors());

server.get("/getEventLogs", (req, res) => {
  ServerEvent.find({}, (error, documents) => {
    if (error) {
      console.log(`Error occured on ServerEvent.find(): ${error}`);
    } else {
      console.log(`ServerEvent.find() returned documents: ${documents}`);
      return res.send(documents);
    }
  });
});

server.get("/getChatActivity", (req, res) => {
  Message.find({}, (error, documents) => {
    if (error) {
      console.log(`Error occured on Register.find(): ${error}`);
    } else {
      console.log(`Chatroom.find() returned documents: ${documents}`);
      return res.send(documents);
    }
  });
});

const PORT = 5000;
server.listen(PORT, () => console.log(`server started on localhost:${PORT}`));

const socket_server = http.createServer(function (req, res) {});

const SOCKET_PORT = 8080;
socket_server.listen(SOCKET_PORT, () =>
  console.log(`socket-server started on localhost:${SOCKET_PORT}`)
);

// socket.io, I choose you
const ioServer = io.listen(socket_server);

let serverUser = [];

// socket.io setup and manager
ioServer.on("connection", function (socket) {
  // now we have a client object!
  console.log("Connection accepted.");

  
  //Start of [Events handled for ChatRoom Page]
  socket.username = "Anonymous"

  //listen on change_username
  socket.on('change_username', (data) => {
    socket.username = data.username
    socket.broadcast.emit('user name changed to', { username: socket.username, time: getTime() });
    console.log(`*********************************************************************`);
    console.log(data.username + " has joined the chat at" + getTime());
    console.log(`*********************************************************************`);
    connect.then(db => {
      console.log(`Successfully connected to the database: ${event1},${socket.username}`);
      let eventMessage = new ServerEvent({ event: event1, sender: socket.username });

      eventMessage.save();
    });
  })
  //listen on select chat room
  socket.on('room', (data) => {
    socket.room = data.room
    socket.broadcast.emit('User joined room', {room: socket.room} );
    console.log(`***** Joined room ` + data.room + ` *****`);
  })

  const getChats = () => socket.emit('get-chats');
  const getChatsByChatRoom =()=>socket.emit('get-chats-by-chat-room');
  const getEvents=()=>socket.emit('get-events')

  //listen on new_message
  socket.on('new_message', (data) => {
    //broadcast the new message
    io.sockets.emit('new_message', { message: data.message, username: socket.username, room: socket.room, time: getTime() });
    console.log(socket.username + " typed the following message :" + data.message + " at " + getTime());
    //save chat to the database
    connect.then(db => {
      console.log(`Successfully connected to the database: ${data.message},${socket.username},${socket.room}`);
      let chatMessage = new Message({ message: data.message, sender: socket.username, room: socket.room });

      chatMessage.save();
    });
  })

  //listen on typing
  socket.on('typing', (data) => {
    socket.broadcast.emit('typing', { username: socket.username })
    console.log(socket.username + " is typing a message");
  })
  //get chats by Chat History
  socket.on("get-chats", () => {
    console.log("server - get-chats called");
    Message.find((error, documents) => {
      if (error) console.log(`Error occured on Message.find(): ${error}`);
      else {
        console.log(`Message.find() returned documents: ${documents}`);
        const data = JSON.stringify(documents);
        socket.emit("chats-data", data);
      }

    });
  });
  //get chats by chatroom
  socket.on("get-chats-by-chat-room", () => {
    console.log("server - get-chats-by-chat-room called");
    Message.find((error, documents) => {
      if (error) console.log(`Error occured on Message.find(): ${error}`);
      else {
        documents.map(x=>x.room="Games");
        console.log(`Message.find() returned documents: ${documents}`);
        const data = JSON.stringify(documents);
        socket.emit("chats-data-by-chat-room", data);
      }

    });
  });
   //get Events by User History
   socket.on("get-events", () => {
    console.log("server - get-events called");
    ServerEvent.find((error, documents) => {
      if (error) console.log(`Error occured on ServerEvent.find(): ${error}`);
      else {
        console.log(`ServerEvent.find() returned documents: ${documents}`);
        const data = JSON.stringify(documents);
        socket.emit("events-data", data);
      }

    });
  });
  socket.on("disconnect", (data) => {
    console.log(`*********************************************************************`);
    console.log(socket.username + " has disconnected from room " + socket.room  + getTime());
    console.log(`*********************************************************************`);
    connect.then(db => {
      console.log(`Successfully connected to the database: ${event2},${socket.username}`);
      let eventMessage = new ServerEvent({ event: event2, sender: socket.username });

      eventMessage.save();
    });
  });

});
  