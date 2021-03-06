import { Button, Card, TextField } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fireAppsAPI, fireDataAPI, toggleSettings } from '../../redux/actions';
import './BtnArea.scss';

function BtnArea() {
    const dispatch = useDispatch();
    const prevDate = useSelector(state => state.date)

    const [date, setDate] = useState(prevDate);

    useEffect(() => {
        dispatch(fireAppsAPI());
        dispatch(fireDataAPI(date));
    }, [dispatch, date]);

    return (
        <div className='btnArea'>
            <Card className="btnArea__left">
                <TextField
                    label="Start Date"
                    type="date"
                    value={date.startDate}
                    onChange={e => setDate({ ...date, startDate: e.target.value })}

                />
                <TextField
                    label="End Date"
                    type="date"
                    value={date.endDate}
                    onChange={e => setDate({ ...date, endDate: e.target.value })}
                />
            </Card>
            <Card className="btnArea__right">
                <Button onClick={() => dispatch(toggleSettings())}>Settings</Button>
            </Card>
        </div>
    )
}

export default BtnArea
