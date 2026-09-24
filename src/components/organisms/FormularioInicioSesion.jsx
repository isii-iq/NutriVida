import CampoFormulario from "../molecules/CampoFormulario";
import Boton from "../atoms/Boton";

function FormularioInicioSesion() {

  function manejarSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Iniciar sesión</h2>

      <form
        id="formulario-iniciar-sesion"
        onSubmit={manejarSubmit}
      >
        <CampoFormulario
          label="Correo electrónico"
          type="email"
          id="correo"
          name="correo"
          placeholder="Ej: juan@duoc.cl"
          required
        />

        <CampoFormulario
          label="Contraseña"
          type="password"
          id="contrasena"
          name="contrasena"
          placeholder="Ingresa tu contraseña"
          required
        />

        <Boton
          texto="Iniciar Sesión"
          type="submit"
          variante="primary"
        />
      </form>
    </div>
  );
}

export default FormularioInicioSesion;