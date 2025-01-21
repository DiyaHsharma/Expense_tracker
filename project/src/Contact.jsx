import React from "react";

function Contact() {
    return (
        <>
            <div className="p-6 flex flex-col items-center justify-center" id='contact'>
                <h2 className="text-4xl font-semibold pb-10">Contact Us</h2>
                <form className="flex flex-col items-center gap-5 text-orange-400" >
                    <div className="flex flex-col gap-2">
                        <label className="text-xl"
                        htmlFor="name">Name</label>
                        <input className="border-blue-900 border-2 rounded-md active:border-red-500 w-[35vw]" 
                        type="text" name="name" required />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-xl" htmlFor="email">Email</label>
                        <input className="border-blue-900 border-2 rounded-md active:border-red-500 w-[35vw]"
                        type="email" name="email" required/>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-xl" htmlFor="message">Message</label>
                        <textarea className="border-blue-900 border-2 rounded-md active:border-red-500 w-[35vw]"
                        name="message"></textarea>
                    </div>
                    <button className="text-lg bg-orange-400 rounded-md w-[15vw] py-1 
                    text-white hover:ring-2 ring-emerald-200 ring-offset-1
                     ring-offset-slate-50 hover:text-black"
                    type="submit">Send Message</button>
                </form>
            </div>
        </>
    )
}

export default Contact