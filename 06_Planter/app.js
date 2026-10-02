import express from "express";
const app = express();
import path from "path";

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(path.resolve("public/frontpage/frontpage.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(path.resolve("public/about/about.html"));
});

const PORT = process.env.PORT ?? 8080;

const server = app.listen(PORT, (error) => {
  if (error) {
    console.log("Error starting the server", error);
  }
  console.log("Server is running on port", server.address().port);
});
