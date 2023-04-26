import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./src/config/db.js";
import fs from "fs";
import properties from "./src/config/properties.js";
import sectorRoute from "./src/api/routes/sectorRoutes.js";

const port = properties.PORT;
const serverUrl = properties.SERVER_URL;

// connecting to database
connectDB(properties.MONGO_URI);

// express config
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
try {
  app.use("/static", express.static("static"));
} catch (error) {
  console.log(error);
}


// creating static/excelsheets directories if it doesn't exists
if (fs.existsSync("./static")) {
  if (!fs.existsSync("./static/excelsheets")) {
    console.log(`Creating Path: ./static/excelsheets`);
    fs.mkdirSync("./static/excelsheets");
  }
} else {
  console.log(`Creating Path: ./static/excelsheets`);
  fs.mkdirSync("./static");
  fs.mkdirSync("./static/excelsheets");
}

app.use("/api/v1/sector", sectorRoute);

dotenv.config();

app.get("/", (req, res) => {
  return res.send(`<h1>Running on Port : ${port}</h1>`);
});

app.listen(port, () => {
  console.log(`Open in Browser : ${serverUrl}`);
});
