/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        doctorsTheme: {
          primary: "#0FCFEC",
          secondary: "#19D3AE",
          accent: "#726d6d",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
      },
      
     
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
