
function Precio({ valor, moneda = "$", periodo, oferta }) {
  return (
    <div className="precio">
      <span className="precio-simbolo">{moneda}</span>
      <span className="precio-valor">{valor}</span>
      {periodo && <span className="precio-periodo">/{periodo}</span>}
    </div>
  );
}

export default Precio;