import fs from "fs";
import path from "path";
import { projectRoot } from "../util/staticRoutes.js";

export function constructPage(page, options = {}) {
  const header = readPage("public/components/header/header.html");
  const nav = readPage("public/components/navigation/nav.html");
  const footer = readPage("public/components/footer/footer.html");

  const activeNav = nav.replace(
    `href="/${options.activeNav}"`,
    `href="/${options.activeNav}" class="active"`,
  );

  return (
    header
      .replace("{{CSS_LINKS}}", options.cssLink || "")
      .replace("{{JS_LINKS}}", options.jsLink || "")
      .replace("{{SCRIPT}}", options.script || "")
      .replace("{{TAB_TITLE}}", options.tabTitle || "Full-Stack") +
    activeNav +
    page +
    footer
  );
}

export function readPage(pagePath) {
  return fs.readFileSync(path.join(projectRoot, pagePath), "utf-8");
}
