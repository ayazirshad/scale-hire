import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: "#999",
        "gray-2": "#e4e4e7",
        "gray-3": "#f8f8f9",
        "gray-4": "#f1f1f1",
        "border-color": "#e1e4e8",
        "light-gray": "#b0b7c3",
        "hit-gray": "#98a6ad",
        white: "#fff",
        black: "#000",
        dark: "#000000",
        "light-blue": "#dfedf2",
        "sky-blue": "#04b4ff",
        purple: "#36469a",
        "purple-dark": "#685cb6",
        primary: "#000",
        "light-primary": "#d4f7eb",
        secondary: "#6180f2",
        "secondary-50": "#4e6199",
        light: "#eff2f8",
        "light-secondary": "#f6f8fa",
        success: "#53b13e",
        danger: "#f44336",
        "danger-50": "#f44336",
        "danger-dark": "#b10000",
        "danger-light": "#f44336",
        info: "#6180f2",
        warning: "#f9c055",
        yellow: "#fecf31",
        green: "#000",
        "green-50": "#000",
        "dark-green": "#000",
        pink: "#f7f1ff",
        blue: "#3dcdff",
        zinc: "#000",
        cancel: "#eaeaeb",
        "text-color-gray": "#6f7c97",
        "primary-text": "#24383f",
        "secondary-text": "#160f46",
      },
      fontSize: {
        xs: "0.75rem", // 12px
        sm: "0.875rem", // 14px
        base: "0.875rem", // 14px again
        lg: "1.125rem", // 18px
        xl: "1.25rem", // 20px
        "2xl": "1.5rem", // 24px
        h1: "3.125rem", // 50px
        h2: "1.5625rem", // 30px
        h3: "1.25rem", // 20px
        h4: "1.125rem", // 18px
        h5: "1.0625rem", // 17px
        h6: "0.9375rem", // 15px
      },
      fontFamily: {
        sans: ["Montserrat", ...fontFamily.sans],
        headings: ["Montserrat", ...fontFamily.sans],
      },
      backgroundImage: {
        "primary-gradient":
          "linear-gradient(178.19deg, #feeffe 20%, #34dba1 100%)",
      },
      zIndex: {
        0: "0",
        10: "10",
        20: "20",
        30: "30",
        35: "35",
        40: "40",
        45: "45",
        50: "50",
        55: "55",
        60: "60",
        90: "90",
        100: "100",
      },
      screens: {
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        "2xl": "1440px",
      },
      spacing: {
        gutter: "20px",
        form: "0.75rem 0.9375rem",
      },
      transitionDuration: {
        DEFAULT: "300ms",
      },
    },
  },
  plugins: [],
};
