import React, { Component } from 'react'
import './Publisher.scss';
import one_pub from './img/1.png';
import two_pub from './img/2.png';
import three_pub from './img/3.png';
import four_pub from './img/4.png';
import five_pub from './img/5.png';
import six_pub from './img/6.png';
export default class Publisher extends Component {
    render() {
        return (
            <div className="pub">
                <h1>OUR MOST IMPORTANT PUBLISHERS</h1>
                <div className="div_icon">
               <img src={one_pub}></img>
               <img src={two_pub}></img>
               <img src={three_pub}></img>
               <img src={four_pub}></img>
               <img src={five_pub}></img>
               <img src={six_pub}></img>
               </div>
            </div>
        )
    }
}
