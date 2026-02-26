import { defineConfig } from "vite-plus";

export default defineConfig({
  test: {
    name: "react",
    environment: "jsdom",
    globals: true,
    testTimeout:
      5 /* minutes */ *
      60 /* seconds / minute */ *
      1000 /* milliseconds / second */,
    setupFiles: ["./testSetup.js"],
    include: ["@vitest/**/*.test.[jt]s?(x)"],
    coverage: {
      provider: "istanbul",
      reportOnFailure: true,
      reporter: ["text", "text-summary", "html"],
      include: ["@vitest/**/*.{js,jsx,ts,tsx}"],
      thresholds: {
        statements: 75,
        lines: 75,
      },
    },
  },
});
