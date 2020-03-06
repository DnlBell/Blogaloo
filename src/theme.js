import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
      primary: {
        light: '#48a999',
        main: '#00796b',
        dark: '#004c40',
        contrastText: '#ffffff',
      },
      secondary: {
        light: '#819ca9',
        main: '#546e7a',
        dark: '#29434e',
        contrastText: '#ffffff',
      },
  },
  status: {
    danger: 'orange',
  }
});

export default theme;