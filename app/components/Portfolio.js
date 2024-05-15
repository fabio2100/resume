import TextoAcerca from "./TextoAcerca";
import Titulo from "./Titulo";

export default function Portfolio({espanol}){

    const urlProyecto = espanol ? `Url del proyecto` : `Project Url`;
    const urlRepositorio = espanol ? `Url del repositorio` : `Repository Url`;
    const urlInnovar = espanol ? `Innovar 2019 awards url` : 'Url de premios Innovar 2019';
    const urlVideo = espanol ? 'Url de un video del software en funcionamiento' : 'Url of a video of software working';
    const urlNoticia = espanol ? `Url de noticia de premiación` : 'Url of the news of the awards';
    const urlNacion = espanol ? 'Url de mención en diario La Nación' : 'La Nacion newspaper mention';
    
    const fetchingData = espanol ? `Obteniendo data de un servidor` : `Fetching data from a server`;
    const fetchingDataSubtitle = `React`;
    const arrayFetchingData = [{url:`https://fetching-data-ochre.vercel.app/`,nombre:urlProyecto},{url:`https://github.com/fabio2100/fetching-data`,nombre:urlRepositorio}]

    const flagsGame = espanol ? `Juego de banderas` : `Flags game`;
    const flagsGameSubtitle = `React, Boostrap`;
    const flagsGameData = [{url:`https://flags-game-sable.vercel.app/`,nombre:urlProyecto},{url:`https://github.com/fabio2100/flags-game`,nombre:urlRepositorio}]

    const prodeSimulator = espanol ? `Simulador de prode` : `Prode Simulator`;
    const prodeSimulatorSubtitle = `React`;
    const prodeSimulatorData = [{url:`https://simulador-prode-dos.vercel.app/`,nombre:urlProyecto},{url:`https://github.com/fabio2100/simulador-prode-dos`,nombre:urlRepositorio}]

    const atmSimulator = espanol ? `Simulador de banco` : `Bank simulator`;
    const atmSimulatorSubtitle = `Java, JFrame, MySql`;
    const atmSimulatorData = [{url:`https://github.com/fabio2100/cajeroAutomatico`,nombre:urlRepositorio}]
   
    const surgeriesTrack = espanol ? `WebApp tipo calendario para llevar las cirugías de una empresa` : `WebApp type calendar to track surgeries from a company`;
    const surgeriesTrackSubtitle = `Php, MySql, Bootstrap`;
    const surgeriesTrackData = [{url:`https://canisminor.000webhostapp.com/cirugias/`,nombre:urlProyecto},{url:`https://github.com/fabio2100/gestionDeCirugias`,nombre:urlRepositorio}]
   
    const weatherApp = espanol ? `Aplicación para conocer el clima` : `Weather App`;
    const weatherAppSubtitle = `Node, express, vercel, vue, bulma`;
    const weatherAppData = [{url:`https://clima-back.vercel.app/clima.html`,nombre:urlProyecto},{url:`https://github.com/fabio2100/clima-back`,nombre:urlRepositorio},{url:`https://github.com/fabio2100/clima`,nombre:urlRepositorio}]
   
    const restServer = espanol ? `Modelo Rest Server` : `Rest Server Model`;
    const restServerSubtitle = `Node, MongoDB, express`;
    const restServerData = [{url:`https://github.com/fabio2100/curso-node-restserver/`,nombre:urlRepositorio}]
   
    const trackISS = espanol ? `Traqueador de estación espacial internacional` : `International Space Station tracker`;
    const trackISSSubtitle = `Vue, PWA`;
    const trackISSData = [{url:`https://fabio2100.github.io/issPWA/`,nombre:urlProyecto},{url:`https://github.com/fabio2100/issPWA`,nombre:urlRepositorio}]

    const commentsPost = espanol ? `Pequeña aplicaicón para postear comentarios` : `Little app to post comments`;
    const commentsPostSubtitle = `Vue, Bootstrap, node, MongoDb, express`;
    const commentsPostData = [{url:`https://github.com/fabio2100/blogPequenio`,nombre:urlRepositorio}];

    const elections = espanol ? `Simulador de boleta única Mendoza` : `Simulator of election tickets`;
    const electionsSubtitle = `Vue, Vercel`;
    const electionsData = [{url:`https://boleta-unica-mendoza.vercel.app/`,nombre:urlProyecto},{url:`https://github.com/fabio2100/boleta-unica-mendoza`,nombre:urlRepositorio}]

    const football = espanol ? `Simulador de torneo de fútbol` : `Football tournament simulator`;
    const footballSubtitle = `Bootstrap, Php, MySql`;
    const footballData = [{url:`https://canisminor.000webhostapp.com/torneo/public/`,nombre:urlProyecto},{url:`https://github.com/fabio2100/torneoMVC`,nombre:urlRepositorio}]

    const CAD = espanol ? `Diagnóstico de mamografías asistido por ordenador` : `Computer Aided Diagnoses`;
    const CADSubtitle = `Matlab`;
    const CADData = [{url:`https://github.com/fabio2100/Computer-Aided-Diagnoses-for-mammographies`,nombre:urlRepositorio},{nombre:urlVideo,url:`https://www.youtube.com/watch?v=Z_wVsGEElHc`},{nombre:urlInnovar,url:`https://www.innovar.mincyt.gob.ar/docs/ganadores2019-innovar.pdf`},{nombre:urlNoticia,url:'https://www.argentina.gob.ar/noticias/en-su-15deg-aniversario-innovar-premio-al-talento-argentino'},{nombre:urlNacion,url:'https://www.lanacion.com.ar/sociedad/inteligencia-artificial-nueva-aliada-cancer-mama-nid2311640/'}]

    const fourierTransform = espanol ? `Calculadora de la Transformada de Fourier` : `Fourier Transform Calculator`;
    const fourierTransformSubtitle = `Matlab`;
    const fourierTransformData = [{url:`https://github.com/fabio2100/FourierTransform`,nombre:urlRepositorio}]

    const bugsSolutions = espanol ? `Soluciones a bugs` : `Bugs solutions`;
    const bugsSolutionsSubtitle = `GitHub`;
    const bugsSolutionsData = [{url:`https://github.com/fabio2100/soluciones`,nombre:urlRepositorio}]

    

    const qrEntradas = espanol ? `Entradas qr` : `Qr entries`;
    const qrEntradasSubtitle = `Postgresql, NextJs`;
    const qrEntradasData = [{url:`https://github.com/fabio2100/qrentradas`,nombre:urlRepositorio}]

       

    const resumeOld = espanol ? `Página personal anterior` : `Old personal page`;
    const resumeOldSubtitle = `Bootstrap`;
    const resumeOldData = [{url:`https://fabio2100.github.io/curriculum/`,nombre:urlProyecto},{url:`https://github.com/fabio2100/curriculum`,nombre:urlRepositorio}]

    return(
        <>
        <Titulo>PORTFOLIO</Titulo>
        <TextoAcerca titulo={resumeOld} subtitulo={resumeOldSubtitle} listaLinks={resumeOldData}/>
        <TextoAcerca titulo={qrEntradas} subtitulo={qrEntradasSubtitle} listaLinks={qrEntradasData}/>
        <TextoAcerca titulo={fetchingData} subtitulo={fetchingDataSubtitle} listaLinks={arrayFetchingData}/>
        <TextoAcerca titulo={flagsGame} subtitulo={flagsGameSubtitle} listaLinks={flagsGameData}/>
        <TextoAcerca titulo={prodeSimulator} subtitulo={prodeSimulatorSubtitle} listaLinks={prodeSimulatorData}/>
        <TextoAcerca titulo={atmSimulator} subtitulo={atmSimulatorSubtitle} listaLinks={atmSimulatorData}/>
        <TextoAcerca titulo={surgeriesTrack} subtitulo={surgeriesTrackSubtitle} listaLinks={surgeriesTrackData}/>
        <TextoAcerca titulo={weatherApp} subtitulo={weatherAppSubtitle} listaLinks={weatherAppData}/>
        <TextoAcerca titulo={restServer} subtitulo={restServerSubtitle} listaLinks={restServerData}/>
        <TextoAcerca titulo={trackISS} subtitulo={trackISSSubtitle} listaLinks={trackISSData}/>
        <TextoAcerca titulo={commentsPost} subtitulo={commentsPostSubtitle} listaLinks={commentsPostData}/>
        <TextoAcerca titulo={elections} subtitulo={electionsSubtitle} listaLinks={electionsData}/>
        <TextoAcerca titulo={football} subtitulo={footballSubtitle} listaLinks={footballData}/>
        <TextoAcerca titulo={CAD} subtitulo={CADSubtitle} listaLinks={CADData}/>
        <TextoAcerca titulo={fourierTransform} subtitulo={fourierTransformSubtitle} listaLinks={fourierTransformData}/>
        <TextoAcerca titulo={bugsSolutions} subtitulo={bugsSolutionsSubtitle} listaLinks={bugsSolutionsData}/>
        </>
    )
}