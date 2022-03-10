import React from "react";
import './style.css'

class Header extends React.Component {
    render(){
      return (
<div>
<header>
        <nav class="navbar">
            <label class="navbar-toggle" id="js-navbar-toggle" for="chkToggle">
                <i class="fa fa-bars"></i>
            </label>
            <a href="#" class="logo">                    
                <img class="Logo" src="/src/logo-removebg-preview.png" alt=""/>
            </a>
            <input type="checkbox" id="chkToggle"></input>
            <ul class="main-nav" id="js-menu">
                <li>
                    <a href="#" class="nav-links">Home</a>
                </li>
                <li>
                    <a href="#" class="nav-links">Shop</a>
                </li>
                <li>
                    <a href="#" class="nav-links">Blog</a>
                </li>
                <li>
                    <a href="#" class="nav-links">Sale</a>
                </li>
                <li>
                    <a href="#" class="nav-links">Contact us</a>
                </li>
                <li>
                    <a href="#" class="nav-links"><i class="fa-solid fa-magnifying-glass" style={{ marginRight: '8px'}}></i>Search</a>
                </li>
            </ul>
            <div class="right-nav">
                <div class="right-nav-links">Sign In</div>
                <div class="right-nav-links">Create An Account</div>
            </div>
        </nav>
    </header>
    </div>
      );
    }
}
export default Header;