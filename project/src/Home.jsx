import React from "react";
import Card from "./Card";
import About from "./About";
import Contact from "./Contact";
import Header from "./Header";
import Footer from "./Footer";

function Home() {
    return (
        <>
        <Header></Header>

            <div className="h-[86vh] flex flex-col items-center justify-center  gap-10 p-6 
            bg-[url('https://images.unsplash.com/photo-1707157284454-553ef0a4ed0d?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]
            bg-cover">

                <h1 className="text-4xl font-bold text-yellow-200">
                    Master Your Finances With Precision
                </h1>
                <p className="font-semibold text-yellow-200">
                    Experience the power of intelligent expense tracking and budget management with ExpenseTracker.
                </p>
                <button className="text-white bg-orange-400 rounded-full px-4 py-2 
                animate-pulse hover:bg-green-500 hover:-translate-y-1 ease-in duration-200
                hover:animate-none">
                    Start Your Financial Journey
                </button>

            </div>
            <Card></Card>
            <About></About>
            <Contact></Contact>
            <Footer></Footer>
        </>
    )
}

export default Home