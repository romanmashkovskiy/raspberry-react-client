import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { PrivateRoute, toast } from './utils';
import { fetchAuthUser, logout } from './store/auth/actions';

import Header from './components/Header';
import HomePage from './components/HomePage'
import Auth from './components/Auth';
import Dashboard from './components/Dashboard';
import NotFound from './components/NotFound';

import { Container } from './UI';

const App = ({ user, fetchAuthUser, socketClient }) => {
    useEffect(() => {
        const token = localStorage.getItem('authToken');

        if (!user && token) {
            fetchAuthUser();
        }
    }, []);

    useEffect(() => {
        if (user) {
            socketClient.connect();
        }
    }, [user]);

    return (
        <Router>
            <Header/>
            <Container>
                <Switch>
                    <Route exact path='/' component={ HomePage }/>
                    <Route path='/auth' component={ Auth }/>
                    <PrivateRoute path='/dashboard' component={ Dashboard }/>
                    <Route component={ NotFound }/>
                </Switch>
            </Container>
        </Router>
    );
};

const mapStateToProps = ({ auth: { user } }) => ({ user });

const mapDispatchToProps = { fetchAuthUser, logout };

export default connect(mapStateToProps, mapDispatchToProps)(App);
