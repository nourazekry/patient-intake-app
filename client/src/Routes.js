import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { HeartFailureTable } from './pages/heart_failure_tool/HeartFailureTable'
export const Routes = () => {
    return (
        <Router>
            <Routes>
                <Route element={<HomePage/>} path="/">
                    <HomePage />
                </Route>
                <Route path="/heart_failure_tool">
                    <HeartFailureTable />
                </Route>
            </Routes>
        </Router>
    )
}