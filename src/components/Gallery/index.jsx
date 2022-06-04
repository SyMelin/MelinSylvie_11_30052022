import { useState, useEffect } from 'react'
//import Button from '../Button'
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
   console.log(translateLength)
   const [picNumber, updatePicNumber] = useState(1)
   console.log(picNumber)

   function goPrev() {
        if (picNumber > 1) {
        // console.log("CLIC")
        setTranslateLength(translateLength + picWidth)
        updatePicNumber(picNumber - 1)
        } else {
        setTranslateLength(-picWidth * (length-1))
        updatePicNumber(length)
        }
    }
  
   function goNext() {
       if (picNumber < length) {
        // console.log("CLIC")
        setTranslateLength(translateLength - picWidth)
        updatePicNumber(picNumber + 1)
       } else {
        setTranslateLength(0)
        updatePicNumber(1)
       }
   }

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
            <div className='gallery__nav'>
                <button
                    style={{width: '40px', height: '40px', backgroundColor: 'green'}}
                    onClick={goPrev}>T: {translateLength} ; Nb: {picNumber}
                </button>
                <button
                    style={{width: '40px', height: '40px', backgroundColor: 'red'}}
                    onClick={goNext}>T: {translateLength} ; Nb: {picNumber}
                </button>
                
            </div>
        </div>
                    
                
    )
}

export default Gallery
/*
<Button
direction='previous'
picLength= {picWidthPc}
translateLength={translateLength}
setTranslateLength={setTranslateLength}
/>
*/
