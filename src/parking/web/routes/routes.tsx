import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from "../pages/home";
import ParkingHome from "../pages/parking";
import Login from "../pages/login";
import Register from "../pages/register";


const Routes: React.FC = () => (
    <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/parking-home" component={ParkingHome} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
    </Switch>
)
export default Routes