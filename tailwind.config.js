/** @type {import('tailwindcss').Config} */
import plugin from "tailwindcss/plugin";

export const content = [
  "./src/pages/**/*.{js,ts,jsx,tsx}",
  "./src/components/**/*.{js,ts,jsx,tsx}",
  "./src/app/**/*.{js,ts,jsx,tsx}",
];
export const theme = {
  extend: {
    colors: {
      primary: "#34A7D6",
      secondary: "#171614",
      accent: "#404040",
      danger: "#F72C25",
      text: "#FFFBFC",
    },
    textShadow: {
      sm: "0 1px 2px var(--tw-shadow-color)",
      DEFAULT: "0 2px 4px var(--tw-shadow-color)",
      lg: "0 8px 16px var(--tw-shadow-color)",
    },
  },
};
export const plugins = [
  plugin(function ({ matchUtilities, theme }) {
    matchUtilities(
      {
        "text-shadow": (value) => ({
          textShadow: value,
        }),
      },
      { values: theme("textShadow") }
    );
  }),
];
