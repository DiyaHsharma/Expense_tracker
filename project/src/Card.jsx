import React from "react";

function Card(){
    return(
        <div className="text-center bg-sky-200 mb-4 h-[86vh]">
                <h1 className="text-4xl py-10 font-semibold">Empowering Features</h1>
                <div className="flex flex-wrap justify-evenly gap-4 p-6">
                    <div className="flex flex-col h-[50vh] gap-5 w-1/5 hover:-translate-y-1 hover:shadow-2xl bg-white p-2 rounded-xl">
                        <h2>About ExpenseTracker</h2>
                        <p>Effortlessly record and categorize your expenses for a clear financial overview.</p>
                    </div>
                    <div className="flex flex-col gap-5 w-1/4 hover:-translate-y-1 bg-white p-2 rounded-xl hover:shadow-2xl">
                        <h2>Strategic Budget Planning</h2>
                        <p>Create and manage budgets across various categories to optimize your spending..</p>
                    </div>
                    <div className="flex flex-col gap-5 w-1/4 hover:-translate-y-1 bg-white p-2 rounded-xl hover:shadow-2xl">
                        <h2>Insightful Financial Analytics</h2>
                        <p>Gain valuable insights through detailed visualizations of your financial trends.</p>
                    </div>
                    <div className="flex flex-col gap-5 w-1/4 hover:-translate-y-1 bg-white p-2 rounded-xl hover:shadow-2xl">
                        <h2>Bank-Grade Security</h2>
                        <p>Rest easy knowing your financial data is protected by state-of-the-art encryption.</p>
                    </div>
                </div>
            </div>
    )
}

export default Card