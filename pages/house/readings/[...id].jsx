import React,{useState} from 'react';
import { useForm } from 'react-hook-form';
import { useSession } from 'next-auth/react';
import Modal from '../../../components/Modal'
import LoginBtn from '../../../components/LoginBtn';
import QRCode from 'react-qr-code';

const Form = () => {
    const {data:session} = useSession()
    const [instructions,changeInstructions] = useState("You can find the gas and electricity meter in the basement")
    const readings = [
        {
          picture: "https://c1.staticflickr.com/1/188/397510397_d86b47de21_b.jpg",
          date: "12.02.2023 12:00pm",
          number: 1243325
        },
        {
          picture: "http://www.ourhomefromscratch.com/wp-content/uploads/2011/07/DSC035551-1024x768.jpg",
          date: "12.03.2023 12:00pm",
          number: 234325
        },
        {
          picture: "https://learn.openenergymonitor.org/electricity-monitoring/pulse-counting/files/uk-gas.jpg",
          date: "12.04.2023 12:00pm",
          number: 3243325
        },{
          picture: "https://www.senokoenergy.com/-/media/project/senoko-website/blog/reading-meters/image-cumulative-meter-768x576.jpg?h=576&w=768&hash=1CD291312E18DC1EAD1210B08A7D9EA4",
          date: "12.05.2023 12:00pm",
          number: 1163325
        }
    ]

  return (
    <div className="bg-green-50 min-h-screen">
      <div className="flex justify-between p-4">
        <h2 className='font-semibold'>House</h2>
        <Modal/>
        <LoginBtn/>
      </div>
      <div className="p-4">
        <div>
          <h1>Instruction</h1>
          <div>{instructions}</div>
          <img src={"https://2.bp.blogspot.com/-kWd8UXn0yKs/WAic1rkEduI/AAAAAAAATzw/JEnBAJ7EuCkGslrui0Bcx8V5zBwpyE8sQCLcB/s1600/P1170499.JPG"}></img>
          {session?.user ? <button onClick={changeInstructions} className='btn'>Change instructions</button> : ""}
        </div>
        <div className="w-full max-w-screen-lg mx-auto p-4 border rounded-lg bg-white">
          {readings.map((value,key) =>{
            return (<div>
                <p>{value.date}</p>
                <img src={value.picture}/>
                <div>{value.number}</div>    
            </div>)
          })}
        </div>
      </div>
    </div>
  );
};

export default Form;
