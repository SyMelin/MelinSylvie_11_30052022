import { useState } from 'react'
import Button from '../Button'
import '../../styles/Gallery.css'

function Gallery({pics, length, accId}) {
    const galleryWidth = "100%"
    const ratio = 1 / (parseInt(length) + 1) * 100
    const wrapperWidth= `${parseInt(galleryWidth) * (parseInt(length) + 1)}%`
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
                            height: 'inherit',
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
                            }}
                        >
                            <img className='gallery__img' src={pic} alt='' />
                        </div>
                    )}
                </div>
            </div>
            { length > 1 ?
                <div className='gallery__nav'>
                    {['previous', 'next'].map((el) => <Button
                                                            direction={el}
                                                            translateLength={translateLength}
                                                            setTranslateLength={setTranslateLength}
                                                            picNumber={picNumber}
                                                            updatePicNumber={updatePicNumber}
                                                            picWidth={picWidth}
                                                            length={length}
                                                        />
                                            )
                    }
                </div>
                : null
            }     
        </div>             
    )
}

export default Gallery