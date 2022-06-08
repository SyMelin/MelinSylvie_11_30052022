import starGrey from '../../assets/starGrey.svg'
import starColored from '../../assets/starColored.svg'
import '../../styles/Stars.css'

function Stars({rating, arrayLength}) {
    const coloredStars = [...Array(parseInt(rating))]
    const greyStars = [...Array(parseInt(arrayLength) - parseInt(rating))]

    return (
        <div className='stars__wrapper'>
            {coloredStars.map((elem, index) => <div key={`coloredStar--${index}`} className='star'><img className='star__img' src={starColored} alt='' /></div>)}
            {greyStars.map((elem, index) => <div key={`coloredStar--${index}`} className='star'><img className='star__img' src={starGrey} alt='' /></div>)}
        </div>
    )
}

export default Stars