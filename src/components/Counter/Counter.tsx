import react, {useEffect, useState} from 'react'
import {Button} from '../Button/Button'
import {Display} from '../Display/Display'
import './Counter.css'

type PropsType = {
    minValue: number
    maxValue: number
    error: string | null
    displayText: string | null
}
export const Counter = (props: PropsType) => {
    console.log('Counter')
    debugger

    useEffect(() => {
        setNumber(props.minValue)
        setIsNumberRichMaxValue(false)
    }, [props.minValue, props.maxValue])

    const maxNumber = props.maxValue
    const minNumber = props.minValue

    let [number, setNumber] = useState<number>(minNumber)
    let [isNumberRichMaxValue, setIsNumberRichMaxValue] = useState(false)

    const onIncClickHandler = () => {
        let newValue = number + 1
        if (number < maxNumber) {
            setNumber(newValue)
        }
        if (newValue === maxNumber) {
            setIsNumberRichMaxValue(true)
        }

    }
    const onResetClickHandler = () => {
        setNumber(minNumber)
        setIsNumberRichMaxValue(false)
    }
    return (
        <div className='counter'>
            <Display number={number} isNumberRichMaxValue={isNumberRichMaxValue} error={props.error}
                     displayText={props.displayText}/>
            <div className='wrapper'>
                <Button disabled={number === maxNumber || Boolean(props.displayText)} name={'inc'} callback={onIncClickHandler}/>
                <Button disabled={number === minNumber} name={'reset'} callback={onResetClickHandler}/>
            </div>
        </div>
    )
}