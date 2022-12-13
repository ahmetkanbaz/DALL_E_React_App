import React, {useState, useEffect} from 'react'
import { Configuration, OpenAIApi } from 'openai'
import Loading from '../Loading/Loading'
import {Container, Row} from 'reactstrap'
import SingleImage from './SingleImage'

function GetImages(props){
    const [images, setImages] = useState()
    const [loading, setLoading] = useState(false)

    const API_KEY = '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'

    const configuration = new Configuration({
        apiKey: API_KEY
    })

    const openai = new OpenAIApi(configuration)

    useEffect(() => {
        try{
            const getImages = async() => {
                setLoading(true)
                if(props.countImages === 3){
                    const response = await openai.createImage({
                        prompt: props.imageName,
                        n: 3,
                        size: '512x512'
                    })
                    setImages(response.data.data)
                    setLoading(false)
                }
                else if(props.countImages === 5) {
                    const response = await openai.createImage({
                        prompt: props.imageName,
                        n: 5,
                        size: '512x512'
                    })
                    setImages(response.data.data)
                    setLoading(false)
                }

                else if(props.countImages === 10) {
                    const response = await openai.createImage({
                        prompt: props.imageName,
                        n: 10,
                        size: '512x512'
                    })
                    setImages(response.data.data)
                    setLoading(false)
                }

                else{
                    const response = await openai.createImage({
                        prompt: props.imageName,
                        n: 1,
                        size: '512x512'
                    })
                    setImages(response.data.data)
                    setLoading(false)
                }
                }
                
            getImages();
        }catch(error){
            if (error.response) {
                console.log(error.response.status);
                console.log(error.response.data);
              } else {
                console.log(error.message);
              }
        }
        
    }, [props.imageName, props.countImages])

    

    return(
        <div className='divImagesList'>
            <Container>
                <Row>
                {
                loading ? 
                <Loading />
                :
                (
                    <ul>
                        {
                            images != null ?
                            images.map((image, index) => (
                                <SingleImage key= {index} data={image.url}/>
                            ))
                        :
                        ''
                        }
                    </ul>
                    
                )
            }
                </Row>
            </Container>
            
            
            
        </div>
    )
}

export default GetImages