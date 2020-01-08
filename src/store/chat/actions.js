export const SERVER_OUTGOING_MESSAGE = 'SERVER_OUTGOING_MESSAGE';
export const SERVER_USER_IS_TYPING = 'SERVER_USER_IS_TYPING';
export const SERVER_USER_STOP_TYPING = 'SERVER_USER_STOP_TYPING';

export const INCOMING_MESSAGE = 'INCOMING_MESSAGE';
export const USER_CONNECTED = 'USER_CONNECTED';
export const USER_DISCONNECTED = 'USER_DISCONNECTED';
export const USER_IS_TYPING = 'USER_IS_TYPING';
export const USER_STOP_TYPING = 'USER_STOP_TYPING';

export const sendMessage = (content) => (dispatch, getState) => {
    const userId = getState().auth.user.id;

    const message = { userId, content };

    dispatch({
        type: SERVER_OUTGOING_MESSAGE,
        data: message
    });
};

export const startTyping = () => (dispatch, getState) => dispatch({
    type: SERVER_USER_IS_TYPING,
    data: getState().auth.user.id
});

export const stopTyping = () => (dispatch, getState) => dispatch({
    type: SERVER_USER_STOP_TYPING,
    data: getState().auth.user.id
});