import TextoAcerca from "./TextoAcerca";
import Titulo from "./Titulo";

export default function Educación({espanol}){

    const um = `Universidad de Mendoza`;
    const umSubtitle =  espanol ? `Bioingeniería, 2018` : `Bioengineer, 2018`;
    const umItems = espanol ?  [`Mendoza, Argentina`,`Carrera de grado`,`Promedio académico: 8.14`] : [`Mendoza, Argentina`,`Five years title`,`Average: 8.14`];

    const isep = espanol ? `Colegio Secundario ISEP` : `ISEP High School`;
    const isepSubtitle = espanol ? `Bachiler en Humanidades y Ciencias Sociales` : `Humanities and social sciences bachelor`;
    const isepItems = espanol ?  [`Graduado con honores académicos`,`Promedio académico: 9.14`] : [`Graduated with academic honors`,`Average: 9.14`]

    return <>
        <Titulo>EDUCACIÓN</Titulo>
        <TextoAcerca titulo={um} subtitulo={umSubtitle} listaSimple={umItems}/>
        <TextoAcerca titulo={isep} subtitulo={isepSubtitle} listaSimple={isepItems}/>
    </>
}