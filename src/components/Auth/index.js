import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Login from './Login';
import Register from './Register';
import ConfirmEmail from './ConfirmEmail';
import ResetPassword from './ResetPassword';
import RestorePassword from './RestorePassword';

const Auth = ({ match, user }) => {
    if (user && user.isConfirmed) {
        return <Redirect to='/'/>
    }

    if (user && !user.isConfirmed) {
        return <Redirect to={ `${match.path}/email-confirm` }/>
    }

    return (
        <Switch>
            <Route path={ `${match.path}/login` } component={ Login }/>
            <Route path={ `${match.path}/register` } component={ Register }/>
            <Route path={ `${match.path}/email-confirm` } component={ ConfirmEmail }/>
            <Route path={ `${match.path}/password-reset` } component={ ResetPassword }/>
            <Route path={ `${match.path}/password-restore` } component={ RestorePassword }/>
        </Switch>
    )
};

const mapStateToProps = ({ auth: { user } }) => ({ user });

export default connect(mapStateToProps)(Auth);

