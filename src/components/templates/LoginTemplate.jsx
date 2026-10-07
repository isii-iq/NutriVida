function LoginTemplate(props) {
  return (
    <main className="min-vh-100 d-flex align-items-center justify-content-center">
      {props.children}
    </main>
  );
}

export default LoginTemplate;