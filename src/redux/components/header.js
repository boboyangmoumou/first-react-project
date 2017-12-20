import React from 'react';
import {
    Link
} from 'react-router-dom';
import {
    connect
} from 'react-redux';

import '../../style/index.css';
class Header extends React.Component{
    render(){
        return(
            <div className="HeaderWrapper">
                <ul>
                    <li><Link to="/">index</Link></li>
                    <li>
                        <Link to="/ShopCart">cart
                        {this.props.selectCart.length!==0 && <span className="goodCount" >{this.props.selectCart.length}</span>}
                    </Link></li>
                    <li><Link to="/Address">address</Link></li>
                </ul>
            </div>
        )   
    }
}

const mapStateToProps = state => {
    return {
        selectCart: state.selectCart
    }
}

export default connect(
    mapStateToProps
)(Header);
    