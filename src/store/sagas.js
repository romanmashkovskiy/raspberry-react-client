import { createRequestInstance, watchRequests } from 'redux-saga-requests';
import { createDriver } from 'redux-saga-requests-axios';

import { axiosClient } from '../utils/axiosConfig';

export default function* rootSaga() {
    yield createRequestInstance({ driver: createDriver(axiosClient) });
    yield watchRequests();
}