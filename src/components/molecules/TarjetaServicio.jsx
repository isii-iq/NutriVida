import EtiquetaDuracion from "../atoms/EtiquetaDuracion";
import Boton from "../atoms/Boton";
import Precio from"../atoms/Precio";

function TarjetaServicio({ duracion, textoBoton, valor, periodo }) {
  return (
    <div className="d-flex flex-column align-items-start gap-3">

      <h1 className="m-0 fs-5">{titulo}</h1>
      <EtiquetaDuracion duracion={duracion} />

      <Boton texto={textoBoton} />
     <Precio valor={valor} />
    </div>
  );
}

export default TarjetaServicio;
