const _ = {
  debounce: (func) => {
    clearTimeout(debounce);

    const debounce = setTimeout(() => {
      func();
    }, 1000);
  },

  pipe: (...functions) => (args) => functions.reduce((arg, nextFn) => nextFn(arg), args),

  createRandomRGBColor: () => {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);

    return { r, g, b };
  },

  isDarkColor: (RGBColors) => {
    const { r, g, b } = RGBColors;
    const yiq = (r * 299 + g * 587 + b * 114) / 1000;
    const textColor = yiq < 150 ? "#fff" : "#000";

    return { r, g, b, textColor };
  },

  //   createRandomHexColor: () => {
  //     const randomHexColor = "#" + ((Math.random() * 0xffffff) << 0).toString(16);
  //     return randomHexColor;
  //   },

  //   changeHexToRgb_1: (hex) => {
  //     var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  //     return result
  //       ? {
  //           r: parseInt(result[1], 16),
  //           g: parseInt(result[2], 16),
  //           b: parseInt(result[3], 16),
  //           hex: hex,
  //         }
  //       : {
  //           r: 100,
  //           g: 120,
  //           b: 20,
  //           hex,
  //         };
  //   },

  //   changeHexToRgb_2: (hex) => {
  //     // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
  //     var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  //     hex = hex.replace(shorthandRegex, function (m, r, g, b) {
  //       return r + r + g + g + b + b;
  //     });

  //     var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  //     return result
  //       ? {
  //           r: parseInt(result[1], 16),
  //           g: parseInt(result[2], 16),
  //           b: parseInt(result[3], 16),
  //           hex,
  //         }
  //       : null;
  //   },

  //   isDarkColor_1: (colors) => {
  //     const { r, g, b, hex } = colors;
  //     const yiq = (r * 299 + g * 587 + b * 114) / 1000;

  //     return { isDark: yiq < 150, hex };
  //   },
};

export default _;

// #000 black
// #fff white
