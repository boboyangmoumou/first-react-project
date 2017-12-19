import React from 'react';
import {
    HashRouter as Router,
	Route,
    Switch
} from 'react-router-dom';
import Address from './redux/components/address';
import ShopCart from './redux/components/shopCart';
import NewIndex from './redux/components/index';
import Header from './redux/components/header';


export default class App extends React.Component{
    render() {
        const activeStyle = {backgroundColor: "#0099FF"};
        return(
            <Router>
                <div className="app">
                    <Header/>
                    <Switch>
                        <Route exact path='/' activeStyle={activeStyle} component={NewIndex}/>
                        <Route path='/ShopCart' activeStyle={activeStyle} component={ShopCart}/>
                        <Route path='/Address' activeStyle={activeStyle} component={Address}/>
                    </Switch>
                </div> 
            </Router>
        )
    }
}
