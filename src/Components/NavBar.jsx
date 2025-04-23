import {NavLink} from 'react-router-dom';

export default function NavBar() { 
    return (
        <nav className='navbar-light bg bg-info'>
            <div className='container-fluid'>
                <NavLink className="navbar-brand" to="/">Home</NavLink>
                <NavLink className="navbar-brand" to="/about">About</NavLink>
                <NavLink className="navbar-brand" to="/explore" >Trends</NavLink>
                

            </div>
            
        </nav>
    )
} 