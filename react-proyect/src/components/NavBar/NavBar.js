import Logo from "../../img/logo.webp"
import CartWidget from "../CartWidgets/CartWidget"

const NavBar = () =>{
    return(
        <header>
            <nav className="navbar navbar-expand-lg bg-secondary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src={Logo} className="imgLogo"></img>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse px-3 position-relative top-0 end-0 divIcons" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active text-light" aria-current="page" href="#">Inicio</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-light" href="#">Novedades</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle text-light" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Productos</a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Celulares</a></li>
                                    <li><a className="dropdown-item" href="#">Auriculares</a></li>
                                    <li><a className="dropdown-item" href="#">Computadoras</a></li>
                                </ul>
                            </li>
                            <li className="nav-item ms-2" id="carritoLi">
                                <CartWidget/>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default NavBar