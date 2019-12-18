import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute =  ({ component: Component, user, ...rest }) => {
    console.log(user);

    return (
        <Route
            { ...rest }
            render={ (props) => {
                if (user && user.isConfirmed) {
                    return <Component { ...props } />;
                } else if (user && !user.isConfirmed) {
                    return <Redirect to={ {
                        pathname: '/auth/email-confirm',
                        state: { from: props.location }
                    } }/>
                } else {
                    return <Redirect to={ {
                        pathname: '/',
                        state: { from: props.location }
                    } }/>
                }
            } }
        />
    )
};

const mapStateToProps = ({ auth: { user } }) => ({
    user
});

export default connect(mapStateToProps)(PrivateRoute);