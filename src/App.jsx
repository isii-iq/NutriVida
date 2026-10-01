
import "./App.css";
import Precio from "./components/atoms/Precio";
import FormularioInicioSesion from "./components/organisms/FormularioInicioSesion";
import { BrowserRouter, Routes, Route } from "react-router-dom";  





function App() {  
  return (

    <>
    <FormularioInicioSesion />

    <Precio valor="99" periodo="mes" />
    </>
  );
}

export default App;