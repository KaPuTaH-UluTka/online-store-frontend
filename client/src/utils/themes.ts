import { createTheme } from '@mui/material/styles';
import { grey, yellow } from '@mui/material/colors';

export const mainYellow = yellow[500];
export const mainDarkGrey = grey[900];
export const mainWhite = grey.A100;

export const yellowTheme = createTheme({
  palette: {
    primary: {
      main: mainYellow,
      light: mainWhite,
    },
    secondary: {
      main: mainDarkGrey,
    },
  },
});
