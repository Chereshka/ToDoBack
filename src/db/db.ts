import mongoose from "mongoose";
import config from "../config";

mongoose.connect(config.mongoURL);

export const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function() {
  console.log("Connected successfully");
});
