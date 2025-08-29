import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/Auth/LoginPage';
import RegistrationPage from './pages/Auth/RegisterationPage';

function App() {
  const isAuthenticated = true;
  return (
    <Router>
      <Routes>
        <Route path='/' element={
            isAuthenticated 
            ? <Navigate to="/login"/> 
            : <Navigate to="/login"/>
          } 
        />
        <Route path='login' element={<LoginPage/>}/>
        <Route path='register' element={<RegistrationPage/>}/>
      </Routes>
    </Router>
  )
}

export default App;
