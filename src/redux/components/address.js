import React from 'react';
import '../../style/address.css';
import "../assets/style.css";
export default class Address extends React.Component{
    constructor(){
        super();
        this.state={
            tableList:[],
            limitNum:2,
            addressIndex:0
        }
    };
    componentWillMount() {
        fetch('../address.json',{
        })
        .then((response) => response.json())
        .then((json) => {
            this.setState({
                tableList:json
            })
        })
    };
    MoreList(e) {
        e.preventDefault();
        console.log(e);
    }
    render() {
        console.log(this.state.tableList)
        const { tableList} = this.state;
        const NewTableList = tableList.length
        ? tableList.map((item,index) => (
            <li key={index}>
                <div className="list-rect">
                    <span>{item.userName}</span>
                    <span>{item.streetName}</span>
                    <span>{item.tel}</span>
                </div>
                <div className="addressOption">
                    <a href="javascript:;" className="icon-pencil"></a>
                </div>
                <div className="addressdetele">
                    <a href="javascript:;" className="icon-bin"></a>
                </div>
            </li>
        ))
        :"";
        return (
            <div className="address">
                <div className="check-step">
                    <ul>
                        <li className="current">地址确认</li>
                        <li>查看订单</li>
                        <li>支付</li>
                        <li>订单确认</li>
                    </ul>
                </div>
                <div className="checkout-title">
                    <span>配送地址</span>
                </div>
                <div className="address-list-wrap">
                    <div className="address-list">
                        <ul>
                            {NewTableList}
                            <li className="add-new">
                                <div className="add-new-inner">
                                    <i className="icon-plus"></i>
                                    <p>添加新地址</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="add-more">
                        <a href="javascript:;" onClick={(e) => this.MoreList(e)}>
                            more
                            <i className="i-up-down"></i>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}