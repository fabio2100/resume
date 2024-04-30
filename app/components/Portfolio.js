import TextoAcerca from "./TextoAcerca";
import Titulo from "./Titulo";

export default function Portfolio({espanol}){

    const fetchingData = espanol ? `Obteniendo data de un servidor` : `Fetching data from a server`;
    const fetchingDataSubtitle = `React`;
    const urlProyecto = espanol ? `Url del proyecto` : `Project Url`;
    const urlRepositorio = espanol ? `Url del repositorio` : `Repository Url`;
    
    const arrayFetchingData = [{url:`https://fetching-data-ochre.vercel.app/`,nombre:urlProyecto},{url:`https://github.com/fabio2100/fetching-data`,nombre:urlRepositorio}]

    return(
        <>
        <Titulo>PORTFOLIO</Titulo>
        <TextoAcerca titulo={fetchingData} subtitulo={fetchingDataSubtitle} listaLinks={arrayFetchingData}/>
        </>
    )
}