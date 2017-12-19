import React from 'react';
import {
    Link
} from 'react-router-dom';
import '../../style/index.css';
export default class Header extends React.Component{
    render(){
        return(
            <div className="HeaderWrapper">
                <ul>
                    <li><Link to="/">index</Link></li>
                    <li><Link to="/ShopCart">cart</Link></li>
                    <li><Link to="/Address">address</Link></li>
                </ul>
            </div>
        )   
    }
}