import { React, useEffect } from 'react';

const BtnCustomRoll = (props) => {
    useEffect(() => {
        if (props.startCustomGacha) {
            let randomValue

            props.intervalCustomRoll.current = setInterval(() => {
                if (props.countRolls != props.currentRolls.current) {
                    randomValue = Math.floor((Math.random() * (100 - 0.000001) + 0.000001) * 1000000) / 1000000

                    props.currentRolls.current++

                    props.customRoll(randomValue)

                } else {
                    props.currentRolls.current = 0

                    props.setStartCustomGacha(false)
                }

            }, props.speedRoll)
        }

        return () => clearInterval(props.intervalCustomRoll.current)
    
    }, [props.currentRolls.current, props.startCustomGacha])

    // TODO
    const test = () => {
        if (props.typeGacha == 'rateUp') {
            if (!Object.keys(props.rateUpStudent).length) return true
            if (props.countRolls < 1 && props.countRolls !== ' ') return true

        } else {

            if (props.countRolls < 1 && props.countRolls !== ' ') return true
        }
    }
    
    return (
        <>
            {
                !props.startCustomGacha ?
                    <div className='Interface-containerCustomRectruitmentBtn'>
                        <button
                            className='Interface-customRectruitmentBtn'
                            disabled={test()}
                            onClick={() => {
                                if (props.autoReset) {
                                    props.resetReceivedStudents(props.typeGacha)

                                } else {

                                    props.reCount(props.typeGacha)
                                }
                                
                                props.setStartCustomGacha(true)
                            }}
                        >{`Recruit ${props.countRolls}`}</button>
                    </div>
                    
                    :

                    <div className='Interface-containerCustomRectruitmentBtn'>
                        <button
                            className='Interface-customRectruitmentBtn blinkingCustomRectruitmentBtn'
                            onClick={() => {   
                                props.setStartCustomGacha(false)
                                
                                props.currentRolls.current = 0

                                clearInterval(props.intervalCustomRoll.current)
                            }}
                        >STOP</button>
                    </div>
            }
        </>
    )
}

export default BtnCustomRoll