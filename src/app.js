const express = require("express");
const cors = require("cors");

const app = express();

const artistRoute = require("./routes/artist.routes");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.json({ type: "application/vnd.api+json" }));
app.use(cors());

//Basic starting route
app.use("/api/", artistRoute);

module.exports = app;
