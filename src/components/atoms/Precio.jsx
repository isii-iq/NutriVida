
function Precio({ valor, moneda = "$"}) {
  return (
    <div className="precio">
      <span className="precio-simbolo">{moneda}</span>
      <span className="precio-valor">{valor}</span>
      
    </div>
  );
}

export default Precio;