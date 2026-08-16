import { defineConfig } from "@solidjs/start/config";

export default defineConfig({
  server: {
    baseURL: process.env.BASE_PATH,
    preset: "static",
    prerender: {
      crawlLinks: true,
      failOnError: true,
      // Not linked from anywhere on purpose (internal reference only), so
      // the crawler needs to be told about it explicitly.
      routes: ["/", "/styleguide"],
    },
  },
});
