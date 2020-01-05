import React from 'react';
import { render } from 'react-dom';
import { StoreContext } from 'redux-react-hook';
import Routes from './route';
import * as serviceWorker from './serviceWorker';
import store from './store';
import 'bootstrap/dist/css/bootstrap.css';

import './i18n';

render(
    <StoreContext.Provider value={store}>
        <Routes />
    </StoreContext.Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
