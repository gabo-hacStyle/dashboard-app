import React from 'react'
import { Header } from '../components'

import { employeesData } from '../data/dummy'

const Employees = () => {
  return (
    <div>
      
      <div className='m-2 md:m-10 p-2 md:p-10
      bg-white rounded-3xl'>

        <Header
          category='Pages'
          title='Employees'
        />

        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Hire Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Reports to</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {employeesData.map((person, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap">{person.Name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{person.HireDate}</td>
                <td className="px-6 py-4 whitespace-nowrap">{person.ReportsTo}</td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>
    </div>
  )
}

export default Employees