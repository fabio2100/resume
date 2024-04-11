import TextoAcerca from "./TextoAcerca";
import Titulo from "./Titulo";

export default function Habilidades(){
    const hardskills = `Hardskills y tecnologías manejadas`;
    
    return <>
        <Titulo>Habilidades</Titulo>
        <TextoAcerca subtitulo={hardskills} />
    </>
}