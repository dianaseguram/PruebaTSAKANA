import React, {Component} from 'react';
import './logo.css';
import imglogo from '../../Resources/logo.PNG'

class Logo extends Component{
    render(){
        return(
            <div className='o-div-logo'>
                <img src={imglogo}/> 
            </div>
        )
    }
}

export default Logo