import React from 'react';
import { NavLink } from 'react-router-dom';
import { Formik } from 'formik';
import * as Yup from 'yup';

import { Input, Button } from '../../../../UI';
import { makeStyles } from '@material-ui/core/styles';

const ResetPasswordSchema = Yup.object().shape({
    email: Yup.string()
        .email('Email is invalid.')
        .required('Email is required.'),
});

const useStyles = makeStyles(() => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
    },
}));

const ResetPasswordForm = ({ values, handleSubmit }) => {
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
                <Button
                    { ...formProps }
                    type='submit'
                    value='Send reset code'
                />
                <NavLink
                    to={ '/auth/login' }
                    style={ { marginTop: '15px' } }
                >
                    or try login
                </NavLink>
            </form>
        );
    };

    return (
        <Formik
            initialValues={ values }
            onSubmit={ handleSubmit }
            render={ renderForm }
            validationSchema={ ResetPasswordSchema }
        />
    );
};

export default ResetPasswordForm;