import React from "react";
import DemoCarousel from "./Carousel";
import './style.css';
import image from '../image 2.png';
import image2 from '../image 3.png';
import frame from '../Frame.png';
import frame1 from'../Frame-1.png';
import frame2 from'../Frame-2.png';
import frame3 from'../Frame-3.png';
import frame4 from'../Frame-4.png';
import topleft from '../top-left.png';
import adsbanner from '../ads.png';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const rightButtons = Array.from(document.getElementsByClassName('slideRight'));
const leftButtons = Array.from(document.getElementsByClassName('slideLeft'));
const containers = Array.from(document.getElementsByClassName('scrolling-wrapper'));

let index = 0;
for (const rightButton of rightButtons) {
    const container = containers[index];
    rightButton.addEventListener("click", function () {
        container.scrollLeft += 150;
    });
    index++;
}

index = 0;
for (const leftButton of leftButtons) {
    const container = containers[index];
    leftButton.addEventListener("click", function () {
        container.scrollLeft -= 150;
    });
    index++;
}

class Body extends React.Component {
    render(){
      return (
    <body>
        <div class="container sec">
        <div class="main-banner">   
                <div class="main-banner-left">
                    <div class="main-banner-content">
                        <div class="main-content">
                            <h1>Summer sale</h1>
                            <h1>get <span class="outline_text">30% OFF</span></h1>
                            <h1>on ALL DRESS.</h1>
                            <button class="outline-button">SHOP NOW</button>
                        </div>
                    </div>
                </div>
                <div class="main-banner-right">
                    <img src={image} alt="" class="img_1"/>
                    <img src={image2} alt="" class="img_2"/>
                </div>
        </div>
        <div class="main-brand">
            <p class="brand-title">Choose a brand</p>
            <div class="main-brand-list">
                <div><img src={frame}alt=""/></div>
                <div><img src={frame1} alt=""/></div>
                <div><img src={frame2} alt=""/></div>  
                <div><img src={frame3} alt=""/></div>
                <div><img src={frame4} alt=""/></div>
            </div>
        </div>
    
        <div class="center-banner">
            <div class="row"> 
                <div class="column">
                    <div class="top-left-flex" style={{width:'100%', backgroundColor: '#EEECEC'}}>
                        
                        <img src={topleft} style={{height:'30%', width: '50%'}}/>
                        <div class="style-content">
                            <h1>CHOOSE YOUR LOOK</h1>
                            <p>See our clothing collections</p>
                            <button class="outline-button">SEE OFFERS</button>
                        </div>
                    </div>
                    <div class="top-left-flex" style={{width:'100%',backgroundColor: '#EFD7CD;'}}>
                        <div class="style-content">
                            <h1>BRAND NEW STYLE</h1>
                            <p>Popular clothing brands</p>
                            <button class="outline-button">SEE OFFERS</button>
                        </div>
                    </div>
                </div>
                
                <div class="column">
                    <div class="right-flex" style={{ width:'100%', backgroundColor: '#E3DFD7;'}}>
                        <div class="right-style-content">
                            <h1>UP TO 40% OFF</h1>
                            <p>Special offers and gread deals</p>
                            <button class="outline-button">SHOP NOW</button>
                        </div>
                    </div>
                </div> 
            </div>
        </div>



        <div class="shop-container">
            <div class="left-filter">
                <h4>Shop Some Wear:</h4>
                <label class="check-container">Best sellers
                    <input type="checkbox" checked="checked"/>
                    <span class="checkmark"></span>
                  </label>
                  <label class="check-container">New arivals                    
                        <input type="checkbox"/>
                        <span class="checkmark"></span>
                  </label>
                  <label class="check-container">Top Women
                    <input type="checkbox"/>
                    <span class="checkmark"></span>
                  </label>
                  <label class="check-container">Collection: summer
                    <input type="checkbox"/>
                    <span class="checkmark"></span>
                  </label>
                  <label class="check-container">Collection: Spring
                    <input type="checkbox"/>
                    <span class="checkmark"></span>
                  </label>
                  <label class="check-container">Trending
                    <input type="checkbox"/>
                    <span class="checkmark"></span>
                  </label>
            </div>
            <div class="right-card">
                <div class="card-container">
                    <div class="card">
                        <img src="https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c2hpcnR8ZW58MHx8MHx8&w=1000&q=80" alt="Avatar" style={{ width:'255px'}}/>
                        <div class="card-inner">
                          <h4 class="card-cate">Top women</h4>
                          <p class="card-name">Architect & Engineer</p>
                          <h4 class="card-price">MYR 15,900</h4>
                        </div>
                    </div>
                    <div class="card">
                        <img src="https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c2hpcnR8ZW58MHx8MHx8&w=1000&q=80" alt="Avatar" style={{ width:'255px'}}/>
                        <div class="card-inner">
                          <h4 class="card-cate">Top women</h4>
                          <p class="card-name">Architect & Engineer</p>
                          <h4 class="card-price">MYR 15,900</h4>
                        </div>
                    </div>
                    <div class="card">
                        <img src="https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c2hpcnR8ZW58MHx8MHx8&w=1000&q=80" alt="Avatar" style={{ width:'255px'}}/>
                        <div class="card-inner">
                          <h4 class="card-cate">Top women</h4>
                          <p class="card-name">Architect & Engineer</p>
                          <h4 class="card-price">MYR 15,900</h4>
                        </div>
                    </div>
                    <div class="card">
                        <img src="https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c2hpcnR8ZW58MHx8MHx8&w=1000&q=80" alt="Avatar" style={{ width:'255px'}}/>
                        <div class="card-inner">
                          <h4 class="card-cate">Top women</h4>
                          <p class="card-name">Architect & Engineer</p>
                          <h4 class="card-price">MYR 15,900</h4>
                        </div>
                    </div>
                    <div class="card">
                        <img src="https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c2hpcnR8ZW58MHx8MHx8&w=1000&q=80" alt="Avatar" style={{ width:'255px'}}/>
                        <div class="card-inner">
                          <h4 class="card-cate">Top women</h4>
                          <p class="card-name">Architect & Engineer</p>
                          <h4 class="card-price">MYR 15,900</h4>
                        </div>
                    </div>
                    <div class="card">
                        <img src="https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c2hpcnR8ZW58MHx8MHx8&w=1000&q=80" alt="Avatar" style={{ width:'255px'}}/>
                        <div class="card-inner">
                          <h4 class="card-cate">Top women</h4>
                          <p class="card-name">Architect & Engineer</p>
                          <h4 class="card-price">MYR 15,900</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>

                        <div class="main-content-2">
                            <DemoCarousel/>
                                <h1 class="text-on-image">Shopping without limits.</h1>
                                <p class="text-on-image">You can choose the best option for you, and it does not matter whether  you are in Prague or San Francisco, We wii deliver your purchase anywhere.</p>
                            
                            <button class="outline-button">SHOP NOW</button>
                        </div>


        <h4 style={{ margin:'15px 0 10px 0'}}>Featured Items</h4>
        <button class="slideLeft" ><i class='far fa-caret-square-left' style={{fontSize:"28px"}}></i></button>
        <button class="slideRight" ><i class='far fa-caret-square-right' style={{fontSize:"28px"}}></i></button>
        <div class="scrolling-wrapper">
        <div class="main-card">
            <div class="card">
                <img src="https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c2hpcnR8ZW58MHx8MHx8&w=1000&q=80" alt="Avatar" style={{ width:'255px'}}/>
                <div class="card-inner">
                  <h4 class="card-cate">Top women</h4>
                  <p class="card-name">Architect & Engineer</p>
                  <h4 class="card-price">MYR 15,900</h4>
                </div>
            </div>
           
            <div class="card">
                <img src="https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c2hpcnR8ZW58MHx8MHx8&w=1000&q=80" alt="Avatar" style={{ width:'255px'}}/>
                <div class="card-inner">
                    <h4 class="card-cate">Top women</h4>
                    <p class="card-name">Architect & Engineer</p>
                    <h4 class="card-price">MYR 15,900</h4>
                </div>
            </div>

            <div class="card">
                <img src="https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c2hpcnR8ZW58MHx8MHx8&w=1000&q=80" alt="Avatar" style={{ width:'255px'}}/>
                <div class="card-inner">
                    <h4 class="card-cate">Top women</h4>
                    <p class="card-name">Architect & Engineer</p>
                    <h4 class="card-price">MYR 15,900</h4>
                </div>
            </div>
            <div class="card">
                <img src="https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c2hpcnR8ZW58MHx8MHx8&w=1000&q=80" alt="Avatar" style={{ width:'255px'}}/>
                <div class="card-inner">
                    <h4 class="card-cate">Top women</h4>
                    <p class="card-name">Architect & Engineer</p>
                    <h4 class="card-price">MYR 15,900</h4>
                </div>
            </div>
            <div class="card">
                <img src="https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c2hpcnR8ZW58MHx8MHx8&w=1000&q=80" alt="Avatar" style={{ width:'255px'}}/>
                <div class="card-inner">
                    <h4 class="card-cate">Top women</h4>
                    <p class="card-name">Architect & Engineer</p>
                    <h4 class="card-price">MYR 15,900</h4>
                </div>
            </div>
            <div class="card">
                <img src="https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c2hpcnR8ZW58MHx8MHx8&w=1000&q=80" alt="Avatar" style={{ width:'255px'}}/>
                <div class="card-inner">
                    <h4 class="card-cate">Top women</h4>
                    <p class="card-name">Architect & Engineer</p>
                    <h4 class="card-price">MYR 15,900</h4>
                </div>
            </div>
        </div>    
        </div>
        
        <h4 style={{ margin:'10px 10px 0 0'}}>Features Items</h4>
        <button class="arrowLeft" id="container"><i class='far fa-caret-square-left' style={{fontSize:"28px"}}></i></button>
        <button class="arrowRight" id="container"><i class='far fa-caret-square-right' style={{fontSize:"28px"}}></i></button>
        <div class="main-card">
        <div class="scrolling-wrapper">
            <div class="card">
                <img src="https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c2hpcnR8ZW58MHx8MHx8&w=1000&q=80" alt="Avatar" style={{ width:'255px'}}/>
                <div class="card-inner">
                  <h4 class="card-cate">Top women</h4>
                  <p class="card-name">Architect & Engineer</p>
                  <h4 class="card-price">MYR 15,900</h4>
                </div>
            </div>
           
            <div class="card">
                <img src="https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c2hpcnR8ZW58MHx8MHx8&w=1000&q=80" alt="Avatar" style={{ width:'255px'}}/>
                <div class="card-inner">
                    <h4 class="card-cate">Top women</h4>
                    <p class="card-name">Architect & Engineer</p>
                    <h4 class="card-price">MYR 15,900</h4>
                </div>
            </div>

            <div class="card">
                <img src="https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c2hpcnR8ZW58MHx8MHx8&w=1000&q=80" alt="Avatar" style={{ width:'255px'}}/>
                <div class="card-inner">
                    <h4 class="card-cate">Top women</h4>
                    <p class="card-name">Architect & Engineer</p>
                    <h4 class="card-price">MYR 15,900</h4>
                </div>
            </div>
            <div class="card">
                <img src="https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c2hpcnR8ZW58MHx8MHx8&w=1000&q=80" alt="Avatar" style={{ width:'255px'}}/>
                <div class="card-inner">
                    <h4 class="card-cate">Top women</h4>
                    <p class="card-name">Architect & Engineer</p>
                    <h4 class="card-price">MYR 15,900</h4>
                </div>
            </div>
            <div class="card">
                <img src="https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c2hpcnR8ZW58MHx8MHx8&w=1000&q=80" alt="Avatar" style={{ width:'255px'}}/>
                <div class="card-inner">
                    <h4 class="card-cate">Top women</h4>
                    <p class="card-name">Architect & Engineer</p>
                    <h4 class="card-price">MYR 15,900</h4>
                </div>
            </div>
            <div class="card">
                <img src="https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c2hpcnR8ZW58MHx8MHx8&w=1000&q=80" alt="Avatar" style={{ width:'255px'}}/>
                <div class="card-inner">
                    <h4 class="card-cate">Top women</h4>
                    <p class="card-name">Architect & Engineer</p>
                    <h4 class="card-price">MYR 15,900</h4>
                </div>
            </div>
        </div>
        </div>
        <div class="ads-container">
            <div class="ads-left">
                <img src={adsbanner} alt="" />
            </div>
            <div class="ads-right">
                <div class="ads-content">
                    <h1>Explore the best for you</h1>
                    <p>You can choose the best option for you, and it does not matter whether you are in Prague or san fransico</p>
                    <button class="outline-button">SHOP NOW</button>
                </div>
                
            </div>
        </div>


        <h4 style={{ margin:'15px 10px 0 0'}}>Blog</h4>
        
        <div class="blog-main">
                <div class="blog-card">
                    <div class="blog-content">
                      <p class="blog-label">Article</p>
                      <p class="blog-title">Exactly What To Wear To Every Type Of Wedding This Summer</p>
                      <p class="blog-desc">A large part of the business here is building up the "experience". Double-page spreads in magazines. Ads on TV. Product placement and sponsorship in golf tournaments, tennis matches and sailing competitions. All of this builds up your perception of the brand - and additionally, it costs money.</p>
                    
                      <p class="blog-date">21 January 2018 by guido</p>
                    </div>
                </div>
                <div class="blog-card">
                    <div class="blog-content">
                      <p class="blog-label">Article</p>
                      <p class="blog-title">Exactly What To Wear To Every Type Of Wedding This Summer</p>
                      <p class="blog-desc">A large part of the business here is building up the "experience". Double-page spreads in magazines. Ads on TV. Product placement and sponsorship in golf tournaments, tennis matches and sailing competitions. All of this builds up your perception of the brand - and additionally, it costs money.</p>
                    
                      <p class="blog-date">21 January 2018 by guido</p>
                    </div>
                </div>
                <div class="blog-card">
                    <div class="blog-content">
                      <p class="blog-label">Article</p>
                      <p class="blog-title">Exactly What To Wear To Every Type Of Wedding This Summer</p>
                      <p class="blog-desc">A large part of the business here is building up the "experience". Double-page spreads in magazines. Ads on TV. Product placement and sponsorship in golf tournaments, tennis matches and sailing competitions. All of this builds up your perception of the brand - and additionally, it costs money.</p>
                    
                      <p class="blog-date">21 January 2018 by guido</p>
                    </div>
                </div>
                <div class="blog-card">
                    <div class="blog-content">
                      <p class="blog-label">Article</p>
                      <p class="blog-title">Exactly What To Wear To Every Type Of Wedding This Summer</p>
                      <p class="blog-desc">A large part of the business here is building up the "experience". Double-page spreads in magazines. Ads on TV. Product placement and sponsorship in golf tournaments, tennis matches and sailing competitions. All of this builds up your perception of the brand - and additionally, it costs money.</p>
                    
                      <p class="blog-date">21 January 2018 by guido</p>
                    </div>
                </div>
        </div>

    </div>





    <div class="selling-point">
        <div class="sp-content">
                <div>
                    <i class="fa fa-check" aria-hidden="true"></i>
                    Duties and Taxes Guaranteed
                </div>
                <div>
                    <i class="fa fa-check" aria-hidden="true"></i>
                    Free express shipping

                </div>
                <div>
                    <i class="fa fa-check" aria-hidden="true"></i>
                    Customer Love
                </div>  
                <div>                    
                    <i class="fa fa-check" aria-hidden="true"></i>
                    Easy returns
                </div>
                <div>                    
                    <i class="fa fa-check" aria-hidden="true"></i>
                    Secure payment
                </div>
        </div>
    </div>
</body>
      );
    }
}    
export default Body;