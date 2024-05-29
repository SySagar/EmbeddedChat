const RoseEmber = {
  breakpoints: {
    xs: 0,
    sm: 600,
    md: 900,
    lg: 1200,
    xl: 1536,
  },
  components: {},

  schemes: {
    radius: '1.5rem',
    common: {
      black: 'hsl(0, 100%, 0%)',
      white: 'hsl(0, 100%, 100%)',
    },
    light: {
      background: 'hsl(343.4, 63%, 95%)',
      foreground: 'hsl(343.4, 5%, 10%)',
      card: 'hsl(343.4, 50%, 90%)',
      cardForeground: 'hsl(343.4, 5%, 15%)',
      popover: 'hsl(343.4, 63%, 95%)',
      popoverForeground: 'hsl(343.4, 95%, 10%)',
      primary: 'hsl(343.4, 79.7%, 34.7%)',
      primaryForeground: 'hsl(0, 0%, 100%)',
      secondary: 'hsl(343.4, 30%, 78%)',
      secondaryForeground: 'hsl(0, 0%, 0%)',
      muted: 'hsl(305.4, 30%, 85%)',
      mutedForeground: 'hsl(343.4, 5%, 40%)',
      accent: 'hsl(305.4, 30%, 80%)',
      accentForeground: 'hsl(343.4, 5%, 15%)',
      destructive: 'hsl(0, 63%, 50%)',
      destructiveForeground: 'hsl(343.4, 5%, 90%)',
      border: 'hsl(343.4, 30%, 78%)',
      input: 'hsl(343.4, 30%, 50%)',
      ring: 'hsl(343.4, 79.7%, 34.7%)',
      warning: 'hsl(38, 92%, 50%)',
      warningForeground: 'hsl(48, 96%, 89%)',
      success: 'hsl(91, 60.4%, 81.2%)',
      successForeground: 'hsl(90, 61.1%, 14.1%)',
      info: 'hsl(214, 76.4%, 50.2%)',
      infoForeground: 'hsl(214.3, 77.8%, 92.9%)',
    },
    dark: {
      background: 'hsl(343.4, 50%, 10%)',
      foreground: 'hsl(343.4, 5%, 90%)',
      card: 'hsl(343.4, 50%, 10%)',
      cardForeground: 'hsl(343.4, 5%, 90%)',
      popover: 'hsl(343.4, 50%, 5%)',
      popoverForeground: 'hsl(343.4, 5%, 90%)',
      primary: 'hsl(343.4, 79.7%, 34.7%)',
      primaryForeground: 'hsl(0, 0%, 100%)',
      secondary: 'hsl(343.4, 30%, 20%)',
      secondaryForeground: 'hsl(0, 0%, 100%)',
      muted: 'hsl(305.4, 30%, 25%)',
      mutedForeground: 'hsl(343.4, 5%, 65%)',
      accent: 'hsl(305.4, 30%, 25%)',
      accentForeground: 'hsl(343.4, 5%, 90%)',
      destructive: 'hsl(0, 63%, 50%)',
      destructiveForeground: 'hsl(343.4, 5%, 90%)',
      border: 'hsl(343.4, 30%, 50%)',
      input: 'hsl(343.4, 30%, 50%)',
      ring: 'hsl(343.4, 79.7%, 34.7%)',
      warning: 'hsl(48, 96%, 89%)',
      warningForeground: 'hsl(38, 92%, 50%)',
      success: 'hsl(90, 61.1%, 14.1%)',
      successForeground: 'hsl(90, 60%, 90.2%)',
      info: 'hsl(214.3, 77.8%, 92.9%)',
      infoForeground: 'hsl(214.4, 75.8%, 19.4%)',
    },
  },

  typography: {
    default: {
      fontFamily: "'Times New Roman', serif",
      fontSize: 14,
      fontWeightLight: 300,
      fontWeightRegular: 400,
      fontWeightMedium: 500,
      fontWeightBold: 700,
    },
    h1: {
      fontSize: '2.625rem',
      fontWeight: 800,
    },
    h2: {
      fontSize: '1.875rem',
      fontWeight: 800,
    },
    h3: {
      fontSize: '1.5rem',
      fontWeight: 400,
    },
    h4: {
      fontSize: '1.25rem',
      fontWeight: 400,
    },
    h5: {
      fontSize: '1rem',
      fontWeight: 400,
    },
    h6: {
      fontSize: '0.875rem',
      fontWeight: 500,
    },
  },
  shadows: [
    'none',
    'rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px',
    'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
  ],
  zIndex: {
    divider: 1000,
    body: 1100,
    general: 1200,
    menu: 1300,
    tooltip: 1400,
    modal: 1500,
    toastbar: 1600,
  },
};
export default RoseEmber;
