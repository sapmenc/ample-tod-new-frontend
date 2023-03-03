/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  mode: "jit",
  darkmode: false,
  theme: {
    extend: {
      screens: {
        "3xl": "2000px",
      },
      dropShadow: {
        "3xl": "0 35px 35px rgba(0, 0, 0, 0.25)",
        "4xl": [
          "0 35px 35px rgba(0, 0, 0, 0.25)",
          "0 45px 65px rgba(0, 0, 0, 0.15)",
        ],
      },
      colors: {
        primary: "#eb4a6a",
        dark_primary: "#620203",
        highlight_primary: "#b84042",
        connect_btn: {
          100: "#e02128",
          200: "#cc181e",
        },
        connect_link: "#e1b76d",
        lower_footer_end_line: "#81913f",
        new_primary: "#eb4a6a",
        new_secondary: "#41436a",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
