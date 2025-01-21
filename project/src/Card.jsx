import React from "react";

function Card(){
    return(
        <div className="text-center mb-4 h-[86vh]" id='features'>
                <h1 className="text-4xl py-10 font-semibold">Empowering Features</h1>
                <div className="flex flex-wrap justify-evenly gap-4 p-6 text-black">
                    <div className="flex flex-col h-[50vh] gap-5 w-1/5 hover:-translate-y-1 hover:shadow-2xl bg-white rounded-xl">
                        <h2 className="px-2 pt-2  font-semibold">About ExpenseTracker</h2>
                        <p className="px-2">Effortlessly record and categorize your expenses for a clear financial overview.</p>
                        <img src='https://images.unsplash.com/photo-1709534486708-fb8f94150d0a?q=80&w=2001&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                        className="w-full h-1/2"></img>
                    </div>
                    <div className="flex flex-col gap-5 w-1/4 hover:-translate-y-1 bg-white p-2 rounded-xl hover:shadow-2xl">
                        <h2 className="pt-2 font-semibold px-2">Strategic Budget Planning</h2>
                        <p className="px-2">Create and manage budgets across various categories to optimize your spending..</p>
                    </div>
                    <div className="flex flex-col gap-5 w-1/4 hover:-translate-y-1 bg-white p-2 rounded-xl hover:shadow-2xl">
                        <h2 className="pt-2 px-2 font-semibold">Insightful Financial Analytics</h2>
                        <p className="px-2">Gain valuable insights through detailed visualizations of your financial trends.</p>
                    </div>
                    <div className="flex flex-col gap-5 w-1/4 hover:-translate-y-1 bg-white p-2 rounded-xl hover:shadow-2xl">
                        <h2 className="pt-2 px-2 font-semibold">Bank-Grade Security</h2>
                        <p className="px-2">Rest easy knowing your financial data is protected by state-of-the-art encryption.</p>
                    </div>
                </div>
            </div>
    )
}

export default Card