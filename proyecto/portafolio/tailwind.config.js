import plugin from "tailwindcss/plugin"
import { mapKeys, mapValues } from "./src/utils/shortcuts.js"

const spacing = Array.from(Array(201).keys()).reduce((carry, key) => ({ ...carry, [key]: `${key * 0.25}rem` }), {})

const darkTheme = {
  "--primary100": "#f9df26",
  "--primary200": "#f3c20d",
  "--primary300": "#e3a008",
  "--primary400": "#b36e0a",
  "--primary500": "#91550f",

  "--secondary100": "#f7f7f7",
  "--secondary200": "#e6e6e6",
  "--secondary300": "#dfdfdf",
  "--secondary400": "#c8c8c8",
  "--secondary500": "#adadad",

  "--ternary100": "#595e70",
  "--ternary200": "#494d5b",
  "--ternary300": "#3f424d",
  "--ternary400": "#2e3038",
  "--ternary500": "#17181c",

  "--neutral100": "#f2f2f2",
  "--neutral200": "#dcdcdc",
  "--neutral300": "#bdbdbd",
  "--neutral400": "#989898",
  "--neutral500": "#7c7c7c",

  "--laptop100": "#494d5a",
  "--laptop200": "#40444f",
  "--laptop300": "#32353e",
  "--laptop400": "#292b32",
  "--laptop500": "#22242a",

  "--header": "rgba(30, 31, 36, 0.3)"
}

const lightTheme = {
  "--primary100": "#91550f",
  "--primary200": "#b36e0a",
  "--primary300": "#e3a008",
  "--primary400": "#f3c20d",
  "--primary500": "#f9df26",

  "--secondary100": "#070708",
  "--secondary200": "#202127",
  "--secondary300": "#272930",
  "--secondary400": "#32353e",
  "--secondary500": "#444855",

  "--ternary100": "#b3b3b3",
  "--ternary200": "#d9d9d9",
  "--ternary300": "#e0e0e0",
  "--ternary400": "#e6e6e6",
  "--ternary500": "#f7f7f7",

  "--neutral100": "#0d0d0d",
  "--neutral200": "#242424",
  "--neutral300": "#424242",
  "--neutral400": "#666666",
  "--neutral500": "#828282",

  "--laptop100": "#f7f7f7",
  "--laptop200": "#f7f7f7",
  "--laptop300": "#e8e8e8",
  "--laptop400": "#dbdbdb",
  "--laptop500": "#d4d4d4",

  "--header": "rgba(247, 247, 247, 0.3)"
}

const colors = mapKeys(
  mapValues(darkTheme, (_, key) => `var(${key})`),
  (_, key) => key.replace("--", "")
)

const screens = {
  xs: "425px",
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1440px",
  xsAndDown: { max: "639px" },
  smAndDown: { max: "767px" },
  mdAndDown: { max: "1023px" },
  lgAndDown: { max: "1439px" },
  xlAndDown: { max: "1799px" }
}

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: { colors },
    spacing,
    screens
  },
  plugins: [
    plugin(({ addComponents }) => {
      addComponents({
        ":root": lightTheme,
        ".darkTheme": darkTheme
      })
    })
  ]
}
