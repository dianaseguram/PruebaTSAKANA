import React, {Component} from 'react';
import img from '../../Resources/Grupo 13335.png';

class Carrousel extends Component{
    render(){
        return(
            <div>
                <img src={img} width="100%"/>
            </div>
        )
    }
}

export default Carrousel;