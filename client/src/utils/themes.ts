import { createTheme } from '@mui/material/styles';
import { grey } from '@mui/material/colors';

export const mainYellow = '#e6e619';
export const mainDarkGrey = grey[900];
export const mainWhite = grey.A100;
export const mainBlack = '#000000';

export const yellowTheme = createTheme({
  palette: {
    primary: {
      main: mainYellow,
      light: mainWhite,
      dark: mainBlack,
    },
    secondary: {
      main: mainDarkGrey,
    },
  },
});
