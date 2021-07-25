import { Grid } from '@material-ui/core';
import React from 'react';
import ColSelect from '../../Components/ColSelect/ColSelect';
import Table from '../../Components/Table/Table';
import './Analytics.scss'

function Analytics() {
    return (
        <div className="analytics">
            <Grid container spacing={3}>
                <Grid item xs={12}><h3>Analytics</h3></Grid>
                <Grid item xs={12}><ColSelect /></Grid>
                <Grid item xs={12}><Table /></Grid>
            </Grid>
        </div>
    )
}

export default Analytics
