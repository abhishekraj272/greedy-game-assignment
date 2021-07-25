import { all, call, put, takeLatest } from 'redux-saga/effects';
import actionTypes from '../actionTypes';
import APIs from '../../api/api';
import { addApps, updateErr } from '../actions';
import store from '../store';

function* getAppData() {
    const currTime = Math.round(new Date().getTime() / 1000);

    if (currTime < store.getState().appCacheExp) {
        return;
    }

    try {
        const res = yield call(APIs.getApp);

        if (!res || res.status !== 200) {
            yield put(updateErr({ val: true, msg: 'Something went wrong' }));
            return;
        }
        yield put(addApps(res.data));
    } catch (err) {
        yield put(updateErr({ val: true, msg: err.message }));
    }
}

function* onGetAppData() {
    yield takeLatest(actionTypes.ON_ADD_APPS, getAppData);
}

export default function* appSaga() {
    yield all([call(onGetAppData)]);
}
