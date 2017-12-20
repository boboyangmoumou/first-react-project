import React from 'react';
import {
    connect
} from 'react-redux';
import {
    addShopcart
} from '../actions';

import '../../style/index.css';
    
class NewIndex extends React.Component {
    constructor() {
        super();
        this.state  = {
            newsItem: [],
            style: [],
            url:"",
            money:"",
            _active:0,
            currentActive:0,
            count:1,
            newSize:'',
            newColor:'',
            selectCart:[]
        };
        console.log(123456789);
    };
    componentWillMount() {
        fetch("./data.json",{
        })
        .then((response) => response.json())
        .then((json)=>{
            this.setState({
                newsItem:json,
                url:json[0].style[0].url,
                newColor:json[0].style[0].color,
                money:json[0].price,
                count:1,

            })
        }) 
    };
    renderColor = (color) => 
        (color.map((value,index)=> 
        <li key={index} 
            className={index === this.state._active ? "_active" : null}
            onClick={(e) => this.ChangeStyle(value,index,e)} >
        {value.color}</li>))
    renderSize = (color) => 
        (color.map((value,index)=>
        <li key={index} 
            className={value.money === this.state.money ? "currentActive" : null} 
            onClick={(e) => this.ChangeSize(value,index,e)}>
        {value.size}</li>))
    ChangeStyle(value,index, e) {
        this.setState({
            url:value.url,
            _active:index,
            newColor:value.color
        });
    }
    ChangeSize(value,index, e) {
        this.setState({
            money:value.money,
            currentActive:index,
            newSize:value.size
        });
    }
    addShopcart(money,count,newSize,newColor,e) {
        const {onTodoClick} = this.props
        e.preventDefault();
        const cartInfo={
            money,
            count,
            newSize,
            newColor
        }
        // this.setState({
        //     selectCart:cartInfo
        // })
        onTodoClick(cartInfo)
    }
    render(){
        const {newsItem,url,money,count,newSize,newColor,selectCart} =this.state
        const newsList = newsItem.length
        ? newsItem.map((Item, index) => (
            <div key={index} className="mainWrapper">
                <div className="gellery">
                    <img src={url} alt={url}/>
                </div>
                <div className="container">
                    <div className="title">
                        <h3>{Item.name}</h3>
                    </div>
                    <div className="desWapper AllStyle">
                        <div className="desc inline">描述:</div>
                        <div className="complit">{Item.desc}</div>
                    </div>
                    <div className="price AllStyle">
                        <div className="inline">价格:</div>
                        <div className="complit">{money}</div>
                    </div>
                    <div className="colorWapper AllStyle">
                        <div className="guuise inline">外观:</div>
                        <div className="content">
                            {this.renderColor(Item.style)}
                        </div>
                    </div>
                    <div className="lostrageWapper AllStyle">
                        <div className="capacity inline">内存:</div>
                        <div className="content">
                            {this.renderSize(Item.storage)}
                        </div>
                    </div>
                    <div className="shopCart btn btn-block" style={newColor&&newSize?{background:'#666'}:{background:"red"}} onClick={(e) => this.addShopcart(money,count,newSize,newColor,e)}>加入购物车</div>
                </div>
            </div>
        ))
        :"";      
        return (
            <div className="cartContainer">
                {newsList}
            </div>
        )
    }
}

// const mapStateToProps = state => {
//     return {
//       hhhhh: 123456
//     }
//   }
const mapDispatchToProps = dispatch => {
    return {
      onTodoClick: selectCart => {
        dispatch(addShopcart(selectCart))
      }
    }
  }
export default connect(
    undefined,
    mapDispatchToProps
)(NewIndex);
