import { NavLink } from 'react-router-dom';

export default function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-info">
            <div className="container-fluid">
                <NavLink className="navbar-brand fw-bold text-white" to="/">VetPlatform</NavLink>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link text-white" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-white" to="/about">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-white" to="/explore">Trends</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-white" to="/vet">Look-veterinarians</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
