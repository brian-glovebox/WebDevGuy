import { createTheme, responsiveFontSizes } from '@material-ui/core';
import { light, dark } from './palette';

const getTheme = (mode: any) => responsiveFontSizes(
  createTheme({
    palette: mode === 'light' ? light : dark,
    typography: {
      fontFamily: 'Rajdhani',
    },
    zIndex: {
      appBar: 1200,
      drawer: 1100,
    },
  })
);

export default getTheme;
