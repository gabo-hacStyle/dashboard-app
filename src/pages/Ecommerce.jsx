import React from 'react'
import { Link } from 'react-router-dom'
import { BsCurrencyDollar } from 'react-icons/bs'
//import {GoPrimitiveDot} from 'react-icons/go'
import {Stacked, Pie, Button, SparkLine} from '../components/'

import  {earningData, SparklineAreaData, ecomPieChartData} 
from '../data/dummy'

import { useStateContext } from '../contexts/ContextProvider'


const Ecommerce = () => {
  return (
    <div className='mt-12'>
      <div className="flex flex-wrap lg:flex-nowrap justify-center">
        <div className="bg-white dark:text-gray-200
        dark:bg-secondary-dark-bg h-44 rounded-xl
        w-full lg:w-full p-8 pt-9 m-3 bg-hero-pattern bg-no-repat
        bg-cover bg-center">
          <div className="flex justify-between items-center">
            <div className='text-white'>
              <p className="text-sm">Earnings </p>
              <h1 className="text-3xl  font-semibold">$ 32000  -  January </h1>
            </div>
          </div>
          <div className='mt-6'>
            
              <Link
                className=''
                to='/line'
              >
                <p 
                  className="rounded bg-sky-100 p-3 
                  text-sky-950 text-center
                  dark:bg-slate-100 dark:text-gray-500"
                >View Details</p>
              </Link>


            {/* <Button 
              color="white"
              bgColor="bg-green-400"
              text="View Details"
              borderRadius="10px"
              size='md'
            /> */}
          </div>
        </div>
        <div className='flex m-3 flex-wrap justify-center gap-1
        items-center'>
          {earningData.map((item) => {
            return (
              <div key={item.title} 
              style={{backgroundColor: item.iconBg}}
              className="dark:text-white dark:bg-secondary-dark-bg
              md:w-56 p-4 pt-9 rounded-2xl ">
                <div className="justify-between items-center">
                  <div>
                    <div className='flex'>
                      <p className="text-xl">{item.title}</p>
                      <span className="text-sm" >
                          {item.icon}
                      </span>
                    </div>
                    
                    
                    <span className="text-3xl font-semibold">{item.amount}</span>
                    <span className={`text-sm text-${item.pcColor} ml-2`}>
                      {item.percentage}
                    </span>
                  </div>
                  
                </div>
                
              </div>
            )}
          )}

        </div>
      </div>
      
      <div className='flex gap-10 flex-wrap justify-center'>
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg 
        rounded-2xl md:w-780 m-3 p-4">
          <div className='flex justify-between'>
            <p className='font-semibold text-xl'>Revenue Updates</p>
            <div className="flex items-center gap-4">
              <p className='flex items-center gap-2 text-gray-600 
              hover:drop-shadow-xl dark:text-white'>
                <span>--</span>
                <span>Expenses</span>
              </p>

              {/* <p className='flex items-center gap-2 text-green-500 
              hover:drop-shadow-xl'>
                <span>--</span>
                <span>Budget</span>
              </p> */}
            </div>
          </div>
          <div className="mt-10 flex gap-10 justify-center">
            <div className="border-r-1 border-color m-4 pr-10">
              <div>
                <p>
                  <span className='text-3xl font-semibold'>93,438</span>
                  <span className='p-1.5 hover:drop-shadow-xl 
                  cursor:pointer rounded-full text-white bg-green-500 ml-3 text-xs
                  font-semibold'>+23%</span>
                </p>
                <p className='mt-1 text-gray-500'>
                  Budget
                </p>
              </div>
              <div className='mt-8'>
                <p>
                  <span className='text-3xl font-semibold'>$43,438</span>
                  
                </p>
                <p className='mt-1 text-gray-500'>
                  Expenses
                </p>
              </div>

              <div className="mt-5">
                {/* <SparkLine 
                  currentColor="blue"
                  id="sparkline"
                  height="80px"
                  type="Line"
                  width="250px"
                  data={SparklineAreaData}
                  color="black"
                /> */}
              </div>
              <div className="mt-10 rounded bg-sky-950  text-sky-50 p-3 text-center
              dark:bg-slate-100 dark:text-gray-500">
                <Link 
                  to='/pie'
                  >
                  <p>View Details</p>  
                
                </Link>

                {/* <Button 
                  color="white"
                  bgColor="blue"
                  text="View Details"
                  borderRadius="10px"
                /> */}
              </div>
            </div>
            <div>
              <img src="https://resassets.moqups.com/j/9/Y/j9Yd9ODAWz/images/88toAJKsKP-md.png" alt="" />
            </div>
          </div>

        </div>
          
      </div>
    </div>
  )
}

export default Ecommerce