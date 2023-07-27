import { stringify } from 'querystring';
import React from 'react';
import { useForm } from 'react-hook-form';
import { alertService } from '../lib/alertService';
import Modal from '../components/Modal'
import LoginBtn from '../components/LoginBtn';

const InstructionForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    // Handle form submission
    let sendTo = await fetch("/api/curd/instructions/createInstructions",{
      method:"Post",
      headers:{"Content-Type":"application/json"},
      body: JSON.stringify(data)
    })
    if(sendTo == 201){
      alertService.success("The operation was a success")
    }else{
      messages = await sendTo.json()
      alertService.error(messages.message)
    }
  };

  return (
    <div className="bg-green-50 min-h-screen">
      <div className="flex justify-between p-4">
        <h2 className='font-semibold'>Instructions</h2>
        <Modal/>
        <LoginBtn/>
      </div>
      <div className="p-4">
      <div className="w-full max-w-screen-lg mx-auto p-4 border rounded-lg bg-white">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control mb-4">
          <label htmlFor="homeReference" className="block text-green-700 font-medium mb-2">
            Home Reference
          </label>
          <input
            type="text"
            name="homeReference"
            id="homeReference"
            className="border border-gray-300 p-2 rounded-lg w-full"
            {...register('homeReference', {
              required: "Home reference is required"
            })}
          />
          {errors.homeReference && (
            <span className="text-red-500">{errors.homeReference.message}</span>
          )}
        </div>

        <div className="form-control mb-4">
          <label htmlFor="homeAddress" className="block text-green-700 font-medium mb-2">
            Home Address
          </label>
          <input
            type="text"
            name="homeAddress"
            id="homeAddress"
            className="border border-gray-300 p-2 rounded-lg w-full"
            {...register('homeAddress', {
              required: "Home address is required"
            })}
          />
          {errors.homeAddress && (
            <span className="text-red-500">{errors.homeAddress.message}</span>
          )}
        </div>

        <div className="form-control mb-4">
          <label htmlFor="instruction" className="block text-green-700 font-medium mb-2">
            Instruction
          </label>
          <input
            type="text"
            name="instruction"
            id="instruction"
            className="border border-gray-300 p-2 rounded-lg w-full"
            {...register('instruction', {
              required: "Instruction is required"
            })}
          />
          {errors.instruction && (
            <span className="text-red-500">{errors.instruction.message}</span>
          )}
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

export default InstructionForm;
