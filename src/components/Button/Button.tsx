import react, { useState } from 'react'
import './Button.css'

type PropsType = {
    name: string
    callback: () => void
    disabled?: boolean
}
export const Button = (props: PropsType) => {
    return (
        <button onClick={props.callback} className='btn' disabled={props.disabled}> {props.name}</button>
    )
}