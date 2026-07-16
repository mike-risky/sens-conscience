import base44 from "@base44/vite-plugin"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [
    base44({
      // Keep compatibility with Base44-generated imports.
      legacySDKImports: process.env.BASE44_LEGACY_SDK_IMPORTS === "true",

      // Disable Base44 editor/runtime helpers in the external production build.
      hmrNotifier: false,
      navigationNotifier: false,
      analyticsTracker: false,
      visualEditAgent: false,
    }),

    react(),
  ],

  preview: {
    host: "0.0.0.0",
    allowedHosts: ["conscience.smafe.ch"],
  },
})