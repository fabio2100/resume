import '@/app/css/Titular.css'

export default function Titular({nigth}){

    return (
        <>
            <div className='divTitular'>
                <p className={nigth ? "nombreTitular" : "nombreTitular nocheTitular"}>FABIO SQUIZZATO</p>
                <p className="ocupacionTitular">SOFTWARE DEVELOPER</p>
            </div>
        </>
        
    )
}