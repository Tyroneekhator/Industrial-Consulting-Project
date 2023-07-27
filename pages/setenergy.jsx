import React from 'react';
import { useForm } from 'react-hook-form';
import Modal from '../components/Modal'
import LoginBtn from '../components/LoginBtn';

const Form = () => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    // Handle form submission
  };

  return (
    <div className="bg-green-50 min-h-screen">
      <div className="flex justify-between p-4">
        <h2 className='font-semibold'>Set Energy</h2>
        <Modal/>
        <LoginBtn/>
      </div>
      <div className="p-4">
        <div className="w-full max-w-screen-lg mx-auto p-4 border rounded-lg bg-white">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label
                htmlFor="kWhRate"
                className="block text-green-700 font-medium mb-2"
              >
                Current kWh Rate
              </label>
              <input
                type="number"
                name="kWhRate"
                id="kWhRate"
                className="border border-gray-300 p-2 rounded-lg w-full"
                
              />
              
            </div>
            <div className="mb-4">
              <label
                htmlFor="energyUsed"
                className="block text-green-700 font-medium mb-2"
              >
                Energy Used
              </label>
              <input
                type="number"
                name="energyUsed"
                id="energyUsed"
                className="border border-gray-300 p-2 rounded-lg w-full"
                
              />
              
            </div>
            <div className="mb-4">
              <label
                htmlFor="homeReference"
                className="block text-green-700 font-medium mb-2"
              >
                Home Reference
              </label>
              <input
                type="text"
                name="homeReference"
                id="homeReference"
                className="border border-gray-300 p-2 rounded-lg w-full"
               
              />
             
            </div>
            <div className="mb-4">
              <label
                htmlFor="homeAddress"
                className="block text-green-700 font-medium mb-2"
              >
                Home Address
              </label>
              <input
                type="text"
                name="homeAddress"
                id="homeAddress"
                className="border border-gray-300 p-2 rounded-lg w-full"
              
              />

           
            </div>

            <div className="mb-4">
              <label
                htmlFor="bufferAmount"
                className="block text-green-700 font-medium mb-2"
              >
                Change Buffer Amount
              </label>
              <input
                type="number"
                name="bufferAmount"
                id="bufferAmount"
                className="border border-gray-300 p-2 rounded-lg w-full"
              
              />

           
            </div>

            <div className="mb-4">
              <label
                htmlFor="changeRate"
                className="block text-green-700 font-medium mb-2"
              >
                Change Rate
              </label>
              <input
                type="number"
                name="changeRate"
                id="changeRate"
                className="border border-gray-300 p-2 rounded-lg w-full"
              
              />

           
            </div>
            <button
              type="submit"
              className="bg-green-700 text-white font-medium py-2 px-4 rounded-lg hover:bg-green-600"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
