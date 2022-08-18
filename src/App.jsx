import { React, useEffect, useRef, useState } from 'react';

// components
import WindowGacha from './components/WindowGacha/WindowGacha'

// css
import './css/App.css';
import './css/fonts.css';

// import students & imgs & icons
import { importStudentsUltraRare, importStudentsRare, importStudentsCommon } from './db/students.js'

function App() {
    const [autoReset, setAutoReset] = useState(false)
    const [valueSpeedRoll, setValueSpeedRoll] = useState(0)
    const [speedRoll, setSpeedRoll] = useState(500)

    const [userStudentsUltraRare, setUserStudentsUltraRare] = useState([])
    const [userStudentsRare, setUserStudentsRare] = useState([])
    const [userStudentsCommon, setUserStudentsCommon] = useState([])

    // percentage
    const [lastUlraRareRercentage, setLastUlraRareRercentage] = useState(0)
    const [lastRarePercentage, setLastRarePercentage] = useState(0)
    const [lastCommonPercentage, setLastCommonPercentage] = useState(0)

    const [totalUlraRareRercentage, setTotalUlraRareRercentage] = useState(0)
    const [totalRarePercentage, setTotalRarePercentage] = useState(0)
    const [totalCommonPercentage, setTotalCommonPercentage] = useState(0)
    
    // count fallout students
    const lastCountUlraRare = useRef(0)
    const lastCountRare = useRef(0)
    const lastCountCommon = useRef(0)

    const totalCountUlraRare = useRef(0)
    const totalCountRare = useRef(0)
    const totalCountCommon = useRef(0)

    const [lastResultUlraRare, setLastResultUlraRare] = useState(0)
    const [lastResultRare, setLastResultRare] = useState(0)
    const [lastResultCommon, setLastResultCommon] = useState(0)

    const [totalResultUlraRare, setTotalResultUlraRare] = useState(0)
    const [totalResultRare, setTotalResultRare] = useState(0)
    const [totalResultCommon, setTotalResultCommon] = useState(0)

    // toggle on / off roll
    const [countRolls, setCountRolls] = useState(10)
    const [startOneRollGacha, setStartOneRollGacha] = useState(false)
    const [startCustomGacha, setStartCustomGacha] = useState(false)

    // count rolls
    const currentRolls = useRef(0)
    const lastCountRolls = useRef(0)
    const totalCountRolls = useRef(0)

    // interval
    const currentRenderer = useRef()

    // mounting
    const didMount = useRef(false)

    //! state manager?
    const resetReceivedStudents = () => {
        didMount.current = false

        setUserStudentsUltraRare([])
        setUserStudentsRare([])
        setUserStudentsCommon([])

        setLastUlraRareRercentage(0)
        setLastRarePercentage(0)
        setLastCommonPercentage(0)
    
        setTotalUlraRareRercentage(0)
        setTotalRarePercentage(0)
        setTotalCommonPercentage(0)

        setLastResultUlraRare(0)
        setLastResultRare(0)
        setLastResultCommon(0)
    
        setTotalResultUlraRare(0)
        setTotalResultRare(0)
        setTotalResultCommon(0)

        lastCountUlraRare.current = 0
        lastCountRare.current = 0
        lastCountCommon.current = 0
    
        totalCountUlraRare.current = 0
        totalCountRare.current = 0
        totalCountCommon.current = 0

        currentRolls.current = 0
        lastCountRolls.current = 0
        totalCountRolls.current = 0

        setStartOneRollGacha(false)
        setStartCustomGacha(false)
    }

    const addNewStudent = (arrayUserStudents, arrayAllStudents, typeAddStudent) => {
        let newStudent = arrayAllStudents[Math.ceil(Math.random() * arrayAllStudents.length - 1)]

        if (!arrayUserStudents.length) {
            newStudent.amount = 1
            
            typeAddStudent([...arrayUserStudents, newStudent])

        } else {
            let isPresent = arrayUserStudents.findIndex(elem => elem.id == newStudent.id)
            
            if (isPresent == -1) {
                newStudent.amount = 1

                typeAddStudent([...arrayUserStudents, newStudent])

            } else {
                arrayUserStudents[isPresent].amount++

                typeAddStudent(arrayUserStudents)
            }
        }
    }

    // one roll
    useEffect(() => {
        if (startOneRollGacha) {
            let cacheStudentsUltraRare = [...userStudentsUltraRare]
            let cacheStudentsRare = [...userStudentsRare]
            let cacheStudentsCommon = [...userStudentsCommon]
            let randomValue = Math.floor((Math.random() * (100 - 0.1) + 0.1) * 1000000) / 1000000
    
            lastCountRolls.current++
            totalCountRolls.current++
    
            if (randomValue <= 2.5) {
                addNewStudent(cacheStudentsUltraRare, importStudentsUltraRare, setUserStudentsUltraRare)
    
                lastCountUlraRare.current++
                totalCountUlraRare.current++
    
            } else if (randomValue <= 18.5 && randomValue > 2.5) {
                addNewStudent(cacheStudentsRare, importStudentsRare, setUserStudentsRare)
    
                lastCountRare.current++
                totalCountRare.current++
    
            } else {
                addNewStudent(cacheStudentsCommon, importStudentsCommon, setUserStudentsCommon)
            
                lastCountCommon.current++
                totalCountCommon.current++
            }

            setStartOneRollGacha(false)
    
            setLastResultUlraRare(lastCountUlraRare.current)
            setTotalResultUlraRare(totalCountUlraRare.current)
    
            setLastResultRare(lastCountRare.current)
            setTotalResultRare(totalCountRare.current)
    
            setLastResultCommon(lastCountCommon.current)
            setTotalResultCommon(totalCountCommon.current)
        }
        
    }, [startOneRollGacha])

    // custom roll
    useEffect(() => {
        if (startCustomGacha) {
            // fix useEffect with interval
            let cacheStudentsUltraRare = [...userStudentsUltraRare]
            let cacheStudentsRare = [...userStudentsRare]
            let cacheStudentsCommon = [...userStudentsCommon]
            let randomValue

            currentRenderer.current = setInterval(() => {
                if (countRolls != currentRolls.current) {
                    randomValue = Math.floor((Math.random() * (100 - 0.1) + 0.1) * 1000000) / 1000000

                    currentRolls.current++
                    lastCountRolls.current++
                    totalCountRolls.current++

                    if (randomValue <= 2.5) {
                        addNewStudent(cacheStudentsUltraRare, importStudentsUltraRare, setUserStudentsUltraRare)

                        lastCountUlraRare.current++
                        totalCountUlraRare.current++

                    } else if ((currentRolls.current % 10) == 0) {         
                        addNewStudent(cacheStudentsRare, importStudentsRare, setUserStudentsRare)

                        lastCountRare.current++
                        totalCountRare.current++

                    } else if (randomValue <= 18.5 && randomValue > 2.5) {
                        addNewStudent(cacheStudentsRare, importStudentsRare, setUserStudentsRare)

                        lastCountRare.current++
                        totalCountRare.current++

                    } else {
                        addNewStudent(cacheStudentsCommon, importStudentsCommon, setUserStudentsCommon)
                    
                        lastCountCommon.current++
                        totalCountCommon.current++
                    }

                } else {
                    currentRolls.current = 0
    
                    setStartCustomGacha(false)
                }

                setLastResultUlraRare(lastCountUlraRare.current)
                setTotalResultUlraRare(totalCountUlraRare.current)

                setLastResultRare(lastCountRare.current)
                setTotalResultRare(totalCountRare.current)

                setLastResultCommon(lastCountCommon.current)
                setTotalResultCommon(totalCountCommon.current)

            }, speedRoll)
        }

        return () => clearInterval(currentRenderer.current)
        
    }, [userStudentsCommon, userStudentsRare, userStudentsUltraRare, startCustomGacha]) // fix useEffect with interval

    useEffect(() => {
        if (didMount.current) {
            setLastUlraRareRercentage(Math.floor(((lastResultUlraRare / lastCountRolls.current) * 100) * 100) / 100)
            setLastRarePercentage(Math.floor(((lastResultRare / lastCountRolls.current) * 100) * 100) / 100)
            setLastCommonPercentage(Math.floor(((lastResultCommon / lastCountRolls.current) * 100) * 100) / 100)
        }

    }, [lastResultUlraRare, lastResultRare, lastResultCommon])
    
    useEffect(() => {
        if (didMount.current) {
            setTotalUlraRareRercentage(Math.floor(((totalResultUlraRare / totalCountRolls.current) * 100) * 100) / 100)
            setTotalRarePercentage(Math.floor(((totalResultRare / totalCountRolls.current) * 100) * 100) / 100)
            setTotalCommonPercentage(Math.floor(((totalResultCommon / totalCountRolls.current) * 100) * 100) / 100)
        
        } else {
            didMount.current = true
        }

    }, [totalResultUlraRare, totalResultRare, totalResultCommon])

    return (
        <div className='Main-container'>
            <WindowGacha 
                userStudentsUltraRare={userStudentsUltraRare}
                userStudentsRare={userStudentsRare}
                userStudentsCommon={userStudentsCommon}
            />

            {/* //TODO */}
            <div className='Interface-conteiner'>
                <div className='Interface-containerTypeGacha'>
                    <button className='Interface-typeGacha'>Regular</button>
                </div>

                <div className='Interface-wrapperBackground'>
                    <div className='Interface-wrapperPadding'>
                        <div className='Interface-containerDescription'>
                            <div className='Interface-containerTextDescription'>
                                <p className='Interface-textDescription'>Description</p>
                            </div>
                            
                            <p className='Interface-textTableDescriptionRates'>One 2★ or higher  student is guaranteed for every ten recruitments!</p>
                        </div>

                        <div className='Interface-containerDescriptionRates'>
                            <div className='Interface-wrapperDescriptionRates'>
                                <div className='Interface-containerTextDescriptionRates'>
                                    <p className='Interface-textDescriptionRates'>Official rates</p>
                                </div>
                                
                                <div className='Interface-containerInfoRates'>
                                    <div className='Interface-wrapperInfoRates'>
                                        <div className='Interface-containerStarRNG'>
                                            <p className='Interface-starFullRNG'>★</p>
                                            <p className='Interface-starFullRNG'>★</p>
                                            <p className='Interface-starFullRNG'>★</p>
                                        </div>

                                        <p className='Interface-dashInfoRates'>-</p>
                                        
                                        <div className='Interface-containerResultRNG'>
                                            <p className='Interface-numberResultRNG'>2.5</p>

                                            <p className='Interface-percentageResultRNG'>%</p>
                                        </div>
                                    </div>

                                    <div className='Interface-wrapperInfoRates'>
                                        <div className='Interface-containerStarRNG'>
                                            <p className='Interface-starFullRNG'>★</p>
                                            <p className='Interface-starFullRNG'>★</p>
                                            <p className='Interface-starBlankRNG'>★</p>
                                        </div>

                                        <p className='Interface-dashInfoRates'>-</p>
                                        
                                        <div className='Interface-containerResultRNG'>
                                            <p className='Interface-numberResultRNG'>18.5</p>

                                            <p className='Interface-percentageResultRNG'>%</p>
                                        </div>
                                    </div>

                                    <div className='Interface-wrapperInfoRates'>
                                        <div className='Interface-containerStarRNG'>
                                            <p className='Interface-starFullRNG'>★</p>
                                            <p className='Interface-starBlankRNG'>★</p>
                                            <p className='Interface-starBlankRNG'>★</p>
                                        </div>

                                        <p className='Interface-dashInfoRates'>-</p>
                                        
                                        <div className='Interface-containerResultRNG'>
                                            <p className='Interface-numberResultRNG'>79</p>

                                            <p className='Interface-percentageResultRNG'>%</p>
                                        </div>
                                    </div>
                                </div>    
                            </div>
                        </div>

                        <div className='Interface-containerRates'>
                            <div className='Interface-wrapperRates'>
                                <div className='Interface-containerTextRates'>
                                    <p className='Interface-textRates'>Last RNG</p>
                                    <p className='Interface-symbolRates'>%</p>
                                </div>
                                
                                <div className='Interface-containerRNG'>
                                    <div className='Interface-wrapperRNG'>
                                        <div className='Interface-containerStarRNG'>
                                            <p className='Interface-starFullRNG'>★</p>
                                            <p className='Interface-starFullRNG'>★</p>
                                            <p className='Interface-starFullRNG'>★</p>
                                        </div>
                                        
                                        <div className='Interface-containerResultRNG'>
                                            <p className='Interface-numberResultRNG'>{`${lastResultUlraRare} - ${lastUlraRareRercentage}`}</p>

                                            <p className='Interface-percentageResultRNG'>%</p>
                                        </div>
                                    </div>

                                    <div className='Interface-wrapperRNG'>
                                        <div className='Interface-containerStarRNG'>
                                            <p className='Interface-starFullRNG'>★</p>
                                            <p className='Interface-starFullRNG'>★</p>
                                            <p className='Interface-starBlankRNG'>★</p>
                                        </div>

                                        <div className='Interface-containerResultRNG'>
                                            <p className='Interface-numberResultRNG'>{`${lastResultRare} - ${lastRarePercentage}`}</p>

                                            <p className='Interface-percentageResultRNG'>%</p>
                                        </div>
                                    </div>

                                    <div className='Interface-wrapperRNG'>
                                        <div className='Interface-containerStarRNG'>
                                            <p className='Interface-starFullRNG'>★</p>
                                            <p className='Interface-starBlankRNG'>★</p>
                                            <p className='Interface-starBlankRNG'>★</p>
                                        </div>

                                        <div className='Interface-containerResultRNG'>
                                            <p className='Interface-numberResultRNG'>{`${lastResultCommon} - ${lastCommonPercentage}`}</p>

                                            <p className='Interface-percentageResultRNG'>%</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='Interface-wrapperRates'>
                                <div className='Interface-containerTextRates'>
                                    <p className='Interface-textRates'>Total RNG</p>
                                    <p className='Interface-symbolRates'>%</p>
                                </div>

                                <div className='Interface-containerRNG'>
                                    <div className='Interface-wrapperRNG'>
                                        <div className='Interface-containerStarRNG'>
                                            <p className='Interface-starFullRNG'>★</p>
                                            <p className='Interface-starFullRNG'>★</p>
                                            <p className='Interface-starFullRNG'>★</p>
                                        </div>
                                        
                                        <div className='Interface-containerResultRNG'>
                                            <p className='Interface-numberResultRNG'>{`${totalResultUlraRare} - ${totalUlraRareRercentage}`}</p>

                                            <p className='Interface-percentageResultRNG'>%</p>
                                        </div>
                                    </div>

                                    <div className='Interface-wrapperRNG'>
                                        <div className='Interface-containerStarRNG'>
                                            <p className='Interface-starFullRNG'>★</p>
                                            <p className='Interface-starFullRNG'>★</p>
                                            <p className='Interface-starBlankRNG'>★</p>
                                        </div>

                                        <div className='Interface-containerResultRNG'>
                                            <p className='Interface-numberResultRNG'>{`${totalResultRare} - ${totalRarePercentage}`}</p>

                                            <p className='Interface-percentageResultRNG'>%</p>
                                        </div>
                                    </div>

                                    <div className='Interface-wrapperRNG'>
                                        <div className='Interface-containerStarRNG'>
                                            <p className='Interface-starFullRNG'>★</p>
                                            <p className='Interface-starBlankRNG'>★</p>
                                            <p className='Interface-starBlankRNG'>★</p>
                                        </div>

                                        <div className='Interface-containerResultRNG'>
                                            <p className='Interface-numberResultRNG'>{`${totalResultCommon} - ${totalCommonPercentage}`}</p>

                                            <p className='Interface-percentageResultRNG'>%</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    
                        <div className='Interface-containerRectruitmentBtn'>
                            <div className='Interface-wrapperRectruitmentBtn'>
                                <button
                                    className='Interface-commonRectruitmentBtn'
                                    disabled={startCustomGacha}
                                    onClick={() => {
                                        if (autoReset) {
                                            resetReceivedStudents()
                                        }

                                        lastCountUlraRare.current = 0
                                        lastCountRare.current = 0
                                        lastCountCommon.current = 0

                                        lastCountRolls.current = 0

                                        setStartOneRollGacha(true)
                                    }}
                                >Recruit 1</button>

                                {
                                    !startCustomGacha ?
                                        <div className='Interface-containerCustomRectruitmentBtn'>
                                            <button
                                                className='Interface-customRectruitmentBtn'
                                                disabled={countRolls < 1 && countRolls !== ' '}
                                                onClick={() => {
                                                    if (autoReset) {
                                                        resetReceivedStudents()
                                                    }

                                                    lastCountUlraRare.current = 0
                                                    lastCountRare.current = 0
                                                    lastCountCommon.current = 0

                                                    lastCountRolls.current = 0

                                                    setStartCustomGacha(true)
                                                }}
                                            >{`Recruit ${countRolls}`}</button>
                                        </div>
                                        
                                        :

                                        <div className='Interface-containerCustomRectruitmentBtn'>
                                            <button
                                                className='Interface-customRectruitmentBtn blinkingCustomRectruitmentBtn'
                                                onClick={() => {   
                                                    setStartCustomGacha(false)
                                                    currentRolls.current = 0

                                                    clearInterval(currentRenderer.current)
                                                }}
                                            >STOP</button>
                                        </div>
                                }
                            </div>
                            
                            <div className='Interface-containerInputCustomRectruitmentBtn'>
                                <p className='Interface-textInputCustomRectruitmentBtn'>Custom recruit</p>
                            
                                <div>
                                    <input 
                                        className='Interface-inputCustomRectruitmentBtn'
                                        type='number' 
                                        min={1}
                                        max={99999}
                                        maxLength={6}
                                        value={countRolls}
                                        onChange={(e) => {
                                            if (String(e.target.value).split('').length < 5) {
                                                setCountRolls(e.target.value)
                                            }
                                        }}
                                    />

                                    <button 
                                        className='Interface-btnMaxCustomRectruitmentBtn'
                                        onClick={() => {
                                            setCountRolls(99999)
                                        }}
                                        
                                    >MAX</button>
                                </div>
                            </div>

                            <div className='Interface-containerControlSpeedRoll'>
                                <p className='Interface-textControlSpeedRoll'>Roll speed</p>

                                <input 
                                    className='Interface-controlSpeedRoll' 
                                    type={'range'}
                                    value={valueSpeedRoll}
                                    min={0}
                                    max={10}
                                    step={2}
                                    onChange={(e) => {
                                        setValueSpeedRoll(e.target.value)

                                        if (e.target.value == 0) {
                                            setSpeedRoll(500)
                                        } else if (e.target.value == 2) {
                                            setSpeedRoll(300)
                                        } else if (e.target.value == 4) {
                                            setSpeedRoll(100)
                                        } else if (e.target.value == 6) {
                                            setSpeedRoll(50)
                                        } else if (e.target.value == 8) {
                                            setSpeedRoll(25)
                                        } else {
                                            setSpeedRoll(10)
                                        }
                                    }}
                                />
                            </div>

                            <div className='Interface-containerAdvancedSettings'>
                                <div className='Interface-containerToggleAutoReset'>
                                    <p className='Interface-textToggleAutoReset'>Auto reset</p>

                                    <label className='Interface-wrapperToggleAutoReset'>
                                        <input 
                                            type='checkbox' 
                                            checked={autoReset}
                                            onChange={(e) => {
                                                setAutoReset(e.target.checked)
                                            }}
                                        />

                                        <span className='Interface-toggleAutoReset'></span>
                                    </label>
                                </div>

                                <button
                                    className='Interface-btnResultReset'
                                    disabled={startCustomGacha}
                                    onClick={() => resetReceivedStudents()}
                                >Clear all</button>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className='Interface-containerResultRolls'>
                    <div className='Interface-wrapperResultRolls'>
                        <p className='Interface-textResultRolls'>Last rolls</p>
                        <p className='Interface-countResultRolls'>{lastCountRolls.current}</p>
                    </div>

                    <div className='Interface-wrapperResultRolls'>
                        <p className='Interface-textResultRolls'>Total rolls</p>
                        <p className='Interface-countResultRolls'>{totalCountRolls.current}</p>
                    </div>

                    <div className='Interface-wrapperResultRolls'>
                        <p className='Interface-textResultRolls'>Total pyroxens</p>
                        <p className='Interface-countResultRolls'>{totalCountRolls.current * 120}</p>
                    </div>

                    
                    <div className='Interface-wrapperResultRolls'>
                        <p className='Interface-textResultRolls'>Guaranteed</p>
                        <p className='Interface-countResultRolls'>{Math.floor(totalCountRolls.current / 200)}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App;