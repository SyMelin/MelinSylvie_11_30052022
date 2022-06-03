import { useState, useEffect } from 'react'
import Button from '../Button'
import '../../styles/Gallery.css'

function Gallery({pics, length, accId, translateLength, setTranslateLength}) {
    const galleryWidth = "1240px"
    const ratio = 1 / (parseInt(length) + 1) * 100
    const wrapperWidth= `${parseInt(galleryWidth) * (parseInt(length) + 1)}px`
    const galleryWidthInt = parseInt(galleryWidth)
   // const picWidth = ratio
    const picWidthPc = `${ratio}%`
   // console.log(picWidthPc)

  // const [translateLength, setTranslateLength] = useState(0)

    return (
        <div className='gallery'>
            <div className='gallery__view'>
                <div
                    className='gallery__wrapper'
                    style={{width: wrapperWidth,
                            height: '415px',
                            transform: `translate(${translateLength})`
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
            <div className='gallery__nav'>
                <Button
                    direction='previous'
                    picLength= {picWidthPc}
                    translateLength={translateLength}
                    setTranslateLength={setTranslateLength}
                 />
                <Button direction='next' />
            </div>
        </div>
                    
                
    )
}

export default Gallery