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
          valor="35.000"
        />

       
        <TarjetaServicio
         titulo="Control nutricional (seguimiento)"
          duracion={30}
          textoBoton="Agendar"
          valor="25.000"
        />

       
        <TarjetaServicio
          titulo="Control nutricional quincenal"
          duracion={90}
          textoBoton="Agendar"
          valor="22.000"
        />

         <TarjetaServicio
          titulo="Teleconsulta nutricional"
          duracion={30}
          textoBoton="Agendar"
          valor="20.000"
        />

         <TarjetaServicio
          titulo="Consulta de urgencia / reagendada"
          duracion={30}
          textoBoton="Agendar"
          valor="28.000"
        />

         <TarjetaServicio
          titulo="Consulta de urgencia / reagendada"
          duracion={30}
          textoBoton="Agendar"
          valor="28.000"
        />

         <TarjetaServicio
          titulo="Plan pérdida de peso"
          duracion={0}
          textoBoton="Agendar"
          valor="170.000"
        />

         <TarjetaServicio
          titulo="Plan nutrición deportiva "
          duracion={0}
          textoBoton="Agendar"
          valor="70.000"
        />

        
         <TarjetaServicio
          titulo="Plan control diabetes / hipertensión"
          duracion={0}
          textoBoton="Agendar"
          valor="75.000"
        />

           <TarjetaServicio
          titulo="Plan alimentación vegetariana/vegana"
          duracion={0}
          textoBoton="Agendar"
          valor="68.000"
        />

            <TarjetaServicio
          titulo="Plan alimentación infantil"
          duracion={0}
          textoBoton="Agendar"
          valor="65.000"
        />

    <TarjetaServicio
          titulo="Antropometría completa"
          duracion={20}
          textoBoton="Agendar"
          valor="18.000"
        />

            <TarjetaServicio
          titulo="Bioimpedanciometría"
          duracion={15}
          textoBoton="Agendar"
          valor="12.000"
        />

            <TarjetaServicio
          titulo="Encuesta de hábitos alimentarios"
          duracion={20}
          textoBoton="Agendar"
          valor="10.000"
        />

             <TarjetaServicio
          titulo="Análisis de exámenes de laboratorios"
          duracion={20}
          textoBoton="Agendar"
          valor="15.000"
        />

             <TarjetaServicio
          titulo="Taller de alimentación saludable"
          duracion={90}
          textoBoton="Agendar"
          valor="15.000"
        />

             <TarjetaServicio
          titulo="Taller de cocina nutritiva"
          duracion={120}
          textoBoton="Agendar"
          valor="20.000"
        />


               <TarjetaServicio
          titulo="Taller nutrición para deportistas"
          duracion={90}
          textoBoton="Agendar"
          valor="18.000"
        />

      </div>
    </div>
  );
}

export default Servicios;