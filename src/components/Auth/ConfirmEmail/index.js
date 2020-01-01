import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import ConfirmEmailForm from './form/index';
import { confirmEmail, sendConfirmEmailCode } from '../../../store/auth/actions';

const ConfirmEmail = ({ user, confirmEmail, sendConfirmEmailCode }) => {
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

    if (!user) {
        return <Redirect to={ '/' }/>
    }

    return (
        <ConfirmEmailForm
            values={ { code: '' } }
            handleSubmit={ handleConfirmEmail }
            sendConfirmEmailCode={ sendConfirmEmailCode }
        />
    );
};

const mapStateToProps = ({ auth: { user } }) => ({ user });

const mapDispatchToProps = { confirmEmail, sendConfirmEmailCode };

export default connect(mapStateToProps, mapDispatchToProps)(ConfirmEmail);