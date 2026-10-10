import { fileURLToPath } from "node:url";
import type { AstroIntegration } from "astro";

export default function astroCSSDebugger(): AstroIntegration {
  return {
    hooks: {
      "astro:config:setup": ({ addDevToolbarApp }) => {
        addDevToolbarApp({
          entrypoint: fileURLToPath(new URL("./app.js", import.meta.url)),
          icon: "🚀",
          id: "my-toolbar-app",
          name: "My Toolbar App",
        });
      },
    },
    name: "astro-css-debugger",
  };
}
