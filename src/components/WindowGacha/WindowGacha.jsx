// components
import BoxStudents from './BoxStudents/BoxStudents'

// icon
import ETCIcon from '../../image/icon/ETCIcon.svg'

const WindowGacha = (props) => {
    return (
        <div className='WindowGacha-containerGacha'>
            <div className='WindowGacha-containerTrapeze'>
                <div className='WindowGacha-containerTrapezeText'>
                    <img className='WindowGacha-trapezeIcon' src={ETCIcon} />

                    <p className='WindowGacha-trapezeText'>S.C.H.A.L.E:// OS</p>

                    <div className='WindowGacha-trapezeUnderscore'>_</div>
                </div>
                
                <p className='WindowGacha-containerTrapezeVersion'>ver 0.1</p>
            </div>

            <div className='WindowGacha-container'>
                <div className='WindowGacha-wrapper'>
                    <div className='WindowGacha-border'>
                        <div className='WindowGacha-containerLine'>
                            <p className='WindowGacha-lineText'>Recruitment</p>

                            <div className='WindowGacha-line'></div>
                        </div>

                        <div className='WindowGacha-topLineOpacity'></div>
                        <div className='WindowGacha-bottomLineOpacity'></div>

                        <div className='WindowGacha-scroll'>
                            <div className='WindowGacha-windowReceivedStudents'>
                                <div className='WindowGacha-starRate'>
                                    <p className='WindowGacha-amountStar'>03</p>

                                    <p className='WindowGacha-star'>★★★</p>
                                </div>

                                <BoxStudents 
                                    userStudents={props.userStudentsUltraRare}
                                />
                            </div>

                            <div className='WindowGacha-windowReceivedStudents'>
                                <div className='WindowGacha-starRate'>
                                    <p className='WindowGacha-amountStar'>02</p>

                                    <p className='WindowGacha-star'>★★</p>
                                </div>

                                <BoxStudents 
                                    userStudents={props.userStudentsRare}
                                />
                            </div>

                            <div className='WindowGacha-windowReceivedStudents'>
                                <div className='WindowGacha-starRate'>
                                    <p className='WindowGacha-amountStar oneStar'>01</p>

                                    <p className='WindowGacha-star'>★</p>
                                </div>

                                <BoxStudents 
                                    userStudents={props.userStudentsCommon}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WindowGacha;