import { React, useRef } from 'react';

// components
import BtnOneRoll from '../BtnsGachaRoll/BtnOneRoll'
import BtnCustomRoll from '../BtnsGachaRoll/BtnCustomRoll'
import PercentageInfo from '../PercentageInfo/PercentageInfo'

// import students & imgs & icons
import { importStudentsUltraRare, importStudentsRare, importStudentsCommon } from '../../../db/students.js'

const RegularGacha = (props) => {
    // interval
    const intervalCustomRoll = useRef()

    // one roll
    const oneRoll = (randomValue) => {
        let newStudent;

        if (randomValue <= 2.5) {
            newStudent = importStudentsUltraRare.standartPull.students[Math.ceil(Math.random() * importStudentsUltraRare.standartPull.students.length - 1)]

            props.counterRolls(props.typeGacha, 'lastCountUltraRare', 'totalCountUltraRare')
            props.addNewStudent(props.typeGacha, 'ultraRare', newStudent)

        } else if (randomValue <= 18.5 && randomValue > 2.5) {
            newStudent = importStudentsRare[Math.ceil(Math.random() * importStudentsRare.length - 1)]

            props.counterRolls(props.typeGacha, 'lastCountRare', 'totalCountRare')
            props.addNewStudent(props.typeGacha, 'rare', newStudent)

        } else {
            newStudent = importStudentsCommon[Math.ceil(Math.random() * importStudentsCommon.length - 1)]

            props.counterRolls(props.typeGacha, 'lastCountCommon', 'totalCountCommon')
            props.addNewStudent(props.typeGacha, 'common', newStudent)
        }
    }

    // custom user rolls
    const customRoll = (randomValue) => {
        let newStudent;

        if (randomValue <= 2.5) {
            newStudent = importStudentsUltraRare.standartPull.students[Math.ceil(Math.random() * importStudentsUltraRare.standartPull.students.length - 1)]

            props.counterRolls(props.typeGacha, 'lastCountUltraRare', 'totalCountUltraRare')
            props.addNewStudent(props.typeGacha, 'ultraRare', newStudent)

        } else if ((props.currentRolls.current % 10) == 0) {
            newStudent = importStudentsRare[Math.ceil(Math.random() * importStudentsRare.length - 1)]

            props.counterRolls(props.typeGacha, 'lastCountRare', 'totalCountRare')
            props.addNewStudent(props.typeGacha, 'rare', newStudent)

        } else if (randomValue <= 21 && randomValue > 2.5) {
            newStudent = importStudentsRare[Math.ceil(Math.random() * importStudentsRare.length - 1)]

            props.counterRolls(props.typeGacha, 'lastCountRare', 'totalCountRare')
            props.addNewStudent(props.typeGacha, 'rare', newStudent)

        } else {
            newStudent = importStudentsCommon[Math.ceil(Math.random() * importStudentsCommon.length - 1)]

            props.counterRolls(props.typeGacha, 'lastCountCommon', 'totalCountCommon')
            props.addNewStudent(props.typeGacha, 'common', newStudent)
        }
    }

    return (
        <>
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

                    <PercentageInfo
                        counterStudents={props.counterStudents}
                        percentageStudents={props.percentageStudents}
                        setPercentageStudents={props.setPercentageStudents}

                        currentRolls={props.currentRolls}

                        typeGacha={props.typeGacha}
                    />
                
                    <div className='Interface-containerRectruitmentBtn'>
                        <div className='Interface-wrapperRectruitmentBtn'>
                            <BtnOneRoll
                                startOneRollGacha={props.startOneRollGacha}
                                setStartOneRollGacha={props.setStartOneRollGacha}
                                startCustomGacha={props.startCustomGacha}

                                currentRolls={props.currentRolls}

                                userStudents={props.userStudents}
                                
                                autoReset={props.autoReset}

                                resetReceivedStudents={props.resetReceivedStudents}
                                reCount={props.reCount}
                                counterRolls={props.counterRolls}
                                oneRoll={oneRoll}

                                typeGacha={props.typeGacha}
                            />

                            <BtnCustomRoll
                                startCustomGacha={props.startCustomGacha}
                                setStartCustomGacha={props.setStartCustomGacha}

                                intervalCustomRoll={intervalCustomRoll}
                                countRolls={props.countRolls}
                                currentRolls={props.currentRolls}

                                userStudents={props.userStudents}

                                speedRoll={props.speedRoll}
                                autoReset={props.autoReset}

                                resetReceivedStudents={props.resetReceivedStudents}
                                reCount={props.reCount}
                                counterRolls={props.counterRolls}
                                customRoll={customRoll}

                                typeGacha={props.typeGacha}
                            />
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
                                    value={props.countRolls}
                                    onChange={(e) => {
                                        if (String(e.target.value).split('').length < 5) {
                                            props.setCountRolls(e.target.value)
                                        }
                                    }}
                                />

                                <button 
                                    className='Interface-btnMaxCustomRectruitmentBtn'
                                    onClick={() => {
                                        props.setCountRolls(99999)
                                    }}
                                    
                                >MAX</button>
                            </div>
                        </div>

                        <div className='Interface-containerControlSpeedRoll'>
                            <p className='Interface-textControlSpeedRoll'>Roll speed</p>

                            <input 
                                className='Interface-controlSpeedRoll' 
                                type={'range'}
                                value={props.valueSpeedRoll}
                                min={0}
                                max={10}
                                step={2}
                                onChange={(e) => {
                                    props.setValueSpeedRoll(e.target.value)

                                    if (e.target.value == 0) {
                                        props.setSpeedRoll(500)
                                    } else if (e.target.value == 2) {
                                        props.setSpeedRoll(300)
                                    } else if (e.target.value == 4) {
                                        props.setSpeedRoll(100)
                                    } else if (e.target.value == 6) {
                                        props.setSpeedRoll(50)
                                    } else if (e.target.value == 8) {
                                        props.setSpeedRoll(25)
                                    } else {
                                        props.setSpeedRoll(10)
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
                                        checked={props.autoReset}
                                        onChange={(e) => {
                                            props.setAutoReset(e.target.checked)
                                        }}
                                    />

                                    <span className='Interface-toggleAutoReset'></span>
                                </label>
                            </div>

                            <button
                                className='Interface-btnResultReset'
                                disabled={props.startCustomGacha}
                                onClick={() => props.resetReceivedStudents(props.typeGacha)}
                            >Clear all</button>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className='Interface-containerResultRolls'>
                <div className='Interface-wrapperResultRolls'>
                    <p className='Interface-textResultRolls'>Last rolls</p>
                    <p className='Interface-countResultRolls'>{props.counterStudents[props.typeGacha].lastCountRolls}</p>
                </div>

                <div className='Interface-wrapperResultRolls'>
                    <p className='Interface-textResultRolls'>Total rolls</p>
                    <p className='Interface-countResultRolls'>{props.counterStudents[props.typeGacha].totalCountRolls}</p>
                </div>

                <div className='Interface-wrapperResultRolls'>
                    <p className='Interface-textResultRolls'>Total pyroxens</p>
                    <p className='Interface-countResultRolls'>{props.counterStudents[props.typeGacha].totalCountRolls * 120}</p>
                </div>

                
                <div className='Interface-wrapperResultRolls'>
                    <p className='Interface-textResultRolls'>Guaranteed</p>
                    <p className='Interface-countResultRolls'>{Math.floor(props.counterStudents[props.typeGacha].totalCountRolls / 200)}</p>
                </div>
            </div>
        </>
    )
}

export default RegularGacha