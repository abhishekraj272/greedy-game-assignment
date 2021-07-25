import React, { useEffect } from 'react';
import Metrics from '../Metrics/Metrics';
import { Button, Card, CardActions, CardContent } from '@material-ui/core';
import './ColSelect.scss'
import { useSelector } from 'react-redux';
import { dragNDrop, dragNDropCleanup } from '../../utils/dragNDrop';

function ColSelect() {
    const metrices = useSelector(state => state.metrics);

    useEffect(() => {
        dragNDrop();
        return () => {
            dragNDropCleanup();
        }
    }, []);

    return (
        <Card className="colSelect">
            <CardContent>
                <h5>Dimensions and Metrics</h5>
                <div className="colSelect__metrics">
                    {
                        metrices.map(metric => <Metrics data={metric} key={metric.metric} />)
                    }
                </div>
            </CardContent>
            <CardActions>
                <Button variant="contained" color="primary">
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
