import { React, useEffect, useRef, useState } from 'react';

// components
import RegularGacha from './RegularGacha/RegularGacha'
import RateUpGacha from './RateUpGacha/RateUpGacha'

const WindowInfo = (props) => {
    // count rolls
    const [countRolls, setCountRolls] = useState(10)
    const currentRolls = useRef(0)

    const [counterStudents, setCounterStudents] = useState({
        regular: {
            lastCountRolls: 0,
            totalCountRolls: 0,

            lastCountUltraRare: 0,
            lastCountRare: 0,
            lastCountCommon: 0,
            totalCountUltraRare: 0,
            totalCountRare: 0,
            totalCountCommon: 0,
        }, 

        rateUp: {
            lastCountRolls: 0,
            totalCountRolls: 0,

            lastCountUltraRare: 0,
            lastCountRare: 0,
            lastCountCommon: 0,
            totalCountUltraRare: 0,
            totalCountRare: 0,
            totalCountCommon: 0,
        }
    })

    // percentage
    const [percentageStudents, setPercentageStudents] = useState({
        regular: {
            lastPercentageUltraRare: 0,
            lastPercentageRare: 0,
            lastPercentageCommon: 0,

            totalPercentageUltraRare: 0,
            totalPercentageRare: 0,
            totalPercentageCommon: 0
        },

        rateUp: {
            lastPercentageUltraRare: 0,
            lastPercentageRare: 0,
            lastPercentageCommon: 0,
            
            totalPercentageUltraRare: 0,
            totalPercentageRare: 0,
            totalPercentageCommon: 0
        }
    })

    // control gacha
    const [autoReset, setAutoReset] = useState(false)
    const [valueSpeedRoll, setValueSpeedRoll] = useState(0)
    const [speedRoll, setSpeedRoll] = useState(500)

    // toggle on / off roll
    const [startOneRollGacha, setStartOneRollGacha] = useState(false)
    const [startCustomGacha, setStartCustomGacha] = useState(false)

    //! rate Up
    const [selectedBanner, setSelectedBanner] = useState('Select_banner')
    const [selectedRateUpStudent, setSelectedRateUpStudent] = useState('Select_student')
    const [rateUpStudent, setRateUpStudent] = useState({})
    const [arrayRateUpStudents, setArrayRateUpStudents] = useState([])

    // 
    const reCount = (typeGacha) => {

        if (counterStudents[typeGacha].lastCountRolls) {
            let cacheCounter = counterStudents
            let cachePercentage = percentageStudents

            cacheCounter[typeGacha].lastCountRolls = 0
            cacheCounter[typeGacha].lastCountUltraRare = 0
            cacheCounter[typeGacha].lastCountRare = 0
            cacheCounter[typeGacha].lastCountCommon = 0
            setCounterStudents(cacheCounter)

            cachePercentage[typeGacha].lastPercentageUltraRare = 0
            cachePercentage[typeGacha].lastPercentageRare = 0
            cachePercentage[typeGacha].lastPercentageCommon = 0
            setPercentageStudents(cachePercentage)

            currentRolls.current = 0
        }
    }

    // autoreset
    const resetReceivedStudents = (typeGacha) => {

        if (counterStudents[typeGacha].lastCountRolls) {
            props.setUserStudents({ 
                ...props.userStudents, [typeGacha]: {
                    ultraRare: [],
                    rare: [],
                    common: []
                }
            })
    
            setCounterStudents({
                ...counterStudents, [typeGacha]: {
                    lastCountRolls: 0,
                    totalCountRolls: 0,
    
                    lastCountUltraRare: 0,
                    lastCountRare: 0,
                    lastCountCommon: 0,
    
                    totalCountUltraRare: 0,
                    totalCountRare: 0,
                    totalCountCommon: 0,
                }
            })

            setPercentageStudents({
                ...percentageStudents, [typeGacha]: {
                    lastPercentageUltraRare: 0,
                    lastPercentageRare: 0,
                    lastPercentageCommon: 0,

                    totalPercentageUltraRare: 0,
                    totalPercentageRare: 0,
                    totalPercentageCommon: 0
                }
            })
    
            currentRolls.current = 0
        }
    }
        
    // 
    const counterRolls = (typeGacha, lastCount, totalCount) => {
        let chache = counterStudents

        chache[typeGacha].lastCountRolls++
        chache[typeGacha].totalCountRolls++

        chache[typeGacha][lastCount]++
        chache[typeGacha][totalCount]++

        setCounterStudents(chache)
    }

    // 
    const addNewStudent = (typeGacha, typeStudent, newStudent) => {
        let arrayUserStudents = [...props.userStudents[typeGacha][typeStudent]]
        let cache
        
        if (!arrayUserStudents.length) {
            newStudent.amount = 1

            cache = {
                ...props.userStudents, [typeGacha]: {
                    ...props.userStudents[typeGacha], [typeStudent]: [...props.userStudents[typeGacha][typeStudent], newStudent],
                },
            }

        } else {
            let isPresent = arrayUserStudents.findIndex(elem => elem.id == newStudent.id)
            
            if (isPresent == -1) {
                newStudent.amount = 1

                cache = {
                    ...props.userStudents, [typeGacha]: {
                        ...props.userStudents[typeGacha], [typeStudent]: [...props.userStudents[typeGacha][typeStudent], newStudent],
                    },
                }

            } else {
                arrayUserStudents[isPresent].amount++

                cache = {
                    ...props.userStudents, [typeGacha]: {
                        ...props.userStudents[typeGacha], [typeStudent]: arrayUserStudents,
                    },
                }
            }
        }

        props.setUserStudents(cache)
    }

    // TODO
    return (
        <div className='Interface-container'>
            <div style={{ display: 'flex', width: '100%', background: 'rgba(98, 162, 190, .5)' }}>
                <div className='Interface-containerTypeGacha'>
                    <button 
                        style={{ background: `${!props.regularToggle ? 'rgb(195 195 195)' : ''}` }}
                        className='Interface-typeGacha'
                        onClick={() => {
                            props.setRegularToggle(true)
                            props.setRateUpToggle(false)
                        }}
                    >Regular</button>
                </div>

                <div className='Interface-containerTypeGacha'>
                    <button 
                        style={{ background: `${!props.rateUpToggle ? 'rgb(195 195 195)' : ''}` }}
                        className='Interface-typeGacha'
                        onClick={() => {
                            props.setRegularToggle(false)
                            props.setRateUpToggle(true)
                        }}
                    >Rate Up</button>
                </div>
            </div>

            {
                props.regularToggle &&
                    <RegularGacha
                        userStudents={props.userStudents}
                        setUserStudents={props.setUserStudents}
                        counterStudents={counterStudents}
                        setCounterStudents={setCounterStudents}
                        percentageStudents={percentageStudents}
                        setPercentageStudents={setPercentageStudents}

                        countRolls={countRolls}
                        setCountRolls={setCountRolls}
                        currentRolls={currentRolls}
                        
                        autoReset={autoReset}
                        setAutoReset={setAutoReset}
                        valueSpeedRoll={valueSpeedRoll}
                        setValueSpeedRoll={setValueSpeedRoll}
                        speedRoll={speedRoll}
                        setSpeedRoll={setSpeedRoll}
                        selectedRateUpStudent={selectedRateUpStudent}
                        setSelectedRateUpStudent={setSelectedRateUpStudent}

                        startOneRollGacha={startOneRollGacha}
                        setStartOneRollGacha={setStartOneRollGacha}
                        startCustomGacha={startCustomGacha}
                        setStartCustomGacha={setStartCustomGacha}

                        reCount={reCount}
                        resetReceivedStudents={resetReceivedStudents}
                        counterRolls={counterRolls}
                        addNewStudent={addNewStudent}

                        typeGacha={'regular'}
                    />
            }

            {
                props.rateUpToggle &&
                    <RateUpGacha 
                        userStudents={props.userStudents}
                        setUserStudents={props.setUserStudents}
                        counterStudents={counterStudents}
                        setCounterStudents={setCounterStudents}
                        percentageStudents={percentageStudents}
                        setPercentageStudents={setPercentageStudents}

                        countRolls={countRolls}
                        setCountRolls={setCountRolls}
                        currentRolls={currentRolls}
                        
                        autoReset={autoReset}
                        setAutoReset={setAutoReset}
                        valueSpeedRoll={valueSpeedRoll}
                        setValueSpeedRoll={setValueSpeedRoll}
                        speedRoll={speedRoll}
                        setSpeedRoll={setSpeedRoll}
                        
                        selectedBanner={selectedBanner}
                        setSelectedBanner={setSelectedBanner}
                        selectedRateUpStudent={selectedRateUpStudent}
                        setSelectedRateUpStudent={setSelectedRateUpStudent}
                        rateUpStudent={rateUpStudent}
                        setRateUpStudent={setRateUpStudent}
                        arrayRateUpStudents={arrayRateUpStudents}
                        setArrayRateUpStudents={setArrayRateUpStudents}
                        
                        startOneRollGacha={startOneRollGacha}
                        setStartOneRollGacha={setStartOneRollGacha}
                        startCustomGacha={startCustomGacha}
                        setStartCustomGacha={setStartCustomGacha}

                        reCount={reCount}
                        resetReceivedStudents={resetReceivedStudents}
                        counterRolls={counterRolls}
                        addNewStudent={addNewStudent}

                        typeGacha={'rateUp'}
                    />
            }
        </div>
    )
}

export default WindowInfo