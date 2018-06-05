import React, { Component } from 'react';
import {Route,Switch} from 'react-router-dom'
import './css/reset.css'
import List from '../list/list'
import knowledge from '../knowledge/knowledge'
import Personal from '../personal/personal'
import Home from '../home/home'
import Tabfooter from '../Tabfooter/tabfooter'
import ShopCar from '../shopCat/shopCat'
import Login from '../login/login'
class App extends Component {

  render() {
    return (
        <div>
        <Switch>
            <Route path='/list' component={List}/>
            <Route path='/knowledge' component={knowledge}/>
            <Route path='/personal' component={Personal}/>
            <Route path='/home' component={Home}/>
            <Route path='/ShopCar' component={ShopCar}/>
            <Route path='/login' component={Login}/>
        </Switch>
            <Tabfooter/>
        </div>

    );
  }
}

export default App;
