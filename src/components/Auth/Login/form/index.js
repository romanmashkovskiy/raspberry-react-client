import React from 'react';
import { NavLink } from 'react-router-dom';
import { Formik } from 'formik';
import * as Yup from 'yup';

import { makeStyles } from '@material-ui/core/styles';
import { Input, Button } from '../../../../UI';

const LoginSchema = Yup.object().shape({
    email: Yup.string()
        .email('Email is invalid.')
        .required('Email is required.'),
    password: Yup.string()
        .required('Password is required.')
});

const useStyles = makeStyles(() => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
    },
}));

const LoginForm = ({ initialValues, handleSubmit }) => {
    const classes = useStyles();

    const renderForm = (formProps) => {
        return (
            <form onSubmit={ formProps.handleSubmit } className={ classes.container }>
                <Input
                    { ...formProps }
                    label='Email'
                    name='email'
                    type='text'
                />
                <Input
                    { ...formProps }
                    label='Password'
                    name='password'
                    type='password'
                />
                <Button
                    { ...formProps }
                    type='submit'
                    value='Login'
                />
                <NavLink
                    to={ '/auth/register' }
                    style={ { marginTop: '15px' } }
                >
                    or register
                </NavLink>
                <NavLink
                    to={ '/auth/password-reset' }
                    style={ { marginTop: '15px' } }
                >
                    reset password
                </NavLink>
            </form>
        );
    };

    return (
        <Formik
            initialValues={ initialValues }
            onSubmit={ handleSubmit }
            render={ renderForm }
            validationSchema={ LoginSchema }
        />
    );
};

export default LoginForm;