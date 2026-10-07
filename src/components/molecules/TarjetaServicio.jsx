import EtiquetaDuracion from "../atoms/EtiquetaDuracion";
import Boton from "../atoms/Boton";
import Precio from"../atoms/Precio";

function TarjetaServicio({ duracion, textoBoton, valor, periodo }) {
  return (
    <div className="d-flex flex-column align-items-start gap-3">
      <EtiquetaDuracion duracion={duracion} />

      <Boton texto={textoBoton} />
     <Precio valor={valor} periodo={periodo} />
    </div>
  );
}

export default TarjetaServicio;
