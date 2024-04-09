import Titular from "./components/Titular";

export default function Home() {
  return (
    <>
    <div className="container mt-3">
      <div className="row">
        <div className="col-12 col-sm-5">
          <section>About</section>
          <section>Habilidades</section>
        </div>
        <div className="col-12 col-sm-7">
          <Titular />
          <section>Experiencia Laboral</section>
          <section>Educación</section>
        </div>
      </div>
    </div>
    </>
  )
}
