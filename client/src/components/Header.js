import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Toolbar } from '@mui/material';
const drawerWidth = 240;

export const Header = () => {
    return (
        <AppBar
        position="fixed"
        sx={{ 
          backgroundColor: 'primary.main',
          width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div" sx={{ fontWeight: 'bold' }}>
            ICC Patient Data Manager
          </Typography>
        </Toolbar>
      </AppBar>
    
    );
}