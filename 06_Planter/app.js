import express from "express";
const app = express();

app.use(express.static("public"));

import pagesRouter from './routers/pagesRouter.js';

import plantsRouter from './routers/plantsRouter.js';

app.use(pagesRouter);

app.use(plantsRouter);

const PORT = process.env.PORT ?? 8080;

const server = app.listen(PORT, (error) => {
  if (error) {
    console.log("Error starting the server", error);
  }
  console.log("Server is running on port", server.address().port);
});
