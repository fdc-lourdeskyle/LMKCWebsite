/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        colors:{
            'custom-brown': 'var(--color-custom-brown)',
            'custom-blush-ivory': 'var(--color-blush-ivory)',
            'custom-creamy-beige': 'var(--color-creamy-beige)',
        },
      fontFamily: {
        sans: ["var(--font-montserrat)", "system-ui", "sans-serif"],
        cormorant: ["var(--font-cormorant)", "serif"],
        raleway: ["var(--font-raleway)", "sans-serif"],
        sansAlt: ["var(--font-montserrat-alt)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
    },
  },
  plugins: [],
};
