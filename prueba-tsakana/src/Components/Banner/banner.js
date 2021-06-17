import React, { Component } from 'react';
import './banner.css';
import shopping from '../../Resources/shopping-bag.png';
import user from '../../Resources/user.png'
import Logo from '../../Resources/logo.PNG';

class Banner extends Component {


    render() {

        return (
            <div className="o-div-options">
                <div className="topnav">
                    <div>
                    <a ><img src={Logo} width="144px" height="57px" /> </a>
                    <a href="#about">MUJER</a>
                    <a href="#about">HOMBRE</a>
                    <a href="#about">NIÑAS</a>
                    </div>
                    <div className="o-options">
                        <form>
                            <label>
                                <input type="text" name="name" />
                            </label>
                        </form>
                        <a href="#contact"><img src={shopping} width="28px" height="28px" /></a>
                        <a href="#about"><img src={user} width="28px" height="28px" /></a>
                        <a href="javascript:void(0);" class="icon" onclick="myFunction()">
                            <i class="fa fa-bars"></i>
                        </a>
                    </div>
                </div>



            </div>
        )


    }

}

export default Banner;