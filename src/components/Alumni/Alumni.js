import React, { Component } from 'react';
import './alumni.css';
import { Animated } from "react-animated-css";

import Header from './Header';
import Display from './Display';

class Alumni extends Component {
    state = {  }

    
    render() { 
        let {alumni} = this.props;
        return ( 
            <div className="alumni-container">
                 <Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true}>
                    <div className="alum-header">
                        <Header />
                    </div>
                 </Animated>

                 <Animated animationIn="bounceInRight" animationOut="fadeOut" isVisible={true}>
                    <div className="alum-display">
                        <Display  alumni={alumni}/>
                    </div>
                 </Animated>
            </div>
         );
    }
}
 
export default Alumni;