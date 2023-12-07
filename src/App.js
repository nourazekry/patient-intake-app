import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { HeartFailureTable } from './pages/heart_failure_tool/HeartFailureTable'
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Box, Toolbar } from '@mui/material';
import {CssBaseline} from '@mui/material';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import { HeartFailureCreate } from './pages/heart_failure_tool/HeartFailureCreate';
import { HeartFailureEdit } from './pages/heart_failure_tool/HeartFailureEdit';
import { HeartFailureDischarge } from './pages/heart_failure_tool/HeartFailureDischarge';
import { HeartFailureFollowUp } from './pages/heart_failure_tool/HeartFailureFollowUp';

const tools = [
  {text: 'Heart Failure', icon: <VolunteerActivismIcon/>, url: "/heart_failure_tool"},
  {text: 'Other', icon: <InboxIcon/>, url: "#"}
];
function App() {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Router>
        <Header />
        <Sidebar tools={tools}/>
        <Box
          component="main"
          sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
        >
          <Toolbar />
            <Routes>
                <Route 
                  element={<HomePage/>} 
                  path="/"
                />
                <Route 
                  element={<HeartFailureTable />} 
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
        
)
}

export default App;
