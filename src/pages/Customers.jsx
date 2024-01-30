import React from 'react'
import {Header} from '../components'

import { customersData } from '../data/dummy'

const Customers = () => {
  return (
    <div>
      <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
        <Header category='Pages' title='Customers' />
        
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Project Name</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {customersData.map((customer, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap">{customer.CustomerName}</td>
                <td className="px-6 py-4 whitespace-nowrap">{customer.CustomerEmail}</td>
                <td className="px-6 py-4 whitespace-nowrap">{customer.Location}</td>
                <td className="px-6 py-4 whitespace-nowrap">{customer.ProjectName}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Customers