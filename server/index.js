const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const port = process.env.PORT || 8080;
var corsOrigin = {
    origin: ["http://localhost:3000", "https://pass.fahimfaisal.net"],
};
app.use(cors(corsOrigin));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.listen(port, () =>
    console.log(`Server Started :: http://localhost:${port}`)
);

mongoose.connect(
    "mongodb+srv://fahim2204:fahim2204@cluster0.md64krj.mongodb.net/camouflagedb",
    () => console.log("Connected To DB"),
    (e) => console.log("Error DB>> ", e)
);

// Requiring all Routers
const profileRouter = require("./routes/profile");
const rootRouter = require("./routes/root");

app.use("/", rootRouter)
app.use("/profile", profileRouter)
app.use((req, res) => { res.status(404).send("Not Found: No such route"); });