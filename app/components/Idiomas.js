import TextoAcerca from "./TextoAcerca";
import Titulo from "./Titulo";

export default function Idiomas({espanol}){
    const spanish =  espanol ? "Español" :`Spanish`;
    const spanishSubtitle = espanol ? `Nativo` : `Native speaker`;


    const english = espanol ?  `Inglés` : `English`;
    const englishSubtitle = espanol ? `Nivel B2+` : `B2+ level`;

    return <>
        <Titulo>{espanol ? "IDIOMAS" : "LANGUAGES"}</Titulo>
        <TextoAcerca titulo={spanish} subtitulo={spanishSubtitle}/>
        <TextoAcerca titulo={english} subtitulo={englishSubtitle}/>
        
    </>
}
