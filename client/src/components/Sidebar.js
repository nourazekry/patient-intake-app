import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import { Link, useParams, useLocation } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import { useState, useEffect } from 'react';
const drawerWidth = 240;

const Sidebar = ({tools}) => {
  const [selectedTool, setSelectedTool] = useState('');
  const { tool: toolParam } = useParams();
  const location = useLocation();

  useEffect(() => {
    const currToolPath = location.pathname.split('/')[1];
    console.log(currToolPath);
    setSelectedTool('/' + currToolPath);
  },[location]);

  return (    
    <Drawer
    sx={{
      width: drawerWidth,
      flexShrink: 0,
      '& .MuiDrawer-paper': {
        width: drawerWidth,
        boxSizing: 'border-box',
        borderColor: 'info.main'
      },
    }}
    variant="permanent"
    anchor="left"
  >
    <List>
        <ListItem 
          key="Home" 
          disablePadding
          sx={{
            backgroundColor: "/" == selectedTool ? 'secondary.main' : '',
            color: "/" == selectedTool ? 'white' : ''  
          }}
        >
          <ListItemButton
            component={Link}
            to="/"
          >
            <ListItemIcon
            sx={{
              color: "/" === selectedTool ? 'white' : ''   
            }}
            >
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItemButton>
        </ListItem>
    </List>
    <Divider sx={{borderColor: 'info.main'}}/>
    <List>
      {tools.map((tool, index) => (
        <ListItem 
          key={tool.text} 
          sx={{
            backgroundColor: tool.url == selectedTool ? 'secondary.main' : '',
            color: tool.url == selectedTool ? 'white' : ''  
          }}
          disablePadding
        >
          <ListItemButton
            component={Link}
            to={tool.url}
          >
            <ListItemIcon
            sx={{
              color: tool.url === selectedTool ? 'white' : ''   
            }}
            >
              {tool.icon}
            </ListItemIcon>
            <ListItemText primary={tool.text} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
    <Divider sx={{borderColor: 'info.main'}} />
    <List>
    </List>
  </Drawer>  
  );
}
export default Sidebar;