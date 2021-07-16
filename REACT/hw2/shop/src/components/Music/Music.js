import React, { Component } from 'react';
import './Music.scss';

export default class Music extends Component {
    render() {
        const{children} = this.props;
        const{children_two} = this.props;
        const{children_three} = this.props;
        const{i} = this.props;
        return (
            <div className="container_album">
                  
               
                 
                 <span className="text_artist">{children} <i>{i}</i></span>
                 <p className="star-icon">{children_two}</p>
                 <p className="text-lorem"></p>
                 <p className="price"> {children_three}</p>
               
                 
            </div>
        )
    }
}
