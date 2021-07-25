import { all, fork } from 'redux-saga/effects';
import appSaga from './saga/appSaga';
import reportSaga from './saga/reportSaga';

export default function* rootSaga() {
    yield all([fork(appSaga), fork(reportSaga)]);
}
