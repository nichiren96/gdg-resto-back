const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const port = 4000;
let menus = require("./data/menu_data");
const cors = require("cors");
const bodyParser = require("body-parser");
const io = require("socket.io")(server, {
  cors: {
    origins: ["*"],
  },
});
// const db = require("./src/app/app.database");
const upload = require("./src/app/app.upload");
const { v4: uuidv4 } = require("uuid");
let commands = [];

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser({ extended: true }));
// METHOD, URL, PARAMS, HEADERS
// METHOD: GET, POST, DELETE, PUT

app.get("/", (req, res) => {
  res.send("Hello");
});

// Read
app.get("/api/menu", (req, res) => res.send(menus));

// Create
app.post("/api/menu", (req, res) => {
  menus = [...menus, req.body];
  res.send(menus);
});

app.post("/api/image", upload.single("image"), (req, res) => {
  res.status(200).send("Done");
});

// Delete
app.delete("/api/menu/:id", (req, res) => {
  menus = menus.filter((menu) => menu._id !== req.params.id);
  res.send(menus);
});

// Update
app.put("/api/menu", (req, res) => res.send("Posted"));

// SOCKET
io.on("connection", (socket) => {
  socket.on("requestDelete", (id) => {
    menus = menus.filter((menu) => menu._id !== id);
    io.emit("done", { menus });
  });

  socket.on("requestAdd", (data) => {
    menus = [
      ...menus,
      { ...data, _id: uuidv4(), image: "http://placehold.it/1024x1024" },
    ];
    io.emit("done", { menus });
  });

  socket.on("requestCommand", (data)=>{
      
  })

  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});

server.listen(port, () => console.log(`Server listening on port ${port}!`));
