import { useContext } from "react";
import Nav from "../../components/layout/Nav";
import Buscador from "../../components/Buscador";
import ContainerCard from "../../components/ContainerCards";
import { SearchContext } from "../../context/SearchContext";

function Home() {

  const { search } = useContext(SearchContext);

  return (
    <>
      <Nav />
      <Buscador />
      <ContainerCard search={search}/>
    </>
  );
}

export default Home;
