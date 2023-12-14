/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        openSansLight: ["OpenSansLight", "sans-serif"],
        openSansLightItalic: ["OpenSansLightItalic", "sans-serif"],
        laBelleAurore: ["LaBelleAurore", "sans-serif"],
        jacquesFrancois: ["JacquesFrancois", "sans-serif"],
        changaOne: ["ChangaOne", "sans-serif"],
        changaOneItalic: ["ChangaOneItalic", "sans-serif"],
      }
    },
  },
  plugins: [],
}

