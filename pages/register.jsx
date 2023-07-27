import React from 'react'
import { useState } from 'react';
import Link from 'next/link';
import {signIn, signOut} from "next-auth/react"

export default function register() {
    const [formData, setFormData] = useState({
        role: '',
        firstName: '',
        lastName: '',
        password: '',
        confirmPassword: '',
        email: '',
        delegate: '',
      });
      
      const [successMessage, setSuccessMessage] = useState("");

      const handleInputChange = (event) => {
        setFormData({
          ...formData,
          [event.target.name]: event.target.value,
        });
      };

      const handleSubmit = (event) => {
        event.preventDefault()
        setSuccessMessage("Form submitted!");
        signIn("credentials", {redirect:false ,email:formData.email,password:formData.password,firstName:formData.firstName,lastName:formData.lastName,
          role:formData.role,delegate:formData.delegate
        })
      };
      

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
    <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
      <img className="w-32 mr-2" src="https://newforestescapes.com/assets/images/NFE_logo.svg" alt="logo" /> 
    </a>
    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
      <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
          Create Account
        </h1>
        <form className="space-y-4 md:space-y-4" action="#" onSubmit={handleSubmit}>
        <div className='mt-0'>
            <label htmlFor="role" className="block mb-0.5 text-sm font-medium text-gray-900 dark:text-white">Role</label>
            <select name="role" value={formData.role} onChange={handleInputChange} id="role" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 cursor-pointer" required>
      <option value=""></option>
      <option value="guest">Guest</option>
      <option value="homeowner">Homeowner</option>
      <option value="agency">Agency</option>
    </select>
          </div>
          <div className='flex gap-4'>
            <div className='flex flex-col'>
          <label htmlFor="firstName" className="block mb-0.5 text-sm font-medium text-gray-900 dark:text-white">First Name</label>
            <input type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} id="firstName" placeholder="John" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
            </div>
            <div className='flex flex-col'>
            <label htmlFor="lastName" className="block mb-0.5 text-sm font-medium text-gray-900 dark:text-white">Last Name</label>
            <input type="text" name="lastName" id="lastName" value={formData.lastName} onChange={handleInputChange} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Peters" required />
          </div>
          </div>
          <div className='mt-4'>
            <label htmlFor="email" className="block mb-0.5 text-sm font-medium text-gray-900 dark:text-white">Email</label>
            <input type="email" name="email" id="email" value={formData.email} onChange={handleInputChange} placeholder="johnpeters@gmail.com" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
          </div>
          <div>
          <div className='flex gap-4'>
            <div className='flex flex-col'>
          <label htmlFor="password" className="block mb-0.5 text-sm font-medium text-gray-900 dark:text-white">Password</label>
            <input type="password" name="password" id="password" placeholder="••••••••" value={formData.password} onChange={handleInputChange} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
            </div>
            <div className='flex flex-col'>
            <label htmlFor="confirmPassword" className="block mb-0.5 text-sm font-medium text-gray-900 dark:text-white">Confirm Password</label>
            <input type="password" name="confirmPassword" id="confirmPassword" placeholder="••••••••" value={formData.confirmPassword} onChange={handleInputChange} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
          </div>
          </div>
          </div>
            <div className='mt-4'>
            <label htmlFor="delegate" className="block mb-0.5 text-sm font-medium text-gray-900 dark:text-white">Delegate</label>
            <input type="text" name="delegate" id="delegate" value={formData.delegate} onChange={handleInputChange} placeholder="" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
          
          </div>
<button
  type="submit"
  className="w-full text-white bg-blue-600 hover:bg-blue-400 focus:ring-2 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
>
  Create Account
</button>
<button onClick={signOut}>Press me</button>
<p className="text-sm font-light text-gray-500 dark:text-gray-400">
  Already have an account? <Link href='/login' className="font-medium text-primary-600 hover:opacity-75 dark:text-primary-500">Login</Link>
</p>
{successMessage && <p className='text-center text-green-500'>{successMessage}</p>}
</form>
          </div>
      </div>
  </div>
</section>
  )
}
