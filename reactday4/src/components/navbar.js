import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {

    const [active, setActive] = useState("0");
    
    const activateLink = (e) =>{

        switch(e.target.innerText){
            case "Home":
                setActive("0");
            break;
            case "Favorite":
                setActive("1");
            break;
            case "Login":
                setActive("2");
            break;
            case "Register":
                setActive("3");
            break;
            default:
                setActive("");
            break;
        }
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link to={'/'} onClick={(e)=> activateLink(e)} className="navbar-brand">Movies</Link>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to={'/'} onClick={(e)=> activateLink(e)} className={`nav-link ${active === "0" ? 'border-bottom border-danger border-2' : ''}`} aria-current="page">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/favorites'} onClick={(e)=> activateLink(e)} className={`nav-link ${active === "1" ? 'border-bottom border-danger border-2' : ''}`}>Favorite</Link>
                        </li>
                    </ul>
                    <div className="d-flex">
                        <Link to={'/login'} onClick={(e)=> activateLink(e)} className={`btn btn-outline-light mx-1 ${active === "2" ? 'active' : ''}`}>Login</Link>
                        <Link to={'/register'} onClick={(e)=> activateLink(e)} className={`btn btn-outline-light mx-1 ${active === "3" ? 'active' : ''}`}>Register</Link>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;