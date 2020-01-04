export const SOCKET_CONNECT_REQUEST = 'SOCKET_CONNECT_REQUEST';
export const SOCKET_CONNECT_REQUEST_SUCCESS = SOCKET_CONNECT_REQUEST + '_SUCCESS';
export const SOCKET_CONNECT_REQUEST_FAILURE = SOCKET_CONNECT_REQUEST + '_FAILURE';

export const SOCKET_DISCONNECT_REQUEST = 'SOCKET_DISCONNECT_REQUEST';
export const SOCKET_DISCONNECT_REQUEST_SUCCESS = 'SOCKET_DISCONNECT_REQUEST' + '_SUCCESS';
export const SOCKET_DISCONNECT_REQUEST_FAILURE = 'SOCKET_DISCONNECT_REQUEST' + '_FAILURE';

export const SEND_MESSAGE_REQUEST = 'SEND_MESSAGE_REQUEST';
export const SEND_MESSAGE_REQUEST_SUCCESS = SEND_MESSAGE_REQUEST + '_SUCCESS';
export const SEND_MESSAGE_REQUEST_FAILURE = SEND_MESSAGE_REQUEST + '_FAILURE';

export const GET_MESSAGE_REQUEST = 'GET_MESSAGE_REQUEST';
export const GET_MESSAGE_REQUEST_SUCCESS = GET_MESSAGE_REQUEST + '_SUCCESS';
export const GET_MESSAGE_REQUEST_FAILURE = GET_MESSAGE_REQUEST + '_FAILURE';

export const NEW_MESSAGE = 'NEW_MESSAGE';

export const socketConnect = () => ({
    type: 'socket',
    types: [SOCKET_CONNECT_REQUEST, SOCKET_CONNECT_REQUEST_SUCCESS, SOCKET_CONNECT_REQUEST_FAILURE],
    promise: (socket) => socket.connect(),
});

export const socketDisconnect = () => ({
    type: 'socket',
    types: [SOCKET_DISCONNECT_REQUEST, SOCKET_DISCONNECT_REQUEST_SUCCESS, SOCKET_DISCONNECT_REQUEST_FAILURE],
    promise: (socket) => socket.disconnect(),
});

export const sendMessage = (userId, content) => {
    const message = { userId, content };

    return {
        type: 'socket',
        types: [SEND_MESSAGE_REQUEST, SEND_MESSAGE_REQUEST_SUCCESS, SEND_MESSAGE_REQUEST_FAILURE],
        promise: (socket) => socket.emit('message', message),
    }
};

export const getMessage = () => (dispatch) => {
    const newMessage = (message) => {
        return dispatch({
            type: NEW_MESSAGE,
            result: message,
        });
    };

    return dispatch({
        type: 'socket',
        types: [GET_MESSAGE_REQUEST, GET_MESSAGE_REQUEST_SUCCESS, GET_MESSAGE_REQUEST_FAILURE],
        promise: (socket) => socket.on('message', newMessage),
    })
};