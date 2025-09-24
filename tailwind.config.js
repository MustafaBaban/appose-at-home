module.exports = {
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      display: ["responsive"],
    },
  },
  corePlugins: {},
  plugins: [
    function ({ addVariant }) {
      addVariant("max-lg", "@media (max-width: 1023px)");
      addVariant("max-md", "@media (max-width: 767px)");
      addVariant("max-sm", "@media (max-width: 639px)");
      addVariant("max-xs", "@media (max-width: 479px)");
    },
  ],
};
