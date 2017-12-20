import React from 'react';
import {
    connect
} from 'react-redux';
import {
    deletegood
} from '../actions';
import '../../style/index.css';
class CarItem extends React.Component {
    constructor(){
        super()
        this.state={
            index:[]
        };
    };
    deletegood(index,e) {
        e.preventDefault();
        const {onDeleteClick} = this.props;
        console.log(index);
        onDeleteClick([index]);
    }
    render() {
        console.log(this.props.selectCart);
        const shopItem = this.props.selectCart.length
        ? this.props.selectCart.map((item,index) => (
            <li key={index} >
            <span>Apple/苹果 iphone6s</span>
            <div className="type">
                <span>{item.newSize}</span>
                <span>{item.newColor}</span>
            </div>
            <div className="count">
                <span>{item.count}</span>
            </div>
            <div className="price">
                <span>{item.money}</span>
            </div>
            <div className="delete" onClick={(e) => this.deletegood(index,e)}>X</div>
        </li>
        ))
        :'购物车里面空空的~~~';
        return(
            <div className="cartBody">
                <ul>
                   {shopItem}
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
const mapDispatchToProps = dispatch => {
    return {
        onDeleteClick: index => {
            dispatch(deletegood(index))
        }
    }
} 
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CarItem);