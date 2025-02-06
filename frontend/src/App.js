import './App.css';
import Home from './Home';
import SignUp from './SignUp';
import Login from './Login'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DashBoard from './DashBoard';

function App() {
  return (
    <>
      <Router>
        
          <Routes>
          <Route path='/' element={<Home></Home>}/>
          <Route path='/login' element={<Login></Login>}/>
          <Route path='/signUp' element={<SignUp></SignUp>}/>
          <Route path='/:userid' element={<DashBoard></DashBoard>}/>
        </Routes>
        
      </Router>
    </>
  );
}

export default App