import React from 'react';
import '../../style/index.css';
    
export default class NewIndex extends React.Component {
    constructor() {
        super();
        this.state  = {
            newsItem: [],
            style: [],
            url:""
        };
    };
    componentWillMount() {
        console.log("111");
        fetch("./data.json",{
            method: 'GET'
        })
        .then((response) => response.json())
        .then((json)=>{
            this.setState({
                newsItem:json,
                url:json[0].style[0].url
            })
        })
    };
    
    renderColor = (color) => (color.map((value,index)=> <li key={index} onClick={(e) => this.changeStyle(value,e)} >{value.color}</li>))
    renderSize = (color) => (color.map((value,index)=><li key={index}>{value.size}</li>))
    changeStyle(value, event) {
        this.setState({url:value.url})
    }
    render(){
        const {newsItem,url} =this.state
        const newsList = newsItem.length
        ? newsItem.map((Item, index) => (
            <div key={index} className="mainWrapper">
                <div className="gellery">
                    <img src={url} />
                </div>
                <div className="container">
                    <div className="title">
                        <h3>{Item.name}</h3>
                    </div>
                    <div className="desWapper">
                        {Item.desc}
                    </div>
                    <div className="colorWapper">
                        <div className="guuise">外观</div>
                        <div className="content">
                            {this.renderColor(Item.style)}
                        </div>
                    </div>
                    <div className="lostrageWapper">
                        <div className="capacity">内存</div>
                        <div className="content">
                            {this.renderSize(Item.storage)}
                        </div>
                    </div>
                </div>
            </div>
        ))
        :"什么都没有";      
        return (
            <div className="cartContainer">
             {newsList}
                <div className="container">
                        <div className="shopCart">加入购物车</div>
                </div> 
            </div>
        )
    }
}
