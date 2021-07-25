import metrics from '../constants/metrics';
import actionTypes from './actionTypes';

const INIT_STATE = {
    error: null,
    data: [],
    apps: [],
    appCacheExp: 0,
    reportCacheExp: 0,
    metrics: metrics.map((metric) => ({ metric, status: true })),
    sortAscending: 1,
};

const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case actionTypes.UPDATE_ERR:
            return { ...state, error: action.payload };

        case actionTypes.ADD_APPS:
            return {
                ...state,
                apps: [...state.apps, ...action.payload.data],
                appCacheExp:
                    Math.round(new Date().getTime() / 1000) +
                    action.payload.cache_time,
            };

        case actionTypes.ADD_DATA:
            return {
                ...state,
                data: [...state.data, ...action.payload.data],
                reportCacheExp:
                    Math.round(new Date().getTime() / 1000) +
                    action.payload.cache_time,
            };

        case actionTypes.TOGGLE_COL:
            const ind = state.metrics.findIndex(
                (metric) => metric.metric === action.payload
            );
            state.metrics[ind].status = !state.metrics[ind].status;
            return {
                ...state,
                metrics: [...state.metrics],
            };

        case actionTypes.SORT_COL:
            return {
                ...state,
                data: [...action.payload],
                sortAscending: state.sortAscending * -1,
            };
        case actionTypes.COL_REORDER:
            return {
                ...state,
                metrics: [...action.payload],
            };

        default:
            return state;
    }
};

export default reducer;
