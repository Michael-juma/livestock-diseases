import {NavLink} from 'react-router-dom';

export default function NavBar() { 
    return (
        <nav className='navbar-light bg-light'>
            <div className='container-fluid'>
                <NavLink className="navbar-brand" to="/">Home</NavLink>
                <NavLink className="navbar-brand" to="/about">About</NavLink>

            </div>
            
        </nav>
    )
} 