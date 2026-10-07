
import "./App.css";
import Precio from "./components/atoms/Precio";
import FormularioInicioSesion from "./components/organisms/FormularioInicioSesion";
import TarjetaServicio from "./components/molecules/TarjetaServicio";
import { BrowserRouter, Routes, Route } from "react-router-dom";  





function App() {  
  return (
    <>
      
      <TarjetaServicio
        duracion={60}
        textoBoton="Agendar"
      />

    
      <FormularioInicioSesion />
      <Precio valor="99" periodo="mes" />
    </>
  );
}

export default App;