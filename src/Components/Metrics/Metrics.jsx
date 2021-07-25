import React from 'react';
import Chip from '@material-ui/core/Chip';
import { useDispatch } from 'react-redux';
import { toggleCol } from '../../redux/actions';
import './Metrics.scss';


function Metrics({ data }) {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(toggleCol(data.metric));
    }
    return (
        <Chip
            draggable='true'
            className="metrics"
            label={data.metric}
            color={data.status ? 'primary' : 'secondary'}
            onDelete={handleClick}
        />
    )
}

export default Metrics;
