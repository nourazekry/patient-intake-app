import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { HeartFailureTable } from './pages/heart_failure_tool/HeartFailureTable'


function App() {
  return (
    <Router>
        <Routes>
            <Route element={<HomePage/>} path="/"/>
            <Route element={<HeartFailureTable />} path="/heart_failure_tool"/>
         </Routes>
    </Router>
)
}

export default App;
