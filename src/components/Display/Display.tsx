import react, { useState } from 'react'
import './Display.css'
type PropsType = {
    number: number
    isnumberFive: boolean
}
export const Display = (props: PropsType) => {
    return (
        <div className={props.isnumberFive ? 'display active' : 'display'}>{props.number}</div>
    )
}