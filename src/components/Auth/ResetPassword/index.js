import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import ResetPasswordForm from './form';
import { resetPassword } from '../../../store/auth/actions';
import { toast } from '../../../utils';

const ResetPassword = ({ history, resetPassword }) => {
    const [setSubmittingForm, handleSetSubmitting] = useState(null);

    useEffect(() => {
        if (setSubmittingForm) {
            setSubmittingForm(false);
        }
    }, [setSubmittingForm]);

    const handleResetPassword = async ({ email }, { setSubmitting }) => {
        handleSetSubmitting(setSubmitting);

        const data = {
            email
        };

        try {
            await resetPassword(data);
            history.push('/auth/password-restore');
        } catch(error) {
            console.error(error);
            toast.error('Check email');
        }
    };

    return (
        <ResetPasswordForm
            values={ { email: '' } }
            handleSubmit={ handleResetPassword }
        />
    );
};

const mapDispatchToProps = { resetPassword };

export default connect(null, mapDispatchToProps)(ResetPassword);