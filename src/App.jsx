
import "./App.css";
import FormularioInicioSesion from "./components/organisms/FormularioInicioSesion";
import TarjetaServicio from "./components/molecules/TarjetaServicio";






function App() {  
  return (
    <>
      
      <TarjetaServicio
        duracion={60}
        textoBoton="Agendar"
        valor="99"
        periodo="mes"
      />

    
      <FormularioInicioSesion />
      
    </>
  );
}

export default App;