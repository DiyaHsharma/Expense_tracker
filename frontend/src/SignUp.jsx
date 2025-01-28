import React from "react";
import Footer from "./Footer";

function SignUp(){
    return (
        <>
        <div className='w-full h-[85.5vh] bg-gradient-to-b from-slate-500 to-slate-900 bg-opacity-40
        flex flex-col items-center gap-10'>
            <h1 className='text-4xl text-orange-400 pt-4'>SignUp</h1>
            <form className='flex flex-col gap-5 rounded-md bg-gradient-to-b from-slate-700 via-slate-800 to-black text-orange-400
            shadow-lg w-[50vw] p-10 justify-center items-center'>
                <div className='flex flex-col items-center gap-5'>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor="mail">email or username:</label>
                        <input type='email' className='rounded-md' required name='mail' />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor="password">password:</label>
                        <input type='password' className='rounded-md' required name='password' />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor="password">confirm password:</label>
                        <input type='password' className='rounded-md' required name='password' />
                    </div>
                    <button className="text-lg text-white items bg-orange-400 rounded-md w-[15vw] pt-0.5 pb-1"
                        type='submit'>Login</button>
                </div>
            </form>
            </div>
            <Footer></Footer>
        
        </>
    )
}

export default SignUp