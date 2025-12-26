// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  theme: {
    extend: {
      colors: {
        heritage: {
          bg: "hsl(var(--background))",
          primary: "hsl(var(--primary))",
          secondary: "hsl(var(--secondary))",
          accent: "hsl(var(--accent))",
          text: "hsl(var(--foreground))",
        },
      },
    },
  },
};
export default config;
