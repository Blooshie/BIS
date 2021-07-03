import path from "path";
import express from "express";
import mongoose from "mongoose";
import { data } from "./data.js";
var app = express();
var port = 3001;

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/users", async (req, res) => {
  await User.deleteMany({}); // brise sve korisnike
  const createdUsers = await User.insertMany(data.worker);
  res.send({ createdUsers });
});
app.get("/entries", async (req, res) => {
  await Entry.deleteMany({}); // brise sve korisnike
  const createdEntries = await Entry.insertMany(data.entries);
  res.send({ createdEntries });
});

//mongo schemas
const userSchema = mongoose.Schema(
  {
    //kako ce izgledati relacija
    name: { type: String, required: true },
    surname: { type: String, required: true },
    type: { type: Number, default: 0, required: true },
  }, //opcije
  {
    timestamps: true, //kada kreiras ovaj entity, dodaj kad je kreiran i uređivan vrijeme
  }
);
const User = mongoose.model("User", userSchema);
const entrySchema = mongoose.Schema(
  {
    userId: { type: Number, required: true },
    dateTimeEntry: { type: Date, required: true },
    locationId: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);
const Entry = mongoose.model("Entry", entrySchema);

//mongo connection
mongoose.connect("mongodb://localhost:27017/test", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.get("/data", (req, res) => {
  res.send(data);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
