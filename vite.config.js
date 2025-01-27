import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import { viteStaticCopy } from "vite-plugin-static-copy";

export default defineConfig({
  plugins: [
    viteStaticCopy({
      targets: [
        {
          src: "src/multimedia/Funaab_Logo.JPG",
          dest: "assets",
        },
      ],
    }),
    VitePWA({
      registerType: "autoUpdate",
      devOptions: {
        enabled: true,
      },
      manifest: {
        name: "EventTrackPro",
        short_name: "ETP",
        description: "App for collating headcount",
        theme_color: "#ffffff",
        background_color: "#ffffff",
        display: "standalone",
        scope: "/",
        start_url: "/",
        icons: [
          {
            src: "icons/attendance-logo1.jpeg",
            sizes: "192x192",
            type: "image/jpeg",
          },
          {
            src: "icons/attendance-logo1.jpeg",
            sizes: "512x512",
            type: "image/jpeg",
          },
        ],
      },
    }),
  ],
  assetsInclude: ["**/*.JPG"],
});
