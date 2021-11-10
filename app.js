import express from "express";
import cors from "cors";
import mailSender from "./Router/nodemailer.js";
import * as path from "path";
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
const port = process.env.PORT || 5000;
app.listen(port, () => console.log("server is running on port ", port));
app.use("/api", mailSender);
if (process.env.NODE_ENV === "production") {
  console.log("here");
  app.use(express.static("./client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}
