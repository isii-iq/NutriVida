import EtiquetaDuracion from "../atoms/EtiquetaDuracion";
import Boton from "../atoms/Boton";

function TarjetaServicio({ duracion, textoBoton }) {
  return (
    <div className="d-flex flex-column align-items-start gap-3">
      <EtiquetaDuracion duracion={duracion} />

      <Boton texto={textoBoton} />
    </div>
  );
}

export default TarjetaServicio;
