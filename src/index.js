import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import './index.css';
import App from './App';
import MovieReducer from './store/reducers/movieReducer';
import * as serviceWorker from './serviceWorker';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import { PersistGate } from 'redux-persist/integration/react'
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'

const persistConfig = {
    key: 'root',
    storage,
}
const options = {
    // you can also just use 'bottom center'
    position: positions.MIDDLE_RIGHT,
    timeout: 2000,
    offset: '30px',
    // you can also just use 'scale'
    transition: transitions.SCALE
  }
const persistedReducer = persistReducer(persistConfig, MovieReducer)


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(persistedReducer, composeEnhancer(applyMiddleware(thunk)));   
// const persistor = persistStore(store)

const app = (
    <Provider store={store} >
        <BrowserRouter>
            <AlertProvider template={AlertTemplate} {...options}>
                <App />
            </AlertProvider>
        </BrowserRouter>
        {/* <PersistGate loading={null} persistor={persistor}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </PersistGate> */}
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
