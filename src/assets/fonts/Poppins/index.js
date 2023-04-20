const FONT_WEIGHTS = {
  THIN: 'Thin',
  EXTRA_LIGHT: 'ExtraLight',
  LIGHT: 'Light',
  REGULAR: 'Regular',
  MEDIUM: 'Medium',
  SEMI_BOLD: 'SemiBold',
  BOLD: 'Bold',
  EXTRA_BOLD: 'ExtraBold',
  BLACK: 'Black',
};

const POPPINS = Object.fromEntries(
  Object.entries(FONT_WEIGHTS).map(([key, value]) => [
    `Poppins-${value}`,
    `Poppins-${value}`,
  ]),
);

export default POPPINS;
