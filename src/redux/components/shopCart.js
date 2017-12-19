import React from 'react';
import '../../style/index.css';
import CarItem from './carItem'
import {
    connect
} from 'react-redux';
class ShopCart extends React.Component{
    render() {
        console.log(this.props.selectCart);
        return (
            <div className="cartWrapper">
                <div className="cart-heading">
                    <span className="headcart">购物车</span>
                    <span className="pull-right"><strong>总计:</strong></span>
                </div>
                <CarItem></CarItem>
                <div className="footer-btn">
                    <button className="btn-block">
                        结算
                    </button>
                </div>
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
)(ShopCart);