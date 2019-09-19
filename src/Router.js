import React from 'react'
import {Switch,Redirect,Route,withRouter} from 'react-router-dom'
import Home from './Component/Home';
import Login from './Component/Login';
import Profile from './Component/Profile/Profile';
import ProfileEntry from './Component/Profile/ProfileEntry';
import Registration from './Component/Registration';
import TutorialMark from './Component/TutorialMark';
import  Inverter from './Component/Test/inverter'


const Router = () => {
    return (
        <div>
            <Switch>
                <Route path='/home' component={Home}></Route>
                <Route path='/login' component={Login}></Route>
                <Route path='/profile' component={Profile}></Route>
                <Route path='/inverter' component={Inverter}></Route>
                <Route path='/register' component={Registration}></Route>
                <Route path='/tmark' component={TutorialMark}></Route>
                <Route path='/profileEntry' component={ProfileEntry}></Route>
                <Route path='/profileEntry/:id' component={ProfileEntry}></Route>
                <Redirect to='/login'></Redirect>
            </Switch>
        </div>
    )
}

export default withRouter(Router);
