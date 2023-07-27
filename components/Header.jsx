import React from 'react'
import Modal from './Modal'
import LoginBtn from './LoginBtn'

const Header = () => {
  return (
    <div className='flex justify-between px-5 pt-5'>
        <h2 className='font-semibold'>New Forest Escapes</h2>
        <Modal/>
        <LoginBtn/>
    </div>
  )
}

export default Header