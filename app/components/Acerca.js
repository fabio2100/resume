import '@/app/css/Acerca.css'
import TextoAcerca from './TextoAcerca'

export default function Acerca(){

    const tituloAcerca = `Acerca de mi`;
    const infoAcerca = `Soy graduado en la carrera de Bioingeniería, y
    actualmente me dedico al desarrollo de software,
    principalmente desarrollo web.
    Soy una persona proactiva, responsable y curiosa
    con buenas relaciones interpersonales.`;

    return <>
        <div className="acerca">
            <img className="imagenPerfil mb-4" src='imagen.jfif'/>
            <TextoAcerca titulo={tituloAcerca} texto={infoAcerca}/>
            <TextoAcerca titulo={'Datos de contacto'}/>       
        </div>
    </>
}