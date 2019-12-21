import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import RegisterForm from './form/index';
import { register } from '../../../store/auth/actions';
import { useAuthed } from '../../../Hooks';

const Register = ({ user, register, history }) => {
    const [setSubmittingForm, handleSetSubmitting] = useState(null);

    const isAuthenticated = useAuthed(user);

    useAuthed(user, history);

    useEffect(() => {
        if (setSubmittingForm) {
            setSubmittingForm(false);
        }
    }, [setSubmittingForm]);

    const handleRegister = ({ userName, email, password }, { setSubmitting }) => {
        handleSetSubmitting(setSubmitting);

        const data = {
            userName,
            email,
            password
        };

        register(data);
    };

    if (isAuthenticated) {
        return <Redirect to={ '/auth/email-confirm' }/>
    }

    return (
        <RegisterForm
            initialValues={ { userName: '', email: '', password: '', confirmPassword: '' } }
            handleSubmit={ handleRegister }
        />
    );
};

const mapStateToProps = ({ auth: { user } }) => ({ user });

const mapDispatchToProps = { register };

export default connect(mapStateToProps, mapDispatchToProps)(Register);

