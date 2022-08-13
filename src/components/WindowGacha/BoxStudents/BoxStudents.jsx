const BoxStudents = (props) => {
    return (
        <div className='BoxStudents-containerStudents'>
            {
                props.userStudents.length ?
                    props.userStudents.map(item => 
                        <div 
                            className='BoxStudents-containerStudent'
                            key={item.id}
                        >
                            <div className='BoxStudents-rectangleTop'></div>
                            <div className='BoxStudents-rectangleBottom'></div>

                            {
                                item.amount > 1 && 
                                    <div className='BoxStudents-containerStudentAmount'>
                                        <p className='BoxStudents-studentAmountSymbol'>x</p>
                                        <p className='BoxStudents-studentAmountNumber'>{item.amount}</p>
                                    </div>
                            }

                            <div className='BoxStudents-containerStudentImg'>
                                <div className='BoxStudents-wrapperStudentImg'>
                                    <img className='BoxStudents-studentImg' src={item.imgStudent} />
                                </div>
                            </div>

                            <div className='BoxStudents-containerStudentName'>
                                <p className='BoxStudents-studentName'>{item.name}</p>
                            </div>

                            <div className='BoxStudents-containerStudentSchool'>
                                <p className='BoxStudents-studentSchool'>{item.school}</p>

                                <div className='BoxStudents-containerStudentSchoolIcon'>
                                    <img className='BoxStudents-studentSchoolIcon' src={item.schoolIcon} />
                                </div>
                            </div>
                        </div>
                    )

                    :

                    <p className='BoxStudents-amountStudents'>None</p>

            }
        </div>
    )
}

export default BoxStudents;