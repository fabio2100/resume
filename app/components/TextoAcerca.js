export default function TextoAcerca({titulo=false,lista=false,texto=false,subtitulo=false,listaSimple=false,nigth=false,listaLinks=false,listaSimpleLinks=false}){

    let listItems;
    if(lista){
        listItems = lista.map(element => {
            return <li key={element.nombre}>{element.nombre}: {element.descripcion} </li>
        })
    }
    let listaSimpleItems; 
    if(listaSimple){
        listaSimpleItems = listaSimple.map(element =>{
            return <li key={element}>{element}</li>
        })
    }
    
    let listaLinksItems;
    if(listaLinks){
        listaLinksItems = listaLinks.map(element => {
            return <li key={element.url}>{element.nombre}: <a target="_blank" href={element.url}>{element.url}</a></li>
        })
    }

    let listaSimpleLinksItems; 
    if(listaSimpleLinks){
        listaSimpleLinksItems = listaSimpleLinks.map(element =>{
            return <li key={element}><a target="_blank" href={element}>{element}</a></li>
        })
    }

    return <>
        <div className="textoAcerca">
            <p className={nigth ? "tituloAcerca" : "tituloAcercaNoche"}>{titulo}</p>
            <p className="subtitulo">{subtitulo}</p>
            <p>{texto}</p>
            <ul className="listado">
                {listItems}
            </ul>
            <ul className="listado">
                {listaSimpleItems}
            </ul>
            <ul className="listado">
                {listaLinksItems}
            </ul>
            <ul className="listado">
                {listaSimpleLinksItems}
            </ul>
        </div>
    </>

}