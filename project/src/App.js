import './App.css';
import Home from './Home';
import SignUp from './SignUp';
import Login from './Login'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <div className='flex flex-col justify-between w-[99vw] overflow-x-clip bg-gradient-to-b from-slate-500 via-slate-800 to-black text-white'>
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