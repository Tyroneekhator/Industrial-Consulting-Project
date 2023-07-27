import React, { useState } from 'react';

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button className='font-bold' onClick={toggleModal}>Account Settings</button>
      {isOpen && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen">
            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <div className="bg-white rounded-lg z-20 p-6 w-96">
              <h2 className="text-lg font-medium mb-2 text-center">Account</h2>
              <h3 className="text-sm font-medium mb-2 text-center">Manage your account settings</h3>
              <hr className='border-black border-1 mb-4'/>
              <p className="mb-2 mt-1">First Name</p>
              <input type="text" placeholder='John' className='border border-gray-300 p-2 rounded-lg w-full'/>
              <p className="mb-2 mt-1">Last Name</p>
              <input type="text" placeholder='Peters' className='border border-gray-300 p-2 rounded-lg w-full'/>
              <p className="mb-2 mt-1">Email Address</p>
              <input type="text" placeholder='johnpeters@gmail.com' className='border border-gray-300 p-2 rounded-lg w-full'/>
              <p className="mb-2 mt-1">Password</p>
              <input type="password" placeholder='••••••••' className='border border-gray-300 p-2 rounded-lg w-full'/>
              <div className='flex justify-center gap-2'>
              <button className='bg-blue-500 text-white font-medium py-1 px-2 rounded-md w-24 hover:bg-blue-300 mt-2'>Update</button>
              <button className='bg-red-500 text-white font-medium py-1 px-2 rounded-md w-24 hover:bg-red-300 mt-2' onClick={toggleModal}>Close</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
