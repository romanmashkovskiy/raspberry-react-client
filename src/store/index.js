import { applyMiddleware, createStore, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { requestsPromiseMiddleware } from 'redux-saga-requests';
import { composeWithDevTools } from 'redux-devtools-extension';
import saga from './sagas';
import authReducer from './auth/reducer';
import socketMiddleware from './middlewares/socketMiddleware';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
    auth: authReducer,
});

export function initializeStore(initialState = undefined, socketClient) {
    const middlewares = [
        requestsPromiseMiddleware({ auto: true }),
        sagaMiddleware,
        socketMiddleware(socketClient),
    ];

    const store = createStore(rootReducer, initialState,
        composeWithDevTools(applyMiddleware(...middlewares)));
    sagaMiddleware.run(saga);

    return store;
}