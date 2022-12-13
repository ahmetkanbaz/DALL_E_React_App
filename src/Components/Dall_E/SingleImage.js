import React, {useState} from 'react'
import {Card, CardImg} from 'reactstrap'
import FavouriteImages from './FavouriteImages'

function SingleImage(props) {

    const [imageUrl, setImageUrl] = useState()
    
    return(
        <div className='divSingle'>
            <Card className='card'>
                <CardImg className='cardImg' src= {props.data} />
                <button onClick={() => setImageUrl(props.data)}></button>
            </Card>
            <FavouriteImages url= {imageUrl} />
        </div>
    )
}

export default SingleImage