import React, { Component } from "react";
import ReactDOM from "react-dom";


import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import {Carousel} from '3d-react-carousal';
import img_one from './img/1.jpg' ;
import img_two from './img/2.jpg' ;
import img_three from './img/3.jpg' ;
import img_four from './img/4.jpg' ;
import img_five from './img/5.jpg' ;
import Slider from "./components/Slider/Slider";
import Music from "./components/Music/Music";
import "./App.scss";

class App extends Component {
  state = {
    
    post: [
      { 
        id: 1,
        title: "ADD TO CART",
        title_name: "LATEST ARIVALS IN MUSICA",
        title_mod: "title_mod",
        
        btn_add: "btn_add",
        nam: "Ravenna",
        by: "by Actor",
        star: "⭐⭐⭐⭐⭐",
        text:"It was popularised in the the release of Letraset",
        price: "$18.22",
        text_cont: "text_cont",
      },
      { 
        id: 2,
        title: "ADD TO CART",
        text_cont: "text_cont_two",
        contain_cart: "contain_cart",
        nam: "Ravenna",
        btn_add: "btn_add_two",
        by: "by Actor",
        star: "⭐⭐⭐⭐⭐",
        text:"It was popularised in the the release of Letraset",
        price: "$18.22",
      },
      { 
        id: 3,
        title: "ADD TO CART",
        nam: "Ravenna",
        by: "by Actor",
        btn_add: "btn_add_three",
        contain_cart: "contain_cart_three",
        star: "⭐⭐⭐⭐⭐",
        text:"It was popularised in the the release of Letraset",
        price: "$18.22",
        text_cont: "text_cont_three",
      },
      { 
        id: 4,
        title: "ADD TO CART",
        text_cont: "text_cont_four",
        btn_add: "btn_add_four",
        contain_cart: "contain_cart_four",
        nam: "Ravenna",
        by: "by Actor",
        star: "⭐⭐⭐⭐⭐",
        text:"It was popularised in the the release of Letraset",
        price: "$18.22",
      },
      {
      id: 1,
      title: "ADD TO CART",
      title_name: "AlBUMS CURRENTLY OSALE",
      
      title_mod: "title_mod",
      btn_add: "btn_add",
      nam: "Ravenna",
      by: "by Actor",
      star: "⭐⭐⭐⭐⭐",
      text:"It was popularised in the the release of Letraset",
      price: "$18.22",
      text_cont: "text_cont",
    },
    { 
      id: 2,
      title: "ADD TO CART",
      text_cont: "text_cont_two",
      contain_cart: "contain_cart",
      nam: "Ravenna",
      btn_add: "btn_add_two",
      by: "by Actor",
      star: "⭐⭐⭐⭐⭐",
      text:"It was popularised in the the release of Letraset",
      price: "$18.22",
    },
    { 
      id: 3,
      title: "ADD TO CART",
      nam: "Ravenna",
      by: "by Actor",
      btn_add: "btn_add_three",
      contain_cart: "contain_cart_three",
      star: "⭐⭐⭐⭐⭐",
      text:"It was popularised in the the release of Letraset",
      price: "$18.22",
      text_cont: "text_cont_three",
    },
    { 
      id: 4,
      title: "ADD TO CART",
      text_cont: "text_cont_four",
      btn_add: "btn_add_four",
      contain_cart: "contain_cart_four",
      nam: "Ravenna",
      by: "by Actor",
      star: "⭐⭐⭐⭐⭐",
      text:"It was popularised in the the release of Letraset",
      price: "$18.22",
    },
    ]
  };
  

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

        
        < Navbar />
        <Header />
        <Carousel slides={slides} autoplay={false}/>
        <Slider />
        <Music data={this.state.post} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

export default App;