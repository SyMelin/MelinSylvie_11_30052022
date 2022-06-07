import React from 'react'
import arrowLeft from '../../assets/arrowLeft.svg'
import arrowRight from '../../assets/arrowRight.svg'
import '../../styles/Button.css'

function Button({direction, translateLength, setTranslateLength, picNumber, updatePicNumber, picWidth, length}) {

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

   const src =  direction === 'previous' ? arrowLeft : direction === 'next' ? arrowRight : null
   const changePic = direction === 'previous' ? goPrev : direction === 'next' ? goNext : null

    return (
        <div className='btn__container' onClick= {changePic}>
                <img
                    className={`btn btn--${direction}`}
                    src={src}
                    alt={direction}
                /> 
            </div>
    )    
}

export default Button



/*

*/

/*
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
        </React.Fragment>   */