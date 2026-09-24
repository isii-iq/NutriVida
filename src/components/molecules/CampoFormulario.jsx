import Input from "../atoms/Input";

function CampoFormulario(props) {
  return (
    <div className="mb-3">
      <label htmlFor={props.id} className="form-label">
        {props.label}
      </label>

      <Input
        type={props.type}
        id={props.id}
        name={props.name}
        placeholder={props.placeholder}
        required={props.required}
      />

      <span className="text-danger">
        {props.error}
      </span>
    </div>
  );
}

export default CampoFormulario;