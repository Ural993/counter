import react, { useEffect, useState } from 'react'
import { Button } from '../Button/Button'
import { Display } from '../Display/Display'
import './Counter.css'
type PropsType = {
    minValue: number
    maxValue: number
}
export const Counter = (props: PropsType) => {

    useEffect(() => {
        setNumber(props.minValue)
    }, [props.minValue])

    const maxNumber = props.maxValue
    const minNumber = props.minValue

    let [number, setNumber] = useState<number>(minNumber)
    let [isnumberFive, setisNumberFive] = useState(false)

    const onIncClicHandler = () => {
        let newValue = number + 1
        if (number < maxNumber) {
            setNumber(newValue)
        }
        if (newValue === maxNumber) {
            setisNumberFive(true)
        }

    }
    const onResetClicHandler = () => {
        setNumber(minNumber)
        setisNumberFive(false)
    }
    return (
        <div className='counter'>
            <Display number={number} isnumberFive={isnumberFive} />
            <div className='wrapper'>
                <Button disabled={number === maxNumber} name={'inc'} callback={onIncClicHandler} />
                <Button disabled={number === minNumber} name={'reset'} callback={onResetClicHandler} />
            </div>
        </div>
    )
}