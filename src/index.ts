import { fileURLToPath } from "node:url";
import type { AstroIntegration } from "astro";
import { readFileSync } from "node:fs";

const CssDebugIcon = readFileSync(
  fileURLToPath(new URL("./assets/css-debug.svg", import.meta.url)),
  "utf-8",
);

export default function astroCSSDebugger(): AstroIntegration {
  return {
    hooks: {
      "astro:config:setup": ({ addDevToolbarApp, command }) => {
        if (command === "dev") {
          addDevToolbarApp({
            entrypoint: fileURLToPath(new URL("./app", import.meta.url)),
            icon: CssDebugIcon,
            id: "astro-css-debug",
            name: "Astro CSS Debug",
          });
        }
      },
    },
    name: "astro-css-debugger",
  };
}
