import React from "react";
import './style.css';
import Body from './Body';
import Header from './Header';
import Footer from './Footer';
import DemoCarousel from './Carousel'

class Home extends React.Component {
    render(){
      return (
        <div>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css" integrity="sha512-YWzhKL2whUzgiheMoBFwW8CKV4qpHQAEuvilg9FAn5VJUDwKZZxkJNuGM4XkWuk94WCrrwslk8yWNGmY1EduTA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
            <link rel="stylesheet" href="style.css"/>
            <Header/>
            <Body/>
            <Footer/>
        </div>
    );
  }
}

export default Home;
 
