import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Login from './Login';
import Register from './Register';
import ConfirmEmail from './ConfirmEmail';
import ResetPassword from './ResetPassword';
import RestorePassword from './RestorePassword';
import NotFound from '../NotFound';

const Auth = ({ match, user }) => {
    if (user && user.isConfirmed) {
        return <Redirect to='/dashboard'/>
    }

    return (
        <Switch>
            <Route path={ `${match.path}/login` } component={ Login }/>
            <Route path={ `${match.path}/register` } component={ Register }/>
            <Route path={ `${match.path}/email-confirm` } component={ ConfirmEmail }/>
            <Route path={ `${match.path}/password-reset` } component={ ResetPassword }/>
            <Route path={ `${match.path}/password-restore` } component={ RestorePassword }/>
            <Route component={ NotFound } />
        </Switch>
    )
};

const mapStateToProps = ({ auth: { user } }) => ({ user });

export default connect(mapStateToProps)(Auth);

