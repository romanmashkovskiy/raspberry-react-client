import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import ConfirmEmailForm from './form/index';
import { confirmEmail, sendConfirmEmailCode } from '../../../store/auth/actions';


const ConfirmEmail = ({ confirmEmail, sendConfirmEmailCode }) => {
    const [setSubmittingForm, handleSetSubmitting] = useState(null);

    useEffect(() => {
        if (setSubmittingForm) {
            setSubmittingForm(false);
        }
    }, [setSubmittingForm]);

    const handleConfirmEmail = ({ code }, { setSubmitting }) => {
        handleSetSubmitting(setSubmitting);

        const data = {
            code
        };

        confirmEmail(data);
    };

    return (
        <ConfirmEmailForm
            values={ { code: '' } }
            handleSubmit={ handleConfirmEmail }
            sendConfirmEmailCode={ sendConfirmEmailCode }
        />
    );
};

const mapDispatchToProps = {
    confirmEmail,
    sendConfirmEmailCode
};

export default connect(null, mapDispatchToProps)(ConfirmEmail);