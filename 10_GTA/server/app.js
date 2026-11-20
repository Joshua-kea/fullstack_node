import express from "express";
import citiesRouter from "./routers/citiesRouter.js";

const app = express();

app.use(citiesRouter);

const PORT = 8080;

app.listen(PORT, (error) => {
  if (error) {
    console.log(error);
    return;
  }

  console.log("server is running on port", PORT);
});
