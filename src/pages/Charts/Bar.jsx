import React from 'react'
import { Header } from '../../components'


const Bar = () => {
  return (
    <div>
      <div className='m-2 md:m-10 p-2 md:p-10
      bg-white rounded-3xl'>

        <Header
          category='Charts'
          title='Bar Chart'
        />

        <img className="w-full" src="https://th.bing.com/th/id/OIP.aXb8EVucSw74mqCgab8IbAHaEi?rs=1&pid=ImgDetMain" alt="" />

        </div>
    </div>
  )
}

export default Bar