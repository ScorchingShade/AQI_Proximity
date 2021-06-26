import React from "react";
import "../../common-css/Navbar.css";
import { Link } from 'react-router-dom';

function Navbar() {
  const address = "#";
  return (
    <div>

      <nav className="navbar">
          
        <ul className="navbar-nav">


        <li className="logo">
        <Link to="/" className="nav-link">
       
          <span className="link-text logo-text">AirQ</span>
          <article style={{ fontSize: "2.5rem" }}>
                <i className="fad fa-angle-double-right fa-fw"></i>
              </article>
       

   
        </Link>
      </li>
      
          <li className="nav-item">
          <Link to="/" className="nav-link">
           
              <article style={{ fontSize: "1.5rem" }}>
                <i className="fad fa-home fa-fw"></i>
              </article>

              <span className="link-text">Home</span>
          </Link>
          </li>

          <li className="nav-item">
          <Link to="/login" className="nav-link">
              <article style={{ fontSize: "1.7em" }}>
                <i className="fad fa-sign-in fa-fw"></i>
              </article>

              <span className="link-text">Login</span>
         </Link>
          </li>

          
          <li className="nav-item">
           <Link to="/" className="nav-link">
              <article style={{ fontSize: "1.7rem" }}>
                <i className="fad fa-question fa-fw"></i>
              </article>

              <span className="link-text">About</span>
              </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export { Navbar };
