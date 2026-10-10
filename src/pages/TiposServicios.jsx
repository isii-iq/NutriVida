import TipoServicio from "../components/molecules/TipoServicio";

function TiposServicios() {
  return (
    <div className="container py-5">
      <h1 className="text-center mb-5">Tipos de Servicios</h1>
      
     
      <div className="d-flex flex-wrap justify-content-center gap-4">
        
      
        <TipoServicio
          titulo="Consulta"
          textoBoton="Agendar"
           ruta= "/servicios"
        />

       
        <TipoServicio
          titulo="Plan especializado"
          textoBoton="Agendar"
          ruta= "/servicios"
        />

       
        <TipoServicio
          titulo="Evaluación"
          textoBoton="Agendar"
          ruta= "/servicios"
        />

         <TipoServicio
          titulo="Taller grupal"
          textoBoton="Agendar"
          ruta= "/servicios"
        />
</div>
</div>
  );
}

export default TiposServicios; 