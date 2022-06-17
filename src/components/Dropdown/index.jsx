import { useState } from 'react'
import arrowUp from '../../assets/arrowUp.svg'
import arrowDown from '../../assets/arrowDown.svg'
import '../../styles/Dropdown.css'

//La propriété 'text' d'un Dropdown correspond au contenu de la partie inférieure .dropdown__bottom
//La propriété 'text' est soit une chaîne de caractères, soit un tableau d'items
//Selon le type de 'text', string ou array, on crée soit un paragraphe reprenant le texte de la chaîne de caractère, soit une liste d'items du tableau

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
                <ul className="dropdown__bottom dropdownList">{text.map((item, index) => <li key={`dropdownListItem--${index}`}>{item}</li>)}</ul>
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