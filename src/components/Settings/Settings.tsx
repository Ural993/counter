import react, { ChangeEvent, useState } from 'react'
import { Button } from '../Button/Button'
import { Display } from '../Display/Display'
import './Settings.css'
type PropsType = {
    changeValues: (max: number, min: number) => void
    minValue: number
    maxValue: number
}
export const Settings = (props: PropsType) => {

    let [maxValue, setMaxValue] = useState<number>(props.maxValue)
    let [minValue, setMinValue] = useState<number>(props.minValue)

    const onSetClicHandler = () => {
        props.changeValues(maxValue, minValue)

    }
    const maxValueChange = (e: ChangeEvent<HTMLInputElement>) => {
        let value = e.currentTarget.value
        setMaxValue((Number.parseInt(value)))
    }
    const minValueChange = (e: ChangeEvent<HTMLInputElement>) => {
        let value = e.currentTarget.value
        setMinValue((Number.parseInt(value)))
    }

    return (
        <div className='settings'>
            <div className='inp-wrapper'>
                <div className='item-inp'>
                    <span>max value</span>
                    <input onChange={(e) => { maxValueChange(e) }} type='number' className='inp' value={maxValue} />
                </div>
                <div className='item-inp'>
                    <span>min value</span>
                    <input onChange={(e) => { minValueChange(e) }} type='number' className='inp' value={minValue} />
                </div>
            </div>
            <div className='btn-wrapper'>
                <Button name={'set'} callback={onSetClicHandler} />
            </div>
        </div>
    )
}