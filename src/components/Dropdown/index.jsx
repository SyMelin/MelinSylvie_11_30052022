import '../../styles/Dropdown.css'
import arrowUp from '../../assets/arrowUp.svg'

function Dropdown ({title, text}) {
    return (
        <div className="dropdown__container">
            <div className='dropdown__top'>
                <h2 className="dropdown__title">{title}</h2>
                <img className="dropdown__button" src={arrowUp} alt="Fermer" />
            </div>
             { typeof text === 'object' ?
                <ul className="dropdown__bottom dropdownList">{text.map((item) => <li>{item}</li>)}</ul>
                : <p className="dropdown__bottom dropdownText">{text}</p>}
        </div>
    )
}

export default Dropdown