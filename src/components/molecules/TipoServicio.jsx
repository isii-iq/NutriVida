
import Boton from "../atoms/Boton";
import "../../App.css";
import { useNavigate } from "react-router-dom";


function TipoServicio({ titulo, textoBoton, ruta }) {
  const navigate = useNavigate();

  return (
 
    <div className="tipo-servicio">
      <h3 className="tipo-titulo">{titulo}</h3>
      
      <div className="tipo-contenedor-boton">
        <Boton texto={textoBoton}
        onClick={() => navigate(ruta)} />
        
      </div>
    </div>
  );
}

export default TipoServicio;