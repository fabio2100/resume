import TextoAcerca from "./TextoAcerca";
import Titulo from "./Titulo";

export default function Educación(){

    const um = `Universidad de Mendoza`;
    const umSubtitle = `Bioingeniería, 2018`;
    const umItems = [`Mendoza, Argentina`,`Carrera de grado`,`Promedio académico: 8.14`];

    const isep = `Colegio Secundario ISEP`;
    const isepSubtitle = `Bachiler en Humanidades y Ciencias Sociales`;
    const isepItems = [`Graduado con honores académicos`,`Promedio académico: 9.14`]

    return <>
        <Titulo>EDUCACIÓN</Titulo>
        <TextoAcerca titulo={um} subtitulo={umSubtitle} listaSimple={umItems}/>
        <TextoAcerca titulo={isep} subtitulo={isepSubtitle} listaSimple={isepItems}/>
    </>
}