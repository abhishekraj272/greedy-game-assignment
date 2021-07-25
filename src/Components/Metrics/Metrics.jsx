import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleCol } from '../../redux/actions';
import './Metrics.scss';


function Metrics({ data }) {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(toggleCol(data.metric));
    }
    return (
        <div
            draggable='true'
            className="metrics"
            status={data.status ? 'true' : 'false'}
            onClick={handleClick}
        >{data.metric} </div>

    )
}

export default Metrics;
