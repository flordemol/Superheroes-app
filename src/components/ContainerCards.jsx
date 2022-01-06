import Card from "./Card";

function ContainerCard({data, title}) {

    const style = {
        background:'#F5F5F5', 
        borderRadius:'8px',
        textAlign: "center"
    }

    return (
      <div className={`container my-4 ${data && "p-5"}`} style={style}>
        { data &&
          <h2 className="mb-4">{title}</h2>
        }
        <div className="d-flex justify-content-around flex-wrap gap-4">
          {
              data?.map((hero => <Card key={hero.id} hero={hero} />))
          }
        </div>
      </div>
    );
  }
  
  export default ContainerCard;
  