import TextoAcerca from "./TextoAcerca";
import Titulo from "./Titulo";

export default function EnglishCourses({espanol}){


    const uncuyo = espanol ? `English Plus B2+` : `English Plus B2+`;
    const uncuyoSubtitle = espanol ? `UNCuyo FFyL` : `UNCuyo FFyL`;

    const argentinaPrograma = espanol ? `Argentina Programa 4.0` : `Argentina Programa 4.0`;
    const argentinaProgramaSubtitle = espanol ? `Centro Universitario de Idiomas` : `Centro Universitario de Idiomas`;

    const englishForWork = espanol ? `English for work` : `English for work`;
    const englishForWorkSubtitle = `British Council` ;

    const efset = `EF SET certificate`;
    const efsetSubtitle = `EF SET` ;
   

    return (<>
        <Titulo >{espanol ? "CURSOS DE INGLÉS" : "ENGLISH COURSES"}</Titulo>
        <TextoAcerca titulo={uncuyo} subtitulo={uncuyoSubtitle} listaSimpleLinks={[`https://ffyl.uncuyo.edu.ar/curso-idiomas`]}/>
        <TextoAcerca titulo={argentinaPrograma} subtitulo={argentinaProgramaSubtitle} listaSimpleLinks={[`https://fabio2100.github.io/curriculum/assets/pdf/certificado_argentina_programa_ingles.pdf`]}/>
        <TextoAcerca titulo={englishForWork} subtitulo={englishForWorkSubtitle} listaSimpleLinks={[`https://credentials.englishonline.britishcouncil.org/profile/eu-fabiolucianosquizzato973691/wallet`]}/>
        <TextoAcerca titulo={efset} subtitulo={efsetSubtitle} listaSimpleLinks={[`https://cert.efset.org/vquArc`]}/>
        </>
    )
}