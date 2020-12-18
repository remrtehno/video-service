import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import MainPage from '../pages/MainPage/Index';
import s from './App.module.scss';
import CategoryPage from '../CategoryPage/CategoryPage';
import Loader from '../Loader/Loader';
import configureStore from './configureStore';

const store = configureStore();

function App() {
    return (
        <Provider store={store}>
            <div className={s.wrapper}>
                <Router>
                    <Switch>
                        <Route path="/category">
                            <CategoryPage />
                        </Route>
                        <Route path="/">
                            <MainPage />
                        </Route>
                    </Switch>
                </Router>
                <Loader />
            </div>
        </Provider>
    );
}

export default App;
