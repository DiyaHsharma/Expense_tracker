import './App.css';
import Home from './Home';
import SignUp from './SignUp';
import Login from './Login'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        
          <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/signUp' element={<SignUp></SignUp>}></Route>
        </Routes>
        
      </Router>
    </>
  );
}

export default App