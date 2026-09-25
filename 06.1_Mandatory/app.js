import express from "express";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const app = express();

app.use(express.static("public"));

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const PORT = 8080;

app.get("/", (req, res) => {
  res.sendFile(join(__dirname, "public", "/frontpage", "/frontpage.html"));
});

app.get("/fundamentals", (req, res) => {
  res.sendFile(join(__dirname, "public", "/views", "/fundamentals.html"));
});

app.get("/servers", (req, res) => {
  res.sendFile(join(__dirname, "public", "/views", "/servers.html"));
});

app.get("/commands", (req, res) => {
  res.sendFile(join(__dirname, "public", "/views", "/commands.html"));
});

app.get("/structures", (req, res) => {
  res.sendFile(join(__dirname, "public", "/views", "/structures.html"));
});

app.get("/dates", (req, res) => {
  res.sendFile(join(__dirname, "public", "/views", "/dates.html"));
});

app.get("/html", (req, res) => {
  res.sendFile(join(__dirname, "public", "/views", "/html.html"));
});

app.get("/css", (req, res) => {
  res.sendFile(join(__dirname, "public", "/views", "/css.html"));
});

app.get("/tools", (req, res) => {
  res.sendFile(join(__dirname, "public", "/views", "/tools.html"));
});

app.listen(PORT, (error) => {
  if (error) {
    console.log("Error starting the server", error);
  }
  console.log("server is running on port", PORT);
});
