import React, { useRef, useEffect, useState } from 'react';
import '@/app/css/Footer.css'
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import RemoveCircleOutlineOutlinedIcon from '@mui/icons-material/RemoveCircleOutlineOutlined';
import {BsWhatsapp,BsEnvelope,BsTelegram} from "react-icons/bs"
import {MdOutlineNightlight} from "react-icons/md"
import { LightModeOutlined } from '@mui/icons-material';
import FormDialog from './Dialog';


const Footer = ({nigth,setNigth,espanol,setEspanol,seeMore,setSeeMore}) => {
  const [open, setOpen] = React.useState(false);


  const clickEvent = () => {
    console.log('click')
  }

  const telegramEvent = () => {
    window.open('https://t.me/fabios21','_blank')
  }

  const whatsAppEvent = () => {
    window.open(`https://wa.me?phone=542616071225`)
  }

  const mailEvent = () => {
    console.log('mail evetn')
  }

  const nigthClick = () =>{
    setNigth(!nigth);
  }

  const cambiarIdioma = () =>{
    setEspanol(!espanol)
  }

  const footerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // El footer está visible en la pantalla
          // Aquí puedes cambiar la clase o aplicar cualquier otra lógica
          footerRef.current.classList.add('fixed-bottom');
        } else {
          // El footer ya no está visible
          footerRef.current.classList.remove('visible-footer');
        }
      });
    });

    observer.observe(footerRef.current);

    return () => {
      observer.unobserve(footerRef.current);
    };
  }, []);

  return (
    <>
    
    <FormDialog open={open} setOpen={setOpen} espanol={espanol}/>
    <footer ref={footerRef} className="footer">
        <BsTelegram className='footerIcon'  onClick={telegramEvent}/>
        <BsWhatsapp className='footerIcon'  onClick={whatsAppEvent}/>
        <BsEnvelope className='footerIcon'  onClick={()=>{setOpen(!open)}}/>
        {nigth ? <MdOutlineNightlight className='footerIcon' onClick={nigthClick} /> : <LightModeOutlined className='footerIcon' onClick={nigthClick} />}
        {seeMore ? <RemoveCircleOutlineOutlinedIcon className='footerIcon' onClick={()=>{setSeeMore(false)}} />  : <AddCircleOutlineOutlinedIcon className='footerIcon' onClick={()=>{setSeeMore(true)}} />} 
        <span onClick={cambiarIdioma} className='footerText align-middle'>{espanol ? "ES" : "EN"}</span>
    </footer>
    </>
  );
};

export default Footer;