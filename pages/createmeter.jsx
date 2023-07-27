import React from 'react';
import { useForm } from 'react-hook-form';
import Modal from '../components/Modal'
import LoginBtn from '../components/LoginBtn';

const Form = () => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = async (data) => {
    // Handle form submission
    const reading = {
      homeReference: data.homeReference,
      homeAddress: data.homeAddress,
      preReading: data.preReading,
      postReading: data.postReading,
    }

    const response = await fetch('/api/create-reading', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        readings: reading,
      }),
    });
    
    if (response.ok) {
      // Handle successful response
      console.log('Reading created successfully');
    } else {
      // Handle error response
      console.error('Failed to create reading');
    }
  };
  return (
    <div className="bg-green-50 min-h-screen">
      <div className="flex justify-between p-4">
        <h2 className='font-semibold'>Create Meter Reading</h2>
        <Modal/>
        <LoginBtn/>
      </div>
      <div className="p-4">
        <div className="w-full max-w-screen-lg mx-auto p-4 border rounded-lg bg-white">
          <form onSubmit={handleSubmit(onSubmit)}>
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
                htmlFor="preReading"
                className="block text-green-700 font-medium mb-2"
              >
                Pre Reading
              </label>
              <div className="flex flex-col md:flex-row gap-4">
                <input
                  type="datetime-local"
                  name="preReading"
                  id="preReading"
                  className="border border-gray-300 p-2 rounded-lg w-full"
                 
                />
                <button
                  type="submit"
                  className="bg-green-700 text-white font-medium py-2 px-4 rounded-lg hover:bg-green-600"
                >
                  Submit Pre Reading
                </button>
              </div>
              
              
            </div>
            <div className="mb-4">
              <label
                htmlFor="postReading"
                className="block text-green-700 font-medium mb-2"
              >
                Post Reading
              </label>
              <div className="flex flex-col md:flex-row gap-4">
                <input
                  type="datetime-local"
                  name="postReading"
                  id="postReading"
                  className="border border-gray-300 p-2 rounded-lg w-full"
                 
                />
                <button
                  type="submit"
                  className="bg-green-700 text-white font-medium py-2 px-4 rounded-lg hover:bg-green-600"
                >
                  Submit Post Reading
                  </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      </div>
);
};

export default Form;
