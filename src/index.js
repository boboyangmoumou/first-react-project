import React from 'react';
import ReactDOM from 'react-dom';
import {
    HashRouter as Router,
	Route,
	Switch
} from 'react-router-dom';
import Address from './redux/components/address';
import ShopCart from './redux/components/shopCart';
import NewIndex from './redux/components/index';
import Header from './redux/components/header';


export default class Root extends React.Component{
    render() {
        return(
            <Router>
                <div className="app">
                    <Header/>
                    <Switch>
                        <Route exact path='/NewIndex' Component={NewIndex}/>
                        <Route path='/ShopCart' Component={ShopCart}/>
                        <Route path='/Address' Component={Address}/>
                    </Switch>
                    <NewIndex/>
                </div> 
            </Router>
        )
    }
}
ReactDOM.render(
    <Root />,
    document.getElementById('root')
);