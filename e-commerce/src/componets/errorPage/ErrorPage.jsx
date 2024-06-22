import "./ErrorPage.css"; // Archivo CSS para estilo

const ErrorPage = () => {
  return (
    <div className="error-container">
      <h1>⚠️ Error 404 ⚠️</h1>
      <p>Lo sentimos, la página que estás buscando no existe.</p>
      <p>Por favor, verifica la URL o regresa a la página de inicio.</p>
    </div>
  );
};

export default ErrorPage;
