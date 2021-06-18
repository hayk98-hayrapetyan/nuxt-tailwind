const colors = require('tailwindcss/colors')

module.exports = {
  theme: {
    screens: {
      xxxs: '325px',
      xxs: '375px',
      xs: '450px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1590px',
      pc: '1400',
      custom: '978px'
    },
    fontFamily: {
      lato: ['Lato'],
      GothamProReg: ['Gotham-Pro-Reg'],
      GothamProBold: ['Gotham-Pro-Bold'],
      OpenSans: ['Open Sans']
    },
    colors: {
      mainBlue: '#41587A',
      mainLightBlue: '#2F8DE4',
      mainDarkBlue: '#798FAE',
      darkBlue: '#152844',
      BoxBg: '#2F8DE4',
      mainOrange: '#FEB000',

      transparent: 'transparent',
      current: 'currentColor',

      black: colors.black,
      white: colors.white,
      gray: colors.coolGray,
      red: colors.red,
      yellow: colors.amber,
      green: colors.emerald,
      blue: colors.blue,
      indigo: colors.indigo,
      purple: colors.violet,
      pink: colors.pink,
    },
    fontSize: {
      xs: ['0.75rem', { lineHeight: '1rem' }],
      sm: ['0.875rem', { lineHeight: '1.25rem' }],
      base: ['1rem', { lineHeight: '1.5rem' }],
      lg: ['1.125rem', { lineHeight: '1.75rem' }],
      xl: ['1.25rem', { lineHeight: '1.75rem' }],
      '2xl': ['1.5rem', { lineHeight: '2rem' }],
      '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
      '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
      '5xl': ['3rem', { lineHeight: '1' }],
      '6xl': ['3.75rem', { lineHeight: '1' }],
      '7xl': ['4.5rem', { lineHeight: '1' }],
      '8xl': ['6rem', { lineHeight: '1' }],
      '9xl': ['8rem', { lineHeight: '1' }],

      '12': '12px',
      '13': '13px',
      '14': '14px',
      '18': '18px',
      '20': '20px',
      '22': '22px',
      '24': '24px',
      '25': '25px',
      '28': '28px',
      '30': '30px',
      '38': '38px',
      '48': '48px',
    },
    borderRadius: {
      none: '0px',
      sm: '0.125rem',
      DEFAULT: '0.25rem',
      md: '0.375rem',
      lg: '0.5rem',
      xl: '0.75rem',
      '2xl': '1rem',
      '3xl': '1.5rem',
      full: '9999px',
      '5': '5px',
      '10': '10px',
    },
    boxShadow: {
      mainShadow: '0px 10px 30px rgba(254, 176, 0, 0.19)',
      mainBox: '0px 30px 50px rgba(231, 236, 243, 0.6)'
    },
  }
}
