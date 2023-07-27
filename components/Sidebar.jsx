import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import {RxSketchLogo, RxDashboard, RxPerson} from 'react-icons/rx'
import {FiSettings} from 'react-icons/fi'
import {SlSpeedometer, SlEnergy, SlBulb, SlBookOpen, SlHome, SlCalculator, SlLocationPin} from 'react-icons/sl'
import {MdOutlineEnergySavingsLeaf} from 'react-icons/md'

const Sidebar = ({children}) => {
  return (
    <div className='flex'>
        <div className='fixed w-20 h-screen p-4 bg-gray-100 border-r-[1px] flex flex-col justify-between'>
            <div className='flex flex-col items-center'>
                <Link href='/'>
                    <div className='bg-gray-100 hover:bg-gray-200 cursor-pointer p-3 rounded-lg inline-bloc'>
                        <SlHome size={25}/>
                    </div>
                    <hr className='border-black'/>
                </Link>
                <span className='border-b-[1px] border-gray-200 w-full p-2'></span>
                <Link href='/createmeter'>
                    <div title='Create Meter Reading' className='bg-gray-100 hover:bg-gray-200 cursor-pointer  my-3 p-3 rounded-lg inline-block'>
                        <MdOutlineEnergySavingsLeaf size={25}/>
                    </div>
                </Link>
                <Link href='/customers'>
                    <div title='Customers' className='bg-gray-100 hover:bg-gray-200 cursor-pointer  my-3 p-3 rounded-lg inline-block'>
                        <RxPerson size={25}/>
                    </div>
                </Link>
                <Link href='/orders'>
                    <div title='Orders' className='bg-gray-100 hover:bg-gray-200 cursor-pointer  my-3 p-3 rounded-lg inline-block'>
                        <SlSpeedometer size={25}/>
                    </div>
                </Link>
                <Link href='/energyusage'>
                    <div title='Energy Usage' className='bg-gray-100 hover:bg-gray-200 cursor-pointer  my-3 p-3 rounded-lg inline-block'>
                        <FiSettings size={25}/>
                    </div>
                </Link>
                <Link href='/generatemeter'>
                    <div title='Generate Meter' className='bg-gray-100 hover:bg-gray-200 cursor-pointer  my-3 p-3 rounded-lg inline-block'>
                        <SlEnergy size={25}/>
                    </div>
                </Link>
                <Link href='/setenergy'>
                    <div title='Set Energy' className='bg-gray-100 hover:bg-gray-200 cursor-pointer  my-3 p-3 rounded-lg inline-block'>
                        <SlBulb size={25}/>
                    </div>
                </Link>
                <Link href='/instructions'>
                    <div title='Instructions' className='bg-gray-100 hover:bg-gray-200 cursor-pointer  my-3 p-3 rounded-lg inline-block'>
                        <SlBookOpen size={25}/>
                    </div>
                </Link>
                <Link href='/houses'>
                    <div title='houses' className='bg-gray-100 hover:bg-gray-200 cursor-pointer  my-3 p-3 rounded-lg inline-block'>
                        <SlLocationPin size={25}/>
                        <SlBookOpen size={25}/>
                    </div>
                </Link>
                <Link href='/calculatecost'>
                    <div title='Calculate' className='bg-gray-100 hover:bg-gray-200 cursor-pointer  my-3 p-3 rounded-lg inline-block'>
                        <SlCalculator size={25}/>

                    </div>
                </Link>
            </div>
        </div>
        <main className='ml-20 w-full'>{children}</main>
    </div>
  )
}

export default Sidebar