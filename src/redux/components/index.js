import React from 'react';
import '../../style/index.css';
    
export default class NewIndex extends React.Component {
    constructor() {
        super();
        this.state  = {
            newsItem: [],
            style:[]
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
                newsItem:json
            })
        })
    };
    renderColor = (color) => (color.map((value,index)=><div key={index}>{value.color}</div>))
    renderSize = (color) => (color.map((value,index)=><div key={index}>{value.size}</div>))

    render(){
        const {newsItem} =this.state
        // console.log(newsItem[0]?);
        const newsList = newsItem.length
        ? newsItem.map((Item, index) => (
            <div key={index} className="mainWrapper">
                <div className="gellery">
                    <img src={Item.activeStyleUrl} />
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
