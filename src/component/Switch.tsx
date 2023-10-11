import React from 'react'
import Switch from '@mui/material/Switch';


const label = { inputProps: { 'aria-label': 'Switch demo' } };

type BSC_type = {
    switchChange: any
}

export default function BasicSwitchesComponent(props: BSC_type) {
    return (
        <div className="text-center">
            <Switch {...label} defaultChecked onChange={props.switchChange} />
        </div>
    );
}
