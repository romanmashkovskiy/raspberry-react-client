export const SOCKET_CONNECT_REQUEST = 'SOCKET_CONNECT_REQUEST';
export const SOCKET_CONNECT_REQUEST_SUCCESS = SOCKET_CONNECT_REQUEST + '_SUCCESS';
export const SOCKET_CONNECT_REQUEST_FAILURE = SOCKET_CONNECT_REQUEST + '_FAILURE';

export const SOCKET_DISCONNECT = 'SOCKET_DISCONNECT';

export const BLINK_REQUEST = 'BLINK_REQUEST';
export const BLINK_REQUEST_SUCCESS = BLINK_REQUEST + '_SUCCESS';
export const BLINK_REQUEST_FAILURE = BLINK_REQUEST + '_FAILURE';

export const CLEAR_REQUEST = 'CLEAR_REQUEST';

export const blink = () => ({
    type: BLINK_REQUEST,
    request: {
        url: 'toggle-led',
        method: 'post',
    },
});

export const socketConnect = () => ({
    type: 'socket',
    types: [SOCKET_CONNECT_REQUEST, SOCKET_CONNECT_REQUEST_SUCCESS, SOCKET_CONNECT_REQUEST_FAILURE],
    promise: (socket) => socket.connect(),
});

export const socketDisconnect = () => ({
    type: 'socket',
    types: [SOCKET_DISCONNECT],
    promise: (socket) => socket.disconnect(),
});

export const clear = () => ({
    type: CLEAR_REQUEST,
    request: {
        url: 'clear',
        method: 'post',
    },
});

// export const blink = () => ({
//     type: 'socket',
//     types: [BLINK_REQUEST, BLINK_REQUEST_SUCCESS, BLINK_REQUEST_FAILURE],
//     promise: (socket) => socket.on('light', data),
// });