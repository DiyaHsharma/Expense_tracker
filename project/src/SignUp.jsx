import React from "react";
import Footer from "./Footer";

function SignUp(){
    return (
        <>
        <div className='w-99 h-[79vh] bg-sky-200 flex flex-col items-center gap-10'>
            <h1 className='text-4xl text-orange-400 pt-4'>SignUp</h1>
            <form className='flex flex-col gap-5 bg-white bg-opacity-75 rounded-md 
            shadow-lg w-[50vw] p-10'>
                <div className='flex flex-col items-center gap-5'>
                    <div className='flex flex-col gap-5'>
                        <label htmlFor="mail">email or username:</label>
                        <input type='email' className='rounded-md' required name='mail' />
                    </div>
                    <div className='flex flex-col gap-5'>
                        <label htmlFor="password">password:</label>
                        <input type='password' className='rounded-md' required name='password' />
                    </div>
                    <div className='flex flex-col gap-5'>
                        <label htmlFor="password">confirm password:</label>
                        <input type='password' className='rounded-md' required name='password' />
                    </div>
                    <button className="text-lg items bg-orange-400 rounded-md w-[15vw] py-1"
                        type='submit'>Login</button>
                </div>
            </form>
            </div>
            <Footer></Footer>
        
        </>
    )
}

export default SignUp