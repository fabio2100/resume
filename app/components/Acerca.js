import '@/app/css/Acerca.css'
import TextoAcerca from './TextoAcerca'

export default function Acerca({nigth,espanol}){

    const tituloAcerca = `Acerca de mi`;
    const infoAcerca = `Soy graduado en la carrera de Bioingeniería, y
    actualmente me dedico al desarrollo de software,
    principalmente desarrollo web.
    Soy una persona proactiva, responsable y curiosa
    con buenas relaciones interpersonales.`;
    const datos = `Datos de contacto`;
    const datosEn = `Personal Details`;
    const arrayInfoDatos = [{nombre:'Celular',descripcion:`(+54) 261 6071225`},{nombre:'Correo',descripcion:`squizzato.fabio@gmail.com`},{nombre:'Sitio',descripcion:`https://fabio2100.github.io/curriculum/`},{nombre:'Dirección',descripcion:`Godoy Cruz, Mendoza, Argentina`},]
    const arrayInfoDatosEn = [{nombre:'Phone',descripcion:`(+54) 261 6071225`},{nombre:'Email',descripcion:`squizzato.fabio@gmail.com`},{nombre:'Website',descripcion:`https://fabio2100.github.io/curriculum/`},{nombre:'Adress',descripcion:`Godoy Cruz, Mendoza, Argentina`},]

    const tituloAcercaEn = `About Me`;
    const infoAcercaEn = `I’m Bioengineer graduated, and currently I’m
    working as software developer, mainly web
    development.
    I’m a proactive, responsible and curious person
    with good relationships.`;
    
    return <>
        <div className={nigth ? "acerca" : "acercaNoche"}>
            <img className="imagenPerfil mb-4" src='imagen.png'/>
            <TextoAcerca noche={nigth} titulo={espanol ? tituloAcerca : tituloAcercaEn} texto={espanol?infoAcerca:infoAcercaEn}/>
            <TextoAcerca noche={nigth} titulo={espanol ? datos : datosEn} lista={espanol ? arrayInfoDatos : arrayInfoDatosEn}/>       
        </div>
    </>
}