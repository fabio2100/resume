import '@/app/css/Acerca.css'
import TextoAcerca from './TextoAcerca'

export default function Acerca({nigth}){

    const tituloAcerca = `Acerca de mi`;
    const infoAcerca = `Soy graduado en la carrera de Bioingeniería, y
    actualmente me dedico al desarrollo de software,
    principalmente desarrollo web.
    Soy una persona proactiva, responsable y curiosa
    con buenas relaciones interpersonales.`;
    const datos = `Datos de contacto`;
    const arrayInfoDatos = [{nombre:'Celular',descripcion:`(+54) 261 6071225`},{nombre:'Correo',descripcion:`squizzato.fabio@gmail.com`},{nombre:'Sitio',descripcion:`https://fabio2100.github.io/curriculum/`},{nombre:'Dirección',descripcion:`Godoy Cruz, Mendoza, Argentina`},]
    
    return <>
        <div className={nigth ? "acerca" : "acercaNoche"}>
            <img className="imagenPerfil mb-4" src='imagen.png'/>
            <TextoAcerca titulo={tituloAcerca} texto={infoAcerca}/>
            <TextoAcerca titulo={datos} lista={arrayInfoDatos}/>       
        </div>
    </>
}