import React from 'react'
import { Link } from 'react-router-dom'

function Landing() {
    return (
        <center style={{ width: '100%' }}>
            <Link to='/analytics'>
                Analytics
            </Link>
        </center>
    )
}

export default Landing
