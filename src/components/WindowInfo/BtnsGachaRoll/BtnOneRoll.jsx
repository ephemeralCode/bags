import { React, useEffect } from 'react';

const BtnOneRoll = (props) => {

    useEffect(() => {
        if (props.startOneRollGacha) {
            let randomValue = Math.floor((Math.random() * (100 - 0.000001) + 0.000001) * 1000000) / 1000000

            props.currentRolls.current++

            props.oneRoll(randomValue)

            props.setStartOneRollGacha(false)
        }
        
    }, [props.startOneRollGacha]) 

    // TODO
    const test = () => {
        if (props.typeGacha == 'rateUp') {
            if (!Object.keys(props.rateUpStudent).length) return true
            if (props.startCustomGacha) return true

        } else {

            if (props.startCustomGacha) return true
        }
    }

    return (
        <>
            <button
                className='Interface-commonRectruitmentBtn'
                disabled={test()}
                onClick={() => {
                    if (props.autoReset) {
                        props.resetReceivedStudents(props.typeGacha)

                    } else {

                        props.reCount(props.typeGacha)
                    }

                    props.setStartOneRollGacha(true)
                }}
            >Recruit 1</button>
        </>
    )
}

export default BtnOneRoll