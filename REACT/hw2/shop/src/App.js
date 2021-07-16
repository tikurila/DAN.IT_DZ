import logo from './logo.svg';
import './App.scss';
import Navbar from './components/Navbar/Navbar'
import Header from './components/Header/Header';
import Slider from './components/Slider/Slider';
import Music from './components/Music/Music';
import Publishers from './components/Publishers/Publisher';
import Footer from './components/Footer/Footer';
import {Carousel} from '3d-react-carousal';
import img_one from './img/1.jpg' ;
import img_two from './img/2.jpg' ;
import img_three from './img/3.jpg' ;
import img_four from './img/4.jpg' ;
import img_five from './img/5.jpg' ;
import album_one from '../src/components/Music/img/1.jpg';
import album_two from '../src/components/Music/img/2.jpg';
import album_three from '../src/components/Music/img/3.jpg';
import album_four from '../src/components/Music/img/4.jpg';
import album_five from '../src/components/Music/img/5.jpg';
import album_six from '../src/components/Music/img/6.jpg';
import album_seven from '../src/components/Music/img/7.jpg';
import album_eight from '../src/components/Music/img/8.jpg';

import React, { Component } from 'react'

export default class App extends Component {
  render() {
     
    let slides = [
      <img className="carousel-image" src={img_one} alt="1" />,
      <img className="carousel-image" src={img_two} alt="2" />,
      <img className="carousel-image" src={img_three}  alt="3" />,
      <img className="carousel-image" src={img_four}  alt="4" />,
      <img className="carousel-image" src={img_five}  alt="5" />   
    ];
  
    return (
      <div className="App">
     <Navbar />
     <Header />
  <Carousel slides={slides} autoplay={false}/>
     <Slider />
    <Music>
    <h1>LATEST ARIVALS IN MUSICA </h1>
   
    <img className="img_al" src={album_one}></img>
    <span>Oh my Deer</span><i>by Actor</i>
    <p>⭐⭐⭐⭐⭐</p>
    <p>It was popularised in the<br></br>the release of Letraset</p>
    <p>$14.99</p>
    <button className="cart_add" >ADD TO CART</button>
   
       </Music>
       <Music>
   <div  className="album_music">
    <img className="img_al" src={album_two}></img>
    <span>Oh my Deer</span><i>by Actor</i>
    <p>⭐⭐⭐⭐⭐</p>
    <p>It was popularised in the<br></br>the release of Letraset</p>
    <p>$13.92</p>
    <button className="cart_add" >ADD TO CART</button>
    </div>
       </Music>
       <Music>
   <div  className="album_music3">
    <img className="img_al" src={album_three}></img>
    <span>Oh my Deer</span><i>by Actor</i>
    <p>⭐⭐⭐⭐⭐</p>
    <p>It was popularised in the<br></br>the release of Letraset</p>
    <p>$12.33</p>
    <button className="cart_add" >ADD TO CART</button>
    </div>
       </Music>
       <Music>
   <div  className="album_music4">
    <img className="img_al" src={album_four}></img>
    <span>Oh my Deer</span><i>by Actor</i>
    <p>⭐⭐⭐⭐⭐</p>
    <p>It was popularised in the<br></br>the release of Letraset</p>
    <p>$18.39</p>
    <button className="cart_add" >ADD TO CART</button>
    </div>
       </Music>
{/* ======================================== */}
       <Music>
         <div className="container_albom_sale">
    <h1>ALBUMS CURRENTLY ON SALE</h1>
   
    <img className="img_al" src={album_five}></img>
    <span>Caribou</span><i>by Actor</i>
    <p>⭐⭐⭐⭐⭐</p>
    <p>It was popularised in the<br></br>the release of Letraset</p>
    <p>$11.39</p>
    <button className="cart_add" >ADD TO CART</button>
    </div>
       </Music>
       <Music>
       <div className="container_albom_sale">
   <div  className="album_music">
    <img className="img_al" src={album_six}></img>
    <span>Aquaiung</span><i>by Actor</i>
    <p>⭐⭐⭐⭐⭐</p>
    <p>It was popularised in the<br></br>the release of Letraset</p>
    <p>$16.59</p>
    <button className="cart_add" >ADD TO CART</button>
    </div>
    </div>
       </Music>
       <Music>
       <div className="container_albom_sale">
   <div  className="album_music3">
    <img className="img_al" src={album_seven}></img>
    <span>Ravenna</span><i>by Actor</i>
    <p>⭐⭐⭐⭐⭐</p>
    <p>It was popularised in the<br></br>the release of Letraset</p>
    <p>$11.22</p>
    <button className="cart_add" >ADD TO CART</button>
    </div></div>
       </Music>
       <Music>
          <div className="container_albom_sale"></div>
   <div  className="album_music4">
    <img className="img_al" src={album_eight}></img>
    <span>Strange to ears</span><i>by Actor</i>
    <p>⭐⭐⭐⭐⭐</p>
    <p>It was popularised in the<br></br>the release of Letraset</p>
    <p>$19.33</p>
    <button className="cart_add" >ADD TO CART</button>
    </div>
       </Music>
     <Publishers />
     <Footer />
      </div>
    );
  }
}
