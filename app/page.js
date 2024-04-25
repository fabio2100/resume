'use client'
import ExperienciaLaboral from "./components/ExperienciaLaboral";
import Educacion from "./components/Educacion";
import Titular from "./components/Titular";
import Acerca from "./components/Acerca";
import Habilidades from "./components/Habilidades";
import Footer from "./components/Footer";
import { useState } from "react";

export default function Home() {

  const [nigth,setNigth] = useState(true)

  

  return (
    <>
    <div className={nigth ? "container mt-3 mb-5" :"container mt-3 mb-5 noche"}>
      <div className="row">
        <div className="col-12 col-md-5 hiddenBig">
          <Acerca  nigth={nigth}/>
          <Habilidades />
        </div>
        <div className="col-12 col-md-7">
          <Titular nigth={nigth}/>
          <div className="hiddenSmall">
            <Acerca nigth={nigth}/>
          </div>
          <ExperienciaLaboral />
          <Educacion />
          <div className="hiddenSmall">
            <Habilidades />
          </div>
        </div>
      </div>
    </div>
    <Footer nigth={nigth} setNigth={setNigth} />
    </>
  )
}
