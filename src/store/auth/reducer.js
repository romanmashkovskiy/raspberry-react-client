import { success, error } from 'redux-saga-requests';
import {
    LOGIN_REQUEST,
    REGISTER_REQUEST,
    LOGOUT,
    FETCH_USER_REQUEST,
    CONFIRM_EMAIL_REQUEST,
    RESTORE_PASSWORD_REQUEST,
    RESET_PASSWORD_REQUEST,
    SEND_CONFIRM_EMAIL_CODE_REQUEST
} from './actions';
import { STATE_STATUSES } from '../../utils/stateStatuses';
import { toast } from '../../utils';

const initialState = {
    user: null,
    status: STATE_STATUSES.INIT,
    error: null
};

const processReducer = (state = initialState) => ({
    ...state,
    status: STATE_STATUSES.PENDING,
    error: null
});

const errorReducer = (action, state = initialState) => ({
    ...state,
    status: STATE_STATUSES.ERROR,
    error: { ...action.error },
});

export default (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
        case REGISTER_REQUEST:
        case FETCH_USER_REQUEST:
        case CONFIRM_EMAIL_REQUEST:
        case RESTORE_PASSWORD_REQUEST:
            return processReducer(initialState);
        case SEND_CONFIRM_EMAIL_CODE_REQUEST:
        case RESET_PASSWORD_REQUEST:
            return processReducer(state);
        case success(LOGIN_REQUEST):
        case success(REGISTER_REQUEST):
        case success(RESTORE_PASSWORD_REQUEST): {
            const { user, token } = action.data;

            localStorage.setItem('authToken', token);

            return {
                ...state,
                status: STATE_STATUSES.READY,
                user
            };
        }
        case success(FETCH_USER_REQUEST): {
            const { user } = action.data;

            return {
                ...state,
                status: STATE_STATUSES.READY,
                user
            };
        }
        case success(CONFIRM_EMAIL_REQUEST): {
            const { user } = action.data;

            return {
                ...state,
                status: STATE_STATUSES.READY,
                user
            };
        }
        case success(SEND_CONFIRM_EMAIL_CODE_REQUEST): {
            toast.success('Code was sent to your email');
            return { ...state };
        }
        case error(LOGIN_REQUEST):
        case error(REGISTER_REQUEST):
        case error(FETCH_USER_REQUEST):
        case error(RESTORE_PASSWORD_REQUEST):
            return errorReducer(action);
        case error(SEND_CONFIRM_EMAIL_CODE_REQUEST): {
            toast.error('Code wasn\'t sent to your email');
            return errorReducer(action, state);
        }
        case error(RESET_PASSWORD_REQUEST): {
            return errorReducer(action, state);
        }
        case LOGOUT: {
            return {
                ...initialState
            };
        }
        default:
            return state;
    }
}