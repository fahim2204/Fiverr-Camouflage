const mongoose = require("mongoose");
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
