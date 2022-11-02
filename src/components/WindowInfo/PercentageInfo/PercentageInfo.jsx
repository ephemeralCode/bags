import { React, useEffect } from 'react';

const PercentageInfo = (props) => {

    useEffect(() => {
        if (props.counterStudents[props.typeGacha].lastCountRolls != 0) {
            props.setPercentageStudents({
                ...props.percentageStudents, [props.typeGacha]: {
                    lastPercentageUltraRare: Math.floor(((props.counterStudents[props.typeGacha].lastCountUltraRare / props.counterStudents[props.typeGacha].lastCountRolls) * 100) * 100) / 100,
                    lastPercentageRare: Math.floor(((props.counterStudents[props.typeGacha].lastCountRare / props.counterStudents[props.typeGacha].lastCountRolls) * 100) * 100) / 100,
                    lastPercentageCommon: Math.floor(((props.counterStudents[props.typeGacha].lastCountCommon / props.counterStudents[props.typeGacha].lastCountRolls) * 100) * 100) / 100,
    
                    totalPercentageUltraRare: Math.floor(((props.counterStudents[props.typeGacha].totalCountUltraRare / props.counterStudents[props.typeGacha].totalCountRolls) * 100) * 100) / 100,
                    totalPercentageRare: Math.floor(((props.counterStudents[props.typeGacha].totalCountRare / props.counterStudents[props.typeGacha].totalCountRolls) * 100) * 100) / 100,
                    totalPercentageCommon: Math.floor(((props.counterStudents[props.typeGacha].totalCountCommon / props.counterStudents[props.typeGacha].totalCountRolls) * 100) * 100) / 100
                }
            })
        }

    }, [props.currentRolls.current])
    
    return (
        <>
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
                                <p className='Interface-numberResultRNG'>
                                    {
                                        `${props.counterStudents[props.typeGacha].lastCountUltraRare} - ${props.percentageStudents[props.typeGacha].lastPercentageUltraRare}`
                                    }
                                </p>

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
                                <p className='Interface-numberResultRNG'>
                                    {
                                        `${props.counterStudents[props.typeGacha].lastCountRare} - ${props.percentageStudents[props.typeGacha].lastPercentageRare}`
                                    }
                                </p>

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
                                <p className='Interface-numberResultRNG'>
                                    {
                                        `${props.counterStudents[props.typeGacha].lastCountCommon} - ${props.percentageStudents[props.typeGacha].lastPercentageCommon}`
                                    }
                                </p>

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
                                <p className='Interface-numberResultRNG'>{`${props.counterStudents[props.typeGacha].totalCountUltraRare} - ${props.percentageStudents[props.typeGacha].totalPercentageUltraRare}`}</p>

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
                                <p className='Interface-numberResultRNG'>{`${props.counterStudents[props.typeGacha].totalCountRare} - ${props.percentageStudents[props.typeGacha].totalPercentageRare}`}</p>

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
                                <p className='Interface-numberResultRNG'>{`${props.counterStudents[props.typeGacha].totalCountCommon} - ${props.percentageStudents[props.typeGacha].totalPercentageCommon}`}</p>

                                <p className='Interface-percentageResultRNG'>%</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PercentageInfo