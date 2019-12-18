import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import RegisterForm from './form/index';
import { register } from '../../../store/auth/actions';

const Register = ({ register }) => {
    const [setSubmittingForm, handleSetSubmitting] = useState(null);

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

    return (
        <RegisterForm
            initialValues={ { userName: '', email: '', password: '', confirmPassword: '' } }
            handleSubmit={ handleRegister }
        />
    );
};

const mapDispatchToProps = {
    register
};

export default connect(null, mapDispatchToProps)(Register);

