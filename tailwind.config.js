// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/**/*.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          orange: "#FF6A00",
          gold: "#FFB400",
          black: "#1A1A1A",
          950: "#0A0A0A"
        },
        secondary: {
          gray: "#333333",
          light: "#E0E0E0",
          800: "#2D2D2D"
        }
      },
      backdropBlur: {
        xs: "4px",
        sm: "8px",
        md: "12px",
        lg: "16px",
        xl: "24px",
        "2xl": "40px"
      },
      fontFamily: {
        sans: ["Open Sans", "sans-serif"],
        heading: ["Poppins", "sans-serif"]
      },
      boxShadow: {
        glow: "0 0 20px rgba(255, 106, 0, 0.3)",
        "glow-lg": "0 0 30px rgba(255, 106, 0, 0.5)",
        "inner-glow": "inset 0 0 12px rgba(255, 106, 0, 0.2)"
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in",
        "slide-up": "slideUp 0.5s ease-out",
        bounce: "bounce 1s infinite",
        glow: "glow 2s ease-in-out infinite",
        "spin-slow": "spin 3s linear infinite"
      },
      keyframes: {
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" }
        },
        slideUp: {
          from: { transform: "translateY(20px)", opacity: "0" },
          to: { transform: "translateY(0)", opacity: "1" }
        },
        glow: {
          from: { boxShadow: "0 0 5px var(--tw-shadow-color)" },
          to: { boxShadow: "0 0 20px var(--tw-shadow-color)" }
        }
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(var(--tw-gradient-stops))",
        "grid-pattern": "url('/grid.svg')"
      },
      gradientColorStops: {
        orange: "#FF6A00",
        gold: "#FFB400"
      },
      transitionProperty: {
        height: "height",
        spacing: "margin, padding",
        filter: "filter, backdrop-filter"
      },
      transitionDuration: {
        250: "250ms"
      },
      transitionTimingFunction: {
        "in-expo": "cubic-bezier(0.95, 0.05, 0.795, 0.035)",
        "out-expo": "cubic-bezier(0.19, 1, 0.22, 1)"
      }
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/container-queries")
  ],
}
