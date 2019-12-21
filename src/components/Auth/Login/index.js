import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import LoginForm from './form/index';
import { login } from '../../../store/auth/actions';
import { toast } from '../../../utils';
import { useAuthed } from '../../../Hooks';

const Login = ({ user, login }) => {
    const [setSubmittingForm, handleSetSubmitting] = useState(null);

    const isAuthenticated = useAuthed(user);

    useEffect(() => {
        if (setSubmittingForm) {
            setSubmittingForm(false);
        }
    }, [setSubmittingForm]);

    const handleLogin = async ({ email, password }, { setSubmitting }) => {
        handleSetSubmitting(setSubmitting);

        const data = {
            email,
            password
        };

        try {
            await login(data);
        } catch (error) {
            console.error(error);
            toast.error('Check email or password');
        }
    };

    if (isAuthenticated) {
        return <Redirect to={ '/auth/email-confirm' }/>
    }

    return (
        <LoginForm
            initialValues={ { email: '', password: '' } }
            handleSubmit={ handleLogin }
        />
    );
};

const mapStateToProps = ({ auth: { user } }) => ({ user });

const mapDispatchToProps = { login };

export default connect(mapStateToProps, mapDispatchToProps)(Login);

