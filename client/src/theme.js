import { createTheme } from '@mui/material/styles';
/**  ICC colors 
 * light blue: #0eb4e8
 * dark blue: #2b5ca2
 * red: #ce1334
 * beige: #dfcab4
 * */
const theme = createTheme({
  palette: {
    primary: {
        // ICC blue
      main: '#2b5ca2',
      light: '#0eb4e8',
    },
    secondary: {
        // ICC red
      main: '#ce1334', 
      light: '#de4256'
    },
    info: {
        // ICC beige/brown
        main: '#dfcab4',
        light: '#e4d59d',
    },
  },
  typography: {
  },
});

export default theme;
