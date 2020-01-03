import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Amplify from 'aws-amplify';
import config from './aws-exports';
import {createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import thunk from 'redux-thunk';
import reducers from './reducers/index.js'
import { Router } from 'react-router-dom';
import history from './history';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

Amplify.configure(config);

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, reducers)

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    persistedReducer,
    composeEnhancers( applyMiddleware(thunk) )
);
const persistor = persistStore(store);

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <PersistGate loading={null} persistor={persistor}>
                <App/>
            </PersistGate>
        </Router>
    </Provider>,
     document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
