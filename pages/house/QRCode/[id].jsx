import React,{useState} from 'react';
import { useForm } from 'react-hook-form';
import Modal from '../../../components/Modal'
import LoginBtn from '../../../components/LoginBtn';
import QRCode from 'react-qr-code';
import { useRouter } from 'next/router';

const Form = () => {
  const router = useRouter()
  return (
    <QRCode
          size={168}
          value={`http://localhost:3000/house/readings/${router?.query?.id}`}/>
  );
};

export default Form;
