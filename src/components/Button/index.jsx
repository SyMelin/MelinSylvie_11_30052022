import React from 'react'
import arrowLeft from '../../assets/arrowLeft.svg'
import arrowRight from '../../assets/arrowRight.svg'
import '../../styles/Button.css'

function Button({direction, translateLength, setTranslateLength, picNumber, updatePicNumber, picWidth, length}) {
    const src =  direction === 'previous' ? arrowLeft : direction === 'next' ? arrowRight : null

    function goPrev() {
        if (picNumber > 1) {
        setTranslateLength(translateLength + picWidth)
        updatePicNumber(picNumber - 1)
        } else {
        setTranslateLength(-picWidth * (length-1))
        updatePicNumber(length)
        }
    }
  
   function goNext() {
       if (picNumber < length) {
        setTranslateLength(translateLength - picWidth)
        updatePicNumber(picNumber + 1)
       } else {
        setTranslateLength(0)
        updatePicNumber(1)
       }
   }

    return (
        <React.Fragment>
            {direction === 'previous' ?
            <div className='btn__container' onClick={goPrev}>
                <img
                    className={`btn btn--${direction}`}
                    src={src}
                    alt={direction}
                /> 
            </div>
            : direction === 'next' ?
            <div className='btn__container' onClick={goNext}>
                <img
                    className={`btn btn--${direction}`}
                    src={src}
                    alt={direction}
                /> 
            </div>
            : null}
        </React.Fragment>
    )    
}

export default Button