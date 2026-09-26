import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#181C22",
        paper: "#F7F8FA",
        navy: {
          DEFAULT: "#12243E",
          light: "#1B3A63",
        },
        slate: {
          DEFAULT: "#2F5EA8",
        },
        amber: "#E8A33D",
        line: "#DCE1E8",
      },
      fontFamily: {
        sans: ["var(--font-plex-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-plex-mono)", "monospace"],
      },
      maxWidth: {
        prose: "68ch",
      },
    },
  },
  plugins: [],
};

export default config;
