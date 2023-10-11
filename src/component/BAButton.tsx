import React from 'react'
import { Button } from '@mui/material'
type typeButton = {
    btnValue: string,
    btnChange: any,
}

export default function BAButton(props: typeButton) {
    return (
        <>
            <div className="text-center">
                <Button variant='contained' color='inherit' className="btn-lg w-50 my-3" onClick={props.btnChange}>
                    {props.btnValue}
                </Button>
            </div>
        </>
    )
}

