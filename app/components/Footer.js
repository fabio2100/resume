import React, { useRef, useEffect } from 'react';
import '@/app/css/Footer.css'
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import {BsWhatsapp,BsEnvelope,BsTelegram} from "react-icons/bs"
import {RiTelegramLine} from "react-icons/ri"
import {MdOutlineNightlight} from "react-icons/md"

const Footer = () => {
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
        <BsTelegram className='footerIcon' />
        <BsWhatsapp className='footerIcon' />
        <BsEnvelope className='footerIcon' />
        <MdOutlineNightlight className='footerIcon' />
        <AddCircleOutlineOutlinedIcon className='footerIcon' />
    </footer>
  );
};

export default Footer;