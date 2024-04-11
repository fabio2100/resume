export default function TextoAcerca({titulo=false,lista=false,texto=false}){

    let listItems;
    if(lista){
        listItems = lista.map(element => {
            return <p key={element.nombre}>{element.nombre}: {element.descripcion} </p>
        })
    }
    

    return <>
        <div className="textoAcerca">
            <p className="tituloAcerca">{titulo}</p>
            <p>{texto}</p>
            <div className="listado">
                {listItems}
            </div>
        </div>
    </>

}