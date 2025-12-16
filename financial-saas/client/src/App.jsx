import React from 'react'

function App() {
    return (
        <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
            <header className="bg-white shadow-sm">
                <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex justify-between items-center">
                    <h1 className="text-2xl font-bold text-primary">FinSaaS</h1>
                    <nav className="flex space-x-4">
                        <a href="#" className="text-gray-600 hover:text-gray-900">Dashboard</a>
                        <a href="#" className="text-gray-600 hover:text-gray-900">Transactions</a>
                        <a href="#" className="text-gray-600 hover:text-gray-900">Settings</a>
                    </nav>
                </div>
            </header>
            <main className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* KPI Cards */}
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <h3 className="text-sm font-medium text-gray-400">Total Balance</h3>
                        <p className="text-3xl font-bold mt-2 text-dark">R$ 12.450,00</p>
                        <span className="text-xs text-green-500 font-medium">+2.5% vs last month</span>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <h3 className="text-sm font-medium text-gray-400">Monthly Expenses</h3>
                        <p className="text-3xl font-bold mt-2 text-red-500">R$ 4.230,00</p>
                        <span className="text-xs text-red-400 font-medium">+12% vs last month</span>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <h3 className="text-sm font-medium text-gray-400">Savings</h3>
                        <p className="text-3xl font-bold mt-2 text-green-600">R$ 8.220,00</p>
                        <span className="text-xs text-green-500 font-medium">On track</span>
                    </div>
                </div>

                <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 h-64 flex items-center justify-center text-gray-400">
                        [Chart: Expenses by Category]
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 h-64 flex items-center justify-center text-gray-400">
                        [Chart: Income vs Expense]
                    </div>
                </div>
            </main>
        </div>
    )
}

export default App
