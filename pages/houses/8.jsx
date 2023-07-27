import React,{useState} from 'react'
import {data} from '../../data/data'
import Modal from '../../components/Modal'
import LoginBtn from '../../components/LoginBtn'
import QRCode from 'react-qr-code';
import { alertService } from '../../lib/alertService';
import url from '../../lib/getUrl'
import dbConnect from "../../lib/dbConnect";
import { getSession } from 'next-auth/react';

  
export async function getServerSideProps(context) {


  try {
    await dbConnect();    

    const ctx = await getSession(context);
    // `await clientPromise` will use the default database passed in the MONGODB_URI
    // However you can use another database (e.g. myDatabase) by replacing the `await clientPromise` with the following code:
    //
    // `const client = await clientPromise`
    // `const db = client.db("myDatabase")`
    //
    // Then you can execute queries against your database like so:
    // db.find({}) or any of the MongoDB Node Driver commands
    const url = process.env.NEXTAUTH_URL
    console.log(url)
    return {
      props: { isConnected: true, session: ctx, url },
    };
  } catch (e) {
    console.error(e);
    return {
      props: { isConnected: false },
    };
  }


}

export default function one ({url}) {
 
  const generate = () =>{
    
    alertService.success(`QR code has been generated, get the link here: ${url}/house/QRCode/8` )

  }

  return (
    <div className='bg-green-50 min-h-screen'>
    <div className='flex justify-between px-4 pt-4'>
        <h2 className='font-semibold'>Houses</h2>
        <Modal/>
        <LoginBtn/>
    </div>
    <div className='flex justify-center flex-col items-center mt-16'>
    <img src={data[0].image} className='rounded-md h-96 w-3/6'></img>
    <div className='mt-8'>{data[0].method}</div>
    <div className='mt-8 w-3/6'>{data[0].info}</div>
    <button onClick={generate}>Generate QR Code</button>
    </div>
    </div>
  )
}
