import './Display.css'

type PropsType = {
    number: number
    isNumberRichMaxValue: boolean
    displayText: string | null
    error:string | null
}
export const Display = (props: PropsType) => {
    console.log('Display')
    return (<>
            {props.error ?  <div className={'errorText display'}>{props.error}</div> :
                props.displayText ? <div className={'displayText display'}>{props.displayText}</div>:
                    <div className={props.isNumberRichMaxValue ? 'display active' : 'display'}>{props.number}</div>
            }



            {/*{ if(props.error){*/}
            {/*    <div className={'errorText display'}>{props.error}</div>*/}
            {/*}*/}
            {/*    if(props){*/}
            {/*    <div className={'errorText display'}>{props.error}</div>*/}
            {/*}*/}
            {/*    else {*/}
            {/*    <div className={props.isNumberRichMaxValue ? 'display active' : 'display'}>{props.number}</div>*/}
            {/*}}*/}
        </>


    )
}