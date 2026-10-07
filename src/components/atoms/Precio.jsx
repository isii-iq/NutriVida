import "../../App.css";


function Precio(props) {
  return (
    <div className="precio">
      <span className="precio-simbolo">{props.moneda}$</span>
      <span className="precio-valor">{props.valor}</span>
      
    </div>
  );
}

export default Precio;


