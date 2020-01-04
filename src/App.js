import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { PrivateRoute } from './utils';
import { fetchAuthUser } from './store/auth/actions';
import { socketConnect, getMessage } from './store/chat/actions';

import Header from './components/Header';
import HomePage from './components/HomePage'
import Auth from './components/Auth';
import Dashboard from './components/Dashboard';
import Chat from './components/Chat';
import NotFound from './components/NotFound';

import { Container } from './UI';

const App = ({ user, fetchAuthUser, socketConnect, getMessage }) => {
    useEffect(() => {
        const token = localStorage.getItem('authToken');

        if (!user && token) {
            fetchAuthUser();
        }
    }, []);

    useEffect(() => {
        const token = localStorage.getItem('authToken');

        if (user && token) {
            socketConnect().then(() => getMessage());
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
                    <PrivateRoute path='/chat' component={ Chat }/>
                    <Route component={ NotFound }/>
                </Switch>
            </Container>
        </Router>
    );
};

const mapStateToProps = ({ auth: { user } }) => ({ user });

const mapDispatchToProps = { fetchAuthUser, socketConnect, getMessage };

export default connect(mapStateToProps, mapDispatchToProps)(App);
