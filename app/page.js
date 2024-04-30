'use client'
import ExperienciaLaboral from "./components/ExperienciaLaboral";
import Educacion from "./components/Educacion";
import Titular from "./components/Titular";
import Acerca from "./components/Acerca";
import Habilidades from "./components/Habilidades";
import Footer from "./components/Footer";
import { useState } from "react";

export default function Home() {

  const [nigth,setNigth] = useState(true);
  const [espanol,setEspanol] = useState(true);

  

  return (
    <>
    <div className={nigth ? "container mt-3 mb-5" :"container mt-3 mb-5 noche"}>
      <div className="row">
        <div className="col-12 col-md-5 hiddenBig">
          <Acerca  nigth={nigth} espanol={espanol}/>
          <Habilidades espanol={espanol}/>
        </div>
        <div className="col-12 col-md-7">
          <Titular nigth={nigth}/>
          <div className="hiddenSmall">
            <Acerca nigth={nigth} espanol={espanol}/>
          </div>
          <ExperienciaLaboral espanol={espanol}/>
          <Educacion espanol={espanol}/>
          <div className="hiddenSmall">
            <Habilidades espanol={espanol}/>
          </div>
        </div>
      </div>
    </div>
    <Footer nigth={nigth} setNigth={setNigth} espanol={espanol} setEspanol={setEspanol}/>
    </>
  )
}
