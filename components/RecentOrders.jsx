import React from 'react'
import {data} from '../data/data.js'
import {SlEnergy} from 'react-icons/sl'
const RecentOrders = () => {
  return (
    <div className='w-full col-span-1 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounden-lg bg-white overflow-scroll'>
      <h1>Recent Usage</h1>
      
      <ul>
        {data.map((order,id)=>{
          return (
            <li key={id}
            className='bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 flex items-center cursor-pointer'
            >
                <div className='bg-purple-100 rounded-lg p-3'>
                    <SlEnergy className='text-purple-800'/>
                </div>
                <div className='pl-4 '>
                  <p className='text-gray-800 font-bold'>{order.total} Kwh</p>
                  <p className='text-gray-400 text-sm'>{order.name.first}</p>
                </div>
                <p className='lg:flex md:hidden absolute right-6 text-sm'>
                  {order.date}
                </p>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default RecentOrders