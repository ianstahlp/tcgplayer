import React from 'react';
import { Link } from 'react-router-dom';

//import Search from '../Search/searchBar';

import '../../App.css';
import logo from '../../logo.svg';


export default class NavBar extends React.Component {
    
    render() {
        return <div>  
            <nav className="navbar navbar-dark bg-dark">
  <a className="navbar-brand"><img src={logo} className="App-logo" alt="logo" />
</a>
<ul className="navbar-nav mr-auto">
    <li className={window.location.pathname === '/' ? "nav-item active" : "nav-item"}>
        <Link to="/">Shopping</Link>
    </li>
    <li className={window.location.pathname === '/cart' ? "nav-item active" : "nav-item"}>
        <Link to="/cart">
            
              Cart <span className="text-danger">(5)</span>
            
        </Link>

    </li>
</ul>
  
</nav>

        </div>
        
        ;
    }

}