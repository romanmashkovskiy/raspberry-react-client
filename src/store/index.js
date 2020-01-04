import { applyMiddleware, createStore, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { requestsPromiseMiddleware } from 'redux-saga-requests';
import { composeWithDevTools } from 'redux-devtools-extension';
import saga from './sagas';
import authReducer from './auth/reducer';
import chatReducer from './chat/reducer';
import dynamicSocketioMiddleware from './middlewares/dynamic-socketio-middleware';


const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
    auth: authReducer,
    chat: chatReducer,
});

export function initializeStore(initialState = undefined) {
    const middlewares = [
        requestsPromiseMiddleware({ auto: true }),
        sagaMiddleware,
        dynamicSocketioMiddleware
    ];

    const store = createStore(rootReducer, initialState,
        composeWithDevTools(applyMiddleware(...middlewares)));
    sagaMiddleware.run(saga);

    return store;
}