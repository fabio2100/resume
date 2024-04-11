import '@/app/css/Acerca.css'
import TextoAcerca from './TextoAcerca'

export default function Acerca(){

    const tituloAcerca = `Acerca de mi`;
    const infoAcerca = `Soy graduado en la carrera de Bioingeniería, y
    actualmente me dedico al desarrollo de software,
    principalmente desarrollo web.
    Soy una persona proactiva, responsable y curiosa
    con buenas relaciones interpersonales.`;
    const datos = `Datos de contacto`;
    const infoDatos = `Celular: (+54) 261 6071225\n
    Correo: squizzato.fabio@gmail.com \n
    Sitio: https://fabio2100.github.io/curriculum/\n
    Dirección: San Martín 1756, Godoy Cruz, Mendoza,
    Argentina`;
    const arrayInfoDatos = [{nombre:'Celular',descripcion:`(+54) 261 6071225`},{nombre:'Correo',descripcion:`squizzato.fabio@gmail.com`},{nombre:'Sitio',descripcion:`https://fabio2100.github.io/curriculum/`},{nombre:'Dirección',descripcion:`Godoy Cruz, Mendoza, Argentina`},]
    const objInfoDatos = {Celular:`(+54) 261 6071225`,Correo:`squizzato.fabio@gmail.com`,Sitio:`https://fabio2100.github.io/curriculum/`,Dirección:`Godoy Cruz, Mendoza, Argentina`}

    return <>
        <div className="acerca">
            <img className="imagenPerfil mb-4" src='imagen.jfif'/>
            <TextoAcerca titulo={tituloAcerca} texto={infoAcerca}/>
            <TextoAcerca titulo={datos} lista={arrayInfoDatos}/>       
        </div>
    </>
}