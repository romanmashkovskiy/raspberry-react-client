import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';

import { Input, Button } from '../../../../UI';
import { makeStyles } from '@material-ui/core/styles';

const ConfirmEmailSchema = Yup.object().shape({
    code: Yup.string()
        .required('Code is required.'),
});

const useStyles = makeStyles(() => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
    },
}));

const ConfirmEmailForm = ({ values, handleSubmit, sendConfirmEmailCode }) => {
    const classes = useStyles();

    const renderForm = (formProps) => {
        return (
            <form onSubmit={ formProps.handleSubmit } className={ classes.container }>
                <Input
                    { ...formProps }
                    label='Activation code'
                    name='code'
                    type='text'
                />
                <span
                    role='button'
                    onClick={ sendConfirmEmailCode }
                    style={ { marginBottom: '15px', cursor: 'pointer' } }
                >
                        Send code again
                </span>
                <Button
                    { ...formProps }
                    type='submit'
                    value='Activate'
                />
            </form>
        );
    };

    return (
        <Formik
            initialValues={ values }
            onSubmit={ handleSubmit }
            render={ renderForm }
            validationSchema={ ConfirmEmailSchema }
        />
    );
};

export default ConfirmEmailForm;