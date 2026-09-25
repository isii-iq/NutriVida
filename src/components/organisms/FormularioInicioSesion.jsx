import { Container, Row, Col, Form } from "react-bootstrap";
import CampoFormulario from "../molecules/CampoFormulario";
import Boton from "../atoms/Boton";

function FormularioInicioSesion() {

  function manejarSubmit(event) {
    event.preventDefault();
  }

  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={12} md={6} lg={4}>

          <h2>Iniciar sesión</h2>

          <Form onSubmit={manejarSubmit}>

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

          </Form>

        </Col>
      </Row>
    </Container>
  );
}

export default FormularioInicioSesion;