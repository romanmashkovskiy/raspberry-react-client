const SERVER_MESSAGE = 'SERVER/MESSAGE';
export const NEW_MESSAGE = 'NEW_MESSAGE';

export const sendMessage = (userId, content) => {
    const message = { userId, content };

    return {
        type: SERVER_MESSAGE,
        data: message
    }
};