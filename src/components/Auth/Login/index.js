import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import LoginForm from './form/index';
import { login } from '../../../store/auth/actions';

const Login = ({ login }) => {
    const [setSubmittingForm, handleSetSubmitting] = useState(null);

    useEffect(() => {
        if (setSubmittingForm) {
            setSubmittingForm(false);
        }
    }, [setSubmittingForm]);

    const handleLogin = ({ email, password }, { setSubmitting }) => {
        handleSetSubmitting(setSubmitting);

        const data = {
            email,
            password
        };

        login(data);
    };

    return (
        <LoginForm
            initialValues={ { email: '', password: '' } }
            handleSubmit={ handleLogin }
        />
    );
};

const mapDispatchToProps = {
    login
};

export default connect(null, mapDispatchToProps)(Login);

