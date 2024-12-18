import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx,mdx}",
    "./src/components/**/*.{js,jsx,ts,tsx,mdx}",
    "./src/app/**/*.{js,jsx,ts,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        customPurple: "#d9d2ec",
        customDark: "#31274e",
        customLPink: "#f3e7f2",
        customPink: "#aa59a1",
        customDPink: "#50264c",
        customRed: "#f4e9e9",
        customDRed: "#b95b60"
      },
    },
  },
  plugins: [],
} satisfies Config;
