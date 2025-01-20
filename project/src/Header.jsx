import React from "react";
import { Link } from "react-router-dom";

function Header() {
    return (

        <div className='h-[14vh] w-full relative top-0 bg-sky-300 flex justify-between items-center px-6 z-50'>
            <Link to="/"><h1 className="text-4xl">Expense Tracker</h1></Link>
            <div className='flex gap-5 items-center font-[Algerian]'>
                <span className="hover:text-orange-500 hover:scale-125">
                    <Link to="/">Home</Link>
                </span>
                <span className="hover:text-orange-500 hover:scale-125">
                    <a href="#features">Features</a>
                </span>
                <span className="hover:text-orange-500 hover:scale-125">
                    <a href="#about" className="transition-all ease-in-out duration-300 ">About</a>
                </span>
                <span className="hover:text-orange-500 hover:scale-125">
                    <a href="#contact">Contact</a>
                </span>
                <span className="hover:text-orange-500 hover:scale-125">
                    <Link to='/login'>Login</Link>
                </span>
            </div>
        </div>
    )
}

export default Header