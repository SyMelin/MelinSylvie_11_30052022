import { useState } from 'react'
import Button from '../Button'
import '../../styles/Gallery.css'

function Gallery({pics, length, accId}) {
    const galleryWidth = "1240px"
    const ratio = 1 / (parseInt(length) + 1) * 100
    const wrapperWidth= `${parseInt(galleryWidth) * (parseInt(length) + 1)}px`
    const galleryWidthInt = parseInt(galleryWidth)
    const picWidth = ratio
    const picWidthPc = `${ratio}%`
    // console.log(picWidthPc)

    const [translateLength, setTranslateLength] = useState(0)
    const [picNumber, updatePicNumber] = useState(1)

    return (
        <div className='gallery'>
            <div className='gallery__view'>
                <div
                    className='gallery__wrapper'
                    style={{width: wrapperWidth,
                            height: '415px',
                            transform: `translate(${translateLength}%)`
                        }}
                >
                    {pics.map((pic, index) =>
                        <div
                            key={`${accId}__photo--${index}`}
                            id={`${accId}__photo--${index}`}
                            className='pic__container'
                            style={{
                                width: picWidthPc,
                                height: '100%',
                                backgroundImage: `url(${pic})`,
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'center'
                            }}
                        >
                        </div>
                    )}
                </div>
            </div>
            { length > 1 ?
                <div className='gallery__nav'>
                    <Button
                        direction='previous'
                        translateLength={translateLength}
                        setTranslateLength={setTranslateLength}
                        picNumber={picNumber}
                        updatePicNumber={updatePicNumber}
                        picWidth={picWidth}
                        length={length}
                    />  
                    <Button
                        direction='next'
                        translateLength={translateLength}
                        setTranslateLength={setTranslateLength}
                        picNumber={picNumber}
                        updatePicNumber={updatePicNumber}
                        picWidth={picWidth}
                        length={length}
                    />          
                </div>
                : null
            }     
        </div>             
    )
}

export default Gallery