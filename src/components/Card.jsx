function Card({ hero }) {

  const { id, name, image } = hero;

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
        <img src={image.url} alt={name} style={{width:"250px", height:"350px"}}/>
        <button className="btn btn-warning">Agregar</button>
        <button className="btn btn-info">Ver detalle</button>
      </div>
    );
  }
  
  export default Card;
  