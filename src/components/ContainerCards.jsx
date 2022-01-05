import Card from "./Card";

function ContainerCard({search}) {

    const style = {
        background:'#F5F5F5', 
        borderRadius:'8px',
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",
        justifyContent: "space-around",
    }

    return (
      <div className={`container my-4 ${search && "p-5"}`} style={style}>
        {
            search?.map((hero => <Card key={hero.id} hero={hero} />))
        }
      </div>
    );
  }
  
  export default ContainerCard;
  