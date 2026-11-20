import express from "express";
import cors from 'cors';
import citiesRouter from "./routers/citiesRouter.js";

const app = express();
app.use(cors({
  origin: "http://localhost:5173"
}));

// app.use((req, res, next) => {
//     res.header("Access-Control-Allow-Origin", req.headers.origin || "*");
//     res.header("Access-Control-Allow-Credentials", "true");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// });

app.use(citiesRouter);

const PORT = 8080;

app.listen(PORT, (error) => {
  if (error) {
    console.log(error);
    return;
  }

  console.log("server is running on port", PORT);
});
