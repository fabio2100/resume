import TextoAcerca from "./TextoAcerca";
import Titulo from "./Titulo";

export default function Cursos({espanol}){


    const bbddUtnBa = espanol ? `Diplomatura en base de datos` : `Database Diplomate`;
    const bbddUtnBaSubtitle = espanol ? `UTN BA - Centro de E Learning` : `UTN BA - E learning Center`;
    const aprendeReact = espanol ? `Aprende React` : `Learning React`;
    const aprendeReactSubtitle =  `Codeacademy`;
    const javaIntermediate = espanol ? `Java Intermedio Oracle Sun` : `Java Intermediate Oracle Sun`;
    const javaIntermediateSubtitle = espanol ? `UTN Academias Mendoza` : `UTN Academy Mendoza`;
    const nodeZero = espanol ? `Node: Desde cero a experto` : `Node: From zero to expert`;
    const nodeZeroSubtitle = `Udemy, Fernando Herrera`;
    const learnJS = espanol ? `Aprende Javascript ES6, HTML, CSS3 y NodeJS desde cero` : `Learn Javascript ES6, HTML, CSS3 and NodeJS from zero`;
    const learnJSSubtitle = `Udemy, Nicolas Schurman`;
    const jsDe0 = espanol ? `Javascript: de cero hasta los detalles (ES5)` : `Javascript: From zero to details (ES5)`;
    const jsDe0Subtitle = `Udemy, Fernando Herrera`;
    const phpPildoras = espanol ? `Curso Php/MySql` : `Course Php/MySql`;
    const phpPildorasSubtitle = `Píldoras informáticas`;
    const python = espanol ? `Python desde cero` : `Python from zero`;
    const pythonSubtitle = `Píldoras informáticas`;

    return (<>
        <Titulo >{espanol ?"CURSOS Y CERTIFICADOS" : "COURSES AND CERTIFICATES"}</Titulo>
        <TextoAcerca titulo={bbddUtnBa} subtitulo={bbddUtnBaSubtitle} listaSimpleLinks={[`https://sceu.frba.utn.edu.ar/e-learning/detalle/diplomatura/1294/diplomatura-en-bases-de-datos`]}/>
        <TextoAcerca titulo={aprendeReact} subtitulo={aprendeReactSubtitle} listaSimpleLinks={[`https://www.codecademy.com/learn/react-101`]}/>
        <TextoAcerca titulo={javaIntermediate} subtitulo={javaIntermediateSubtitle} listaSimpleLinks={[`https://academiasutnmza.com/java-intermedio/`]}/>
        <TextoAcerca titulo={nodeZero} subtitulo={nodeZeroSubtitle} listaSimpleLinks={[`https://www.udemy.com/course/node-de-cero-a-experto/`]}/>
        <TextoAcerca titulo={learnJS} subtitulo={learnJSSubtitle} listaSimpleLinks={[`https://www.udemy.com/course/aprende-javascript-es9-html-css3-y-nodejs-desde-cero/?couponCode=ST2MT43024`]}/>
        <TextoAcerca titulo={jsDe0} subtitulo={jsDe0Subtitle} listaSimpleLinks={[`https://www.udemy.com/course/javascript-de-cero-hasta-los-detalles/`]}/>
        <TextoAcerca titulo={phpPildoras} subtitulo={phpPildorasSubtitle} listaSimpleLinks={[`https://www.youtube.com/watch?v=I75CUdSJifw&list=PLU8oAlHdN5BkinrODGXToK9oPAlnJxmW_`]}/>
        <TextoAcerca titulo={python} subtitulo={pythonSubtitle} listaSimpleLinks={[`https://www.youtube.com/watch?v=G2FCfQj-9ig&list=PLU8oAlHdN5BlvPxziopYZRd55pdqFwkeS`]}/>
        </>
    )
}