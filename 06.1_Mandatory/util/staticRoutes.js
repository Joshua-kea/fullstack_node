// This file helps me deploy using Vercel

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
export const projectRoot = path.resolve(__dirname, "..");

export function addStaticRoute(
  app,
  dir = path.join(projectRoot, "public"),
  baseUrl = "",
) {
  const files = fs.readdirSync(dir, { withFileTypes: true });

  files.forEach((file) => {
    const fullPath = path.join(dir, file.name);
    const routePath = path.join(baseUrl, file.name).replace(/\\/g, "/");

    if (file.isDirectory()) {
      addStaticRoute(app, fullPath, routePath);
    } else {
      app.get(`/${routePath}`, (req, res) => {
        res.sendFile(fullPath);
      });
    }
  });
}
