import React from 'react'
import { Header } from '../../components' 
const Stacked = () => {
  return (
    <div>
      <div className='m-2 md:m-10 p-2 md:p-10
      bg-white rounded-3xl'>

        <Header
          category='Charts'
          title='Stacked Chart'
        />

        <img className="w-full" src="https://www.contextures.com/images/charts/clusterstackchart02.png" alt="" />

        </div>
    </div>
  )
}

export default Stacked