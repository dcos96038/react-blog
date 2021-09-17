import {Link} from 'react-router-dom'

const Navbar = () => {
    return ( 
        <nav className="navbar">
          <h1>Diego Blog</h1>
          <div className="links">
            <Link to="/">Inicio</Link>
            <Link to="/create" style={{
              color: "white",
              backgroundColor: '#6d40f6',
              borderRadius: '8px'
            }}>Nueva entrada</Link>
          </div>
        </nav>
    );
}

export default Navbar;