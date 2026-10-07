import TarjetaServicio from "../components/molecules/TarjetaServicio";

function Servicios() {
  return (
    <div className="container py-5">
      <h1 className="text-center mb-5">Nuestros Servicios</h1>
      
     
      <div className="d-flex flex-wrap justify-content-center gap-4">
        
      
        <TarjetaServicio
          titulo="Primera consulta nutricional"
          duracion={50}
          textoBoton="Agendar"
          valor="35000"
        />

       
        <TarjetaServicio
          duracion={60}
          textoBoton="Agendar Estándar"
          valor="59"
          periodo="mes"
        />

       
        <TarjetaServicio
          duracion={90}
          textoBoton="Agendar Premium"
          valor="99"
          periodo="mes"
        />

      </div>
    </div>
  );
}

export default Servicios;