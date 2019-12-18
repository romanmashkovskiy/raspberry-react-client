import { applyMiddleware, createStore, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { requestsPromiseMiddleware } from 'redux-saga-requests';
import { composeWithDevTools } from 'redux-devtools-extension';
import saga from './sagas';
import authReducer from './auth/reducer';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
    auth: authReducer,
});

export function initializeStore(initialState = undefined) {
    const middlewares = [
        requestsPromiseMiddleware({ auto: true }),
        sagaMiddleware,
    ];

    const store = createStore(rootReducer, initialState,
        composeWithDevTools(applyMiddleware(...middlewares)));
    sagaMiddleware.run(saga);

    return store;
}