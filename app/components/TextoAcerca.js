export default function TextoAcerca({titulo=false,lista=false,texto=false,subtitulo=false,listaSimple=false}){

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
    //dejo esto aca, hay que renderizar los items de hard skill tratando de usar igual a listitems
    

    return <>
        <div className="textoAcerca">
            <p className="tituloAcerca">{titulo}</p>
            <p className="subtitulo">{subtitulo}</p>
            <p>{texto}</p>
            <ul className="listado">
                {listItems}
            </ul>
            <ul className="listado">
                {listaSimpleItems}
            </ul>
        </div>
    </>

}