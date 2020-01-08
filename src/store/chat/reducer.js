import {
    SERVER_OUTGOING_MESSAGE,
    INCOMING_MESSAGE,
    USER_CONNECTED,
    USER_DISCONNECTED,
    USER_IS_TYPING,
    USER_STOP_TYPING,
    SERVER_USER_IS_TYPING,
    SERVER_USER_STOP_TYPING
} from './actions';

const initialState = {
    messages: [],
    connectedUsers: [],
    typingUsers: [],
    isTyping: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SERVER_OUTGOING_MESSAGE:
            return {
                ...state,
                messages: state.messages.concat(action.data)
            };
        case INCOMING_MESSAGE:
            return {
                ...state,
                messages: state.messages.concat(action.data)
            };
        case USER_CONNECTED:
            return {
                ...state,
                connectedUsers: state.connectedUsers.concat(action.data),
                messages: state.messages.concat({
                    userId: action.data,
                    content: 'connected'
                })
            };
        case USER_DISCONNECTED:
            return {
                ...state,
                connectedUsers: state.connectedUsers.filter(id => id!== action.data),
                messages: state.messages.concat({
                    userId: action.data,
                    content: 'disconnected'
                })
            };
        case SERVER_USER_IS_TYPING:
            return {
                ...state,
                isTyping: true
            };
        case SERVER_USER_STOP_TYPING:
            return {
                ...state,
                isTyping: false
            };
        case USER_IS_TYPING:
            return {
                ...state,
                typingUsers: state.typingUsers.concat(action.data)
            };
        case USER_STOP_TYPING:
            return {
                ...state,
                typingUsers: state.typingUsers.filter(id => id !== action.data)
            };
        default:
            return state;
    }
}