import { Router } from "express";

const router = Router();

function isAdmin(req, res, next) {
  const isAdmin = true;
  if (isAdmin) {
    next();
  } else {
    res.status(403).send();
  }
}

router.get("/dashboard", isAdmin, (req, res) => {
  res.send({ data: "Secret dashboard" });
});

export default router;
