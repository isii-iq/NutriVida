import FormularioInicioSesion from "./components/organisms/FormularioInicioSesion";
import TarjetaServicio from "./components/molecules/TarjetaServicio";

function App() {
  return (
    <>
      <FormularioInicioSesion />


      <TarjetaServicio
        duracion={60}
        textoBoton="Agendar"
      />
    </>
  );
}

export default App;