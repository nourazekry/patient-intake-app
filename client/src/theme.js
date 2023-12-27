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
      dark: '#2b5ca2',

    },
    secondary: {
        // ICC red
      main: '#ce1334', 
      light: '#de4256',
      dark: '#ce1334', 

    },
    info: {
        // ICC beige/brown
        main: '#d8c3b5',
        light: 'rgba(247, 240, 233, 0.4)',
        dark: '#d8c3b5',

    },
  },
  typography: {
  },
});

export default theme;
