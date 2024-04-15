import TextoAcerca from "./TextoAcerca";
import Titulo from "./Titulo";


export default function ExperienciaLaboral(){
    const vm = `Jr Web Developer`;
    const vmSubtitle = `Visual Medica, Sep 2021 - Presente`;
    const vmListaSimple = [`Desarrollo web en empresa dedicada a ofrecer servicios de
    software para instituciones médicas. Visualización de estudios
    médicos.`,`Php, Codeigniter, NodeJs, Express, JQuery, Bootstrap`];

    const medicor = `Asistente Técnico en neurocirugías`;
    const medicorSubtitle = `Medicor SA, Ago 2019 - Jun 2021`;
    const medicorItems = [`Asistencia a neurocirugias`,`Planeamiento y preparación del neuronavegador, recolección de
    imágenes y planificación de ruta de abordaje`,`Planeamiento, puesta en marcha y resolución de conflictos de
    neuronavegador, aspirador ultrasónico, drill craneótomo y placas
    y material de cierre`]

    return <>
        <Titulo>EXPERIENCIA LABORAL</Titulo>
        <TextoAcerca titulo={vm} subtitulo={vmSubtitle} listaSimple={vmListaSimple}/>
        <TextoAcerca titulo={medicor} subtitulo={medicorSubtitle} listaSimple={medicorItems}/>
        
    </>
}