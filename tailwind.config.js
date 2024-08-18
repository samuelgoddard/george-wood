module.exports = {
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1600px",
      "3xl": "1920px",
    },
    colors: {
      'off-black': '#181818',
      black: '#303843',
      white: '#FFFFFF',
      grey: '#F1F1F1',
      'grey-dark': '#D6D7D9',
      yellow: '#FDC354',
      red: '#DE3B2D',
      'red-light': '#E14F42',
    },
    letterSpacing: {
      tightest: '-.075em',
      tighter: '-.05em',
      tight: '-.025em',
      normal: '0',
      wide: '.025em',
      wider: '.05em',
      widest: '.1em',
      widest: '.2em',
    },
    fontSize: {
      'xs': '.75rem',
      'sm': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.35rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '2.6rem',
      '6xl': '3rem',
      '7xl': '4rem',
      '8xl': '5rem',
    },
    extend: {
      fontFamily: {
        sans: ['Aileron', 'Arial', 'sans-serif'],
        logo: ['Agne', 'Cambria', 'Times New Roman', 'Times', 'serif'],
        serif: ['Pangram Black', 'Cambria', 'Times New Roman', 'Times', 'serif'],
      },
      opacity: {
        '10': .10,
      },
    }
  },
  corePlugins: {
    container: false
  }
}