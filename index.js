const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors")
require("dotenv").config();


const app = express();

app.use(express.json());
app.use(cors());

const intialRoute = require("./router/index");
app.use("/api",intialRoute);

mongoose
  .connect(process.env.atlas_url)
  .then(() => {
    app.listen(8080, () => {
      console.log("server started");
    });
  })
  .catch((err) => {
    console.log(err);
  });
