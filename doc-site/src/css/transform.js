// transform
export const transform = {
  '--transform-translate-x': 0,
  '--transform-translate-y': 0,
  '--transform-rotate': 0,
  '--transform-skew-x': 0,
  '--transform-skew-y': 0,
  '--transform-scale-x': 1,
  '--transform-scale-y': 1,
  transform: `
    translateX(var(--transform-translate-x))
    translateY(var(--transform-translate-y)) rotate(var(--transform-rotate))
    skewX(var(--transform-skew-x)) skewY(var(--transform-skew-y))
    scaleX(var(--transform-scale-x)) scaleY(var(--transform-scale-y));
  `,
};

// translate
export const translate = {x: {_1_2: {'--transform-translate-x': '50%'}}};
