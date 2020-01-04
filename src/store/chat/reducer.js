import { NEW_MESSAGE } from './actions';

const initialState = {
    messages: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case NEW_MESSAGE:
            return {
                ...state,
                messages: state.messages.concat(action.data)
            };
        default:
            return state;
    }
}