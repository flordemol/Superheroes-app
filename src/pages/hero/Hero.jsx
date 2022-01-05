import { useEffect, useState } from "react";
import { environment } from "./../../constants/index";
import Nav from "../../components/layout/Nav";
import axios from 'axios';
import { useParams } from "react-router-dom";


function Hero() {

  const [ hero, setHero ] = useState({});
  const { BASE_URL_SUPERHERO, key } = environment;
  const { id } = useParams();

  const getHero = () => {
    try {
      axios.get(`${BASE_URL_SUPERHERO}${key}/${id}`)
        .then((response) => {
          setHero(response.data);
        });
    } catch(err){
        console.error(err);
    }
    return hero;
  }

  useEffect(() => {
    getHero();
  },[]);
  

    return (
      <>{console.log(hero)}
        <Nav />
        <div className="container justify-content-center  align-items-center p-4 pb-5" style={{marginTop:"3%", marginBottom:"3%", background:"#111"}}>
          <h2 className="text-white text-center p-4">{hero?.name}</h2>
          <div className="row m-0">
            <div className="col" md={4} sm={12} style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
              <img src={hero?.image?.url} style={{maxHeight:"595px",objectFit:'cover', width: '-webkit-fill-available'}} alt={hero?.name}/>
            </div>
            <div className="col text-white p-4" md={8} sm={12} style={{display:"flex", padding: "20px 100px 0 0"}}>
              <div>
                <p><b><u>Nombre:</u></b> {hero?.biography?.['full-name']}</p>
                <p><b><u>Alias:</u></b> {hero?.biography?.aliases.map((alias, index) => <span key={index}>"{alias}", </span>)}</p>
                <p><b><u>Altura:</u></b> {hero?.appearance?.height[1]}</p>
                <p><b><u>Peso:</u></b> {hero?.appearance?.weight[1]}</p>
                <p><b><u>Color de ojos:</u></b> {hero?.appearance?.['eye-color']}</p>
                <p><b><u>Color de cabello:</u></b> {hero?.appearance?.['hair-color']}</p>
                <p><b><u>Lugar de trabajo:</u></b> {hero?.work?.occupation}</p>
                <p><b><u>Alineación:</u></b> {hero?.biography?.alignment}</p>
              </div> 
            </div>
          </div>
        </div>
      </>
    );
  }
  
  export default Hero;
  