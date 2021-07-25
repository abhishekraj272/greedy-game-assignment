import { all, call, put, debounce, takeLatest } from 'redux-saga/effects';
import actionTypes from '../actionTypes';
import APIs from '../../api/api';
import { addData, sortCol, updateErr } from '../actions';
import store from '../store';

function* getReportData({ payload }) {
    try {
        const res = yield call(
            APIs.getReport,
            payload.startDate,
            payload.endDate
        );

        if (!res || res.status !== 200) {
            yield put(updateErr({ val: true, msg: 'Something went wrong' }));
            return;
        }
        yield put(addData(res.data));
    } catch (err) {
        yield put(updateErr({ val: true, msg: err.message }));
    }
}

function* sortReportData({ payload }) {
    const reports = store.getState().data;
    const sortDir = store.getState().sortAscending;
    switch (payload) {
        case 'Date':
            reports.sort(
                (a, b) =>
                    sortDir * new Date(b.date) - sortDir * new Date(a.date)
            );
            return yield put(sortCol(reports));
        case 'App':
            reports.sort((a, b) =>
                a.app_id > b.app_id
                    ? sortDir
                    : b.app_id > a.app_id
                    ? sortDir * -1
                    : 0
            );
            return yield put(sortCol(reports));
        case 'Clicks':
            reports.sort((a, b) =>
                a.clicks > b.clicks
                    ? sortDir
                    : b.clicks > a.clicks
                    ? sortDir * -1
                    : 0
            );
            return yield put(sortCol(reports));
        case 'Ad Requests':
            reports.sort((a, b) =>
                a.requests > b.requests
                    ? sortDir
                    : b.requests > a.requests
                    ? sortDir * -1
                    : 0
            );
            return yield put(sortCol(reports));

        case 'Ad Response':
            reports.sort((a, b) =>
                a.responses > b.responses
                    ? sortDir
                    : b.responses > a.responses
                    ? sortDir * -1
                    : 0
            );
            return yield put(sortCol(reports));

        case 'Impression':
            reports.sort((a, b) =>
                a.impressions > b.impressions
                    ? sortDir
                    : b.impressions > a.impressions
                    ? sortDir * -1
                    : 0
            );
            return yield put(sortCol(reports));

        case 'Revenue':
            reports.sort((a, b) =>
                a.revenue > b.revenue
                    ? sortDir
                    : b.revenue > a.revenue
                    ? sortDir * -1
                    : 0
            );
            return yield put(sortCol(reports));

        default:
            break;
    }
}

function* onGetReportData() {
    yield debounce(500, actionTypes.ON_ADD_DATA, getReportData);
}

function* onSortReportData() {
    yield takeLatest(actionTypes.ON_SORT_COL, sortReportData);
}

export default function* reportSaga() {
    yield all([call(onGetReportData), call(onSortReportData)]);
}
