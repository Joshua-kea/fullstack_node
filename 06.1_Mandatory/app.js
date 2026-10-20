import express from "express";

const app = express();
import { addStaticRoute } from "./util/staticRoutes.js";

import {
  frontpagePage,
  commandsPage,
  cssPage,
  datesPage,
  errorsPage,
  fetchesPage,
  functionsPage,
  fundamentalsPage,
  htmlPage,
  loopsPage,
  modulesPage,
  objectsPage,
  serversPage,
  setupsPage,
  restApisPage,
  ssrPage,
  toolsPage,
} from "./templatingEngine/pages.js";

addStaticRoute(app)


app.get("/", (req, res) => {
  res.send(frontpagePage);
});

app.get("/fundamentals", (req, res) => {
  res.send(fundamentalsPage);
});

app.get("/functions", (req, res) => {
  res.send(functionsPage);
});

app.get("/loops", (req, res) => {
  res.send(loopsPage);
});

app.get("/objects", (req, res) => {
  res.send(objectsPage);
});

app.get("/modules", (req, res) => {
  res.send(modulesPage);
});

app.get("/errors", (req, res) => {
  res.send(errorsPage);
});

app.get("/fetches", (req, res) => {
  res.send(fetchesPage);
});

app.get("/servers", (req, res) => {
  res.send(serversPage);
});

app.get("/ssr", (req, res) => {
  res.send(ssrPage);
});

app.get("/commands", (req, res) => {
  res.send(commandsPage);
});

app.get("/setups", (req, res) => {
  res.send(setupsPage);
});

app.get("/rest-apis", (req, res) => {
  res.send(restApisPage);
});

app.get("/dates", (req, res) => {
  res.send(datesPage);
});

app.get("/html", (req, res) => {
  res.send(htmlPage);
});

app.get("/css", (req, res) => {
  res.send(cssPage);
});

app.get("/tools", (req, res) => {
  res.send(toolsPage);
});

const PORT = process.env.PORT ?? 8080;

const server = app.listen(PORT, (error) => {
  if (error) {
    console.log("Error starting the server", error);
  }
  console.log("server is running on port", server.address().port);
});
