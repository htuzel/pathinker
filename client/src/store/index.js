import { combineReducers,createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from "redux-saga";
import registerReducer from '../pages/Register/reducer';
import loginReducer from '../pages/Login/reducer';
import rootSaga from './sagas';
import { history } from '../helpers/history';
import { routerMiddleware } from 'react-router-redux';

const loggerMiddleware = createLogger();

const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const rootReducer = combineReducers({
        registerReducer,
        loginReducer
    });

const routersMiddleware = routerMiddleware(history);

const sagaMiddleware = createSagaMiddleware();
const enhancer = composeEnhancers(
    applyMiddleware(sagaMiddleware, loggerMiddleware,routersMiddleware)
);

const store = createStore(rootReducer, enhancer);
sagaMiddleware.run(rootSaga);

export default store;