import React, { useState } from 'react';
import Modal from '../components/Modal'
import LoginBtn from '../components/LoginBtn';
import { alertService } from '../lib/alertService';

const Form = () => {
  const [image, setImage] = useState(null);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [reading, setReading] = useState('');

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
   
    const sendTo = await fetch(`/api/crud/readingMeter/createmeter`,{
      method:"POST",
      headers: {"Content-Type":"application/json"},
      body: JSON.stringify({id,image,date,time,reading})
    })

    if(sendTo.status == 201){
      alertService.success("Meter created successfully")
    }else{
      let mes = await sendTo.json()
      alertService.error(mes.message)
    }

  };

  return (
    <div className="bg-green-50 min-h-screen">
      <div className="flex justify-between p-4">
        <h2 className='font-semibold'>Generate Meter Reading</h2>
        <Modal/>
        <LoginBtn/>
      </div>
      <div className="p-4">
        <form onSubmit={handleSubmit}>
          <div className="w-full max-w-screen-lg mx-auto p-4 border rounded-lg bg-white">
            <div className="mb-4">
              <label htmlFor="image" className="text-green-700 font-medium mb-2">
                Image
              </label>
              <input type="file" id="image" onChange={handleImageChange} />
            </div>
            <div className="mb-4">
              <label 
                htmlFor="date"
                className="text-green-700 font-medium">
                Date
              </label>

              <input
                type="date"
                id="date"
                value={date}
                className="border border-gray-300 p-2 rounded-lg w-full"
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="time" className="text-green-700 font-medium">
                Time
              </label>
              <input
                type="time"
                id="time"
                value={time}
                className="border border-gray-300 p-2 rounded-lg w-full"
                onChange={(e) => setTime(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="reading" className="text-green-700 font-medium">
                Reading Numbers
              </label>
              <input
                type="number"
                id="reading"
                value={reading}
                className="border border-gray-300 p-2 rounded-lg w-full"
                onChange={(e) => setReading(e.target.value)}
              />
            </div>
            <button 
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded-lg">
            Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
