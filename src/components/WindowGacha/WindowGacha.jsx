// components
import BoxStudents from './BoxStudents/BoxStudents'

// icon
import ETCIcon from '../../image/icon/schoolIcon/schoolETCIcon.svg'

const WindowGacha = (props) => {
    return (
        <div className='WindowGacha-containerGacha'>
            <div className='WindowGacha-containerTrapeze'>
                <div className='WindowGacha-containerTrapezeText'>
                    <img className='WindowGacha-trapezeIcon' src={ETCIcon} />

                    <p className='WindowGacha-trapezeText'>S.C.H.A.L.E:// OS</p>

                    <div className='WindowGacha-trapezeUnderscore'>_</div>
                </div>
                
                <p className='WindowGacha-containerTrapezeVersion'>ver 0.2</p>
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

                                {
                                    props.regularToggle &&
                                        <BoxStudents 
                                            userStudents={props.userStudents}

                                            typeGacha={'regular'}
                                            typeStudent={'ultraRare'}
                                        />
                                }
                                        
                                {
                                    props.rateUpToggle &&
                                        <BoxStudents 
                                            userStudents={props.userStudents}

                                            typeGacha={'rateUp'}
                                            typeStudent={'ultraRare'}
                                        />
                                }
                                
                            </div>

                            <div className='WindowGacha-windowReceivedStudents'>
                                <div className='WindowGacha-starRate'>
                                    <p className='WindowGacha-amountStar'>02</p>

                                    <p className='WindowGacha-star'>★★</p>
                                </div>

                                {
                                    props.regularToggle &&
                                        <BoxStudents 
                                            userStudents={props.userStudents}

                                            typeGacha={'regular'}
                                            typeStudent={'rare'}
                                        />
                                }

                                {
                                    props.rateUpToggle &&
                                        <BoxStudents 
                                            userStudents={props.userStudents}

                                            typeGacha={'rateUp'}
                                            typeStudent={'rare'}
                                        />
                                }   
                            </div>

                            <div className='WindowGacha-windowReceivedStudents'>
                                <div className='WindowGacha-starRate'>
                                    <p className='WindowGacha-amountStar oneStar'>01</p>

                                    <p className='WindowGacha-star'>★</p>
                                </div>

                                {
                                    props.regularToggle &&
                                        <BoxStudents 
                                            userStudents={props.userStudents}

                                            typeGacha={'regular'}
                                            typeStudent={'common'}
                                        />
                                }  

                                {
                                    props.rateUpToggle &&
                                        <BoxStudents 
                                            userStudents={props.userStudents}

                                            typeGacha={'rateUp'}
                                            typeStudent={'common'}
                                        />
                                }  
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WindowGacha;