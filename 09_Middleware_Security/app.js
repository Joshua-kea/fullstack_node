import express from "express";
import helmet from "helmet";
import middlewareRouter from "./routers/middlewareRouter.js";
import authRouter from "./routers/authRouter.js";

const app = express();

app.use(helmet());
app.use(middlewareRouter);
app.use(authRouter);

app.get("/{*splat}", (req, res) => {
  res.send(`
    <h1>404</h1>
    <h3>Not found</h3>`);
});

app.all("/{*splat}", (req, res) => {
  res.status(404).send({ data: "The route doesn't exist" });
});

const PORT = process.env.PORT ?? 8080;

app.listen(PORT, (error) => {
  console.log("Server is running on port", PORT);
});
