import React, { Component } from 'react';
import logo from "../../assets/images/LOGO-fruit.jpg";
import "./Hearder.scss"

export default class Hearder extends Component
{
    render()
    {
        return (
            <div className='container'>
                <div className='logo'>
                    <img src={logo}></img>
                </div>
            </div>
        )
    }
}
