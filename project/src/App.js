import './App.css';
import Footer from './Footer';
import Header from './Header';
import Home from './Home';
import About from './About';
import Card from './Card';
import Contact from './Contact';

function App() {
  return (
    <>
      <div className='flex flex-col justify-between w-[99vw] bg-slate-200'>
        <Header></Header>
        <Home></Home>
        <Card></Card>
        <About></About>
        <Contact></Contact>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App