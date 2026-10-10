import { copyFile, mkdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";

const assetsDirectory = new URL("../dist/assets/", import.meta.url);

await mkdir(fileURLToPath(assetsDirectory), { recursive: true });
await copyFile(
  new URL("../src/assets/css-debug.svg", import.meta.url),
  new URL("css-debug.svg", assetsDirectory),
);
