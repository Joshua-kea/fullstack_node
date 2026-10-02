import express from "express";
import path from "path";

const app = express();

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(path.resolve("public/frontpage/frontpage.html"));
});

app.get("/fundamentals", (req, res) => {
  res.sendFile(path.resolve("public/views/fundamentals.html"));
});

app.get("/functions", (req, res) => {
  res.sendFile(path.resolve("public/views/functions.html"));
});

app.get("/loops", (req, res) => {
  res.sendFile(path.resolve("public/views/loops.html"));
});

app.get("/objects", (req, res) => {
  res.sendFile(path.resolve("public/views/objects.html"));
});

app.get("/modules", (req, res) => {
  res.sendFile(path.resolve("public/views/modules.html"));
});

app.get("/errors", (req, res) => {
  res.sendFile(path.resolve("public/views/errors.html"));
});

app.get("/servers", (req, res) => {
  res.sendFile(path.resolve("public/views/servers.html"));
});

app.get("/ssr", (req, res) => {
  res.sendFile(path.resolve("public/views/ssr.html"));
});

app.get("/commands", (req, res) => {
  res.sendFile(path.resolve("public/views/commands.html"));
});

app.get("/structures", (req, res) => {
  res.sendFile(path.resolve("public/views/structures.html"));
});

app.get("/dates", (req, res) => {
  res.sendFile(path.resolve("public/views/dates.html"));
});

app.get("/html", (req, res) => {
  res.sendFile(path.resolve("public/views/html.html"));
});

app.get("/css", (req, res) => {
  res.sendFile(path.resolve("public/views/css.html"));
});

app.get("/tools", (req, res) => {
  res.sendFile(path.resolve("public/views/tools.html"));
});

app.get("/frameworks", (req, res) => {
  res.sendFile(path.resolve("public/views/frameworks.html"));
});

const PORT = process.env.PORT ?? 8080;

const server = app.listen(PORT, (error) => {
  if (error) {
    console.log("Error starting the server", error);
  }
  console.log("server is running on port", server.address().port);
});
