import React from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { SlEnergy } from 'react-icons/sl'
import {data} from '../data/data'
import Visitors from '../lib/schema/Visitors'
import Modal from '../components/Modal'
import LoginBtn from '../components/LoginBtn'
import dbConnect from '../lib/dbConnect'
import clientPromise from '../lib/mongodb'
import { getSession } from 'next-auth/react'

const orders = () => {
  return (
    <div className='bg-green-50 min-h-screen'>
        <div className='flex justify-between px-4 pt-4'>
            <h2 className='font-semibold'>Houses</h2>
            <Modal/>
            <LoginBtn/>
        </div>
        <div className='p-4'>
            <div className='w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto'>
                <div className='my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer'>
                    <span>Homeowner</span>
                    <span className='sm:text-left text-right'>Image</span>
                    <span className='hidden md:grid'>Address</span>
                    <span className='hidden md:grid'>Energy Usage</span>
                </div>
                <ul>
                    {data.map((order,id)=>{
                        return (
                          <li key={id} className='bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer'>
                          <a href={`/houses/${order.id}`} className='flex'>
                            <div className='pl-4'>
                              <p className='text-gray-800 font-bold'>{order.name.first} {order.name.last}</p>
                              <p className='text-gray-800 text-sm'>{order.house}</p>
                            </div>
                          </a>
                          <div className='hidden md:flex'>
                            <img src={order.image} alt='' className='h-16 w-16 object-cover rounded-lg'/>
                          </div>
                          <div className='sm:flex hidden justify-between items-center'>
                            <p>{order.method}</p>
                            <BsThreeDotsVertical/>
                          </div>
                          <div className='sm:flex hidden justify-start items-center'>
                            <div className='bg-purple-100 rounded-lg p-3'>
                              <SlEnergy className='text-purple-800'/>
                            </div>
                            <div className='flex justify-start pl-4 '>
                              <p className='text-gray-800 font-bold'>{order.total} Kwh</p>
                            </div>
                          </div>
                        </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    </div>
  )
}
export async function getServerSideProps(context) {
  

    try {
      await dbConnect();
      const client = await clientPromise;
      const db = client.db(process.env.MONGODB_DATABASE);
      
  
      const ctx = await getSession(context);
      // `await clientPromise` will use the default database passed in the MONGODB_URI
      // However you can use another database (e.g. myDatabase) by replacing the `await clientPromise` with the following code:
      //
      // `const client = await clientPromise`
      // `const db = client.db("myDatabase")`
      //
      // Then you can execute queries against your database like so:
      // db.find({}) or any of the MongoDB Node Driver commands
  
      const visitors = await Visitors.find({}, 'booking')
  
  
      return {
        props: { isConnected: true, bookings: JSON.parse(JSON.stringify(visitors)) },
      };
    } catch (e) {
      console.error(e);
      return {
        props: { isConnected: false },
      };
    }
  
  }

export default orders