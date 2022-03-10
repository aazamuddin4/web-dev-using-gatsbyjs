import React from "react";
import './style.css';

class Layout extends React.Component {
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
                    <a href="#" class="nav-links"><i class="fa-solid fa-magnifying-glass" style={{ marginRight: '8px' }}></i>Search</a>
                </li>
            </ul>
            <div class="right-nav">
                <div class="right-nav-links">Sign In</div>
                <div class="right-nav-links">Create An Account</div>
            </div>
        </nav>
    </header>
    <footer class="footer">
        <div class="footer-container">
            <div class="footer-row">
                <div class="footer-col">
                    <img class="Logo" src="/src/logo-removebg-preview.png" alt=""/>
                </div>
                <div class="footer-col">
                    <h4>Features</h4>
                    <ul>
                        <li><a href="#">Men</a></li>
                        <li><a href="#">women</a></li>
                        <li><a href="#">Boys</a></li>
                        <li><a href="#">Girls</a></li>
                        <li><a href="#">New arrivals</a></li>
                        <li><a href="#">Shoes</a></li>
                        <li><a href="#">Cothes</a></li>
                        <li><a href="#">Accessories</a></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h4>Menu</h4>
                    <ul>
                        <li><a href="#">About us</a></li>
                        <li><a href="#">Contact us</a></li>
                        <li><a href="#">My Account</a></li>
                        <li><a href="#">Orders History</a></li>
                        <li><a href="#">My wishlist</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Login</a></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h4>Menu</h4>
                    <ul>
                        
                        <li>
                            <h5>Address:</h5>
                            <h6>123 Street name, city england</h6>
                        </li>
                        <li>
                            <h5>Phone:</h5>
                            <h6>(123) 456-7890</h6>
                        </li>
                        <li>
                            <h5>Email:</h5>
                            <h6>Mail@example.com</h6>
                        </li>
                        <li>
                            <h5>Working days/Hours:</h5>
                            <h6>Mon - sun /9:00AM - 8:00PM</h6>
                        </li>
                        
                    </ul>
                </div>
                <div class="footer-col">
                    <h4>follow us</h4>
                        <ul>
                            <li> 
                                <a href="#"><i class="fab fa-facebook-square"></i>
                                    
                                    Facebook
                                </a>
                            </li>
                            <li>
                                <a href="#"><i class="fab fa-twitter-square"></i>
                                    Twitter
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i class="fab fa-instagram-square"></i>
                                    Instagram

                                </a>
                            </li>
                        </ul>

                        
                        
                </div>
            </div>
        </div>
        
        <div class="bottom-details">
            <div class="bottom_text">
                <span class="copyright_text">© 2019. CRISP THEME DEVELOPERD BY BELVG</span>
            </div>
        </div>
    </footer>
          </div>
      );
    }
}

export default Layout;