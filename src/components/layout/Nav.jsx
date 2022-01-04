import { Link } from "react-router-dom";
import logo from "./../../images/logo.png";

function Nav() {
    const style = {
        color:"#FAFAFA",
        fontSize:"2rem",
        textDecoration: "none",
        fontFamily:"sans-serif",
    }

    return (
        <nav className="navbar navbar-light" style={{background:"darkslategrey"}}>
            <div className="container-fluid">
            <Link to="/" style={style}>
                <img src={logo} alt="Logo" style={{height: "40px"}}/>
                Superhéroes App
            </Link>
            </div>
        </nav>
    );
  }
  
  export default Nav;
