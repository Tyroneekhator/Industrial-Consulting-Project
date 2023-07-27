import React, { useEffect } from 'react';
import { BsPersonFill, BsThreeDotsVertical } from 'react-icons/bs';
import { data } from '../data/data';
import {getSession} from "next-auth/react"
import Modal from '../components/Modal'
import LoginBtn from '../components/LoginBtn'
import Users from "../lib/schema/Users"
import dbConnect from '../lib/dbConnect';
import clientPromise from '../lib/mongodb'

const Customers = ({isConnected, users}) => {


  return (
    <div className="bg-green-50 min-h-screen">
      <div className="flex justify-between p-4">
        <h2 className='font-semibold'>Customers</h2>
        <Modal/>
        <LoginBtn/>
      </div>
      <div className="p-4">
        <div className="w-full max-w-screen-lg mx-auto p-4 border rounded-lg bg-white overflow-y-auto">
          <div className="my-3 grid grid-cols-4 sm:grid-cols-3 gap-4 items-center justify-between cursor-pointer text-green-700">
            <span>Name</span>
            <span className="hidden sm:block">Email</span>
            <span className="hidden md:block">Last Order</span>
            <span className="hidden sm:block">Method</span>
          </div>
          <ul>
            {data.map((order, id) => {
              return (
                <li
                  key={id}
                  className="bg-white hover:bg-green-50 rounded-lg my-3 grid grid-cols-4 sm:grid-cols-3 gap-4 items-center justify-between cursor-pointer"
                >
                  <div className="flex items-center">
                    <div className="bg-green-100 p-3 rounded-lg">
                      <BsPersonFill className="text-green-700" />
                    </div>
                    <p className="ml-3 text-green-700 font-medium">
                      {order.name.first} {order.name.last}
                    </p>
                  </div>
                  <p className="hidden sm:block text-gray-600">{order.name.first}@gmail.com</p>
                  <p className="hidden md:block">{order.date}</p>
                  <div className="flex sm:hidden justify-between items-center">
                    <p>{order.method}</p>
                    <BsThreeDotsVertical />
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

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

    const users = await Users.find({}, 'booking')


    return {
      props: { isConnected: true, users: JSON.parse(JSON.stringify(users)) },
    };
  } catch (e) {
    console.error(e);
    return {
      props: { isConnected: false },
    };
  }

}

export default Customers;
