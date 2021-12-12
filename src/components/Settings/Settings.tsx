import {ChangeEvent, useState} from 'react'
import {Button} from '../Button/Button'
import './Settings.css'

type PropsType = {
    changeValues: (max: number, min: number) => void
    setError: (error:string|null) => void
    setDisplayText: (displayText:string|null) => void
    minValue: number
    maxValue: number
    displayText: string | null
    error:string | null
}
export const Settings = (props: PropsType) => {
    console.log('Setting')
    let [maxValue, setMaxValue] = useState<number>(props.maxValue)
    let [minValue, setMinValue] = useState<number>(props.minValue)

    const onSetClickHandler = () => {
        if (maxValue > minValue && minValue >= 0) {
            props.changeValues(maxValue, minValue)
            props.setDisplayText(null)
        }
    }
    const maxValueChange = (e: ChangeEvent<HTMLInputElement>) => {
        let value = e.currentTarget.value
        setMaxValue((Number.parseInt(value)))
        props.setDisplayText('enter values and press "set"')

    }
    const minValueChange = (e: ChangeEvent<HTMLInputElement>) => {
        let value = e.currentTarget.value
        if (Number(value) >= 0 && Number(value) < maxValue) {
            setMinValue((Number.parseInt(value)))
            props.setDisplayText('enter values and press "set"')
            props.setError(null)
        }
        if (Number(value) < 0) {
            props.setError('Incorrect value!')
            setMinValue(-1)
        }
        if (Number(value) >= maxValue) {
            props.setError('Incorrect value!')
            setMinValue(maxValue)
        }
    }
    let disabled = maxValue === props.maxValue && minValue === props.minValue

    return (
        <div className='settings'>
            <div className='inp-wrapper'>
                <div className='item-inp'>
                    <span>max value</span>
                    <input onChange={(e) => {maxValueChange(e)}}
                           type='number'
                           className='inp'
                           value={maxValue}/>
                </div>
                <div className='item-inp'>
                    <span>min value</span>
                    <input onChange={(e) => {minValueChange(e)}}
                           type='number'
                           className={`inp ${props.error ? 'error' : ''}`}
                           value={minValue}/>
                </div>
            </div>
            <div className='btn-wrapper'>
                <Button disabled={disabled || maxValue === minValue || minValue === -1}
                        name={'set'}
                        callback={onSetClickHandler}/>
            </div>
        </div>
    )
}