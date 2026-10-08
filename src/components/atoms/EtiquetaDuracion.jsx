function EtiquetaDuracion(props) {
  return (
    <span className="badge text-bg-secondary d-inline-block w-auto">
      {props.duracion} min
    </span>
  );
}

export default EtiquetaDuracion;