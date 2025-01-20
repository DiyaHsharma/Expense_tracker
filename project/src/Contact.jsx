import React from "react";

function Contact() {
    return (
        <>
            <div className="p-6 flex flex-col items-center justify-center bg-sky-200">
                <h2 className="text-4xl font-semibold pb-10">Contact Us</h2>
                <form className="flex flex-col items-center gap-5" >
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
                        name="message" required></textarea>
                    </div>
                    <button className="text-lg items bg-orange-500 rounded-md w-[15vw] py-1"
                    type="submit">Send Message</button>
                </form>
            </div>
        </>
    )
}

export default Contact