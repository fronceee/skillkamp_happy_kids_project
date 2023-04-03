/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "main-1": "#282828",
      "main-2": "#FFFFFF",
      "main-3": "#D2461C",
      "main-4": "#AFAFAF",
      "main-5": "#FFCDBE",
      "neutral-1": "#F8F9FA",
      "neutral-2": "#E9ECEF",
      "neutral-3": "#DEE2E6",
      "neutral-4": "#CED4DA",
      "neutral-5": "#ADB5BD",
      "neutral-6": "#6C757D",
      "neutral-7": "#495057",
      "neutral-8": "#343A40",
      "neutral-9": "#212529",
      "neutral-white": "#ffffff",
      "neutral-black": "#000000",
      "status-active": "#CDECDE",
      "status-expire": "#E8E9EB",
      "status-alert": "#E8E9EB",
    },
    extend: {},
  },
  plugins: [],
};
