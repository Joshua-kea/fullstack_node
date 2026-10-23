// import dotenv from 'dotenv';
// dotenv.config();
import 'dotenv/config';

console.log(process.env.SECRET_VALUE)

import express from "express";
const app = express();

app.use(express.static("public"));

app.use(express.urlencoded());

import pagesRouter from "./routers/pagesRouter.js";
import plantsRouter from "./routers/plantsRouter.js";
import contactRouter from "./routers/contactRouter.js";

app.use(pagesRouter);
app.use(plantsRouter);
app.use(contactRouter);

const PORT = process.env.PORT ?? 8080;

const server = app.listen(PORT, (error) => {
  if (error) {
    console.log("Error starting the server", error);
  }
  console.log("Server is running on port", server.address().port);
});
