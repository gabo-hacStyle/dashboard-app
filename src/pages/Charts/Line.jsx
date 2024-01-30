import React from 'react'
import { Header } from '../../components'

const Line = () => {
  return (
    <div>
      <div className='m-2 md:m-10 p-2 md:p-10
      bg-white rounded-3xl'>

        <Header
          category='Charts'
          title='Line Chart'
        />

        <img className="w-full" src="https://images.squarespace-cdn.com/content/v1/55b6a6dce4b089e11621d3ed/1585087896250-R3GZ6OFWYQRZUJRCJU3D/ke17ZwdGBToddI8pDm48kGWofyRxfSJ9uscCn11zkbYUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKct6JBMPHLafCAclEKcWHYDNY2rZovXxL9ZlIF7nd_MJE2NdXUI24p4bxl0V65eVL_/produce_monthly.png" alt="" />

        </div>
    </div>
  )
}

export default Line