/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#030712",
        surface: "#020617",
        accent: {
          500: "#22d3ee",
          600: "#06b6d4"
        }
      },
      fontFamily: {
        sans: ["system-ui", "SF Pro Text", "Inter", "ui-sans-serif", "sans-serif"]
      },
      boxShadow: {
        "soft-glass": "0 18px 60px rgba(15, 23, 42, 0.9)"
      },
      borderRadius: {
        xl: "1.1rem"
      },
      backgroundImage: {
        "grid-slate":
          "radial-gradient(circle at 1px 1px, rgba(148,163,184,0.09) 1px, transparent 0)"
      }
    }
  },
  plugins: []
};
