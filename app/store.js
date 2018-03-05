import { applyMiddleware, combineReducers, createStore, compose } from 'redux';
import thunk from 'redux-thunk';

import LoginReducer from './screens/Login/Model/LoginReducer';
import CreateAccountReducer from './screens/CreateAccount/Model/CreateAccountReducer';
import SpellsReducer from './screens/Spells/Model/SpellsReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const appReducer = combineReducers({
    LoginReducer,
    CreateAccountReducer,
	SpellsReducer
});

export default store = createStore(
    appReducer,
    {},
    composeEnhancers(applyMiddleware(thunk))
);
