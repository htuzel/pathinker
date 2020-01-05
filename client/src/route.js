import React, {useContext} from 'react';
import { Router, Route, Redirect, Switch as RouterSwitch } from 'react-router-dom';
import Home from './pages/Home';
import Master from './pages/Master';
import Dashboard from './pages/Dashboard';
import Register from './pages/Register';
import { history } from './helpers/history';   
import {StoreContext} from 'redux-react-hook';

const Routes = () => {
    const store = useContext(StoreContext);  
    const PrivateRoute = ({ component: Component, ...rest }) => (
        <Route {...rest} render={(props) => (
            (store.getState().registerReducer.isRegistered === true)
                ? <Component {...props} />
                : <Redirect to='/register' />
        )} />
    )

    return (
        <Router history={history}>
            <Master>
                <RouterSwitch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/register" component={Register} />
                    <PrivateRoute exact path="/dashboard" component={Dashboard} />
                </RouterSwitch>
            </Master>
        </Router>
    )
}


export default Routes;
