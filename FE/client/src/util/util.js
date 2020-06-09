const _ = {
  debounce: (func) => {
    clearTimeout(debounce);

    const debounce = setTimeout(() => {
      func();
    }, 1000);
  },

  pipe: (...functions) => (args) => functions.reduce((arg, nextFn) => nextFn(arg), args),

  createRandomHexColor: () => {
    const randomHexColor = "#" + ((Math.random() * 0xffffff) << 0).toString(16);
    return randomHexColor;
  },

  changeHexToRgb: (hex) => {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16),
        }
      : {
          r: 100,
          g: 120,
          b: 20,
        };
  },

  isDarkColorText: ({ r, g, b }) => {
    const yiq = (r * 299 + g * 587 + b * 114) / 1000;
    return yiq < 150;
  },
};

export default _;
