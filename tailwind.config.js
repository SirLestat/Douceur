// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#4A8B54",
          "primary-focus": "#2E6B34", // Para hover/active
          "primary-content": "#FFFFFF", // Texto sobre primary
          accent: "#80CBC4",
          neutral: "#5D534B",
          "base-100": "#F8F5F0", // Fondo principal
          info: "#81C784",
          success: "#66BB6A",
          warning: "#FFD54F",
          error: "#E57373",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
