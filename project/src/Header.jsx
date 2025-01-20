import React from "react";

function Header() {
    return (

        <div className='h-[14vh] w-full sticky top-0 bg-sky-300 flex justify-between items-center px-6 z-50'>
            <a href=""><h1 className="text-4xl">Expense Tracker</h1></a>
            <div className='flex gap-5 items-center font-[Algerian]'>
                <span className="hover:text-orange-500 hover:scale-125"><a href="#home">Home</a></span>
                <span className="hover:text-orange-500 hover:scale-125"><a href="#features">Features</a></span>
                <span className="hover:text-orange-500 hover:scale-125"><a href="#about">About</a></span>
                <span className="hover:text-orange-500 hover:scale-125"><a href="#contact">Contact</a></span>
                <span className="hover:text-orange-500 hover:scale-125"><a href=''>Login</a></span>
            </div>
        </div>
    )
}

export default Header