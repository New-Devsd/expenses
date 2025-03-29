import Currency from "@/components/currency"
import FormattedDate from "@/components/formattedDate"
import { useMemo } from "react"

const userList = [
    {title: 'eat', expense: 20000, date: '06/12/24'},
    {title: 'gitti', expense: 25000, date: '06/15/24'},
    {title: 'Cement', expense: 18000, date: '06/20/24'},
    {title: 'Sariye', expense: 15000, date: '06/22/24'},
    {title: 'Balu ret', expense: 20000, date: '08/12/24'},
    {title: 'Churi', expense: 20000, date: '09/15/24'},
    {title: 'majdoori', expense: 18000, date: '10/22/24'},
    {title: 'jali', expense: 20000, date: '11/31/24'},
    {title: 'tiles', expense: 2000, date: '12/12/24'},
]

function Expenses() {

    const lastDate = new Date().toDateString()

    const totalExpense = useMemo(() => {
        return userList.reduce((acc, user) => acc + user.expense, 0)
    }, [])

    return (
        <div className="content-center max-w-sm lg:max-w-5xl m-auto">
            <div className="flex justify-between m-5 p-3 bg-gray-100 border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                <span className="uppercase text-md">Total : <Currency money={totalExpense} style={"font-bold"} /></span>
                <span className="text-xs self-center text-right" >{lastDate}</span>
            </div>
            <div className="m-5 p-3 bg-gray-100 border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                <div className="relative overflow-x-auto">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase rounded-lg bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Name
                                </th>
                                <th scope="col" className="px-6 py-3 text-right">
                                    Expense
                                </th>
                                <th scope="col" className="px-6 py-3 text-right">
                                    Date
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                userList.map((expense, index) => (
                                    <tr key={index} className="bg-gray-50 border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                                        <th scope="row" className="text-nowrap px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {expense.title}
                                        </th>
                                        <td className="px-6 py-4 text-right text-nowrap">
                                            <Currency money={expense.expense} />
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <FormattedDate date={expense.date} />
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Expenses