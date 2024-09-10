import TextoAcerca from "./TextoAcerca";
import Titulo from "./Titulo";

export default function Habilidades({espanol}){
    const hardskills =  espanol ?  `Hardskills y tecnologías manejadas` : `Hard Skills and technologies` ;
    const hardSkillsItems = espanol ?  [`NodeJS, Php, Codeigniter, Express, Postman,
    MySQL , MongoDB, PostgreSQL, JQuery, Bootstrap,
    Axios, Vue, Git`,`Comprensión tipo de aplicaciones: monolíticas y
    microservicios, patrón de diseño MVC, uso y
    creación de APIS, manipulación de sesiones y
    control de usuarios con JWT, autorización y
    autenticación, encriptación, cifrado y hasheado de
    datos, base de datos relacionales y no
    relacionales, CSR y SSR, AJAX, SPA, versionados`] : 
    [`NodeJS, Php, Codeigniter, Express, Postman,
    MySQL , MongoDB, PostgreSQL, JQuery, Bootstrap,
    Axios, Vue, Git`,`Comprehension of types of applicationes:
    monolithic and microservices, design pattern MVC,
    use and creation of APIS, sessions handle and
    user control with JWT, authorization and
    authentication, encryption and hash of data,
    relational and no relational databases, CSR y SSR,
    AJAX, SPA, versioned`];

    const softSkills = `Soft Skills`;
    const softSkillsItems = espanol ?  [`Adaptación, aprendizaje, trabajo individual y en
    grupos multidisciplinarios, pensamiento crítico`] : [`Adaptation, learning, self-managed worker and in
        multidisciplinary groups, critical thinking`];

    
    return <>
        <Titulo>{espanol ? 'Habilidades' : 'Skills'}</Titulo>
        <TextoAcerca subtitulo={hardskills} listaSimple={hardSkillsItems}/>
        <TextoAcerca subtitulo={softSkills} listaSimple={softSkillsItems} />
    </>
}