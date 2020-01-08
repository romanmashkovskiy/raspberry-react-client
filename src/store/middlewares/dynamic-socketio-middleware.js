import io from 'socket.io-client';
import createSocketIoMiddleware from 'redux-socket.io';

// https://github.com/itaylor/redux-socket.io/issues/13
let dynamicMiddleware = null;
let initiatedDynamicMiddleware = null;
let socket = null;

const dynamicSocketioMiddleware = store => next => action => {
    if (dynamicMiddleware && !initiatedDynamicMiddleware) {
        initiatedDynamicMiddleware = dynamicMiddleware(store);
    }
    if (initiatedDynamicMiddleware) {
        return initiatedDynamicMiddleware(next)(action);
    }
    return next(action);
};

const setSocketioMiddleware = token => {
    socket = io.connect(process.env.REACT_APP_SOCKET_URL, {
        'query': 'token=' + token
    });

    dynamicMiddleware = createSocketIoMiddleware(socket, 'SERVER_');
    initiatedDynamicMiddleware = null;
};

const unsetSocketioMiddleware = () => {
    dynamicMiddleware = null;
    initiatedDynamicMiddleware = null;
    socket.disconnect(() => socket = null);
};


export default dynamicSocketioMiddleware;

export {
    setSocketioMiddleware,
    unsetSocketioMiddleware,
}