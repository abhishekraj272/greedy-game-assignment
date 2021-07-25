import actionTypes from './actionTypes';

export const updateErr = (err) => ({
    type: actionTypes.UPDATE_ERR,
    payload: err,
});

export const addData = (data) => ({
    type: actionTypes.ADD_DATA,
    payload: data,
});

export const addApps = (data) => ({
    type: actionTypes.ADD_APPS,
    payload: data,
});

export const fireDataAPI = (data) => ({
    type: actionTypes.ON_ADD_DATA,
    payload: data,
});

export const fireAppsAPI = () => ({
    type: actionTypes.ON_ADD_APPS,
});

export const toggleCol = (data) => ({
    type: actionTypes.TOGGLE_COL,
    payload: data,
});

export const toggleSettings = () => ({
    type: actionTypes.TOGGLE_SETTINGS,
});

export const sortCol = (sortBy) => ({
    type: actionTypes.SORT_COL,
    payload: sortBy,
});

export const fireSortCol = (sortBy) => ({
    type: actionTypes.ON_SORT_COL,
    payload: sortBy,
});

export const colReorder = (data) => ({
    type: actionTypes.COL_REORDER,
    payload: data,
});
