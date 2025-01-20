import './App.css';
import Footer from './Footer';
import Header from './Header';
import Home from './Home';
import SignUp from './SignUp';
import Login from './Login'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        
        <div className='flex flex-col justify-between w-[99vw] bg-slate-200'>
          <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/signUp' element={<SignUp></SignUp>}></Route>
        </Routes>
        </div>
        
      </Router>
    </>
  );
}

export default App