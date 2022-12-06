const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const port = process.env.PORT || 8080;
var corsOrigin = {
  origin: ["http://localhost:3000","https://pass.fahimfaisal.net"],
};
app.use(cors(corsOrigin));
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.listen(port, () =>
  console.log(`Server Started :: http://localhost:${port}`)
);

const Profiles = require("./model/profiles");
mongoose.connect(
  "mongodb+srv://fahim2204:fahim2204@cluster0.md64krj.mongodb.net/camouflagedb",
  () => console.log("Connected To DB"),
  (e) => console.log("Error DB>> ", e)
);

const saveprofile = async () => {
  await Profiles.create({ name:"Rahim Uddin", gender: "male",status:1 })
    .then((x) => console.log("Save sucess>> ", x))
    .catch((e) => console.log("Saving error>> ", e.message));
};

saveprofile();
