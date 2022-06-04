import arrowLeft from '../../assets/arrowLeft.svg'
import arrowRight from '../../assets/arrowRight.svg'
import '../../styles/Button.css'




function Button({direction, picLength, translateLength, setTranslateLength}) {
    const src =  direction === 'previous' ? arrowLeft : direction === 'next' ? arrowRight : null

    return (
        <div className='btn__container'>
            <img
                className={`btn btn--${direction}`}
                src={src}
                alt={direction}
                onClick={() => {
                    console.log('bouton cliqué')
                    setTranslateLength(translateLength + picLength)
                }
                }
                /> 
        </div>
    )    
}

export default Button