export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const LOGOUT = 'LOGOUT';
export const FETCH_USER_REQUEST = 'FETCH_USER_REQUEST';
export const CONFIRM_EMAIL_REQUEST = 'CONFIRM_EMAIL_REQUEST';
export const RESTORE_PASSWORD_REQUEST = 'RESTORE_PASSWORD_REQUEST';
export const RESET_PASSWORD_REQUEST = 'RESET_PASSWORD_REQUEST';
export const SEND_CONFIRM_EMAIL_CODE_REQUEST = 'SEND_CONFIRM_EMAIL_CODE_REQUEST';

export const login = (data) => ({
    type: LOGIN_REQUEST,
    request: {
        url: 'auth/login',
        method: 'post',
        data,
    },
});

export const register = (data) => ({
    type: REGISTER_REQUEST,
    request: {
        url: 'auth/register',
        method: 'post',
        data,
    },
});

export const logout = () => ({
    type: LOGOUT,
});

export const fetchAuthUser = () => ({
    type: FETCH_USER_REQUEST,
    request: {
        url: 'auth/me',
        method: 'get',
    },
});

export const confirmEmail = (data) => ({
    type: CONFIRM_EMAIL_REQUEST,
    request: {
        url: 'auth/email-confirm',
        method: 'post',
        data,
    },
});

export const restorePassword = (data) => ({
    type: RESTORE_PASSWORD_REQUEST,
    request: {
        url: 'auth/password-restore',
        method: 'post',
        data,
    },
});

export const resetPassword = (data) => ({
    type: RESET_PASSWORD_REQUEST,
    request: {
        url: 'auth/password-reset',
        method: 'post',
        data,
    },
});

export const sendConfirmEmailCode = () => ({
    type: SEND_CONFIRM_EMAIL_CODE_REQUEST,
    request: {
        url: 'auth/send-confirm-code',
        method: 'post',
    },
});




