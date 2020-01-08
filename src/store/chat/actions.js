export const SERVER_OUTGOING_MESSAGE = 'SERVER_OUTGOING_MESSAGE';
export const SERVER_USER_IS_TYPING = 'SERVER_USER_IS_TYPING';
export const SERVER_USER_STOP_TYPING = 'SERVER_USER_STOP_TYPING';
export const INCOMING_MESSAGE = 'INCOMING_MESSAGE';
export const USER_CONNECTED = 'USER_CONNECTED';
export const USER_DISCONNECTED = 'USER_DISCONNECTED';
export const USER_IS_TYPING = 'USER_IS_TYPING';
export const USER_STOP_TYPING = 'USER_STOP_TYPING';

export const sendMessage = (userId, content) => {
    const message = { userId, content };

    return {
        type: SERVER_OUTGOING_MESSAGE,
        data: message
    }
};

export const startTyping = (userId) => ({
    type: SERVER_USER_IS_TYPING,
    data: userId
});

export const stopTyping = (userId) => ({
    type: SERVER_USER_STOP_TYPING,
    data: userId
});