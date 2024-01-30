import React from 'react'
import {Header} from '../../components/'

const Financial = () => {
  return (
    <div>
      <div className='m-2 md:m-10 p-2 md:p-10
      bg-white rounded-3xl'>

        <Header
          category='Charts'
          title='Financial Chart'
        />

        <img className="w-full" src="https://www.datapine.com/blog/wp-content/uploads/2018/09/return-on-equity.png" alt="" />

        </div>
    </div>
  )
}

export default Financial