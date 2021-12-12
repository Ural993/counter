import react, { useState } from 'react'
import './Button.css'

type PropsType = {
    name: string
    callback: () => void
    disabled?: boolean
}
export const Button = (props: PropsType) => {
    console.log(`Button ${props.name}`)
    return (
        <button onClick={props.callback} className='btn' disabled={props.disabled}> {props.name}</button>
    )
}