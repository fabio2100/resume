import TextoAcerca from "./TextoAcerca";
import Titulo from "./Titulo";


export default function ExperienciaLaboral({espanol}){
    const vm = `Jr Web Developer`;
    const vmSubtitle = espanol ? `Visual Medica, Sep 2021 - Presente` : `Visual Medica, Sep 2021 - Current`;
    const vmListaSimple =  [espanol ? `Desarrollo web en empresa dedicada a ofrecer servicios de
    software para instituciones médicas. Visualización de estudios
    médicos.` : `Web development in a company dedicated to offering
    software services for medical institutions. Medical studies
    visualization.`,`Php, Codeigniter, NodeJs, Express, JQuery, Bootstrap`];

    const medicor = espanol ?  `Asistente Técnico en neurocirugías` : `Neurosurgery technical assistant`;
    const medicorSubtitle = espanol ? `Medicor SA, Ago 2019 - Jun 2021` : `Medicor SA, Aug 2019 - Jun 2021`;
    const medicorItems = espanol ?  [`Asistencia a neurocirugias`,`Planeamiento y preparación del neuronavegador, recolección de
    imágenes y planificación de ruta de abordaje`,`Planeamiento, puesta en marcha y resolución de conflictos de
    neuronavegador, aspirador ultrasónico, drill craneótomo y placas
    y material de cierre`] : [`Assistance to neurosurgeries`,`Planning and preparation of neuronavigation system, image
    collection and boarding route planning`,`Planning, commissioning and conflict resolution of
    neuronavigation system, ultrasonic aspirator and drill craniotome
    and closure plates and material`]

    return <>
        <Titulo>{espanol ? "EXPERIENCIA LABORAL" : "WORK EXPERIENCE"}</Titulo>
        <TextoAcerca titulo={vm} subtitulo={vmSubtitle} listaSimple={vmListaSimple}/>
        <TextoAcerca titulo={medicor} subtitulo={medicorSubtitle} listaSimple={medicorItems}/>
        
    </>
}