import React from 'react'
// import { GridComponent, ColumnsDirective, ColumnDirective
// , Resize, Sort, ContextMenu, Filter, Page, ExcelExport,
// PdfExport, Edit, Inject } from '@syncfusion/ej2-react-grids'


//import {ordersData, contextMenuItems, ordersGrid} from '../data/dummy'
import {Header} from '../components'
import { ordersData } from '../data/dummy'

const Orders = () => {
  return (
    <div className='m-2 md:m-10 p-2 md:p-10
    bg-white rounded-3xl'>

      <Header
        category='Pages'
        title='Orders'
      />

      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Client</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Country</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {ordersData.map((order, index) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-nowrap">{order.OrderItems}</td>
              <td className="px-6 py-4 whitespace-nowrap">{order.CustomerName}</td>
              <td className="px-6 py-4 whitespace-nowrap">{order.Location}</td>
              <td className="px-6 py-4 whitespace-nowrap">{order.Status}</td>
              <td className="px-6 py-4 whitespace-nowrap">${order.TotalAmount}</td>
            </tr>
          ))}
        </tbody>
      </table>
      
      
       {/**
        * <GridComponent> 
        <ColumnsDirective>
            {ordersGrid.map((item, index) => (
              <ColumnDirective 
              key={index}
              {...item}
              />
            ))}
          </ColumnsDirective>
      </GridComponent>
        */}
     
    </div>
  )
}

export default Orders