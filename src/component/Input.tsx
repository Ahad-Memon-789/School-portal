import React from 'react'


type inPutType = {
    inpValue: any,
    inpType: string,
    inpChange: any,
    inplabel: any
}
export default function Input(props: inPutType) {
    return (
        <>
            <div className="text-center">
                <input className="my-3 w-50 rounded p-1 border bg-info-subtle" type={props.inpType} value={props.inpValue} onChange={props.inpChange} placeholder={props.inplabel} />
            </div>
        </>
    )
}

