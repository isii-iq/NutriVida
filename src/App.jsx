import { BrowserRouter, Routes, Route } from "react-router-dom";
import FormularioInicioSesion from "./components/organisms/FormularioInicioSesion";
import Servicios from "./pages/Servicios";

function App() {  
  return (
    <BrowserRouter>
      <Routes>
     
        <Route path="/" element={<FormularioInicioSesion />} />
        
        
        <Route path="/servicios" element={<Servicios />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;