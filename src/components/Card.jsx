import { Link } from "react-router-dom";
import { TeamContext } from "../context/TeamContext";
import { useContext } from "react";

function Card({ hero }) {

  const { id, name, image } = hero;

  const { team, addTeam } = useContext(TeamContext);

  const styleCard = {
    background:"#111",
    color:"#FFF",
    border: "3px solid yellow", 
    borderRadius: "8px",
    padding: "25px",
    display: "flex",
    flexDirection: "column",
    gap: "10px"
  }

    return (
      <div className="container-card" id={`hero-${id}`} style={styleCard}>
        <h3 className="text-center">{name}</h3>
        <img src={image.url} alt={name} style={{maxWidth:"250px", height:"350px"}}/>
        <button className="btn btn-warning" onClick={() => addTeam(hero)}>Agregar al equipo</button>
        <Link
          to={`/hero/${id}`}
          className="btn btn-info"
        >
          Ver detalle
        </Link>
      </div>
    );
  }
  
  export default Card;
  