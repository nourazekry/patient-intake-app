import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import HeartFailureMain from './pages/heart_failure_tool/HeartFailureMain'
import { Header } from './components/Header';
import Sidebar from './components/Sidebar';
import { Box, Toolbar } from '@mui/material';
import {CssBaseline} from '@mui/material';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import HeartFailureCreate from './pages/heart_failure_tool/HeartFailureCreate';
import HeartFailureEdit from './pages/heart_failure_tool/HeartFailureEdit';
import { HeartFailureDischarge } from './pages/heart_failure_tool/HeartFailureDischarge';
import HeartFailureFollowUp from './pages/heart_failure_tool/HeartFailureFollowUp';
import { ThemeProvider } from '@mui/material';
import theme from "./theme";
const tools = [
  {text: 'Heart Failure', icon: <VolunteerActivismIcon/>, url: "/heart_failure_tool"},
  {text: 'Other', icon: <InboxIcon/>, url: "/other"}
];

function App() {
  return (
    <ThemeProvider theme={theme}>

    <Box sx={{ display: 'flex'}}>
      <CssBaseline />
      <Router>
        <Header toolName={'Heart Failure'}/>
        <Sidebar tools={tools}/>
        <Box
          component="main"
          sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
        >
          <Toolbar />
            <Routes>
                <Route 
                  element={<HomePage tools={tools}/>} 
                  path="/"
                />
                <Route 
                  element={<HomePage tools={tools}/>} 
                  path="/other"
                />
                <Route 
                  element={<HeartFailureMain />} 
                  path="/heart_failure_tool"
                />,
                <Route 
                  element={<HeartFailureCreate/>} 
                  path="/heart_failure_tool/create"
                />,
                <Route 
                  element={<HeartFailureEdit/>} 
                  path="/heart_failure_tool/edit/:id"
                />,
                <Route 
                  element={<HeartFailureDischarge/>} 
                  path="/heart_failure_tool/discharge/:id"
                />,
                <Route 
                  element={<HeartFailureFollowUp/>} 
                  path="/heart_failure_tool/follow-up/:id"
                />,
            </Routes>
        </Box>
      </Router>
    </Box>
        </ThemeProvider>
)
}

export default App;
