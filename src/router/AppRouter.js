import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Header from '../components/Header'
import AddBook from '../components/AddBook'
import BookList from '../components/BookList'

const AppRouter = () => {
    return (
        <BrowserRouter>
            <div>
                <Header />
                <div className="main-content">
                    <Switch>
                        <Rotute component={BookList} path="/" exact={true} />
                        <Rotute component={AddBook} path="/add" />
                    </Switch>
                </div>
            </div>
        </BrowserRouter>
    );
};

export default AppRouter;