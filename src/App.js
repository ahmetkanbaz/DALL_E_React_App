import React from 'react'
import {Container} from 'reactstrap'
import Translation from './Components/Translation/Translation'
import SingleImage from './Components/Dall_E/SingleImage'

function App(){
    return(
        <div>
            <Container>
                <Translation />
            </Container>
        </div>
    )
}

export default App