import { Card } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fireAppsAPI, fireDataAPI, fireSortCol } from '../../redux/actions';
import dataFormatter from '../../utils/dataFormatter';
import './Table.scss';

function Table() {
    const metrics = useSelector(state => state.metrics);
    const data = useSelector(state => state.data);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fireAppsAPI());
        dispatch(fireDataAPI({ startDate: '2021-05-01', endDate: '2021-05-03' }));
    }, [dispatch]);
    return (
        <Card>
            <div style={{ overflowX: 'auto' }}>
                <table className='table'>
                    <thead>
                        <tr>
                            {
                                metrics.map(metric => metric.status && (
                                    <th
                                        className="table__header"
                                        align='left'
                                        onClick={() => dispatch(fireSortCol(metric.metric))}
                                        key={metric.metric}
                                    >
                                        {metric.metric}
                                    </th>
                                ))
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map(_d => (<tr key={_d.app_id + _d.date}>
                                {
                                    metrics.map((metric, i) => metric.status && (
                                        <td
                                            key={'td' + i}
                                        >
                                            {dataFormatter(_d, metric.metric)}
                                        </td>
                                    ))
                                }
                            </tr>))
                        }

                    </tbody>
                </table>
            </div>
        </Card >
    )
}

export default Table
