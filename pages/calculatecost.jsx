import React from 'react';
import { useForm } from 'react-hook-form';
import Modal from '../components/Modal'
import LoginBtn from '../components/LoginBtn';
import {SlCheck} from 'react-icons/sl'
import { alertService } from '../lib/alertService';

const Form = () => {
  const { register, handleSubmit, errors } = useForm();
  const tarif = 0.15
  const onSubmit = (data) => {
    data.preventDefault()

    const period = [data.target.periodFrom.value,data.target.periodTo.value]
    const preReading = data.target.meterReadingPost.value
    const reading = data.target.meterReadingPre.value
    const mpan = data?.target?.mpan?.value
    if(mpan){
      const total = (parseInt(reading) - parseInt(preReading))* tarif
      alertService(`Your energy cost is ${total}`)
    }else{
      const total = (parseInt(reading) - parseInt(preReading))* 0.12
      alertService(`Your gas cost is ${total}`)
    }
  };

  return (
    <div className="bg-green-50 min-h-screen">
      <div className="flex justify-between p-4">
        <h2 className='font-semibold'>Calculate Cost</h2>
        <Modal/>
        <LoginBtn/>
      </div>
      <div className="p-4 flex">
        <div className="w-1/2 max-w-screen-lg mx-auto mr-2 p-4 border rounded-lg bg-white">
          <form onSubmit={onSubmit} className='flex flex-col'>
            <div className="mb-4">
                <h1 className='text-center font-medium mb-2 text-lg'>Gas Consumption</h1>
                <hr className='mb-4'></hr>
              <label
                htmlFor="meterReading"
                className="block text-green-700 text-center font-medium mb-2"
              >
                Meter Reading Before
              </label>
              <input
                type="number"
                name="meterReadingPre"
                id="meterReading"
                className="border border-gray-300 p-2 rounded-lg w-full text-center"
                
              />
              
            </div>
            <div className="mb-4">
              <label
                htmlFor="meterReadingPost"
                className="block text-green-700 font-medium mb-2 text-center"
              >
                Meter Reading After
              </label>
              <input
                type="text"
                name="meterReadingPost"
                id="meterReadingPost"
                className="border border-gray-300 p-2 rounded-lg w-full text-center"
                
              />
              
            </div>
        
            <button type="button" onClick={handleSubmit}>Click me</button>
            <SlCheck className='text-center h-16 w-8 text-green-700 m-auto cursor-pointer'/>
          </form>
        </div>
        <div className="w-1/2 max-w-screen-lg mx-auto p-4 border rounded-lg bg-white">
          <form onSubmit={onSubmit} className='flex flex-col'>
            <div className="mb-4">
                <h1 className='text-center font-medium mb-2 text-lg' name="mpan" value="mpan">Electricity Consumption</h1>
                <hr className='mb-4'></hr>
              <label
                htmlFor="meterReadingPre"
                className="block text-green-700 text-center font-medium mb-2"
              >
                Meter Reading
              </label>
              <input
                type="number"
                name="meterReadingPre"
                id="meterReadingPre"
                className="border border-gray-300 p-2 rounded-lg w-full text-center"
                
              />
              
            </div>
            <div className="mb-4">
              <label
                htmlFor="meterSerial"
                className="block text-green-700 font-medium mb-2 text-center"
              >
                Meter Serial Number
              </label>
              <input
                type="number"
                name="meterReadingPost"
                id="meterReadingPost"
                className="border border-gray-300 p-2 rounded-lg w-full text-center"
                
              />
              
            </div>
            <button type="button" onClick={handleSubmit}>Click me</button>
            <SlCheck className='text-center h-16 w-8 text-green-700 m-auto cursor-pointer'/>
          </form>
        </div>
      </div>
      <div className='flex justify-around mt-8'>
      <div className='mr-8 hidden'>£100</div>
      <div className='mr-8 hidden'>£100</div>
      </div>
    </div>
  );
};

export default Form;
