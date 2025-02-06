import React, { useState } from "react";
import axios from "axios";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { IoMdClose } from "react-icons/io";

function Login({ closeModal }) {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });
    const [error, setError] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:5000/api/auth/login", formData);
            console.log(res.data);
            alert("Login Successful");
        } catch (err) {
            setError(err.response?.data?.message || "Login failed");
        }
    };

    return (
        <>
            <div className='w-99 h-full bg-white flex flex-col items-center gap-7 fixed inset-0 bg-opacity-40 top-[14vh] z-50'>
                <button className='self-end px-6' onClick={closeModal}>
                    <IoMdClose className='text-3xl text-orange-400' />
                </button>
                <h1 className='text-4xl font-semibold text-orange-400 pt-4'>Login</h1>
                {error && <p className='text-red-500'>{error}</p>}
                <form onSubmit={handleSubmit} className='flex flex-col gap-3 bg-gradient-to-b from-slate-700 via-slate-800 to-black text-orange-400 rounded-md shadow-lg w-[50vw] p-10'>
                    <input type='email' name='email' placeholder='Email' className='border-2 border-black rounded-md focus:outline-none text-rose-500' required onChange={handleChange} />
                    <input type='password' name='password' placeholder='Password' className='border-2 border-black rounded-md focus:outline-none' required onChange={handleChange} />
                    <button type='submit' className='text-lg font-semibold bg-orange-400 text-black rounded-xl w-1/5 py-1'>Login</button>
                    <div className='justify-between flex'>
                        <Link to='/signUp'>Not Registered Yet?</Link>
                        <Link to='/signUp'>Signup</Link>
                    </div>
                </form>
            </div>
            <Footer />
        </>
    );
}

export default Login;
