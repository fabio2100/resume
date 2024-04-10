export default function TextoAcerca({titulo=false,lista=false,texto=false}){

    return <>
        <div className="textoAcerca">
            <p className="tituloAcerca">{titulo}</p>
            {lista}
            <p>{texto}</p>
        </div>
    </>

}