import { Button } from '@mui/material'
import KeyboardTabIcon from '@mui/icons-material/KeyboardTab';
import React from 'react'

type typeIBC = {
    btnValue: string,
    btnChange: any,
}

export default function IconButton(props: typeIBC) {
    return (
        <>
            <div className="text-center">
                <Button sx={{ width: "50%", marginY: "30px", padding: 1, borderRadius: "10px" }} variant="outlined" color="info" onClick={props.btnChange} endIcon={<KeyboardTabIcon />}>{props.btnValue}</Button>
            </div>
        </>
    )
}