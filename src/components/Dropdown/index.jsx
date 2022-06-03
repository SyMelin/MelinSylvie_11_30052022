import { useState, useEffect } from 'react'
import arrowUp from '../../assets/arrowUp.svg'
import arrowDown from '../../assets/arrowDown.svg'
import '../../styles/Dropdown.css'

function Dropdown ({title, text}) {
    const [isOpen, setIsOpen] = useState(false)

    return isOpen ? (
        <div className="dropdown__container">
            <div className='dropdown__top'>
                <h2 className="dropdown__title">{title}</h2>
                <img
                    className="dropdown__button"
                    src={arrowUp}
                    alt="Fermer"
                    onClick={() => setIsOpen(false)}
                />
            </div>
             { typeof text === 'object' ?
                <ul className="dropdown__bottom dropdownList">{text.map((item) => <li>{item}</li>)}</ul>
                : <p className="dropdown__bottom dropdownText">{text}</p>
                }
        </div>
    ) : (
        <div className="dropdown__container">
            <div className='dropdown__top'>
                <h2 className="dropdown__title">{title}</h2>
                <img
                    className="dropdown__button"
                    src={arrowDown}
                    alt="Fermer"
                    onClick={() => setIsOpen(true)}
                />
            </div>
        </div>
    )
}

export default Dropdown