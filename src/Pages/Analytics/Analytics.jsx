import { Grid } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import BtnArea from '../../Components/BtnArea/BtnArea';
import ColSelect from '../../Components/ColSelect/ColSelect';
import Error from '../../Components/Error/Error';
import Table from '../../Components/Table/Table';
import './Analytics.scss'

function Analytics() {
    const settings = useSelector(state => state.settings);
    const error = useSelector(state => state.error);
    return (
        <div className="analytics">
            <Grid container spacing={3}>
                <Grid item xs={12}><h3>Analytics</h3></Grid>
                <Grid item xs={12}><BtnArea /></Grid>
                {settings ? <Grid item xs={12}><ColSelect /></Grid> : ""}
                {error.val ? <Error /> : <Grid item xs={12}><Table /></Grid>}
            </Grid>
        </div >
    )
}

export default Analytics
