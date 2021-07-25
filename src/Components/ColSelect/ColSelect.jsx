import React, { useEffect } from 'react';
import Metrics from '../Metrics/Metrics';
import { Button, Card, CardActions, CardContent } from '@material-ui/core';
import './ColSelect.scss'
import { useDispatch, useSelector } from 'react-redux';
import dragNDrop from '../../utils/dragNDrop';
import { colReorder } from '../../redux/actions';

function ColSelect() {
    const metrices = useSelector(state => state.metrics);
    const dispatch = useDispatch();

    useEffect(() => {
        const dragNDropCleanup = dragNDrop();
        return () => {
            dragNDropCleanup();
        }
    }, []);

    const updateMetricsOrder = () => {
        const items = document.querySelectorAll('.colSelect__metrics .metrics');
        const metrics = [];
        for (const item of items) {
            metrics.push({ metric: item.innerHTML.trim(), status: item.getAttribute('status') === 'true' })
        }

        dispatch(colReorder(metrics));
    }

    return (
        <Card className="colSelect">
            <CardContent>
                <h4>Dimensions and Metrics</h4>
                <div className="colSelect__metrics">
                    {
                        metrices.map(metric => <Metrics data={metric} key={metric.metric} />)
                    }
                </div>
            </CardContent>
            <CardActions>
                <Button variant="contained" color="primary" onClick={updateMetricsOrder}>
                    Apply Changes
                </Button>
                &nbsp;
                <Button variant="outlined" color="primary">
                    Close
                </Button>
            </CardActions>
        </Card>
    )
}

export default ColSelect;
