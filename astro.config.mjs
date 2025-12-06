// @ts-check

import starlight from "@astrojs/starlight";
import { defineConfig } from "astro/config";
import mermaid from "astro-mermaid";

// https://astro.build/config
export default defineConfig({
  site: "https://docs.winnonah.xyz",
  integrations: [
    mermaid({
      autoTheme: true,
    }),
    starlight({
      title: "Driftwood Docs",
      logo: {
        light: "./src/assets/logo-black.svg",
        dark: "./src/assets/logo-white.svg",
      },
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/DriftwoodEval/docs",
        },
      ],
      pagination: false,
      sidebar: [
        { label: "Home", link: "/" },
        {
          label: "Programs",
          autogenerate: { directory: "programs" },
        },
        {
          label: "Documents",
          autogenerate: { directory: "documents" },
        },
        { label: "Glossary", link: "/glossary" },
      ],
      lastUpdated: true,
      customCss: ["@fontsource-variable/inter", "./src/styles/custom.css"],
      editLink: {
        baseUrl: "https://github.com/DriftwoodEval/docs/edit/main/",
      },
    }),
  ],
});
