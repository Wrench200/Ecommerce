/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}", "./node_modules/flowbite/**/*.js"],
  theme: {
    colors: {
      transparent: "transparent",
      silver: "#495057",
      lemonyellow: "#fff44f",
      pastelyellow: "#FDFD96",
      burntorange: "#CC5500",
      coral: "#FD8535",
      blue0: "#1d3557",
      blue1: "#03045E",
      blue2: "#023E8A",
      blue3: "#0077B6",
      blue4: "#0096C7",
      blue5: "#00B4D8",
      blue6: "#48CAE4",
      blue7: "#90E0EF",
      blue8: "#ADE8F4",
      blue9: "#CAF0F8",
      white: "#FFFFFF",
      darktransparent: "#ffffff0d",
      pink: "#f94b4be5",
      black: "#000000",
    },
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
};

