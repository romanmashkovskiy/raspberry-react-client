import {
    SOCKET_CONNECT_REQUEST,
    SOCKET_CONNECT_REQUEST_SUCCESS,
    SOCKET_CONNECT_REQUEST_FAILURE,
    SOCKET_DISCONNECT_REQUEST,
    NEW_MESSAGE
} from './actions';
import { SOCKET_STATUSES } from '../../utils/socketStatuses';


const initialState = {
    messages: [],
    status: SOCKET_STATUSES.DISCONNECTED,
    error: null
};

const processReducer = (state = initialState) => ({
    ...state,
    status: SOCKET_STATUSES.CONNECTING,
    error: null
});

const errorReducer = (action, state = initialState) => ({
    ...state,
    status: SOCKET_STATUSES.DISCONNECTED,
    error: { ...action.error },
});

export default (state = initialState, action) => {
    switch (action.type) {
        case SOCKET_CONNECT_REQUEST:
            return processReducer(initialState);
        case SOCKET_CONNECT_REQUEST_SUCCESS:
            return {
                ...initialState,
                status: SOCKET_STATUSES.CONNECTED,
            };
        case SOCKET_CONNECT_REQUEST_FAILURE:
            return errorReducer(action);
        case SOCKET_DISCONNECT_REQUEST:
            return {
                ...initialState
            };
        case NEW_MESSAGE:
            return {
                ...state,
                messages: state.messages.concat(action.result)
            };
        default:
            return state;
    }
}