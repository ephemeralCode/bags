import { React, useEffect, useRef, useState } from 'react';

// components
import WindowGacha from './components/WindowGacha/WindowGacha'
import WindowInfo from './components/WindowInfo/WindowInfo'

// css
import './css/App.css';
import './css/fonts.css';

function App() {
    const [userStudents, setUserStudents] = useState({
        regular: {
            ultraRare: [],
            rare: [],
            common: []
        },
        
        rateUp: {
            ultraRare: [],
            rare: [],
            common: []
        }
    })

    // 
    const [regularToggle, setRegularToggle] = useState(true)
    const [rateUpToggle, setRateUpToggle] = useState(false)

    return (
        <div className='Main-container'>
            <WindowGacha 
                userStudents={userStudents}

                regularToggle={regularToggle}
                rateUpToggle={rateUpToggle}
            />

            <WindowInfo
                userStudents={userStudents}
                setUserStudents={setUserStudents}

                regularToggle={regularToggle}
                rateUpToggle={rateUpToggle}
                setRegularToggle={setRegularToggle}
                setRateUpToggle={setRateUpToggle}
            />
        </div>
    )
}

export default App;