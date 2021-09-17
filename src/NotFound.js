import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found">
      <h2>Disculpa</h2>
      <p>La pagina no fue encontrada</p>
      <Link to="/">Volver al inicio</Link>
    </div>
  );
}

export default NotFound;