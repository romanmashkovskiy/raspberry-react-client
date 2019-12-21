import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import RestorePasswordForm from './form';
import { restorePassword } from '../../../store/auth/actions';

const RestorePassword = ({ restorePassword }) => {
    const [setSubmittingForm, handleSetSubmitting] = useState(null);

    useEffect(() => {
        if (setSubmittingForm) {
            setSubmittingForm(false);
        }
    }, [setSubmittingForm]);

    const handleRestorePassword = ({ email, password, code }, { setSubmitting }) => {
        handleSetSubmitting(setSubmitting);

        const data = {
            email,
            password,
            code
        };

        restorePassword(data);
    };

    return (
        <RestorePasswordForm
            values={ { email: '', password: '', confirmPassword: '', code: '' } }
            handleSubmit={ handleRestorePassword }
        />
    );
};

const mapDispatchToProps = { restorePassword };

export default connect(null, mapDispatchToProps)(RestorePassword);


