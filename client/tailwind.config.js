// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      display: ['responsive', 'group-hover', 'group-focus'],
    },
  },
  plugins: [],
};
