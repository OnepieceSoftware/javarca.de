// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

import icon from "astro-icon";

export default defineConfig({
    site: "https://javarca.de",
    integrations: [tailwind(), icon()],
});
