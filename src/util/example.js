import fs from "node:fs/promises";

import { micromark } from "micromark";
import { gfm, gfmHtml } from "micromark-extension-gfm";

const output = micromark(await fs.readFile("example.md"), {
  allowDangerousHtml: true,
  extensions: [gfm()],
  htmlExtensions: [gfmHtml()],
});

// console.log(output)
fs.writeFile("../../public/html/example.html", output);
