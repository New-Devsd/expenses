import Currency from "@/components/currency"
import { useMemo } from "react"

const userList = [
	{name: 'Kamlesh Rao Shinde', firstInst: 2000, secondInst: 2000, thirdInst: 20000},
	{name: 'Yogesh Rao Shinde', firstInst: 2500, secondInst: 2000, thirdInst: 20000},
	{name: 'Mohit Rao Shinde', firstInst: 1800, secondInst: 2000, thirdInst: 20000},
	{name: 'Ajay Rao Shinde', firstInst: 1500, secondInst: 2000, thirdInst: 20000},
	{name: 'Ashok Rao Shinde', firstInst: 2000, secondInst: 2000, thirdInst: 20000},
	{name: 'Krishna Rao Shinde', firstInst: 2000, secondInst: 2000, thirdInst: 20000},
	{name: 'Sunil Rao Shinde', firstInst: 1800, secondInst: 2000, thirdInst: 20000},
	{name: 'Pawan Rao Shinde', firstInst: 2000, secondInst: 2000, thirdInst: 20000},
	{name: 'Kamlesh Rao Shinde', firstInst: 2000, secondInst: 2000, thirdInst: 2000},
	{name: 'Kamlesh Rao Shinde', firstInst: 2000, secondInst: 2000, thirdInst: 2000},
	{name: 'Kamlesh Rao Shinde', firstInst: 2000, secondInst: 2000, thirdInst: 2000},
	{name: 'Kamlesh Rao Shinde', firstInst: 2000, secondInst: 2000, thirdInst: 2000},
	{name: 'Kamlesh Rao Shinde', firstInst: 2000, secondInst: 2000, thirdInst: 2000},
	{name: 'Kamlesh Rao Shinde', firstInst: 2000, secondInst: 2000, thirdInst: 2000},
	{name: 'Kamlesh Rao Shinde', firstInst: 2000, secondInst: 2000, thirdInst: 2000},
	{name: 'Kamlesh Rao Shinde', firstInst: 2000, secondInst: 2000, thirdInst: 2000},
	{name: 'Kamlesh Rao Shinde', firstInst: 2000, secondInst: 2000, thirdInst: 2000},
	{name: 'Kamlesh Rao Shinde', firstInst: 2000, secondInst: 2000, thirdInst: 2000},
	{name: 'Kamlesh Rao Shinde', firstInst: 2000, secondInst: 2000, thirdInst: 2000},
	{name: 'Kamlesh Rao Shinde', firstInst: 2000, secondInst: 2000, thirdInst: 2000},
	{name: 'Kamlesh Rao Shinde', firstInst: 2000, secondInst: 2000, thirdInst: 2000},
	{name: 'Kamlesh Rao Shinde', firstInst: 2000, secondInst: 2000, thirdInst: 2000},
	{name: 'Kamlesh Rao Shinde', firstInst: 2000, secondInst: 2000, thirdInst: 2000},
	{name: 'Kamlesh Rao Shinde', firstInst: 2000, secondInst: 2000, thirdInst: 2000},
	{name: 'Kamlesh Rao Shinde', firstInst: 2000, secondInst: 2000, thirdInst: 2000},
]

function Donations() {

	const lastDate = new Date().toDateString()

	const totalDonation = useMemo(() => {
		return userList.reduce((acc, user) => acc + user.firstInst + user.secondInst + user.thirdInst, 0)
	}, [])

	return (
		<div className="content-center max-w-sm lg:max-w-5xl m-auto">
			<div className="flex justify-between m-5 p-3 bg-gray-100 border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
				<span className="uppercase text-md">Total : <Currency money={totalDonation} style={"font-bold"} /></span>
				<span className="text-xs self-center text-right" >{lastDate}</span>
			</div>
			<div className="m-5 p-3 bg-gray-100 border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
				<div className="relative overflow-x-auto">
					<table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
						<thead className="text-xs text-gray-700 uppercase rounded-lg bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
							<tr>
								<th scope="col" className="px-6 py-3 text-nowrap">
									Name
								</th>
								<th scope="col" className="px-6 py-3 text-right text-nowrap">
									1 Installment
								</th>
								<th scope="col" className="px-6 py-3 text-right text-nowrap">
									2 Installment
								</th>
								<th scope="col" className="px-6 py-3 text-right text-nowrap">
									3 Installment
								</th>
							</tr>
						</thead>
						<tbody>
							{
								userList.map((user, index) => (
									<tr key={index} className="bg-gray-50 border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
										<th scope="row" className="text-nowrap px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
											{user.name}
										</th>
										<td className="px-6 py-4 text-right text-nowrap">
											<Currency money={user.firstInst} />
										</td>
										<td className="px-6 py-4 text-right text-nowrap">
											<Currency money={user.secondInst} />
										</td>
										<td className="px-6 py-4 text-right text-nowrap">
											<Currency money={user.thirdInst} />
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

export default Donations