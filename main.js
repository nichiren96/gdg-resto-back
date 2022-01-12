const PORT = process.env.PORT || 5000;
const app = require("express")();
const http = require("http").createServer(app);
const io = require("socket.io")(http);

const CLIENT_NOTIFICATIONS = {
  NEWDELIVERY: "client_new_delivery",
};

const DELIVERER_NOTIFICATIONS = {
  NEWDELIVERY: "deliverer_new_delivery",
};

app.get("/", (req, res) => {
  res.send("App socket is running");
});

io.on("connection", (socket) => {
  console.log("Mis utilisateur connecté");
  // LISTENERS
  socket.on(CLIENT_NOTIFICATIONS.NEWDELIVERY, (data) => {
    console.log(data);
    io.emit(DELIVERER_NOTIFICATIONS.NEWDELIVERY, data);
    console.log(`Emitting ${DELIVERER_NOTIFICATIONS.NEWDELIVERY}, ${data}`);
  });

  socket.on("disconnect", () => console.log("Client disconnected"));
});

http.listen(PORT, () => {
  console.log("listening on socket: ", PORT);
});
