import starGrey from '../../assets/starGrey.svg'
import starColored from '../../assets/starColored.svg'
import '../../styles/Stars.css'

function Stars({rating, arrayLength}) {
    const coloredStars = [...Array(parseInt(rating))]
    const greyStars = [...Array(parseInt(arrayLength) - parseInt(rating))]

    return (
        <div className='stars__wrapper'>
            {coloredStars.map((elem, index) => <img className='star' src={starColored} alt='' />)}
            {greyStars.map((elem, index) => <img src={starGrey} alt='' />)}
        </div>
    )
}

export default Stars