import React, { useRef, useEffect } from 'react';
import '@/app/css/Footer.css'
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import {BsWhatsapp,BsEnvelope,BsTelegram} from "react-icons/bs"
import {RiTelegramLine} from "react-icons/ri"
import {MdOutlineNightlight} from "react-icons/md"

const Footer = () => {

  const clickEvent = () => {
    console.log('click')
  }

  const telegramEvent = () => {
    window.open('https://t.me/fabios21','_blank')
  }

  const whatsAppEvent = () => {
    window.open(`https://wa.me?phone=5492616071225`)
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
    <footer ref={footerRef} className="footer">
        <BsTelegram className='footerIcon'  onClick={telegramEvent}/>
        <BsWhatsapp className='footerIcon'  onClick={whatsAppEvent}/>
        <BsEnvelope className='footerIcon'  onClick={clickEvent}/>
        <MdOutlineNightlight className='footerIcon' onClick={clickEvent} />
        <AddCircleOutlineOutlinedIcon className='footerIcon' onClick={clickEvent} />
    </footer>
  );
};

export default Footer;