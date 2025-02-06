import React from "react";

function Incomes() {
    return (
        <>
            <div className="col-span-6 p-4 pt-0 flex flex-col gap-4" id='income'>
                <h1 className="text-4xl p-4 bg-slate-600 text-orange-400 text-center rounded-lg">Total Income:</h1>
                <form className="flex flex-col w-1/3 gap-5 text-orange-400" method="POST">
                    <input type='text' placeholder="Salary Title" className="border-blue-900 border-2 rounded-sm p-1 w-full focus:outline-none" name='title'></input>
                    <input type='number' placeholder="Salary Amount" className="border-blue-900 border-2 rounded-sm p-1 w-full focus:outline-none" name='amount'></input>
                    <input type='date' placeholder="Enter A Date" className="border-blue-900 border-2 rounded-sm p-1 w-full focus:outline-none" name='date'></input>
                    <textarea placeholder="Add a Reference" className="border-blue-900 border-2 rounded-sm p-1 w-full focus:outline-none" name='description'>
                    </textarea>
                    <button className="text-lg font-semibold bg-purple-500 rounded-xl w-3/5 py-1 
                     hover:shadow-emerald-500 shadow-md text-black"
                    type="submit">Add Income</button>
                </form>
            </div>
        </>
    )
}

export default Incomes;