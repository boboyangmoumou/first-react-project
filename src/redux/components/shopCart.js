import React from 'react';
import '../../style/index.css';
import CarItem from './carItem'
import {
    connect
} from 'react-redux';

class ShopCart extends React.Component{
    constructor(props){
        super(props);
        this.state={
            AmountMoney:0,
        }
    }
    f(){
        let AmountMoney = 0;
        for(let i in this.props.totalPrice){
            AmountMoney += this.props.totalPrice[i].money;
        }
        return AmountMoney;
    }
    render() {
        return (
            <div className="cartWrapper">
                <div className="cart-heading">
                    <span className="headcart">购物车</span>
                    <span className="pull-right"><strong>总计:{ this.f() }</strong></span>
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
        totalPrice: state.selectCart
    }
  }
export default connect(
    mapStateToProps
)(ShopCart);