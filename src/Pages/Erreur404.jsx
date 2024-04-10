import { Link } from "react-router-dom";
import "../style/Erreur404.scss";

export function Error() {
  return (
    <div className="error404">
      <p className="message404">404</p>
      <p className="error-message">
        Oups! La page que vous demandez n'existe pas.
      </p>
      <Link to="/" className="link">
        Retourner sur la page d'acceuil
      </Link>
    </div>
  );
}
