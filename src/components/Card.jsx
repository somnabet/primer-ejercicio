import { Link } from "react-router-dom";
import "./Card.css";

const Card = ({ id, title, subtitle, description, onDelete }) => {
  return (
    <>
      <div className="card">
        <Link to={`/tasks/${title}`}>
          <h1>{title}</h1>
        </Link>
        <h2>{subtitle}</h2>
        <p>{description}</p>
        <button className="borrar" onClick={() => onDelete(id)}>
          Borrar
        </button>
      </div>
    </>
  );
};

export default Card;
