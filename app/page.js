import ExperienciaLaboral from "./components/ExperienciaLaboral";
import Educacion from "./components/Educacion";
import Titular from "./components/Titular";
import Acerca from "./components/Acerca";
import Habilidades from "./components/Habilidades";

export default function Home() {
  return (
    <>
    <div className="container mt-3">
      <div className="row">
        <div className="col-12 col-md-5 hiddenBig">
          <Acerca />
          <Habilidades />
        </div>
        <div className="col-12 col-md-7">
          <Titular />
          <div className="hiddenSmall">
            <Acerca/>
          </div>
          <ExperienciaLaboral />
          <Educacion />
          <div className="hiddenSmall">
            <Habilidades />
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
