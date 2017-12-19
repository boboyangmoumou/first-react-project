import React from 'react';
import '../../style/index.css';
export default class CarItem extends React.Component {
    render() {
        return(
            <div className="cartBody">
                <ul>
                    <li >
                        <span>Apple/苹果 iphone6s</span>
                        <div className="type">
                        </div>
                    </li>
                </ul>
            </div>
        )
    }
}