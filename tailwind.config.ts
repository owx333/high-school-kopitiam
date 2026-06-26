import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#F7F1E3",
        paper: "#FDF8EF",
        chalk: "#284C35",
        coffee: "#6D4C41",
        sunlight: "#E9B949",
        ink: "#2B2B2B",
        schoolblue: "#6B8FBF"
      },
      borderRadius: {
        "2xl": "1rem"
      },
      boxShadow: {
        soft: "0 20px 50px rgba(43, 43, 43, 0.12)",
        paper: "0 14px 35px rgba(109, 76, 65, 0.12)"
      },
      fontFamily: {
        serifZh: ["var(--font-serif-zh)", "serif"],
        sansZh: ["var(--font-sans-zh)", "sans-serif"],
        poppins: ["var(--font-poppins)", "sans-serif"]
      },
      backgroundImage: {
        "paper-lines":
          "linear-gradient(#0000 31px, rgba(107,143,191,0.18) 32px), linear-gradient(90deg, rgba(233,185,73,0.18) 1px, #0000 1px)",
        "warm-sun":
          "linear-gradient(135deg, rgba(233,185,73,0.38), rgba(253,248,239,0.58) 42%, rgba(40,76,53,0.1))"
      },
      keyframes: {
        planeFly: {
          "0%": { transform: "translate3d(-14vw, 18px, 0) rotate(-8deg)", opacity: "0" },
          "8%": { opacity: "1" },
          "58%": { transform: "translate3d(72vw, -32px, 0) rotate(8deg)", opacity: "1" },
          "70%, 100%": { transform: "translate3d(105vw, -50px, 0) rotate(10deg)", opacity: "0" }
        },
        swing: {
          "0%, 100%": { transform: "rotate(-1.4deg) translateY(0)" },
          "50%": { transform: "rotate(1.4deg) translateY(-7px)" }
        },
        bicycleRide: {
          "0%": { transform: "translateX(-18vw)" },
          "100%": { transform: "translateX(82vw)" }
        },
        floatSlow: {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-12px) rotate(3deg)" }
        }
      },
      animation: {
        "plane-fly": "planeFly 8s ease-in-out 0.4s infinite",
        swing: "swing 5.5s ease-in-out infinite",
        "float-slow": "floatSlow 6s ease-in-out infinite"
      }
    }
  },
  plugins: []
};

export default config;
