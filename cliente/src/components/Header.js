import { Link } from 'react-router-dom'

function Header() {

    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-dark">
                <div className="container">
                    <Link className="navbar-brand text-light" to="/">STORE SJO </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to="/"><li className='nav-link text-light'>Inicio</li></Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/listaproductos"><li className='nav-link text-light'>Lista productos</li></Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/agregarproducto"><li className='nav-link text-light'>Agregar producto</li></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Header;