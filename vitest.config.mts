import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    name: "react",
    environment: "jsdom",
    globals: true,
    testTimeout:
      5 /* minutes */ *
      60 /* seconds / minute */ *
      1000 /* milliseconds / second */,
    include: ["packages/**/*.test.[jt]s?(x)"],
    coverage: {
      provider: "istanbul",
      reportOnFailure: true,
      reporter: ["text", "text-summary", "html"],
      include: ["packages/**/*.{js,jsx,ts,tsx}"],
      thresholds: {
        statements: 75,
        lines: 75,
      },
    },
  },
});
