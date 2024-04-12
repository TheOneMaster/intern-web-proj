/** @type {import('tailwindcss').Config} */
export default {
  content: ["**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        display: 'Inter',
      },
      textColor: {
        heading: "#1E2022",
        subtitle: "#989090"
      }
    },
  },
  plugins: [],
}
