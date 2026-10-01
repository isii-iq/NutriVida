import EtiquetaModalidad from "./components/atoms/EtiquetaModalidad";
import FormularioInicioSesion from "./components/organisms/FormularioInicioSesion";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
    <FormularioInicioSesion/>
    <EtiquetaModalidad/>
    </>
  );
}

export default App;