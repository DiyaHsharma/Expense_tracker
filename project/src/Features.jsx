import React from "react";
import Card from "./Card";

function Features() {
    return (
        <div className="text-center mb-4 min-h-[86vh]" id='features'>
            <h1 className="text-4xl py-10 font-semibold bg-gradient-to-r from-gray-400 to-gray-600">Empowering Features</h1>
            <div className="grid grid-cols-4 grid-flow-row justify-evenly gap-10 p-6 text-black">
                <Card heading={'About ExpenseTracker'}
                    detail={'Effortlessly record and categorize your expenses for a clear financial overview.'}
                    image={'https://img.freepik.com/premium-vector/financial-business-statistics-with-bar-graph-candlestick-chart-show-effective-earning-background_120819-717.jpg'} />

                <Card heading={'Strategic Budget Planning'}
                    detail={'Create and manage budgets across various categories to optimize your spending.'}
                    image={'https://img.freepik.com/premium-vector/financial-strategy-business-concept-with-icons_1280751-88473.jpg'} />

                <Card heading={'Insightful Financial Analytics'}
                    detail={'Gain valuable insights through detailed visualizations of your financial trends.'}
                    image={'https://happay.com/blog/wp-content/uploads/sites/12/2023/07/financial-analysis-scaled.webp'} />

                <Card heading={'Bank-Grade Security'}
                    detail={'Rest easy knowing your financial data is protected by state-of-the-art encryption.'}
                    image={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6XgNMeBFuk0aYMQKp30oO3bJAH9n3NBH40w&s'} />
            </div>
        </div>
    )
}

export default Features