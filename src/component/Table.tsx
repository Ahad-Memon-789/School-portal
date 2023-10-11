import React from 'react'

type tableType = {
    dataSource: any[],
    cols: any[],
}

export default function Table(props: tableType) {
    const { dataSource, cols } = props
    return (
        <>
            <table className="table my-4 table-striped table-dark text-white" border={1}>
                <thead>
                    <tr>
                        {cols.map((x, i) => {
                            return (
                                <>
                                    <th key={i}>{x.heading}</th>
                                </>
                            )
                        })}
                    </tr>
                </thead>
                <tbody>
                    {dataSource.map((row, i) => {
                        return (
                            <>
                                <tr key={i}>
                                    {cols.map((col, i) => {
                                        return (
                                            <>
                                                <td key={i}>{row[col.key]}</td>
                                            </>
                                        )
                                    })}
                                </tr>
                            </>
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}
