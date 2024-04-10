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
        <div className="col-12 col-sm-5">
          <Acerca />
          <Habilidades />
        </div>
        <div className="col-12 col-sm-7">
          <Titular />
          <ExperienciaLaboral />
          <Educacion />
        </div>
      </div>
    </div>
    </>
  )
}
