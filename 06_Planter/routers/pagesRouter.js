import { frontpagePage, aboutPage, contactPage } from "../templatingEngine/pages.js";

import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.send(frontpagePage);
});

router.get("/about", (req, res) => {
  res.send(aboutPage);
});

router.get('/contact', (req, res) => {
  res.send(contactPage);
});

export default router;
