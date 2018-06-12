import React from 'react';
import {BrowserRouter as Router, Route } from "react-router-dom";



//Imported Components
import NavBar from './components/Navbar/navbarComponent.jsx';
import Table from './components/pages/tableComponent.jsx';
import Cart from './components/pages/cartComponent.jsx';


const App = () =>
<Router>
  <div>
    <NavBar />
    <Route exact path="/" component={Table} />
    <Route exact path="/cart" component={Cart} />
  </div>
  </Router>


export default App;
