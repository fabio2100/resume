import '@/app/css/Acerca.css'
import TextoAcerca from './TextoAcerca'

export default function Acerca({nigth,espanol,seeMore}){

    const tituloAcerca = `Acerca de mi`;
    const infoAcerca = `Soy graduado en la carrera de Bioingeniería, y
    actualmente me dedico al desarrollo de software,
    principalmente desarrollo web.
    Soy una persona proactiva, responsable y curiosa
    con buenas relaciones interpersonales.`;
    const datos = `Datos de contacto`;
    const datosEn = `Personal Details`;
    const arrayInfoDatos = [{nombre:'Celular',descripcion:`(+54) 261 6071225`},{nombre:'Correo',descripcion:`squizzato.fabio@gmail.com`},{nombre:'Dirección',descripcion:`Godoy Cruz, Mendoza, Argentina`},]
    const arrayInfoDatosEn = [{nombre:'Phone',descripcion:`(+54) 261 6071225`},{nombre:'Email',descripcion:`squizzato.fabio@gmail.com`},{nombre:'Adress',descripcion:`Godoy Cruz, Mendoza, Argentina`},]

    const websiteLinks = espanol ? [{url:`https://resume-fabio.vercel.app/`,nombre:'Sitio'}] : [{url:`https://resume-fabio.vercel.app/`,nombre:'Website'}]

    const profiles = espanol ? `Perfiles` : `Profiles`;
    const profileLinks =  [{url:`https://www.linkedin.com/in/squizzato-fabio/`,nombre:'Linkedin'},
        {url:`https://github.com/fabio2100`,nombre:'GitHub'},
        {url:`https://www.w3profile.com/fabio21`,nombre:'W3 School'},
        {url:`https://www.facebook.com/fabio21`,nombre:'Facebook'},
        {url:`https://www.instagram.com/fabios15`,nombre:'Instagram'},
        {url:`https://www.mathworks.com/matlabcentral/profile/authors/7845291?s_tid=gn_comm`,nombre:'Matlab'}] 
    
    const tituloAcercaEn = `About Me`;
    const infoAcercaEn = `I’m Bioengineer graduated, and currently I’m
    working as software developer, mainly web
    development.
    I’m a proactive, responsible and curious person
    with good relationships.`;
    
    return <>
        <div className={nigth ? "acerca" : "acercaNoche"}>
            <img className="imagenPerfil mb-4" src='imagen2.jpg'/>
            <TextoAcerca noche={nigth} titulo={espanol ? tituloAcerca : tituloAcercaEn} texto={espanol?infoAcerca:infoAcercaEn}/>
            <TextoAcerca noche={nigth} titulo={espanol ? datos : datosEn} lista={espanol ? arrayInfoDatos : arrayInfoDatosEn} listaLinks={websiteLinks}/>
            {seeMore && <TextoAcerca noche={nigth} titulo={profiles} listaLinks={profileLinks}/>}       
        </div>
    </>
}