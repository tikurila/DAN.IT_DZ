import React, { Component } from 'react'
import './Footer.scss'
import icon_one from '../Navbar/img/fb.png';
import icon_two from '../Navbar/img/tw.png';
import icon_three from '../Navbar/img/yt.png';
import post_img_one from '../Music/img/1.jpg';
import post_img_two from '../Music/img/2.jpg';
export default class Footer extends Component {
    render() {
        return (
            <div className="footer">
                      <div className="footer_left">
               <p className="about">Little about us</p>
               <p className="text_about">Contrary to popular belief, Lorem Ipsum<br></br> is not simply random text.<br></br> It has roots in<br></br>llege in Virginia, looked up one</p>
               <p className="with_us">Sosialize with us</p>
               <p className="contact">
           <img src={icon_one}></img>
           <img src={icon_two}></img>
           <img src={icon_three}></img>
               </p>
               <p className="archives">Our Archives</p>
               <div className="calen">
               <p class="text_calen">March 2012</p>
               <p className="line">__________________</p>
               <p class="text_calen">Febryary 2012</p>
               <p className="line">__________________</p>
               <p class="text_calen">January 2012</p>
               <p className="line">__________________</p>
               <p class="text_calen">December 2011</p>
               </div>
               <p className="post">Popular post</p>
               <img  src={post_img_one} className="img_post"></img><br></br>
               <img src={post_img_two} className="img_post_two"></img>
              <div>
              <span className="create">Create album<p>Comments</p></span>
              <span className="create2">Create album<p>Comments</p></span>
               
              </div>
              <p class="search">Search our Site</p>
              <input></input>
              <p class="tag">Tag cloud</p>
            <div className="div_tag">
            <p>Audio</p>
            <p>Music</p>
            
            </div>
            <p className="text_tag">Text</p>
            <div className="dawnfoot">
            <span className="nav-head"><a href="#">HOME</a></span><span  className="nav-head"><a href="#">SLIDER</a></span><span  className="nav-head"><a href="#">MUSIC</a></span><span  className="nav-head"><a href="#">PUBLISHER</a></span></div>
            <span className="dawn_f"> the 1500s, when an unknown | printer</span>
           </div></div>
           

           
        )
    }
}
