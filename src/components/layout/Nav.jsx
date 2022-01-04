import { Link } from "react-router-dom";
import logo from "./../../images/logo.png";

function Nav() {
    const style = {
        color:"rgb(0, 9, 102)",
        fontSize:"2rem",
        textDecoration: "none",
        fontFamily:"fantasy",
    }

    return (
        <nav className="navbar navbar-light" style={{background:"#FEE8E8"}}>
            <div className="container-fluid">
            <Link to="/" style={style}>
                <img src={logo} alt="Logo" style={{height: "40px"}}/>
                Superhéroes
            </Link>
            </div>
        </nav>
    );
  }
  
  export default Nav;
