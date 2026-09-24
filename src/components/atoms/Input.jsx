function Input(props) {
  return (
    <input
      type={props.type}
      id={props.id}
      name={props.name}
      placeholder={props.placeholder}
      className="form-control"
      required={props.required}
    />
  );
}

export default Input;