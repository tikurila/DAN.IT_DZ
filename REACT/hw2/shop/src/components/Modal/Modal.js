import React, { Component } from "react";

import "./Modal.scss";


    export default class Modal extends Component {
      render() {
          const { handleClose, show, children, addToCart } = this.props;
          const showHideClassName = show ? 'modal display-block' : 'modal display-none';
  
          return (
              <div className={showHideClassName}>
                  <section className='modal-main'>
                      {children}
                      <button className="btn_close" onClick={addToCart}>
                          Add to Cart
                      </button>
                      <button className="btn_ok" onClick={handleClose}>
                          Close
                      </button>
                  </section>
              </div>
          );
      }
  }
