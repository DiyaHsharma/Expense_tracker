import React from "react";
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

function Footer() {
    return (
        <div className="bg-gradient-to-b from-slate-500 via-slate-800 to-black text-white">
            <div className="flex justify-between p-6 items-center">
                <div className="flex flex-col items-center">
                    <img src="https://tse1.mm.bing.net/th?id=OIP.lbvtBQRFV0twQqyF8xhq3QHaHa&pid=Api&P=0&h=180" 
                    alt="ExpenseTracker Logo" className="w-1/5 rounded-2xl"/>
                    <span className="logo-text">ExpenseTracker</span>
                </div>
                <div className="flex gap-5">
                    <a href=""><FaLinkedin className="text-2xl" /></a>
                    <a href=""><FaTwitter className="text-2xl" /></a>
                    <a href=""><FaFacebook className="text-2xl" /></a>
                    <a href=""><FaInstagram className="text-2xl" /></a>
                </div>
            </div>
            <div className="text-center">
                <p>&copy; 2025 ExpenseTracker. All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer;