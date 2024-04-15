import TextoAcerca from "./TextoAcerca";
import Titulo from "./Titulo";

export default function Habilidades(){
    const hardskills = `Hardskills y tecnologías manejadas`;
    const hardSkillsItems = [`NodeJS, Php, Codeigniter, Express, Postman,
    MySQL , MongoDB, PostgreSQL, JQuery, Bootstrap,
    Axios, Vue, Git`,`Comprensión tipo de aplicaciones: monolíticas y
    microservicios, patrón de diseño MVC, uso y
    creación de APIS, manipulación de sesiones y
    control de usuarios con JWT, autorización y
    autenticación, encriptación, cifrado y hasheado de
    datos, base de datos relacionales y no
    relacionales, CSR y SSR, AJAX, SPA, versionados`];

    const softSkills = `Soft Skills`;
    const softSkillsItems = [`Adaptación, aprendizaje, trabajo individual y en
    grupos multidisciplinarios, pensamiento crítico`];
    
    const idiomas = `Idiomas`;
    const idiomasItems = [`Español nativo`,`Inglés nivel B1 - B2`]
    
    return <>
        <Titulo>Habilidades</Titulo>
        <TextoAcerca subtitulo={hardskills} listaSimple={hardSkillsItems}/>
        <TextoAcerca subtitulo={softSkills} listaSimple={softSkillsItems} />
        <TextoAcerca subtitulo={idiomas} listaSimple={idiomasItems} />
    </>
}