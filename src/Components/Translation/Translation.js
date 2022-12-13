import React, {useState} from 'react'
import GetImages from '../Dall_E/GetImages';
import {Container, Row} from 'reactstrap'

function Translation() {

    const [input, setInput] = useState('')
    const [result, setResult] = useState('')
    const [countImages, setCountImages] = useState('')

    const options = {
        method: 'POST',
        headers: {
            'content-type': 'Your Keys.',
            'X-RapidAPI-Key': 'Your Keys.',
            'X-RapidAPI-Host': 'Your Keys.'
        },
        body: `{"q":"${input}","source":"tr","target":"en"}`
    };

    const getTranslate = () =>{
        fetch('https://deep-translate1.p.rapidapi.com/language/translate/v2', options)
        .then(response => response.json())
        .then(data => setResult(data.data.translations.translatedText))
        .catch(error => console.log(error))
    }

    const inputEnter = (e) => {
        if(e.key === 'Enter'){
            getTranslate()
        }
    }

    
    return(
        <div>
            <Container>
                <div className='divTranslation'>
                    <input
                        placeholder='Görmek istediğiniz fotoğrafı giriniz...'
                        onChange={(event) => setInput(event.target.value)}
                        onKeyDown={inputEnter}
                    />
                    {
                        input !== '' ?
                            <button type='button' onClick={getTranslate}>Ara</button>
                        :
                        <button type='button'>Ara</button>
                    }
                    <div className='divRadio'>
                        Görüntülenmesini istediğiniz fotoğraf sayısını seçiniz...
                        <div className='divRadioButton'>
                            <label>
                                <input type='radio' value='3' name='numberofImages' onChange= {() => setCountImages(3)}/>3
                                <input type='radio' value='5' name='numberofImages' onChange= {() => setCountImages(5)}/>5
                                <input type='radio' value='10' name='numberofImages' onChange= {() => setCountImages(10)}/>10
                            </label>
                                   
                        </div>
                    </div>
                    
                </div>
                
                <Row>
                    {
                    (result !== '' && countImages !== '') ?
                        <GetImages imageName={result} countImages={countImages}/>
                    :
                    ''
                    }
                </Row>
            </Container>
        </div>
    )
}

export default Translation
